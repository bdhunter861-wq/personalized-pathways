import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ApplicationTypes from "@/components/ApplicationTypes";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/Button";
import { services, featuredServiceIds } from "@/data/services";
import { siteConfig, consultationHref } from "@/data/siteConfig";

// "What we help students do" — client-provided copy.
const whatWeHelp = [
  "Build a thoughtful academic and college planning strategy",
  "Choose courses, activities, experiences, and opportunities with more intention",
  "Plan a strong math and STEM course trajectory, including AP and advanced sequencing",
  "Develop a clear application strategy",
  "Identify the strongest themes in their interests, strengths, challenges, and accomplishments",
  "Develop essays that reflect the student's story most effectively",
  "Strengthen activity descriptions, honors entries, and supplemental responses",
  "Prepare for scholarships, honors colleges, and specialized programs",
  "Make strategic choices about what to emphasize, explain, or leave out",
  "Move through the process with less confusion and more confidence",
];

export default function HomePage() {
  const featured = featuredServiceIds
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        {/* Soft brand color wash */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-blue/10 blur-3xl" />
          <div className="absolute -right-32 top-24 h-[26rem] w-[26rem] rounded-full bg-brand-green/10 blur-3xl" />
        </div>

        <Container className="relative pt-10 pb-16 lg:pt-14 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left: copy */}
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-clay-dark backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                Personalized Pathways College Consulting
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
                College planning that turns{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-clay-dark">experience</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 z-0 h-3 rounded bg-clay-soft"
                  />
                </span>{" "}
                into{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-clay-dark">strategy</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 z-0 h-3 rounded bg-clay-soft"
                  />
                </span>
                .
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Personalized Pathways helps students turn their experiences,
                strengths, interests, challenges, and accomplishments into
                thoughtful college planning and a clear, compelling application
                strategy.
              </p>

              {/* Experience → strategy connector (the differentiator) */}
              <div className="mt-7 flex flex-wrap items-center gap-2 text-sm font-medium">
                <span className="rounded-full bg-sage-soft px-3 py-1.5 text-sage">
                  20+ years in education and psychology
                </span>
                <span aria-hidden="true" className="text-lg text-ink-muted">
                  →
                </span>
                <span className="rounded-full bg-clay-soft px-3 py-1.5 text-clay-dark">
                  a clear, individual college strategy
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={consultationHref}>Schedule a consultation</Button>
                <Button href="/services" variant="secondary">
                  View services
                </Button>
              </div>

              {/* Two founders, visible from the first section */}
              <div className="mt-8 grid gap-4 border-t border-line pt-6 text-sm sm:grid-cols-2">
                <p>
                  <span className="font-semibold text-ink">Dr. Michelle Anthony</span>
                  <br />
                  <span className="text-ink-soft">
                    Developmental psychologist and gifted-education specialist
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-ink">Meaghan Elliott</span>
                  <br />
                  <span className="text-ink-soft">
                    Veteran math educator and former tutoring-business owner
                  </span>
                </p>
              </div>
            </div>

            {/* Right: what we help students apply to (hero visual) */}
            <div className="lg:pl-4">
              <div className="rounded-3xl border border-line bg-card/70 p-6 shadow-sm backdrop-blur">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-clay-dark">
                  We help students apply to
                </p>
                <ApplicationTypes variant="card" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Experience → strategy: a clear 3-step visual moment */}
      <section className="border-b border-line bg-cream-deep/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay-dark">
              How it works
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-ink sm:text-3xl">
              From experience to strategy, in three steps
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-3 md:gap-4">
            {[
              {
                label: "Discover",
                body: "We get to know the student: strengths, interests, goals, and the decisions in front of them.",
                bg: "bg-clay",
                icon: (
                  <>
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                  </>
                ),
              },
              {
                label: "Strategize",
                body: "We turn that raw material into a clear plan and a strong, individual application strategy.",
                bg: "bg-sage",
                icon: (
                  <>
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="18" cy="5" r="2" />
                    <path d="M8 19h6a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h4" />
                  </>
                ),
              },
              {
                label: "Apply",
                body: "We guide the student through applications, essays, and deadlines with more clarity and less stress.",
                bg: "bg-clay-dark",
                icon: (
                  <>
                    <path d="M22 2 11 13" />
                    <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
                  </>
                ),
              },
            ].map((step, i) => (
              <li key={step.label} className="relative flex flex-col items-center text-center">
                {/* connecting arrow on desktop */}
                {i < 2 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-[-14px] top-8 hidden text-2xl text-ink-muted md:block"
                  >
                    →
                  </span>
                )}
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.bg} text-white shadow-sm`}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {step.icon}
                  </svg>
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                  {step.label}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Calm intro for families */}
      <section className="bg-cream-deep/60 py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              For younger students, that may mean choosing courses, building
              meaningful experiences, exploring interests, or thinking ahead with
              intention. For juniors and seniors, it is more directed support in
              shaping a clear, compelling application strategy.
            </p>
            <p>
              Wherever your child is in the process, we help students understand
              what they have done, recognize what makes their story distinctive,
              and present their strongest case in a way that is strategic,
              authentic, and true to who they are.
            </p>
            <p className="font-serif text-xl text-ink">
              Our work is individualized, practical, and grounded in an extensive
              understanding of how students grow, learn, lead, and communicate
              who they are.
            </p>
          </div>
        </Container>
      </section>

      {/* What we help students do */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="What we help students do"
            description="Practical, individualized support at every stage, from first choices to final applications."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {whatWeHelp.map((item) => (
              <li
                key={item}
                className="lift flex items-start gap-3 rounded-xl border border-line bg-card px-5 py-4 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-sage-soft text-sm font-bold text-sage"
                >
                  ✓
                </span>
                <span className="leading-relaxed text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Support that fits the family (services preview) */}
      <section className="bg-cream-deep/60 py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Support that fits the family"
            description="A few of the ways families work with Personalized Pathways. Full details are on the services page."
          />
          {!siteConfig.showPricing && (
            <p className="mt-6 text-sm text-ink-muted">{siteConfig.pricingNote}</p>
          )}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10">
            <Button href="/services" variant="secondary">
              See all services
            </Button>
          </div>

          {/* Why families work with us (now nested under Support that fits the family) */}
          <div className="mt-16 grid gap-12 border-t border-line pt-16 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Why families work with us"
                title="The right college for them, and a calmer year for you"
              />
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  We help students get into the right college for them, whether
                  that is a highly selective university, a well-matched state
                  school, or anywhere in between.
                </p>
                <p>
                  We help students see what is strongest in their own story,
                  recognizing connections they may not have noticed and making
                  strategic choices about how to present their academic path,
                  activities, unusual interests, family responsibilities, creative
                  outlets, challenges, goals, and accomplishments.
                </p>
                <p>
                  For many families, even one scholarship offsets the full cost of
                  working with us. Just as often, the bigger relief is a calmer
                  home and one less overwhelming process to manage during an
                  already stressful year.
                </p>
              </div>
            </div>

            {/* Why our guidance is different */}
            <div className="lift rounded-2xl border border-clay/30 bg-card p-8 shadow-sm ring-1 ring-clay/10">
              <div className="brand-rule mb-5 w-16 rounded-full" />
              <h3 className="font-serif text-2xl font-semibold text-ink">
                Why our guidance is different
              </h3>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  Personalized Pathways is led by experienced educators who
                  understand student development, writing, school systems, family
                  dynamics, and the strategy behind strong applications.
                </p>
                <p>
                  We bring together developmental insight, practical school
                  experience, and close attention to each student's individual
                  story. That combination allows us to help students make stronger
                  choices, turning their experiences into a clear and compelling
                  path forward.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About preview */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
            {/* TODO — replace this placeholder with a photo of the team. */}
            <div className="aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-line bg-clay-soft">
              <div className="flex h-full items-center justify-center p-6 text-center text-sm text-clay-dark">
                Photo of the Personalized Pathways team
                <br />
                (coming soon)
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="About"
                title="A more personal path through college admissions"
                description="Personalized Pathways College Consulting was created for families who want college planning to feel more individualized, more strategic, and more connected to their specific child."
              />
              <div className="mt-6">
                <Button href="/about" variant="secondary">
                  Meet the team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Start with a conversation"
        description="Whether your student is just beginning to think about the path ahead or already facing application deadlines, we can help you understand the next steps and decide what kind of support would be most useful."
      />
    </>
  );
}
