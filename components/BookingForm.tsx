"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { packages } from "@/lib/services";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-sm border border-mist-500/25 bg-navy-900/60 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 outline-none transition-colors focus:border-gold-500/70";

const labelClass = "mb-2 block text-xs uppercase tracking-widest2 text-mist-500";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const presetPackage = searchParams.get("package") || "";
  const presetArea = searchParams.get("area") || "";

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
      package: String(data.get("package") || ""),
      preferredDate: String(data.get("preferredDate") || ""),
      preferredTime: String(data.get("preferredTime") || ""),
      notes: String(data.get("notes") || ""),
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
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
          Booking request sent
        </h3>
        <p className="max-w-sm text-sm text-mist-300">
          We&apos;ve emailed you a confirmation and will be in touch shortly
          to lock in your slot.
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
            defaultValue={presetPackage}
            className={inputClass}
          >
            <option value="" disabled>Choose a package</option>
            {packages.map((pkg) => (
              <option key={pkg.slug} value={pkg.name}>
                {pkg.name} — £{pkg.price}
              </option>
            ))}
            <option value="Not sure / advice needed">Not sure / advice needed</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="preferredDate">Preferred date</label>
          <input required id="preferredDate" name="preferredDate" type="date" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="preferredTime">Preferred time</label>
          <select required id="preferredTime" name="preferredTime" className={inputClass} defaultValue="">
            <option value="" disabled>Choose a time</option>
            <option>Morning (9am - 12pm)</option>
            <option>Afternoon (12pm - 4pm)</option>
            <option>Evening (4pm - 7pm)</option>
          </select>
        </div>
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
            "Request Booking"
          )}
        </span>
        <span className="absolute inset-0 -translate-x-full bg-gold-sheen transition-transform duration-700 ease-out group-hover:translate-x-full" />
      </button>
      <p className="text-xs text-mist-500">
        This sends a request &mdash; we&apos;ll confirm your exact slot by phone or email.
      </p>
    </form>
  );
}
