import { ReactNode } from "react";
import Container from "./Container";

type Motif = "path" | "blocks" | "chat" | "question";

// Simple, consistent header band for inner pages. `motif` swaps in a graphic
// that fits that specific page's theme, so pages don't all reuse the same art.
export default function PageHero({
  eyebrow,
  title,
  description,
  motif,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  motif?: Motif;
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

      {/* About: a dotted path with meaningful milestones (discover, learn, arrive) */}
      {motif === "path" && (
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

      {/* Services: a fanned stack of package cards with a checklist */}
      {motif === "blocks" && (
        <svg
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-2/5 opacity-90 lg:block"
          viewBox="0 0 320 240"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="150" y="40" width="140" height="100" rx="14"
            fill="var(--color-card)" stroke="var(--color-brand-green)" strokeWidth="2"
            opacity="0.55" transform="rotate(8 220 90)"
          />
          <rect
            x="108" y="66" width="150" height="112" rx="14"
            fill="var(--color-card)" stroke="var(--color-brand-blue)" strokeWidth="2"
            opacity="0.7" transform="rotate(-5 183 122)"
          />
          <rect
            x="86" y="98" width="164" height="122" rx="16"
            fill="var(--color-card)" stroke="var(--color-brand-blue)" strokeWidth="2.5"
          />
          <g stroke="var(--color-brand-green)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M104 128 l6 6 l12 -14" />
            <path d="M104 158 l6 6 l12 -14" />
            <path d="M104 188 l6 6 l12 -14" />
          </g>
          <g stroke="var(--color-line)" strokeWidth="2">
            <line x1="134" y1="128" x2="228" y2="128" />
            <line x1="134" y1="158" x2="228" y2="158" />
            <line x1="134" y1="188" x2="210" y2="188" />
          </g>
        </svg>
      )}

      {/* Consultation: two speech bubbles + a calendar check, for "let's talk, on the calendar" */}
      {motif === "chat" && (
        <svg
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-2/5 opacity-90 lg:block"
          viewBox="0 0 320 240"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M168,42 h108 a12,12 0 0 1 12,12 v46 a12,12 0 0 1 -12,12 h-68 l-20,18 v-18 h-20 a12,12 0 0 1 -12,-12 v-46 a12,12 0 0 1 12,-12 Z"
            fill="var(--color-card)" stroke="var(--color-brand-green)" strokeWidth="2.4"
          />
          <path
            d="M40,84 h150 a15,15 0 0 1 15,15 v64 a15,15 0 0 1 -15,15 h-96 l-27,26 v-26 h-27 a15,15 0 0 1 -15,-15 v-64 a15,15 0 0 1 15,-15 Z"
            fill="var(--color-card)" stroke="var(--color-brand-blue)" strokeWidth="2.6"
          />
          <circle cx="82" cy="140" r="4.5" fill="var(--color-brand-blue)" />
          <circle cx="110" cy="140" r="4.5" fill="var(--color-brand-blue)" opacity="0.6" />
          <circle cx="138" cy="140" r="4.5" fill="var(--color-brand-blue)" opacity="0.3" />
          <g transform="translate(262 196)">
            <rect x="-18" y="-16" width="36" height="32" rx="6" fill="var(--color-card)" stroke="var(--color-brand-green)" strokeWidth="2.4" />
            <line x1="-18" y1="-6" x2="18" y2="-6" stroke="var(--color-brand-green)" strokeWidth="2" />
            <path d="M-8,5 l4.5,4.5 l10,-10" stroke="var(--color-brand-green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      )}

      {/* FAQs: a big question mark plus a couple of smaller ones */}
      {motif === "question" && (
        <svg
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-2/5 lg:block"
          viewBox="0 0 320 240"
          aria-hidden="true"
        >
          <text
            x="150" y="185" textAnchor="middle"
            fontFamily="var(--font-serif)" fontSize="190" fontWeight="700"
            fill="var(--color-brand-blue)" opacity="0.14"
          >
            ?
          </text>
          <text
            x="255" y="86" textAnchor="middle"
            fontFamily="var(--font-serif)" fontSize="64" fontWeight="700"
            fill="var(--color-brand-green)" opacity="0.3"
          >
            ?
          </text>
          <text
            x="46" y="58" textAnchor="middle"
            fontFamily="var(--font-serif)" fontSize="44" fontWeight="700"
            fill="var(--color-brand-blue)" opacity="0.25"
          >
            ?
          </text>
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
