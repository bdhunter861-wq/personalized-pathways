import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Personalized Pathways College Consulting was created for families who want college planning to feel more individualized, more strategic, and more connected to their specific child.",
};

// Dr. Anthony's credentials, from her CV. Edit here.
const education = [
  "Ph.D., Developmental Psychology — University of California, Berkeley",
  "M.A., Child Studies — Tufts University",
  "B.A. with Honors, Educational Studies — Brown University",
  "Certificate, ASL and Deaf Studies — Northeastern University",
];

// Licensure & certifications. (Lindamood-Bell LiPS® confirmed by the client.)
const licensure = [
  "Colorado Professional Teacher License",
  "Gifted & Talented Specialist (P–12)",
  "Elementary Education (K–6)",
  "Early Childhood Education (0–8)",
  "Special Education Generalist (5–21)",
  "Multilingual Education Level 2 (ELA-E)",
  "Lindamood-Bell LiPS®-trained reading interventionist",
];

// Selected recognition — accurate credits (client-confirmed, see spec 0.2/#33).
const recognition = [
  "Developmental psychologist, learning specialist, and gifted and talented teacher",
  "Co-author of Little Girls Can Be Mean: Four Steps to Bully-Proof Girls in the Early Grades",
  "Consultant to Scholastic, authoring numerous articles for their website",
  "Columnist for Scholastic Parent & Child Magazine, with more than 100 published columns",
  "Consultant to the American Academy of Pediatrics",
  "Developer of the KWEST Arts-Integrated Early Learning Platform, in partnership with the Settlement School of Music",
  "Experience teaching from preschool through graduate school",
];

// Meaghan Elliott's credentials, from her resume. Edit here.
const meaghanEducation = [
  "B.S., International Business and French, Cum Laude — Bradley University",
  "Alternative Teacher Licensure — Metropolitan State University of Denver",
];

const meaghanExperience = [
  "Math Content Lead and Math Intervention Teacher, Denver Public Schools (since 2013)",
  "Founder, Meaghan Elliott Math Tutoring — seven years, elementary math through AP Calculus",
  "Former 4th-grade classroom teacher",
  "Distinguished teacher ratings for more than 10 years with Denver Public Schools",
];

