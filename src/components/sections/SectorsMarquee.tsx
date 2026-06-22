import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Wordmark } from "@/components/ui/Wordmark";
import { clientLogos, sectionTitles } from "@/lib/content";

export function SectorsMarquee() {
  return (
    <section className="border-y border-line py-7">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <span className="shrink-0 text-[12px] font-medium uppercase tracking-[0.2em] text-ink/45">
          {sectionTitles.sectors}
        </span>
        <div className="relative flex-1 overflow-hidden lg:[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <Marquee duration={34} gap="gap-14">
            {clientLogos.map((name) => (
              <Wordmark key={name} name={name} className="text-ink/55" />
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
}
