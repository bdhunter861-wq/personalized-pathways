import Container from "./Container";
import { Button } from "./Button";
import { consultationHref } from "@/data/siteConfig";
import { scholarshipBands, scholarshipTotal, scholarshipStatement } from "@/data/results";

// Sequential single-hue ramp (light -> dark), ordered by award-size tier —
// brightened for legibility against the dark background.
const RAMP = ["#a9def2", "#6cc6ea", "#2fa4e0", "#0b6f9c"];

// Bold, prominent scholarships section: hero stat, value-prop callout, and a
// bar chart of award sizes. Bar length = count of awards (the one measure on
// the chart's axis); color is a sequential ramp keyed to the size tier.
export default function ScholarshipShowcase() {
  const max = Math.max(...scholarshipBands.map((b) => parseInt(b.count, 10)));

  return (
    <section className="bg-brand-deep relative overflow-hidden py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-green/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-[-6rem] h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left: headline, hero stat, value prop */}
          <div>
            <p className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
              <span aria-hidden="true" className="h-[3px] w-7 rounded-full bg-white/60" />
              Scholarships &amp; financial aid
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
              A track record worth talking about
            </h2>

            <div className="mt-6 flex items-end gap-3">
              <span className="font-serif text-6xl font-bold leading-none text-white sm:text-7xl">
                {scholarshipTotal}
              </span>
              <span className="pb-1.5 text-sm leading-snug text-cream-deep/85">
                earned by our students in scholarships
                <br />
                and merit-based financial aid
              </span>
            </div>

            <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-cream-deep/85">
              {scholarshipStatement}
            </p>

            <div className="mt-7 inline-flex max-w-lg items-start gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
              <span aria-hidden="true" className="mt-0.5 text-xl">
                💡
              </span>
              <p className="text-sm leading-relaxed text-white">
                For many families, a single scholarship more than covers the
                full cost of working with us, and that&rsquo;s before counting a
                calmer, less stressful application year.
              </p>
            </div>

            <div className="mt-7">
              <Button
                href={consultationHref}
                className="!bg-white !text-ink shadow-lg hover:!bg-cream-deep"
              >
                Schedule a consultation
              </Button>
            </div>
          </div>

          {/* Right: award-size chart */}
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/75">
              Awards by size
            </p>
            <ul className="mt-6 space-y-5">
              {scholarshipBands.map((b, i) => {
                const value = parseInt(b.count, 10);
                const pct = Math.max(16, (value / max) * 100);
                return (
                  <li key={b.range}>
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="font-medium text-white">{b.range}</span>
                      <span className="font-semibold text-white">{b.count}</span>
                    </div>
                    <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/15">
                      <div
                        className="h-3 rounded-full transition-all"
                        style={{ width: `${pct}%`, backgroundColor: RAMP[i % RAMP.length] }}
                      />
                    </div>
                    {b.note && (
                      <p className="mt-1.5 text-xs leading-relaxed text-cream-deep/70">
                        {b.note}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
