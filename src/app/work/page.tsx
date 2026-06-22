import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CaseArt } from "@/components/ui/CaseArt";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowRight } from "@/components/ui/Button";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Outcomes",
  description:
    "Selected work from Rise — products, platforms and growth programmes for founders, scaleups and agencies.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Outcomes"
        title="Work that earns its keep."
        intro="A look at what happens when clearer thinking meets sharper execution. Real products, real platforms, real impact."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {caseStudies.map((c) => (
              <Link key={c.slug} href={`/work/${c.slug}`} className="group block">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[24px]">
                  <CaseArt accent={c.accent} className="transition-transform duration-700 ease-[var(--ease-rise)] group-hover:scale-[1.04]" />
                  <div className="absolute left-5 top-5 flex gap-2">
                    <span className="rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {c.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                    <span className="font-display text-3xl leading-none">{c.stat.value}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/40 transition-colors group-hover:bg-white group-hover:text-ink">
                      <ArrowRight />
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-sm text-ink/50">{c.client}</div>
                  <h2 className="mt-1 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-normal leading-snug tracking-[-0.01em]">
                    {c.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">{c.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
