"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle, Clock } from "lucide-react";
import { packages } from "@/lib/services";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-sm border border-mist-500/25 bg-navy-900/60 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 outline-none transition-colors focus:border-gold-500/70";

const labelClass = "mb-2 block text-xs uppercase tracking-widest2 text-mist-500";

const packageOptions = [
  ...packages.map((pkg) => ({ slug: pkg.slug, label: `${pkg.name} — £${pkg.price}` })),
  { slug: "advice", label: "Not sure / advice needed" },
];

export default function BookingForm() {
  const searchParams = useSearchParams();
  const presetPackage = searchParams.get("package") || "";
  const presetArea = searchParams.get("area") || "";

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [packageSlug, setPackageSlug] = useState(presetPackage);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");

  const [slots, setSlots] = useState<string[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState("");

  useEffect(() => {
    setStartTime("");
    if (!packageSlug || !date) {
      setSlots([]);
      return;
    }

    let cancelled = false;
    setSlotsLoading(true);
    setSlotsError("");

    fetch(`/api/availability?date=${date}&package=${packageSlug}`)
      .then((res) => res.json())
      .then((json) => {
        if (cancelled) return;
        setSlots(json.slots || []);
      })
      .catch(() => {
        if (!cancelled) setSlotsError("Couldn't load availability. Please try again.");
      })
      .finally(() => {
        if (!cancelled) setSlotsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [packageSlug, date]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!startTime) {
      setStatus("error");
      setErrorMsg("Please choose an available time slot.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      address: String(data.get("address") || ""),
      vehicle: String(data.get("vehicle") || ""),
      packageSlug,
      date,
      startTime,
      notes: String(data.get("notes") || ""),
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        if (res.status === 409) {
          setSlots((prev) => prev.filter((s) => s !== startTime));
          setStartTime("");
        }
        throw new Error(json.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
      setPackageSlug("");
      setDate("");
      setStartTime("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 rounded-sm border border-gold-500/40 bg-gold-500/5 px-8 py-16 text-center"
      >
        <CheckCircle2 size={40} className="text-gold-400" />
        <h3 className="font-display text-2xl font-bold text-mist-100">
          Booking confirmed
        </h3>
        <p className="max-w-sm text-sm text-mist-300">
          We&apos;ve emailed you a confirmation. See you at your booked time.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-gold-400 hover:text-gold-300"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Full name</label>
          <input required id="name" name="name" className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input required id="phone" name="phone" type="tel" className={inputClass} placeholder="07xxx xxxxxx" />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">Email</label>
        <input required id="email" name="email" type="email" className={inputClass} placeholder="jane@example.com" />
      </div>

      <div>
        <label className={labelClass} htmlFor="address">Address / postcode</label>
        <input required id="address" name="address" className={inputClass} placeholder="Where should we come to?" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="vehicle">Vehicle (make & model)</label>
          <input required id="vehicle" name="vehicle" className={inputClass} placeholder="e.g. VW Golf" />
        </div>
        <div>
          <label className={labelClass} htmlFor="package">Package</label>
          <select
            required
            id="package"
            name="package"
            value={packageSlug}
            onChange={(e) => setPackageSlug(e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>Choose a package</option>
            {packageOptions.map((opt) => (
              <option key={opt.slug} value={opt.slug}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="date">Date</label>
        <input
          required
          id="date"
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={inputClass}
        />
        <p className="mt-2 text-xs text-mist-500">Monday–Friday, 9am–7pm.</p>
      </div>

      <div>
        <label className={labelClass}>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} /> Available times
          </span>
        </label>

        {!packageSlug || !date ? (
          <p className="text-sm text-mist-500">Choose a package and date to see available times.</p>
        ) : slotsLoading ? (
          <p className="flex items-center gap-2 text-sm text-mist-500">
            <Loader2 size={14} className="animate-spin" /> Checking availability...
          </p>
        ) : slotsError ? (
          <p className="text-sm text-red-300">{slotsError}</p>
        ) : slots.length === 0 ? (
          <p className="text-sm text-mist-500">
            No slots left for that date — try another day or call us on 07946 089 183.
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {slots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setStartTime(slot)}
                className={`rounded-sm border px-3 py-2 text-sm transition-colors ${
                  startTime === slot
                    ? "border-gold-500 bg-gold-500 text-navy-950 font-semibold"
                    : "border-mist-500/25 bg-navy-900/60 text-mist-200 hover:border-gold-500/60"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        )}
      </div>

      {presetArea && (
        <input type="hidden" name="area" value={presetArea} />
      )}

      <div>
        <label className={labelClass} htmlFor="notes">Anything we should know?</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className={inputClass}
          placeholder="Excessive dirt, pet hair, parking instructions, etc."
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 rounded-sm border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-300"
          >
            <AlertCircle size={16} className="shrink-0" />
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold tracking-wide text-navy-950 shadow-gold disabled:opacity-70 sm:w-auto"
      >
        <span className="relative z-10 flex items-center gap-2">
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending...
            </>
          ) : (
            "Confirm Booking"
          )}
        </span>
        <span className="absolute inset-0 -translate-x-full bg-gold-sheen transition-transform duration-700 ease-out group-hover:translate-x-full" />
      </button>
      <p className="text-xs text-mist-500">
        This locks in your slot straight away — we&apos;ll email you a confirmation.
      </p>
    </form>
  );
}
