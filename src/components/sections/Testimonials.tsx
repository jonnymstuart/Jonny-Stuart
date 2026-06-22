import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Avatar } from "@/components/ui/Avatar";
import { testimonials, sectionTitles, type Testimonial } from "@/lib/content";

function QuoteCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[min(86vw,640px)] shrink-0 flex-col justify-between border-t border-ink/20 pt-8">
      <blockquote className="font-display text-[clamp(1.5rem,2.6vw,2.4rem)] font-normal leading-[1.18] tracking-[-0.01em]">
        <span className="text-magenta">“</span>
        {t.quote}
        <span className="text-magenta">”</span>
      </blockquote>
      <figcaption className="mt-10 flex items-center gap-3">
        <Avatar name={t.name} />
        <div className="leading-tight">
          <div className="text-sm font-medium">{t.name}</div>
          <div className="text-sm text-ink/55">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <h2 className="mb-14 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-normal leading-[1] tracking-[-0.02em]">
          {sectionTitles.testimonials}
        </h2>
      </Container>
      <Marquee duration={48} gap="gap-16" className="px-5 sm:px-8 lg:px-10">
        {testimonials.map((t) => (
          <QuoteCard key={t.name} t={t} />
        ))}
      </Marquee>
    </section>
  );
}
