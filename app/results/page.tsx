import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SchoolLogo from "@/components/SchoolLogo";
import Backdrop from "@/components/Backdrop";
import TestimonialSlider from "@/components/TestimonialSlider";
import {
  colleges,
  specializedPlacements,
  medSchools,
  bsMdPrograms,
  honorsColleges,
  competitiveMajorSchools,
  scholarshipStatement,
  schoolDomains,
  testimonials,
} from "@/data/results";

export const metadata: Metadata = {
  title: "Results & Testimonials",
  description:
    "Colleges, specialized and performing-arts programs, medical schools, BS/MD programs, honors colleges, and scholarships earned by students who worked with Personalized Pathways.",
};

type CardItem = { name: string; domain?: string; tag?: string };

const TONES = [
  "bg-clay-soft text-clay-dark",
  "bg-sage-soft text-sage",
  "bg-cream-deep text-ink",
];

// Prominent card for the feature sections (arts, honors, medical, BS/MD, etc.):
// a large logo, the school name, and a program tag. Links to the school site.
function FeatureGrid({ items }: { items: CardItem[] }) {
  return (
    <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => {
        const inner = (
          <>
            <SchoolLogo
              name={it.name}
              domain={it.domain}
              tone={TONES[i % TONES.length]}
              size="lg"
            />
            <div>
              <p className="font-serif text-lg font-semibold leading-snug text-ink">
                {it.name}
              </p>
              {it.tag && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-clay-dark">
                  {it.tag}
                </p>
              )}
            </div>
          </>
        );
        const base =
          "flex h-full flex-col items-center gap-4 rounded-2xl border border-line bg-card p-6 text-center shadow-sm";
        return (
          <li key={`${it.name}-${it.tag ?? ""}`}>
            {it.domain ? (
              <a
                href={`https://${it.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`lift group ${base} transition-colors hover:border-clay hover:shadow-md`}
              >
                <div className="brand-rule h-1 w-10 rounded-full opacity-60 transition group-hover:w-16 group-hover:opacity-100" />
                {inner}
                <span className="mt-auto text-xs font-medium text-ink-muted">
                  Visit site ↗
                </span>
              </a>
            ) : (
              <div className={base}>
                <div className="brand-rule h-1 w-10 rounded-full opacity-60" />
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

// Compact row cards for the long Colleges & universities list (logo + name).
function CollegeGrid({ items }: { items: string[] }) {
  return (
    <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((name, i) => {
        const domain = schoolDomains[name];
        const inner = (
          <>
            <SchoolLogo name={name} domain={domain} tone={TONES[i % TONES.length]} />
            <span className="text-sm font-medium leading-snug text-ink">{name}</span>
          </>
        );
        return (
          <li key={name}>
            {domain ? (
              <a
                href={`https://${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="lift flex h-full items-center gap-3 rounded-xl border border-line bg-card px-4 py-3 shadow-sm transition-colors hover:border-clay hover:bg-clay-soft/20"
              >
                {inner}
                <span aria-hidden="true" className="ml-auto text-ink-muted">
                  ↗
                </span>
              </a>
            ) : (
              <div className="flex h-full items-center gap-3 rounded-xl border border-line bg-card px-4 py-3 shadow-sm">
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

// Section wrapper. Titles use sentence case.
function ResultsSection({
  eyebrow,
  title,
  description,
  children,
  tint = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  tint?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden py-16 ${tint ? "bg-cream-deep/50" : ""}`}
    >
      <Backdrop dots={tint} />
      <Container className="relative">
        <p className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-clay-dark">
          <span aria-hidden="true" className="brand-rule h-[3px] w-7 rounded-full" />
          {eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-2xl font-semibold text-ink sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}

export default function ResultsPage() {
  // Build card items for the feature sections.
  const artsItems: CardItem[] = specializedPlacements.map((p) => ({
    name: p.school,
    domain: schoolDomains[p.school],
    tag: p.field,
  }));
  const honorsItems: CardItem[] = honorsColleges.map((h) => ({
    name: h.school,
    domain: schoolDomains[h.school],
    tag: h.program,
  }));
  const competitiveItems: CardItem[] = competitiveMajorSchools.map((name) => ({
    name,
    domain: schoolDomains[name],
    tag: "Selective program",
  }));
  const medItems: CardItem[] = medSchools.map((name) => ({
    name,
    domain: schoolDomains[name],
    tag: "Medical school",
  }));
  const bsMdItems: CardItem[] = bsMdPrograms.map((name) => ({
    name,
    domain: schoolDomains[name],
    tag: "BS/MD program",
  }));

  return (
    <>
      <PageHero
        eyebrow="Results & testimonials"
        title="Where our students have been admitted"
        description="A look at the specialized programs, honors colleges, medical and BS/MD pathways, scholarships, and the full breadth of colleges students have earned admission to while working with Personalized Pathways."
      />

      {/* Stats band */}
      <section className="relative overflow-hidden border-b border-line bg-brand-deep py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-green/20 blur-3xl"
        />
        <Container className="relative">
          <dl className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
            {[
              { n: "50+", l: "College & university acceptances" },
              { n: `${bsMdPrograms.length}`, l: "BS/MD program admissions" },
              { n: "$2M+", l: "In scholarships & merit aid" },
              { n: `${medSchools.length}`, l: "Medical school admissions" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-4xl font-semibold text-white">
                  {s.n}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-cream-deep/80">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Testimonials — near the top */}
      <ResultsSection
        eyebrow="In their words"
        title="What students and families say"
        description="Real experiences from the students and parents we've worked with. Use the arrows to move through them."
        tint
      >
        {testimonials.length > 0 ? (
          <TestimonialSlider items={testimonials} />
        ) : (
          <div className="mt-8 max-w-2xl rounded-2xl border border-line bg-card p-8 shadow-sm">
            <p className="font-serif text-xl font-semibold text-ink">
              Testimonials coming soon.
            </p>
          </div>
        )}
      </ResultsSection>

      {/* Distinctive achievements */}
      <ResultsSection
        eyebrow="Specialized"
        title="Performing arts, athletics & specialized programs"
        description="Distinctive placements in competitive arts, music, and athletics programs."
      >
        <FeatureGrid items={artsItems} />
      </ResultsSection>

      <ResultsSection
        eyebrow="Honors"
        title="Honors college admissions"
        description="Selective honors colleges and programs, which carry their own applications and requirements."
        tint
      >
        <FeatureGrid items={honorsItems} />
      </ResultsSection>

      <ResultsSection
        eyebrow="Competitive majors"
        title="Highly competitive programs and majors"
        description="Admissions to selective engineering, business, and computer science programs, which are often harder to get into than the university overall."
      >
        <FeatureGrid items={competitiveItems} />
      </ResultsSection>

      <ResultsSection
        eyebrow="Medical school"
        title="Medical school admissions"
        description="Students supported through medical school applications have been admitted to programs including these."
        tint
      >
        <FeatureGrid items={medItems} />
      </ResultsSection>

      <ResultsSection
        eyebrow="Combined degree"
        title="BS/MD program admissions"
        description="Competitive combined-degree programs students have earned admission to."
      >
        <FeatureGrid items={bsMdItems} />
      </ResultsSection>

      {/* Breadth: the full college list */}
      <ResultsSection
        eyebrow="Admissions"
        title="Colleges and universities"
        description="A sample of the many schools students have been admitted to. Select any school to visit its site."
        tint
      >
        <CollegeGrid items={colleges} />
      </ResultsSection>

      {/* Scholarships */}
      <ResultsSection eyebrow="Scholarships" title="Scholarships and financial aid">
        {/* DRAFT figures — see data/results.ts; needs client sign-off on the
            "$2 million+" aggregate before go-live. */}
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
          {scholarshipStatement}
        </p>
      </ResultsSection>

      {/* Disclaimer */}
      <section className="py-10">
        <Container>
          <p className="max-w-3xl text-sm leading-relaxed text-ink-muted">
            Admissions, scholarship, and financial aid outcomes vary by student
            and are never guaranteed. These results reflect past students and do
            not predict future outcomes.
          </p>
        </Container>
      </section>

      <CTASection
        title="Want results like these for your student?"
        description="Every outcome starts with a plan. A consultation is the best way to see what that could look like for your family."
      />
    </>
  );
}
