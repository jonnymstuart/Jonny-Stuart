import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * RISE wordmark. The Figma logo uses PP Eiko; we render it in the display
 * serif with tight tracking to capture the same editorial feel.
 */
export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Rise — home"
      className={cn(
        "font-display text-[26px] font-medium leading-none tracking-[0.12em] transition-opacity hover:opacity-70",
        onDark ? "text-white" : "text-ink",
        className,
      )}
    >
      RISE
    </Link>
  );
}
