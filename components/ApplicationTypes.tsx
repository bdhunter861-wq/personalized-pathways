import { applicationTypes, type ApplicationType } from "@/data/applicationTypes";

// Inline icons for each application type.
const icons: Record<ApplicationType["icon"], React.ReactNode> = {
  application: (
    <>
      <path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M8.5 12.5h7M8.5 16h5" />
    </>
  ),
  honors: (
    <>
      <path d="M12 3 4 8h16L12 3Z" />
      <path d="M4 20h16" />
      <path d="M6 20v-8M10 20v-8M14 20v-8M18 20v-8" />
    </>
  ),
  scholarship: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.2 7.5 21 12 18l4.5 3L15 13.2" />
    </>
  ),
  specialized: (
    <>
      <path d="M3 12h4l2-5 3 11 2.5-6H21" />
    </>
  ),
};

// Renders the four application types as icon tiles. `variant="card"` gives the
// compact 2x2 hero treatment; `variant="row"` spreads them across a section.
export default function ApplicationTypes({
  variant = "row",
}: {
  variant?: "card" | "row";
}) {
  const gridClass =
    variant === "card"
      ? "grid grid-cols-2 gap-3"
      : "grid gap-4 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <ul className={gridClass}>
      {applicationTypes.map((type, i) => {
        const green = i % 2 === 1;
        return (
          <li
            key={type.label}
            className={`lift rounded-2xl border border-line bg-card shadow-sm ${
              variant === "card" ? "p-4" : "p-5"
            }`}
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md ${
                green ? "bg-brand-green shadow-brand-green/30" : "bg-brand-blue shadow-brand-blue/30"
              }`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[type.icon]}
              </svg>
            </span>
            <p className="mt-3 font-serif text-base font-semibold leading-snug text-ink">
              {type.label}
            </p>
            {variant === "row" && (
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {type.description}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
