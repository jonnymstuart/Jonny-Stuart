import { cn } from "@/lib/cn";

/**
 * Recreation of the Rise hero artwork: a violet → magenta gradient field
 * with crisp organic pink lobes drifting over a couple of soft glows.
 * Built entirely in SVG/CSS so there's no external image dependency.
 */
export function HeroBlob({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)} aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="rise-field" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#5b15c9" />
            <stop offset="42%" stopColor="#9b1bbf" />
            <stop offset="78%" stopColor="#e21f8e" />
            <stop offset="100%" stopColor="#fa32a0" />
          </linearGradient>
          <radialGradient id="rise-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ff4fb0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff4fb0" stopOpacity="0" />
          </radialGradient>
          <filter id="rise-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>

        {/* base field */}
        <rect width="1440" height="760" fill="url(#rise-field)" />

        {/* soft underglows */}
        <g filter="url(#rise-soft)">
          <ellipse cx="240" cy="540" rx="360" ry="300" fill="#7a1ff0" opacity="0.7" />
          <ellipse cx="1180" cy="220" rx="380" ry="320" fill="#ff2e86" opacity="0.7" />
        </g>

        {/* crisp organic lobes */}
        <g className="animate-drift" style={{ ["--drift-duration" as string]: "20s" }}>
          <path
            d="M-40 60 C 150 40 250 150 230 290 C 215 400 90 470 -40 440 Z"
            fill="#ff1f6b"
            opacity="0.95"
          />
          <path
            d="M320 -40 C 520 -20 640 90 600 250 C 560 380 360 430 300 300 C 250 190 200 -20 320 -40 Z"
            fill="#ff2a78"
            opacity="0.92"
          />
        </g>
        <g className="animate-drift" style={{ ["--drift-duration" as string]: "26s" }}>
          <path
            d="M760 -30 C 900 -10 940 150 880 320 C 835 450 760 470 720 360 C 680 230 640 -10 760 -30 Z"
            fill="#ff3d83"
            opacity="0.85"
          />
          <path
            d="M1180 360 C 1320 350 1420 470 1400 620 C 1385 740 1250 800 1140 760 C 1040 720 1020 520 1080 430 C 1110 385 1140 362 1180 360 Z"
            fill="#c4144f"
            opacity="0.95"
          />
        </g>

        {/* highlight glow */}
        <ellipse cx="980" cy="540" rx="220" ry="160" fill="url(#rise-glow)" />
      </svg>

      {/* subtle grain / vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_55%,rgba(0,0,0,0.18))]" />
    </div>
  );
}
