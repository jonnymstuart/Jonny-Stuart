import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden border-y border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-page px-6 py-10 sm:py-12">
              <div className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-normal leading-none tracking-[-0.02em]">
                {s.value}
              </div>
              <p className="mt-4 max-w-[14rem] text-sm leading-relaxed text-ink/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
