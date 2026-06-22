import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Services } from "@/components/sections/Services";
import { SubscriptionBand } from "@/components/sections/SubscriptionBand";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Design, development, AI & agents and growth & GEO — delivered by a senior, remote team as one accountable partner.",
};

const process = [
  {
    step: "01",
    title: "Align",
    body: "Momentum starts with clarity. We agree on goals, scope and the metrics that define success before any work begins.",
  },
  {
    step: "02",
    title: "Design",
    body: "We shape the experience and the system behind it — fast, in the open, with you in the loop every week.",
  },
  {
    step: "03",
    title: "Build",
    body: "Senior engineers ship production-grade work in tight sprints, with quality and accessibility baked in.",
  },
  {
    step: "04",
    title: "Grow",
    body: "We launch, measure and iterate — turning what we shipped into compounding, measurable impact.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Everything to take you <em className="font-light italic">beyond the ordinary.</em>
          </>
        }
        intro="One senior team across design, engineering, AI and growth — so the strategy, the build and the launch never fall out of sync."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-x-8 gap-y-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step}>
                <div className="font-display text-3xl text-magenta">{p.step}</div>
                <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Services />
      <SubscriptionBand />
      <ContactSection />
    </>
  );
}
