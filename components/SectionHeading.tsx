import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

// Consistent heading block: small eyebrow label, title, optional description.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  as: Heading = "h2",
  className = "",
}: SectionHeadingProps) {
  const titleSize =
    Heading === "h1"
      ? "text-4xl sm:text-5xl"
      : "text-2xl sm:text-3xl";
  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-clay-dark">
          {eyebrow}
        </p>
      )}
      <Heading className={`${titleSize} font-semibold leading-tight text-ink font-serif`}>
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  );
}
