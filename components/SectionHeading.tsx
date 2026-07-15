import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
  // Use on a dark/bold background (e.g. bg-brand-deep) for correct contrast.
  light?: boolean;
};

// Consistent heading block: small eyebrow label, title, optional description.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  as: Heading = "h2",
  className = "",
  light = false,
}: SectionHeadingProps) {
  const titleSize =
    Heading === "h1"
      ? "text-4xl sm:text-5xl"
      : "text-2xl sm:text-3xl";
  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] ${
            light ? "text-white/75" : "text-clay-dark"
          } ${centered ? "justify-center" : ""}`}
        >
          <span
            aria-hidden="true"
            className={`h-[3px] w-7 rounded-full ${light ? "bg-white/60" : "brand-rule"}`}
          />
          {eyebrow}
        </p>
      )}
      <Heading
        className={`${titleSize} font-serif font-semibold leading-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-cream-deep/85" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
