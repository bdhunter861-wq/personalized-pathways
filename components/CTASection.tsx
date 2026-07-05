import Container from "./Container";
import { Button } from "./Button";

// Bottom-of-page call to action. Customizable text, sensible defaults.
export default function CTASection({
  title = "Let's talk about where your student is right now.",
  description = "A consultation is the simplest place to start. We'll look at where things stand and figure out what kind of support actually fits.",
  primaryLabel = "Schedule a consultation",
  primaryHref = "/contact",
  secondaryLabel = "View services",
  secondaryHref = "/services",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="bg-brand-deep relative overflow-hidden rounded-3xl px-6 py-16 text-center shadow-lg sm:px-12">
          {/* Soft glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-green/20 blur-3xl"
          />
          {/* Pathway motif */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
            viewBox="0 0 600 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M-20 170 C150 170 150 60 320 60 S520 30 620 30"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="2 12"
              strokeLinecap="round"
            />
          </svg>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream-deep/80">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primaryHref}>{primaryLabel}</Button>
              <Button href={secondaryHref} variant="secondary" className="bg-transparent text-white hover:text-clay-soft">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
