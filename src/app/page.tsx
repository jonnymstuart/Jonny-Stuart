import { Hero } from "@/components/hero/Hero";
import { SectorsMarquee } from "@/components/sections/SectorsMarquee";
import { Statement } from "@/components/sections/Statement";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Services } from "@/components/sections/Services";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { SubscriptionBand } from "@/components/sections/SubscriptionBand";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectorsMarquee />
      <Statement />
      <StatsBand />
      <Testimonials />
      <TeamGrid />
      <Services />
      <ClientLogos />
      <SubscriptionBand />
      <ContactSection />
    </>
  );
}
