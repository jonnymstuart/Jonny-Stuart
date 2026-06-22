"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { services, sectionTitles, type Service } from "@/lib/content";
import { cn } from "@/lib/cn";

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span className="relative grid h-7 w-7 shrink-0 place-items-center" aria-hidden>
      <span className="absolute h-px w-3.5 bg-ink" />
      <span className={cn("absolute h-3.5 w-px bg-ink transition-transform duration-300", open && "rotate-90 scale-y-0")} />
    </span>
  );
}

function AccordionItem({
  service,
  open,
  onToggle,
}: {
  service: Service;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-ink/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-[clamp(1.6rem,3vw,2.5rem)] font-normal tracking-[-0.01em]">
          {service.title}
        </span>
        <PlusIcon open={open} />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-[var(--ease-rise)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-10 pt-1">
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {service.columns.map((c) => (
                <div key={c.title}>
                  <h4 className="text-sm font-medium">{c.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{c.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 border-t border-ink/10 pt-7">
              <h4 className="text-sm font-medium">Languages and tools</h4>
              <dl className="mt-3 space-y-2">
                {service.tools.map((t) => (
                  <div key={t.label} className="text-sm leading-relaxed text-ink/60">
                    <dt className="inline font-medium text-ink/80">{t.label}: </dt>
                    <dd className="inline">{t.items}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              href={service.cta.href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-opacity hover:opacity-60"
            >
              {service.cta.label}
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  return (
    <section id="services" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-[clamp(2.25rem,4.4vw,3.75rem)] font-normal leading-[1.04] tracking-[-0.02em] text-balance">
            {sectionTitles.services}
          </h2>
          <Button
            href="/work"
            variant="outline"
            className="mt-8"
            icon={
              <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-page">
                <ArrowRight className="h-3 w-3" />
              </span>
            }
          >
            Watch
          </Button>
        </div>

        <div className="border-b border-ink/15">
          {services.map((s) => (
            <AccordionItem
              key={s.id}
              service={s}
              open={openId === s.id}
              onToggle={() => setOpenId((cur) => (cur === s.id ? null : s.id))}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
