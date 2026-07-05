import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { siteConfig, legal } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Personalized Pathways College Consulting to schedule a consultation about college lists, essays, applications, scholarships, and more.",
};

export default function ContactPage() {
  const hasScheduling =
    siteConfig.schedulingLink && siteConfig.schedulingLink !== "TODO_ADD_SCHEDULING_LINK";
  const hasEmail = siteConfig.email !== "TODO_ADD_EMAIL";

  return (
    <>
      <PageHero
        eyebrow="Start here"
        title="Start with a consultation"
        description="There are two easy ways to begin: schedule a consultation using the form, or email Personalized Pathways directly. Either way, we'll help you understand the next steps and decide what kind of support would be most useful."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Option 1: schedule a consultation via the form */}
            <div>
              <span className="inline-flex rounded-full bg-clay-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-clay-dark">
                Option 1
              </span>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-ink">
                Schedule a consultation
              </h2>
              <p className="mt-2 text-ink-soft">
                Share a few details about your student and what you're looking
                for, and we'll follow up to set up a time.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* Option 2: email Personalized Pathways directly */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-line bg-card p-6 shadow-sm">
                <span className="inline-flex rounded-full bg-sage-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sage">
                  Option 2
                </span>
                <h2 className="mt-3 font-serif text-lg font-semibold text-ink">
                  Email us directly
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Prefer email? Reach Personalized Pathways directly and we'll
                  reply to set up a consultation.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {/* Primary CTA: email Personalized Pathways directly. */}
                  <Button href={hasEmail ? `mailto:${siteConfig.email}` : "#main-content"}>
                    Email Personalized Pathways
                  </Button>
                  {/* Secondary CTA: booking link, when one is available. */}
                  {hasScheduling && (
                    <Button href={siteConfig.schedulingLink} variant="secondary">
                      Book a consultation
                    </Button>
                  )}
                </div>

                <dl className="mt-6 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-ink">Email</dt>
                    <dd className="text-ink-soft">
                      {/* TODO_ADD_EMAIL */}
                      {hasEmail ? (
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-clay-dark hover:underline"
                        >
                          {siteConfig.email}
                        </a>
                      ) : (
                        "Email coming soon"
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Scheduling</dt>
                    <dd className="text-ink-soft">
                      {/* TODO_ADD_SCHEDULING_LINK */}
                      {hasScheduling ? (
                        <a
                          href={siteConfig.schedulingLink}
                          className="text-clay-dark hover:underline"
                        >
                          Book a time
                        </a>
                      ) : (
                        "Scheduling link coming soon"
                      )}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-line bg-cream-deep/60 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">
                  A note on privacy
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {legal.privacyNote} Please keep messages to basic inquiry
                  details. There is no need to share sensitive student
                  information here.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
