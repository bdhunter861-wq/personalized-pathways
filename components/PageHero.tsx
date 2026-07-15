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
        className="bg-dots-brand pointer-events-none absolute inset-0 opacity-40"
      />
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
          {/* Milestones along the path: discover, plan, arrive — not blank
              dots, so the graphic reads as a journey rather than decoration. */}
          {[
            { x: 20, y: 210, color: "var(--color-brand-blue)", icon: "pin" as const },
            { x: 200, y: 120, color: "var(--color-brand-green)", icon: "book" as const },
            { x: 304, y: 34, color: "var(--color-brand-blue)", icon: "cap" as const },
          ].map((m, i) => (
            <g key={i} transform={`translate(${m.x} ${m.y})`}>
              <circle r="11" fill="var(--color-card)" stroke={m.color} strokeWidth="2.5" />
              {m.icon === "pin" && (
                <path
                  d="M0,-5.5 C2.5,-5.5 4.5,-3.5 4.5,-1 C4.5,2 0,6 0,6 C0,6 -4.5,2 -4.5,-1 C-4.5,-3.5 -2.5,-5.5 0,-5.5 Z M0,-2.7 a1.4,1.4 0 1 0 0.01,0 Z"
                  fill={m.color}
                />
              )}
              {m.icon === "book" && (
                <path
                  d="M-5,-2.6 C-5,-3.2 -2.5,-3.6 0,-2.8 C2.5,-3.6 5,-3.2 5,-2.6 L5,3 C5,3.6 2.5,3.2 0,4 C-2.5,3.2 -5,3.6 -5,3 Z M0,-2.8 L0,4"
                  fill="none"
                  stroke={m.color}
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              )}
              {m.icon === "cap" && (
                <path
                  d="M0,-5 L8,-1 L0,3 L-8,-1 Z M-4.5,0.8 L-4.5,4.2 C-4.5,5.4 4.5,5.4 4.5,4.2 L4.5,0.8"
                  fill="none"
                  stroke={m.color}
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              )}
            </g>
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
