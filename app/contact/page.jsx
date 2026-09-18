"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Check,
  Users,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <section className="bg-stone-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm text-navy-100">Get in Touch</span>
          <h1 className="font-display text-4xl sm:text-5xl text-cream-50 mt-3 text-balance">
            Book Your Table
          </h1>
          <p className="mt-4 text-cream-100/75 max-w-xl mx-auto leading-relaxed">
            Reserve a seat, ask a question, or simply say bonjour — we&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-6 sm:p-10"
          >
            {sent ? (
              <div className="text-center py-12">
                <Check className="h-10 w-10 text-sage-500 mx-auto mb-4" />
                <h2 className="font-display text-2xl text-navy-700 dark:text-navy-50 mb-2">
                  Reservation Requested
                </h2>
                <p className="text-navy-500/75 dark:text-navy-100/65">
                  We&apos;ll confirm your table by email shortly. À bientôt!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="font-display text-2xl text-navy-700 dark:text-navy-50 mb-6">
                  Reserve a Table
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name" value={form.name} onChange={update("name")} required />
                  <Field label="Email" type="email" value={form.email} onChange={update("email")} required />
                  <Field label="Date" type="date" value={form.date} onChange={update("date")} required icon={Calendar} />
                  <Field label="Time" type="time" value={form.time} onChange={update("time")} required icon={Clock} />
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                    <span className="text-navy-500 dark:text-navy-100/80 font-medium flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" /> Party Size
                    </span>
                    <select
                      value={form.guests}
                      onChange={update("guests")}
                      className="rounded-md border border-stone-300 dark:border-navy-400/30 bg-cream-50 dark:bg-night-900 px-3.5 py-2.5 text-navy-700 dark:text-navy-50 focus:outline-none focus:ring-1 focus:ring-navy-500 dark:focus:ring-navy-400"
                    >
                      {[1, 2, 3, 4, 5, 6, "7+"].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                    <span className="text-navy-500 dark:text-navy-100/80 font-medium">
                      Message (optional)
                    </span>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Dietary notes, special occasions, seating preferences..."
                      className="rounded-md border border-stone-300 dark:border-navy-400/30 bg-cream-50 dark:bg-night-900 px-3.5 py-2.5 text-navy-700 dark:text-navy-50 placeholder:text-navy-500/40 dark:placeholder:text-cream-200/30 focus:outline-none focus:ring-1 focus:ring-navy-500 dark:focus:ring-navy-400 resize-none"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full sm:w-auto rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-8 py-3.5 font-medium transition-colors"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <InfoCard icon={MapPin} title="Location" text="96 Rue Louis-Armand, 75015 Paris, France" />
            <InfoCard icon={Phone} title="Phone" text="+33 1 42 60 30 30" />
            <InfoCard icon={Mail} title="Email" text="reservations@gusteaus.paris" />
            <InfoCard icon={Clock} title="Hours" text="Tuesday – Sunday, 6:00 PM – 11:00 PM. Closed Mondays." />
            <div className="relative aspect-video rounded-xl overflow-hidden border border-stone-300/40 dark:border-navy-400/20 bg-stone-800 flex items-center justify-center">
              <div className="text-center px-6">
                <MapPin className="h-6 w-6 text-navy-100 mx-auto mb-2" />
                <p className="text-sm text-cream-100/70">
                  Interactive map available on request
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-5">
      <Icon className="h-5 w-5 text-navy-500 dark:text-navy-400 shrink-0 mt-0.5" />
      <div>
        <h3 className="font-display text-base text-navy-700 dark:text-navy-50 mb-0.5">
          {title}
        </h3>
        <p className="text-sm text-navy-500/75 dark:text-navy-100/65">{text}</p>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required, icon: Icon }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-navy-500 dark:text-navy-100/80 font-medium flex items-center gap-1.5">
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-md border border-stone-300 dark:border-navy-400/30 bg-cream-50 dark:bg-night-900 px-3.5 py-2.5 text-navy-700 dark:text-navy-50 focus:outline-none focus:ring-1 focus:ring-navy-500 dark:focus:ring-navy-400 transition-shadow"
      />
    </label>
  );
}
