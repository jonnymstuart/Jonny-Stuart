import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { LogoCard } from "@/components/ui/Wordmark";
import { clientLogos, sectionTitles } from "@/lib/content";

export function ClientLogos() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <h2 className="mb-12 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-normal leading-[1] tracking-[-0.02em]">
          {sectionTitles.clients}
        </h2>
      </Container>
      <Marquee duration={40} gap="gap-5" className="px-5 sm:px-8 lg:px-10">
        {[...clientLogos, "Userise", "Onlyone"].map((name, i) => (
          <LogoCard key={`${name}-${i}`} name={name} />
        ))}
      </Marquee>
    </section>
  );
}
