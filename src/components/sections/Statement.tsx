import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { statement, hero } from "@/lib/content";

export function Statement() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <Eyebrow>{statement.eyebrow}</Eyebrow>
        <h2 className="mt-7 max-w-5xl font-display text-[clamp(2.5rem,6vw,6rem)] font-normal leading-[0.98] tracking-[-0.03em] text-balance">
          {statement.title}
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/65">
          {hero.sub}
        </p>
      </Container>
    </section>
  );
}
