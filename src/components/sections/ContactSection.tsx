import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { contact } from "@/lib/content";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <div className="border-t border-line pt-14">
          <div className="grid gap-12 lg:grid-cols-2">
            <h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.03em]">
              {contact.title[0]}
              <br />
              {contact.title[1]}
            </h2>

            <dl className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {contact.blocks.map((b) => (
                <div key={b.label}>
                  <dt className="text-[13px] uppercase tracking-[0.14em] text-ink/45">
                    {b.label}
                  </dt>
                  <dd className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-ink/85">
                    {b.href ? (
                      <a className="underline-offset-4 hover:underline" href={b.href}>
                        {b.value}
                      </a>
                    ) : (
                      b.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-20 border-t border-line pt-14">
          <h3 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-none tracking-[-0.02em]">
            {contact.newsletter.title}
          </h3>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
