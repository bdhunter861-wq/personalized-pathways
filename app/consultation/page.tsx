import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ConsultationForm from "@/components/ConsultationForm";
import { siteConfig, legal } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Schedule a consultation",
  description:
    "Start with a consultation. Tell us about your student and what you're looking for, and Personalized Pathways will follow up to set up a time.",
};

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        motif
        eyebrow="Start here"
        title="Schedule a consultation"
        description="Tell us a little about your student and what you're looking for. When you send the form, your email program opens with everything filled in, ready to go to Personalized Pathways."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink">
                Send us a message
              </h2>
              <p className="mt-2 text-ink-soft">
                Share a few details and we&rsquo;ll follow up to set up a time.
                There&rsquo;s no need to be local; we work with families
                nationwide.
              </p>
              <div className="mt-6">
                <ConsultationForm />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-line bg-card p-6 shadow-sm">
                <h2 className="font-serif text-lg font-semibold text-ink">
                  Prefer email?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  You can also reach us directly and we&rsquo;ll reply to set up a
                  consultation.
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay-dark hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-2xl border border-line bg-cream-deep/60 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">
                  A note on privacy
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {legal.privacyNote} Please keep messages to basic inquiry
                  details. There is no need to share sensitive student information
                  here.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
