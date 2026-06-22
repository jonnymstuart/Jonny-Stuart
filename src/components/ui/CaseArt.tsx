import { cn } from "@/lib/cn";

const palettes = {
  violet: ["#5b15c9", "#9b1bbf", "#fa32a0", "#ff5fae"],
  magenta: ["#b3114e", "#e21f6e", "#ff5a3c", "#ffb061"],
  ocean: ["#0b3fae", "#1a6cff", "#17b8c5", "#43e3b0"],
} as const;

export type CaseAccent = keyof typeof palettes;

/** Compact organic gradient artwork used on case cards and case heroes. */
export function CaseArt({
  accent = "violet",
  className,
}: {
  accent?: CaseAccent;
  className?: string;
}) {
  const c = palettes[accent];
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)} aria-hidden>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`g-${accent}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor={c[0]} />
            <stop offset="45%" stopColor={c[1]} />
            <stop offset="80%" stopColor={c[2]} />
            <stop offset="100%" stopColor={c[3]} />
          </linearGradient>
          <filter id={`b-${accent}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>
        <rect width="800" height="600" fill={`url(#g-${accent})`} />
        <g filter={`url(#b-${accent})`} opacity="0.8">
          <ellipse cx="180" cy="430" rx="220" ry="180" fill={c[0]} />
          <ellipse cx="650" cy="150" rx="220" ry="190" fill={c[3]} />
        </g>
        <path d="M120 -20 C 320 0 340 220 240 320 C 150 410 -20 360 -30 200 C -36 80 0 -10 120 -20 Z" fill={c[2]} opacity="0.85" />
        <path d="M640 320 C 800 320 860 460 800 560 L 520 600 C 470 470 500 360 560 340 C 585 328 612 320 640 320 Z" fill={c[0]} opacity="0.85" />
      </svg>
    </div>
  );
}
