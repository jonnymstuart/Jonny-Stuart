import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-[140px] sm:pt-[180px]">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,7vw,6.5rem)] font-normal leading-[0.96] tracking-[-0.03em] text-balance">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">{intro}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
