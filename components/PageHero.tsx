import { ReactNode } from "react";
import Container from "./Container";

// Simple, consistent header band for inner pages.
export default function PageHero({
  eyebrow,
  title,
  description,
  motif = false,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  // When true, render a subtle dotted "path" graphic on the right, for pages
  // whose theme is a path/journey (e.g. About).
  motif?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream-deep/50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-green/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl"
      />
      {motif && (
        <svg
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-2/5 opacity-80 lg:block"
          viewBox="0 0 320 240"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 210 C120 210 120 120 200 120 S300 40 320 30"
            stroke="var(--color-brand-blue)"
            strokeWidth="2.5"
            strokeDasharray="2 12"
            strokeLinecap="round"
            opacity="0.55"
          />
          {[
            [20, 210],
            [200, 120],
            [304, 34],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="7"
              fill="var(--color-card)"
              stroke={i === 1 ? "var(--color-brand-green)" : "var(--color-brand-blue)"}
              strokeWidth="3"
            />
          ))}
        </svg>
      )}
      <Container className="relative py-14 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-clay-dark backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
