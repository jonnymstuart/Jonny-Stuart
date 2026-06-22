import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-[12px] font-medium uppercase tracking-[0.22em] text-ink/50",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-balance",
        "text-[clamp(2.25rem,4.6vw,4.25rem)] leading-[1.02]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
