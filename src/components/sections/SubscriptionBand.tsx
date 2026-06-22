import { Container } from "@/components/ui/Container";
import { WorldClocks } from "@/components/ui/WorldClocks";
import { subscription, footer } from "@/lib/content";

export function SubscriptionBand() {
  return (
    <section className="bg-dark text-white">
      <Container className="py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <h2 className="font-display text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.08] tracking-[-0.02em]">
            {subscription.title[0]}
            <br />
            {subscription.title[1]}{" "}
            <em className="font-light italic">{subscription.title[2]}</em>
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2">
            {subscription.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[13px] uppercase tracking-[0.14em] text-white/40">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="text-[15px] text-white/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="mb-8 text-sm text-white/40">{footer.remote}</p>
          <WorldClocks />
        </div>
      </Container>
    </section>
  );
}
