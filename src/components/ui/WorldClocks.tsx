"use client";

import { useEffect, useState } from "react";
import { timezones } from "@/lib/content";

function format(tz: string, now: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", hour12: false }).format(now),
  );
  return { time: parts, day: hour >= 7 && hour < 19 };
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function WorldClocks() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
      {timezones.map((z) => {
        const f = now ? format(z.tz, now) : null;
        return (
          <div key={z.city} className="flex flex-col gap-2">
            <span className="text-white/70">
              {f ? (f.day ? <SunIcon /> : <MoonIcon />) : <span className="block h-4 w-4" />}
            </span>
            <div className="text-sm text-white">{z.city}</div>
            <div className="text-sm tabular-nums text-white/55" suppressHydrationWarning>
              {f ? f.time : "—:—"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
