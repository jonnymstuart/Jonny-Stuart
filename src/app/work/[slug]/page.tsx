import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CaseArt } from "@/components/ui/CaseArt";
import { ArrowRight } from "@/components/ui/Button";
import { ContactSection } from "@/components/sections/ContactSection";
import { caseStudies, getCaseStudy } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Outcome" };
  return { title: study.title, description: study.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const more = caseStudies.filter((c) => c.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="pt-[120px] sm:pt-[150px]">
        <Container>
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-ink/55 hover:text-ink">
            <span className="rotate-180">
              <ArrowRight />
            </span>
            All outcomes
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
              <CaseArt accent={study.accent} />
            </div>

            <div className="flex flex-col">
              <div className="text-sm uppercase tracking-[0.16em] text-ink/45">{study.client}</div>
              <span className="mt-4 w-fit rounded-full border border-ink/25 px-3.5 py-1 text-xs font-medium">
                {study.tag}
              </span>
              <h1 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.04] tracking-[-0.02em]">
                {study.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-ink/65">{study.summary}</p>

              <div className="mt-10 border-t border-line pt-8">
                <div className="font-display text-[clamp(3rem,6vw,4.5rem)] font-normal leading-none tracking-[-0.02em]">
                  {study.stat.value}
                </div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/60">
                  {study.stat.label}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Breakdown */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-wrap gap-2">
            {study.sectors.map((s) => (
              <span key={s} className="rounded-full bg-ink/5 px-3.5 py-1.5 text-sm text-ink/70">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-16 space-y-20">
            {study.blocks.map((b, i) => (
              <div key={b.label} className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
                <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-normal tracking-[-0.01em]">
                  {b.label}
                </h2>
                <div>
                  <p className="max-w-2xl text-lg leading-relaxed text-ink/75">{b.body}</p>
                  {i === 0 && (
                    <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-[20px]">
                      <CaseArt accent={study.accent} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* More outcomes */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <h2 className="mb-12 font-display text-[clamp(2rem,4vw,3.25rem)] font-normal tracking-[-0.02em]">
            More outcomes
          </h2>
          <div className="grid gap-10 sm:grid-cols-2">
            {more.map((c) => (
              <Link key={c.slug} href={`/work/${c.slug}`} className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[22px]">
                  <CaseArt accent={c.accent} className="transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-4 text-sm text-ink/50">{c.client}</div>
                <h3 className="mt-1 font-display text-2xl font-normal leading-snug tracking-[-0.01em]">
                  {c.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
