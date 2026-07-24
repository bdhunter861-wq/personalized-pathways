import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PricingTable from "@/components/PricingTable";
import ApplicationTypes from "@/components/ApplicationTypes";
import Backdrop from "@/components/Backdrop";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/Button";
import { services, servicesNote } from "@/data/services";
import { siteConfig, consultationHref } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personalized Pathways college consulting: who we help, how we work, and our packages, including full application support, honors, scholarships, essays, and specialized programs such as BS/MD.",
};

const audiences = [
  {
    title: "Seniors ready to apply",
    body: "Students who already have a working college list and need help completing applications strategically, from the main essay to supplements, activities, and deadlines.",
  },
  {
    title: "Juniors and younger students",
    body: "Students who would benefit from longer-term planning around courses, activities, testing, major exploration, and finding schools that genuinely fit.",
  },
  {
    title: "Families with specific goals",
    body: "Families who want help with honors colleges, scholarships, BS/MD or special program essays, campus visit strategy, and final decisions about where to enroll.",
  },
];

const steps = [
  {
    title: "Initial consultation",
    body: "We start by talking. Where is the student now, what is the family hoping for, and what feels stressful or unclear? This conversation also helps decide which level of support fits.",
  },
  {
    title: "Student story and goals",
    body: "We dig into strengths, interests, activities, and the details that make a student specific. This is the foundation for both the school list and the writing later on.",
  },
  {
    title: "Strategy and planning",
    body: "Together we shape a plan: a balanced school list, deadlines and milestones, an essay approach, and, depending on the package, testing, activities, honors, and scholarship strategy.",
  },
  {
    title: "Application, essay, or package work",
    body: "This is the hands-on stretch. Students draft and revise their own essays with our feedback and strategy. Applications, supplements, and any honors or scholarship pieces come together piece by piece.",
  },
  {
    title: "Final decisions and next steps",
    body: "As decisions and aid letters arrive, we review them together, compare offers, and think through fit one more time, including an appeals consultation if it is needed.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        motif="blocks"
        eyebrow="Services"
        title="Strategy and support, built around your student"
        description="Personalized Pathways helps students make stronger choices, tell their story well, and complete applications with less stress and more strategy. Here is who we help, how we work, and our packages."
      />

      {/* Who this is for */}
      <section className="relative overflow-hidden py-20">
        <Backdrop />
        <Container className="relative">
          <SectionHeading
            eyebrow="Who this is for"
            title="Support at different stages"
            description="The right help depends on where a student is. Here is who tends to work with Personalized Pathways."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((a, i) => {
              const green = i % 2 === 1;
              return (
                <div
                  key={a.title}
                  className="lift rounded-2xl border border-line bg-card p-7 shadow-sm"
                >
                  <div
                    className={`mb-4 h-1.5 w-12 rounded-full ${
                      green ? "bg-sage" : "bg-clay"
                    }`}
                  />
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {a.body}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* The approach — bold dark band for contrast */}
      <section className="bg-brand-deep relative overflow-hidden py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-[-5rem] h-72 w-72 rounded-full bg-brand-green/20 blur-3xl"
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              light
              eyebrow="The approach"
              title="Specific and authentic, not packaged"
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-cream-deep/85">
              <p>
                A lot of application advice pushes students to become a version of
                what they think a school wants. That rarely reads as genuine, and
                it is exhausting to keep up. The work here goes the other
                direction. Dr. Anthony helps students identify the details,
                patterns, and stories that already make them who they are, then
                present those clearly across an application.
              </p>
              <p>
                The goal is not to package a student into someone else. It is to
                help them present themselves specifically and honestly, so the
                people reading the application get a real sense of the person
                behind it.
              </p>
              <p>
                That work goes well beyond essay editing. Depending on the
                package, it includes school-list strategy, activities and honors
                planning, testing timelines, scholarship and special-program
                applications, and guidance once decisions and aid letters arrive.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What we support */}
      <section className="py-16">
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

      {/* Pricing overview */}
      <section className="bg-cream-deep/60 py-16">
        <Container>
          {!siteConfig.showPricing && (
            <p className="mb-6 text-sm text-ink-muted">{siteConfig.pricingNote}</p>
          )}
          <PricingTable />
          <p className="mt-6 rounded-xl border border-line bg-card px-5 py-4 text-sm leading-relaxed text-ink-soft">
            {servicesNote}
          </p>
        </Container>
      </section>

      {/* Full package detail */}
      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="The details" title="What each option includes" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className={`lift scroll-mt-24 flex flex-col rounded-2xl border bg-card p-7 shadow-sm ${
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
            <Button href={consultationHref}>Schedule a consultation</Button>
          </div>
        </Container>
      </section>

      {/* How the process works */}
      <section id="process" className="scroll-mt-24 bg-cream-deep/60 py-20">
        <Container>
          <SectionHeading
            eyebrow="The process"
            title="A collaborative process, step by step"
            description="Parents get clarity and structure. Students keep ownership of their voice and their choices. Here is how the work usually unfolds."
          />
          <ol className="relative mt-12 space-y-10 before:absolute before:left-[19px] before:top-2 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-line sm:before:block">
            {steps.map((step, i) => (
              <li key={step.title} className="relative sm:pl-16">
                <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-clay bg-cream font-serif text-lg font-semibold text-clay-dark sm:flex">
                  {i + 1}
                </div>
                <div className="rounded-2xl border border-line bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-clay-soft font-serif text-sm font-semibold text-clay-dark sm:hidden">
                      {i + 1}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-ink">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink-soft">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line bg-card p-8 text-center">
            <h3 className="font-serif text-2xl font-semibold text-ink">
              The essays stay the student's
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              We give strategy, feedback, and revision guidance. The writing, and
              the voice, stay the student's own. That allows a more comprehensive
              approach, and it keeps the work true to who they are.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Which level of support makes sense?"
        description="A short consultation usually answers that quickly. We'll look at your student's year, goals, and timeline together."
      />
    </>
  );
}
