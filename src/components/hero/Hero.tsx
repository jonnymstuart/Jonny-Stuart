import { Container } from "@/components/ui/Container";
import { hero } from "@/lib/content";
import { HeroBlob } from "./HeroBlob";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col pt-[88px]">
      <Container className="flex flex-1 flex-col justify-end pb-8 pt-10 sm:pt-16">
        <p className="mb-auto max-w-xs pt-6 text-[12px] leading-relaxed text-ink/60 sm:ml-auto sm:text-right">
          {hero.trusted}
        </p>

        <h1 className="font-display font-normal tracking-[-0.03em] text-[clamp(3.5rem,12vw,9.5rem)] leading-[0.92]">
          {hero.lead}{" "}
          <em className="font-light italic">{hero.leadAccent}</em>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-[clamp(1.05rem,2vw,1.6rem)] leading-snug text-ink/80">
          {hero.intro}
        </p>
      </Container>

      {/* Full-bleed gradient artwork */}
      <div className="relative h-[40vh] min-h-[300px] w-full sm:h-[44vh]">
        <HeroBlob />
      </div>
    </section>
  );
}
