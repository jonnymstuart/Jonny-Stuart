"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { name: "company", label: "Company", type: "text", placeholder: "Where you work" },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-[24px] border border-line bg-page/40 p-10">
        <p className="font-display text-2xl">Thanks — message received.</p>
        <p className="mt-3 text-ink/60">
          We’ll be back to you within one business day, usually sooner.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className="text-[13px] uppercase tracking-[0.14em] text-ink/45">{f.label}</span>
            <input
              required={f.name !== "company"}
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
              className="mt-2 h-12 w-full border-b border-ink/25 bg-transparent text-[15px] outline-none transition-colors placeholder:text-ink/35 focus:border-ink"
            />
          </label>
        ))}
      </div>
      <label className="block">
        <span className="text-[13px] uppercase tracking-[0.14em] text-ink/45">Project</span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Tell us what you’re building…"
          className="mt-2 w-full resize-none border-b border-ink/25 bg-transparent py-3 text-[15px] outline-none transition-colors placeholder:text-ink/35 focus:border-ink"
        />
      </label>
      <Button type="submit" size="lg">
        Send it over
      </Button>
    </form>
  );
}
