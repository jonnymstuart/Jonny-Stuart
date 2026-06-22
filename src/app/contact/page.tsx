import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Rise. New engagements: jonny@userise.co — or reach the team in Lisbon directly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Get started,
            <br />
            right away.
          </>
        }
        intro="Tell us where you’re headed and we’ll tell you how we’d get you there. No forms-into-the-void — a real human replies."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
            <ContactForm />

            <div className="space-y-8 lg:border-l lg:border-line lg:pl-12">
              {contact.blocks.map((b) => (
                <div key={b.label}>
                  <div className="text-[13px] uppercase tracking-[0.14em] text-ink/45">{b.label}</div>
                  <div className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-ink/85">
                    {b.href ? (
                      <a className="underline-offset-4 hover:underline" href={b.href}>
                        {b.value}
                      </a>
                    ) : (
                      b.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 border-t border-line pt-14">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal tracking-[-0.02em]">
              {contact.newsletter.title}
            </h2>
            <div className="mt-8">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
