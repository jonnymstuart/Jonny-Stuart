import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full text-[15px] font-medium leading-none transition-colors duration-300 ease-[var(--ease-rise)] whitespace-nowrap";

const sizes = {
  md: "h-11 px-5",
  lg: "h-[52px] px-7 text-base",
} as const;

const variants: Record<Variant, string> = {
  solid: "bg-ink text-page hover:bg-[#3a1d57]",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-page",
  ghost: "text-ink hover:opacity-60",
  light: "border border-white/25 text-white hover:bg-white hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className,
  icon,
  ...rest
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
    if (external) {
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
