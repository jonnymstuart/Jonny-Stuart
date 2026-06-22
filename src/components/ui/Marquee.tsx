import { cn } from "@/lib/cn";

/**
 * Seamless infinite marquee. Children are rendered twice and the track is
 * translated -50% so the loop is gapless. Pauses on hover.
 */
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className,
  gap = "gap-12",
}: {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  gap?: string;
}) {
  return (
    <div className={cn("marquee-group relative w-full overflow-hidden", className)}>
      <div
        className={cn("flex w-max animate-marquee", gap)}
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <div className={cn("flex shrink-0 items-center", gap)}>{children}</div>
        <div className={cn("flex shrink-0 items-center", gap)} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
