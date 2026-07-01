"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-sm border border-mist-500/25 bg-navy-900/60 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 outline-none transition-colors focus:border-gold-500/70";

const labelClass = "mb-2 block text-xs uppercase tracking-widest2 text-mist-500";

export default function ContactForm() {
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
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
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
        <h3 className="font-display text-2xl font-bold text-mist-100">Message sent</h3>
        <p className="max-w-sm text-sm text-mist-300">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-gold-400 hover:text-gold-300"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="c-name">Full name</label>
          <input required id="c-name" name="name" className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label className={labelClass} htmlFor="c-email">Email</label>
          <input required id="c-email" name="email" type="email" className={inputClass} placeholder="jane@example.com" />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="c-message">Message</label>
        <textarea
          required
          id="c-message"
          name="message"
          rows={6}
          className={inputClass}
          placeholder="Tell us about your car and what you're after..."
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
            "Send Message"
          )}
        </span>
        <span className="absolute inset-0 -translate-x-full bg-gold-sheen transition-transform duration-700 ease-out group-hover:translate-x-full" />
      </button>
    </form>
  );
}
