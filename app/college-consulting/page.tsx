import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "College Consulting",
  description:
    "Strategic college admissions consulting for seniors, juniors, and younger high school students, including honors colleges, scholarships, special programs, and final decisions.",
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

// The 5-step process (merged in from the former standalone Process page).
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

export default function CollegeConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="College Consulting"
        title="Strategy and support, built around your student"
        description="Personalized Pathways helps students make stronger choices, tell their story well, and complete applications with less stress and more strategy."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Who this is for"
            title="Support at different stages"
            description="The right help depends on where a student is. Here is who tends to work with Personalized Pathways."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-line bg-card p-7 shadow-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-deep/60 py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="The approach"
              title="Specific and authentic, not packaged"
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                A lot of application advice pushes students to become a version
                of what they think a school wants. That rarely reads as genuine,
                and it is exhausting to keep up. The work here goes the other
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

      {/* How the process works (merged from the former Process page) */}
      <section id="process" className="scroll-mt-24 py-20">
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

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line bg-cream-deep/60 p-8 text-center">
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
        title="Not sure where your student fits?"
        description="A consultation is the easiest way to find out. We'll talk through where things stand and what kind of support makes sense."
      />
    </>
  );
}
