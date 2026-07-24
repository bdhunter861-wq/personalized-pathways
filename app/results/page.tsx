import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SchoolLogo from "@/components/SchoolLogo";
import Backdrop from "@/components/Backdrop";
import TestimonialSlider from "@/components/TestimonialSlider";
import ScholarshipShowcase from "@/components/ScholarshipShowcase";
import {
  colleges,
  honorsColleges,
  competitiveCategories,
  schoolDomains,
  testimonials,
  moreTestimonials,
  type CompetitiveItem,
} from "@/data/results";

export const metadata: Metadata = {
  title: "Results & Testimonials",
  description:
    "Scholarships, BS/MD and medical school admissions, competitive majors, athletics, performing arts, honors colleges, and the colleges students have earned admission to while working with Personalized Pathways.",
};

const TONES = [
  "bg-clay-soft text-clay-dark",
  "bg-sage-soft text-sage",
  "bg-cream-deep text-ink",
];

// Compact row card: logo, school name, and program tag. Links to the school
// site. Kept short so a full section doesn't run long on the page.
function FeatureGrid({ items }: { items: CompetitiveItem[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => {
        const inner = (
          <>
            <SchoolLogo
              name={it.name}
              domain={it.domain}
              tone={TONES[i % TONES.length]}
            />
            <div className="min-w-0">
              <p className="font-serif text-sm font-semibold leading-snug text-ink">
                {it.name}
              </p>
              {it.tag && (
                <p className="mt-0.5 text-xs font-medium leading-snug text-clay-dark">
                  {it.tag}
                </p>
              )}
            </div>
          </>
        );
        const base =
          "flex h-full items-center gap-3 rounded-xl border border-line bg-card px-3.5 py-3 text-left shadow-sm";
        return (
          <li key={`${it.name}-${it.tag ?? ""}`}>
            {it.domain ? (
              <a
                href={`https://${it.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`lift group ${base} transition-colors hover:border-clay hover:shadow-md`}
              >
                {inner}
                <span aria-hidden="true" className="ml-auto shrink-0 text-ink-muted">
                  ↗
                </span>
              </a>
            ) : (
              <div className={base}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

// A category group within the combined competitive-programs section: a
// colored label, then its feature grid.
function CategoryGroup({
  id,
  label,
  description,
  accent,
  items,
}: {
  id?: string;
  label: string;
  description: string;
  accent: "blue" | "green";
  items: CompetitiveItem[];
}) {
  if (items.length === 0) return null;
  const dot = accent === "blue" ? "bg-brand-blue" : "bg-brand-green";
  const chip =
    accent === "blue"
      ? "bg-clay-soft text-clay-dark"
      : "bg-sage-soft text-sage";
  return (
    <div id={id} className="mt-8 scroll-mt-28 first:mt-0">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className={`h-3 w-3 rounded-full ${dot}`} />
        <h3 className={`inline-flex rounded-full px-3 py-1 font-serif text-base font-semibold ${chip}`}>
          {label}
        </h3>
      </div>
      <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-soft">
        {description}
      </p>
      <div className="mt-4">
        <FeatureGrid items={items} />
      </div>
    </div>
  );
}

// Compact row cards for the long Colleges & universities list (logo + name).
function CollegeGrid({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
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
                className="lift flex h-full items-center gap-3 rounded-xl border border-line bg-card px-3.5 py-2.5 shadow-sm transition-colors hover:border-clay hover:bg-clay-soft/20"
              >
                {inner}
                <span aria-hidden="true" className="ml-auto text-ink-muted">
                  ↗
                </span>
              </a>
            ) : (
              <div className="flex h-full items-center gap-3 rounded-xl border border-line bg-card px-3.5 py-2.5 shadow-sm">
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
  id,
  eyebrow,
  title,
  description,
  children,
  tint = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  tint?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-28 overflow-hidden py-12 ${tint ? "bg-cream-deep/50" : ""}`}
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
  const honorsItems: CompetitiveItem[] = honorsColleges.map((h) => ({
    name: h.school,
    domain: schoolDomains[h.school],
    tag: h.program,
  }));

  const bsMdMedicalCount =
    competitiveCategories.find((c) => c.key === "bsmd-medical")?.items.length ?? 0;

  return (
    <>
      <PageHero
        eyebrow="Results & testimonials"
        title="Where our students have been admitted"
        description="A look at scholarships, specialized and competitive programs, honors colleges, and the full breadth of colleges students have earned admission to while working with Personalized Pathways."
      />

      {/* Stats band — each stat jumps to the section it summarizes */}
      <section className="relative overflow-hidden border-b border-line bg-brand-deep py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-green/20 blur-3xl"
        />
        <Container className="relative">
          <div className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
            {[
              { n: "50+", l: "College & university acceptances", href: "#colleges" },
              { n: "$2M+", l: "In scholarships & merit aid", href: "#scholarships" },
              {
                n: `${bsMdMedicalCount}+`,
                l: "BS/MD & medical school admissions",
                href: "#bsmd-medical",
              },
              { n: `${honorsItems.length}+`, l: "Honors college admissions", href: "#honors" },
            ].map((s) => (
              <a
                key={s.l}
                href={s.href}
                className="group -m-2 block rounded-2xl p-2 transition-colors hover:bg-white/10 focus-visible:bg-white/10"
              >
                <p className="font-serif text-4xl font-semibold text-white transition-transform group-hover:-translate-y-0.5">
                  {s.n}
                </p>
                <p className="mt-1 text-sm leading-snug text-cream-deep/80 group-hover:text-white">
                  {s.l}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Scholarships — elevated, right after the headline stats */}
      <ScholarshipShowcase />

      {/* Testimonials */}
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

        {moreTestimonials.length > 0 && (
          <div className="mx-auto mt-14 max-w-3xl">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-clay-dark">
              More from our families
            </p>
            <ul className="mt-6 space-y-4">
              {moreTestimonials.map((t, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-line bg-card p-5 shadow-sm"
                >
                  <p className="text-sm italic leading-relaxed text-ink-soft">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-2 text-sm font-semibold text-clay-dark">
                    — {t.attribution}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ResultsSection>

      {/* Combined, categorized competitive-programs section */}
      <ResultsSection
        eyebrow="Competitive programs"
        title="Highly competitive programs and majors"
        description="From combined-degree medical pathways to selective majors, athletics, and the performing arts, each of these carries its own application, and its own bar to clear."
      >
        {competitiveCategories.map((cat) => (
          <CategoryGroup
            key={cat.key}
            id={cat.key}
            label={cat.label}
            description={cat.description}
            accent={cat.accent}
            items={cat.items}
          />
        ))}
      </ResultsSection>

      <ResultsSection
        id="honors"
        eyebrow="Honors"
        title="Honors college admissions"
        description="Selective honors colleges and programs, which carry their own applications and requirements."
        tint
      >
        <div className="mt-4">
          <FeatureGrid items={honorsItems} />
        </div>
      </ResultsSection>

      {/* Breadth: the full college list */}
      <ResultsSection
        id="colleges"
        eyebrow="Admissions"
        title="Colleges and universities"
        description="A sample of the many schools students have been admitted to. Select any school to visit its site."
      >
        <CollegeGrid items={colleges} />
      </ResultsSection>

      {/* Disclaimer */}
      <section className="py-8">
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
