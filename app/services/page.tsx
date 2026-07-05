import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PricingTable from "@/components/PricingTable";
import ApplicationTypes from "@/components/ApplicationTypes";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/Button";
import { services, servicesNote } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Services and Pricing",
  description:
    "Personalized Pathways college consulting packages and pricing, including the Essentials and Premium packages, honors and scholarships support, essay support, hourly consulting, and portfolio website support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Clear packages, tailored to each family"
        description="From full application support to honors, scholarship, and specialized-program help, these packages are a starting point for a conversation. A consultation is where we sort out the right level of support and what it costs."
      />

      {/* What we help students apply to */}
      <section className="border-b border-line py-14">
        <Container>
          <SectionHeading
            eyebrow="What we support"
            title="Applications, honors, scholarships, and specialized programs"
            description="These are the kinds of applications we help with. Which of them your student receives support on depends on the package you choose."
          />
          <div className="mt-10">
            <ApplicationTypes variant="row" />
          </div>
          <p className="mt-8 rounded-xl border border-line bg-cream-deep/60 px-5 py-4 text-sm leading-relaxed text-ink-soft">
            Whatever package your family chooses, your student gets our full focus
            and effort on every piece included in it. Each package covers a defined
            scope, so the right first step is a consultation to match the level of
            support to what your student needs.
          </p>
        </Container>
      </section>

      {/* Comparison overview */}
      <section className="py-16">
        <Container>
          {!siteConfig.showPricing && (
            <p className="mb-6 text-sm text-ink-muted">{siteConfig.pricingNote}</p>
          )}
          <PricingTable />
          <p className="mt-6 rounded-xl border border-line bg-cream-deep/60 px-5 py-4 text-sm leading-relaxed text-ink-soft">
            {servicesNote}
          </p>
        </Container>
      </section>

      {/* Full package detail */}
      <section className="pb-8">
        <Container>
          <SectionHeading
            eyebrow="The details"
            title="What each option includes"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 flex flex-col rounded-2xl border bg-card p-7 shadow-sm ${
                  service.highlight ? "border-clay ring-1 ring-clay/30" : "border-line"
                }`}
              >
                {service.highlight && service.highlightLabel && (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-clay px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {service.highlightLabel}
                  </span>
                )}
                <h3 className="font-serif text-2xl font-semibold text-ink">
                  {service.name}
                </h3>
                {siteConfig.showPricing && (
                  <>
                    <p className="mt-2 text-xl font-semibold text-clay-dark">
                      {service.price}
                    </p>
                    {service.priceNote && service.priceNote.length >= 16 && (
                      <p className="mt-1 text-sm text-ink-muted">{service.priceNote}</p>
                    )}
                  </>
                )}
                <p className="mt-4 leading-relaxed text-ink-soft">
                  {service.summary}
                </p>

                {service.includes && (
                  <div className="mt-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-ink">
                      Includes
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.examples && (
                  <div className="mt-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-ink">
                      Examples
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {service.examples.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-cream-deep px-3 py-1 text-xs text-ink-soft"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.limitations && (
                  <div className="mt-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-ink">
                      Good to know
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.limitations.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted">
                          <span aria-hidden="true" className="mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/contact">Start with a consultation</Button>
          </div>
        </Container>
      </section>

      <CTASection
        title="Which level of support makes sense?"
        description="A short consultation usually answers that quickly. We'll look at your student's year, goals, and timeline together."
        secondaryLabel="See the process"
        secondaryHref="/college-consulting#process"
      />
    </>
  );
}
