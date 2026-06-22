import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { ContactSection } from "@/components/sections/ContactSection";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Your AI-fueled design, development & growth subscription. Flexible plans — pause or cancel anytime.",
};

const plans = [
  {
    name: "Monthly",
    price: "€4,500",
    cadence: "/ month",
    blurb: "One active request at a time. Perfect for a steady stream of design and front-end work.",
    features: [
      "One active request at a time",
      "Design & front-end delivery",
      "Async updates, weekly check-ins",
      "Pause or cancel anytime",
    ],
    featured: false,
    cta: "Start monthly",
  },
  {
    name: "Quarterly",
    price: "€3,900",
    cadence: "/ month",
    blurb: "Two active requests and priority delivery. Our most popular way to build with Rise.",
    features: [
      "Two active requests at a time",
      "Design, development & AI",
      "Priority turnaround",
      "Dedicated Slack channel",
      "Pause anytime",
    ],
    featured: true,
    cta: "Go quarterly",
  },
  {
    name: "Bespoke",
    price: "Let’s talk",
    cadence: "",
    blurb: "A full embedded squad for platforms, MVPs and growth programmes that need real horsepower.",
    features: [
      "Dedicated multi-disciplinary squad",
      "Engineering, AI & growth & GEO",
      "Roadmap & metrics ownership",
      "Flexible scope & SLAs",
    ],
    featured: false,
    cta: "Talk to us",
  },
];

const faqs = [
  {
    q: "How does the subscription work?",
    a: "Pick a plan, add requests to your queue, and we deliver them one (or two) at a time. You can reprioritise whenever you like.",
  },
  {
    q: "Can I pause or cancel?",
    a: "Anytime. Pause when your queue is light and pick up exactly where you left off — billing pauses with you.",
  },
  {
    q: "What if I need more than design?",
    a: "Most engagements blend design, development, AI and growth. The Quarterly and Bespoke plans are built for exactly that.",
  },
  {
    q: "How fast is delivery?",
    a: "Most requests land in a few days. Larger builds are scoped into weekly sprints so you always see progress.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            Your design, dev & growth <em className="font-light italic">subscription.</em>
          </>
        }
        intro="Senior talent, flexible scope, no lock-in. One predictable monthly fee — pause or cancel whenever you need to."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "flex flex-col rounded-[24px] border p-8",
                  plan.featured
                    ? "border-transparent bg-dark text-white"
                    : "border-line bg-page/40",
                )}
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl">{plan.name}</h2>
                  {plan.featured && (
                    <span className="rounded-full bg-magenta px-3 py-1 text-xs font-medium text-white">
                      Popular
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-[clamp(2.5rem,4vw,3.25rem)] leading-none tracking-[-0.02em]">
                    {plan.price}
                  </span>
                  <span className={cn("text-sm", plan.featured ? "text-white/55" : "text-ink/50")}>
                    {plan.cadence}
                  </span>
                </div>
                <p className={cn("mt-4 text-sm leading-relaxed", plan.featured ? "text-white/70" : "text-ink/60")}>
                  {plan.blurb}
                </p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", plan.featured ? "bg-magenta" : "bg-ink/40")} />
                      <span className={plan.featured ? "text-white/85" : "text-ink/75"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <Button
                    href="/contact"
                    variant={plan.featured ? "light" : "outline"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-10 border-t border-line pt-14 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal tracking-[-0.02em]">
              Questions, answered.
            </h2>
            <dl className="divide-y divide-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-6 first:pt-0">
                  <dt className="text-lg font-medium">{f.q}</dt>
                  <dd className="mt-2 max-w-2xl text-ink/65">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
