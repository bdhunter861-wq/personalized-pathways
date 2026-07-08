import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SchoolLogo from "@/components/SchoolLogo";
import Backdrop from "@/components/Backdrop";
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

// Compact, wrapping chips so long lists never leave a sparse partial grid row.
function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2.5">
      {items.map((name) => (
        <li
          key={name}
          className="rounded-full border border-line bg-card px-3.5 py-1.5 text-sm font-medium text-ink shadow-sm"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

// School list as badge cards with real logos (monogram fallback).
function SchoolBadges({ items }: { items: string[] }) {
  const tones = [
    "bg-clay-soft text-clay-dark",
    "bg-sage-soft text-sage",
    "bg-cream-deep text-ink",
  ];
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((name, i) => (
        <li
          key={name}
          className="lift flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-3 shadow-sm"
        >
          <SchoolLogo
            name={name}
            domain={schoolDomains[name]}
            tone={tones[i % tones.length]}
          />
          <span className="text-sm font-medium leading-snug text-ink">{name}</span>
        </li>
      ))}
    </ul>
  );
}

// Section wrapper. Titles use sentence case (see spec #31).
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
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay-dark">
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
  return (
    <>
      <PageHero
        eyebrow="Results & testimonials"
        title="Where our students have been admitted"
        description="A look at the specialized programs, colleges, and medical and BS/MD pathways students have earned admission to while working with Personalized Pathways."
      />

      {/* Stats band */}
      <section className="border-b border-line bg-brand-deep py-12">
        <Container>
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

      {/* Testimonials */}
      <section className="py-16">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay-dark">
            In their words
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-ink sm:text-3xl">
            From students and families
          </h2>
          {testimonials.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="rounded-2xl border border-line bg-card p-7 shadow-sm"
                >
                  <blockquote className="font-serif text-lg leading-relaxed text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-clay-dark">
                    {t.attribution}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="mt-8 max-w-2xl rounded-2xl border border-line bg-cream-deep/60 p-8">
              {/* TODO — add approved testimonials to data/results.ts. When volume
                  grows, group by category (admissions / scholarships / honors /
                  experience) and show a curated set with a "show more" control
                  rather than one long scroll (spec #34). */}
              <p className="font-serif text-xl font-semibold text-ink">
                Testimonials coming soon.
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                We're gathering notes from students and families as they finish
                their applications. Approved quotes will appear here.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Specialized / performing arts / athletics — placed first (spec #31) */}
      <ResultsSection
        eyebrow="Specialized"
        title="Examples of specialized program placements"
        description="Distinctive placements in competitive arts, music, and athletics programs."
        tint
      >
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {specializedPlacements.map((p) => (
            <li
              key={`${p.school}-${p.field}`}
              className="flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm shadow-sm"
            >
              <span className="font-medium text-ink">{p.school}</span>
              <span className="rounded-full bg-sage-soft px-2 py-0.5 text-xs font-semibold text-sage">
                {p.field}
              </span>
            </li>
          ))}
        </ul>
      </ResultsSection>

      {/* Medical school */}
      <ResultsSection
        eyebrow="Medical school"
        title="Medical school admissions"
        description="Students supported through medical school applications have been admitted to programs including these."
      >
        <Chips items={medSchools} />
      </ResultsSection>

      {/* BS/MD */}
      <ResultsSection
        eyebrow="Combined degree"
        title="BS/MD program admissions"
        description="Competitive combined-degree programs students have earned admission to."
        tint
      >
        <Chips items={bsMdPrograms} />
      </ResultsSection>

      {/* Honors colleges */}
      <ResultsSection
        eyebrow="Honors"
        title="Honors college admissions"
        description="Admissions to selective honors colleges, which carry their own applications and requirements."
      >
        <Chips items={honorsColleges} />
      </ResultsSection>

      {/* Competitive majors */}
      <ResultsSection
        eyebrow="Competitive majors"
        title="Highly competitive programs and majors"
        description="Admissions to selective engineering, business, and computer science programs, which are often harder to get into than the university overall, at schools including these."
        tint
      >
        <Chips items={competitiveMajorSchools} />
      </ResultsSection>

      {/* General college list */}
      <ResultsSection
        eyebrow="Admissions"
        title="Colleges and universities"
        description="A sample of the schools students have been admitted to."
      >
        <SchoolBadges items={colleges} />
      </ResultsSection>

      {/* Scholarships */}
      <ResultsSection
        eyebrow="Scholarships"
        title="Scholarships and financial aid"
        tint
      >
        {/* DRAFT figures — see data/results.ts; needs client sign-off on the
            "$2 million+" aggregate before go-live. */}
        <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">
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
