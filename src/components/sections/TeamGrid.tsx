import { Container } from "@/components/ui/Container";
import { team, sectionTitles } from "@/lib/content";

/** Portrait placeholder — soft duotone panel keyed to the brand. */
function Portrait({ index }: { index: number }) {
  const tints = [
    "from-[#c9bfd6] to-[#b3a7c2]",
    "from-[#e3c3d6] to-[#c9a9bd]",
    "from-[#c2c9d6] to-[#a9b1c2]",
    "from-[#d6cdc3] to-[#c2b6a9]",
  ];
  return (
    <div
      className={`aspect-[3/4] w-full rounded-[20px] bg-gradient-to-b ${tints[index % tints.length]}`}
    />
  );
}

export function TeamGrid() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <h2 className="mb-14 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-normal leading-[1] tracking-[-0.02em]">
          {sectionTitles.team}
        </h2>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {team.map((member, i) => (
            <div key={member.name}>
              <Portrait index={i} />
              <div className="mt-4">
                <div className="font-display text-xl tracking-tight">{member.name}</div>
                <div className="text-sm text-ink/55">{member.role}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{member.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
