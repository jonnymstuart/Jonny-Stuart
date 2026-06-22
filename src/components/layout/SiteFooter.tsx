import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { BackToTop } from "@/components/ui/BackToTop";
import { subscription, social, footer, nav } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-page pb-10 pt-4">
      <Container>
        <div className="grid gap-12 border-t border-line pt-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col justify-between gap-10">
            <Logo />
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ink/60 transition-opacity hover:opacity-100 hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/25 px-5 py-2 text-sm transition-colors hover:bg-ink hover:text-page"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {subscription.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[13px] uppercase tracking-[0.14em] text-ink/40">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <span className="text-[15px] text-ink/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between border-t border-line pt-6">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[13px] text-ink/50">
            <Link href="/terms" className="hover:text-ink">
              {footer.terms}
            </Link>
            <span>· {footer.copyright}</span>
          </div>
          <BackToTop />
        </div>
      </Container>
    </footer>
  );
}
