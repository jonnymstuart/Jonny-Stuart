import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Rise website.",
};

const sections = [
  {
    h: "Using this site",
    p: "This website is provided by Rise Technologies for general information about our services. Content may change at any time without notice.",
  },
  {
    h: "Engagements",
    p: "Any work we undertake is governed by a separate written agreement. Nothing on this site constitutes an offer or a binding commitment to provide services.",
  },
  {
    h: "Privacy",
    p: "We only collect the details you choose to share — for example, when you email us or join our list. We never sell your data and only send occasional, high-value emails.",
  },
  {
    h: "Intellectual property",
    p: "The Rise name, brand and the contents of this site are owned by Rise Technologies unless stated otherwise. Client logos and trademarks remain the property of their respective owners.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms" />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl space-y-10 border-t border-line pt-12">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-2xl tracking-tight">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-ink/70">{s.p}</p>
              </div>
            ))}
            <p className="text-sm text-ink/45">Copyright 2026 Rise Technologies.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
