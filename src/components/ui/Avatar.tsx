import { cn } from "@/lib/cn";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Gradient monogram avatar — stands in for a portrait photo. */
export function Avatar({
  name,
  className,
  size = 44,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-magenta text-[11px] font-semibold text-white",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {initials(name)}
    </span>
  );
}
