import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { StatsBand } from "@/components/sections/StatsBand";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rise is a team of technical and design specialists HQ'd in sunny Lisbon, building intelligently to rise clients beyond the ordinary.",
};

const values = [
  {
    title: "Clearer thinking",
    body: "We strip away the noise. Before we build, we get sharp on the problem worth solving and the metric that proves it.",
  },
  {
    title: "Sharper execution",
    body: "Senior people, no hand-offs to juniors. The team you meet is the team that ships your work.",
  },
  {
    title: "Real impact",
    body: "We measure ourselves on outcomes — activation, conversion, growth — not slides or hours.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            We build intelligently to rise you <em className="font-light italic">beyond the ordinary.</em>
          </>
        }
        intro="We’re a team of technical and design specialists HQ’d in sunny Lisbon, working remotely across six timezones with founders, agencies and scaleups worldwide."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 border-t border-line pt-14 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <h2 className="font-display text-2xl tracking-tight">{v.title}</h2>
                <p className="mt-3 leading-relaxed text-ink/65">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <StatsBand />
      <TeamGrid />
      <ClientLogos />
      <ContactSection />
    </>
  );
}
