"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { nav } from "@/lib/content";
import { cn } from "@/lib/cn";

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "bg-page/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[88px] max-w-[1416px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[14px] tracking-tight text-ink transition-opacity hover:opacity-60",
                  active && "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className={cn("block h-px w-6 bg-ink transition-transform", open && "translate-y-[6px] rotate-45")} />
            <span className={cn("block h-px w-6 bg-ink transition-opacity", open && "opacity-0")} />
            <span className={cn("block h-px w-6 bg-ink transition-transform", open && "-translate-y-[6px] -rotate-45")} />
          </div>
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-page px-5 pt-28 transition-[opacity,transform] duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav className="flex flex-col">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-5 font-display text-[2rem] tracking-tight"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="mailto:jonny@userise.co"
          className="mt-auto mb-10 text-sm text-ink/60"
        >
          jonny@userise.co
        </a>
      </div>
    </header>
  );
}