function CredentialList({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: "clay" | "sage";
}) {
  return (
    <div className="rounded-2xl border border-line bg-card p-6 shadow-sm">
      <h3 className="font-serif text-lg font-semibold text-ink">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft"
          >
            <span
              aria-hidden="true"
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                accent === "sage" ? "bg-sage" : "bg-clay"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        motif
        eyebrow="About"
        title="A more personal path through college admissions"
        description="Personalized Pathways College Consulting was created for families who want college planning to feel more individualized, more strategic, and more connected to their specific child."
      />

      {/* About Personalized Pathways */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              We work with students at different stages of the process, from
              younger students beginning to think about courses, interests, and
              meaningful experiences to juniors and seniors shaping applications,
              essays, honors program materials, specialized program applications,
              and scholarship submissions.
            </p>
            <p>
              We know that students are developing people with strengths,
              contradictions, worries, ambitions, talents, questions, and stories
              still taking shape. Our work helps students and families make sense
              of those pieces and turn them into a clearer path forward.
            </p>
            <p>
              We help students make concrete choices about which opportunities to
              pursue, what to emphasize, how to connect their experiences, how to
              communicate their growth, and how to present their strongest case
              for the opportunities they are pursuing.
            </p>
          </div>
        </Container>
      </section>

      {/* Meet the team */}
      <section className="border-t border-line bg-cream-deep/50 py-20">
        <Container>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-clay-dark">
            Meet the team
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-serif text-3xl font-semibold text-ink">
            Two educators, one individualized approach
          </h2>

          {/* Dr. Anthony */}
          <div className="mt-14 grid gap-12 lg:grid-cols-[320px_1fr]">
            <div>
              {/* TODO — replace this placeholder with Dr. Anthony's professional photo. */}
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-clay-soft">
                <div className="flex h-full items-center justify-center p-6 text-center text-sm text-clay-dark">
                  Professional photo of
                  <br />
                  Dr. Michelle Anthony
                  <br />
                  (coming soon)
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay-dark">
                Meet Dr. Anthony
              </p>
              <h3 className="font-serif text-3xl font-semibold text-ink">
                Michelle Anthony, M.A., Ph.D.
              </h3>
              <p className="mt-1 text-ink-muted">
                Developmental psychologist, educator, author, and gifted and
                talented teacher
              </p>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Dr. Anthony helps students turn their experiences, strengths,
                  interests, challenges, and accomplishments into a clear,
                  compelling college application strategy designed to help them
                  present their strongest case for admissions, honors programs,
                  specialized programs such as BS/MD, and scholarships.
                </p>
                <p>
                  A developmental psychologist, educator, author, learning
                  specialist, and gifted and talented teacher, Dr. Anthony brings
                  extensive expertise in student development, writing, school
                  systems, gifted and twice-exceptional learners, and family
                  guidance. She is especially strong at helping students see
                  connections they may not recognize on their own, identify their
                  strongest application lens, and shape essays and activities with
                  purpose.
                </p>
                <p>
                  Going beyond being an essay editor, Dr. Anthony helps students
                  understand what their experiences reveal, how their strengths
                  fit together, and how to communicate the strongest version of
                  their own story in a way that is thoughtful, strategic, and true
                  to who they are.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <CredentialList title="Education" items={education} accent="clay" />
                <CredentialList
                  title="Licensure & Certifications"
                  items={licensure}
                  accent="sage"
                />
              </div>
              <div className="mt-6">
                <CredentialList
                  title="Selected recognition"
                  items={recognition}
                  accent="clay"
                />
              </div>
            </div>
          </div>

          {/* Meaghan */}
          <div className="mt-16 grid gap-12 border-t border-line pt-16 lg:grid-cols-[320px_1fr]">
            <div>
              {/* TODO — replace this placeholder with Meaghan's professional photo. */}
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-sage-soft">
                <div className="flex h-full items-center justify-center p-6 text-center text-sm text-sage">
                  Professional photo of
                  <br />
                  Meaghan
                  <br />
                  (coming soon)
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay-dark">
                Meet Meaghan
              </p>
              <h3 className="font-serif text-3xl font-semibold text-ink">
                Meaghan Elliott, B.S.
              </h3>
              <p className="mt-1 text-ink-muted">
                Veteran math educator and college consultant
              </p>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Meaghan Elliott has spent more than two decades in Denver Public
                  Schools classrooms, most recently as Math Content Lead at Holm
                  Elementary, where she has developed schoolwide math instruction
                  for six years.
                </p>
                <p>
                  Before that, she founded and ran her own private tutoring
                  business for seven years, working directly with families from
                  elementary math through AP Calculus. That mix of classroom depth
                  and one-on-one work with families shapes how she supports
                  students now: practical, organized, and focused on real fit.
                </p>
                <p>
                  At Personalized Pathways, Meaghan helps students build balanced
                  college lists and clear application timelines, and she brings
                  particular strength to math and STEM course planning. She holds a
                  B.S. in International Business and French from Bradley University
                  and completed her teacher licensure through Metropolitan State
                  University of Denver.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <CredentialList
                  title="Education"
                  items={meaghanEducation}
                  accent="sage"
                />
                <CredentialList
                  title="Selected experience"
                  items={meaghanExperience}
                  accent="clay"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our work together */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay-dark">
              Our work together
            </p>
            <p className="font-serif text-2xl leading-relaxed text-ink sm:text-[1.75rem]">
              Together, we help students and families bring clarity to a process
              that can feel scattered, stressful, and high-pressure. Our goal is
              to help students make intentional choices, communicate with
              confidence, and build applications that reflect who they are and
              where they are ready to grow.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a question for us?"
        description="The best first step is a short conversation. Reach out and we'll find a time to talk."
      />
    </>
  );
}
