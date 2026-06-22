"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/ui/Button";
import { contact } from "@/lib/content";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="w-full max-w-md"
    >
      <div className="flex items-center gap-2 rounded-full border border-ink/25 py-1.5 pl-5 pr-1.5 transition-colors focus-within:border-ink">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={done ? "You’re on the list ✦" : contact.newsletter.placeholder}
          disabled={done}
          className="h-10 flex-1 bg-transparent text-[15px] outline-none placeholder:text-ink/45 disabled:opacity-70"
          aria-label="Email address"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-page transition-transform hover:scale-105"
        >
          <ArrowRight />
        </button>
      </div>
      <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-ink/50">
        {contact.newsletter.note}
      </p>
    </form>
  );
}
