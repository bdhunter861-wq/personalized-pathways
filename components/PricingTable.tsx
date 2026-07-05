import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

// Detailed pricing presentation.
// - On desktop: a clean comparison table.
// - On mobile: stacked cards (the table is hidden, cards are shown).
export default function PricingTable() {
  return (
    <div>
      {/* Desktop comparison table */}
      <div className="hidden overflow-hidden rounded-2xl border border-line bg-card shadow-sm lg:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Personalized Pathways services and pricing
          </caption>
          <thead>
            <tr className="border-b border-line bg-cream-deep/60">
              <th scope="col" className="w-1/3 px-6 py-4 text-sm font-semibold text-ink">
                Service
              </th>
              {siteConfig.showPricing && (
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-ink">
                  Price
                </th>
              )}
              <th scope="col" className="px-6 py-4 text-sm font-semibold text-ink">
                Best for
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr
                key={s.id}
                className={`border-b border-line last:border-0 align-top ${
                  s.highlight ? "bg-clay-soft/40" : ""
                }`}
              >
                <th scope="row" className="px-6 py-5 font-serif text-base font-semibold text-ink">
                  <a href={`#${s.id}`} className="hover:text-clay-dark">
                    {s.name}
                  </a>
                  {s.highlight && s.highlightLabel && (
                    <span className="ml-2 inline-flex rounded-full bg-clay px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white align-middle">
                      {s.highlightLabel}
                    </span>
                  )}
                </th>
                {siteConfig.showPricing && (
                  <td className="px-6 py-5 text-sm font-semibold text-clay-dark">
                    {s.price}
                    {s.priceNote && s.priceNote.length < 16 && (
                      <span className="ml-1 font-normal text-ink-muted">{s.priceNote}</span>
                    )}
                  </td>
                )}
                <td className="px-6 py-5 text-sm leading-relaxed text-ink-soft">
                  {s.preview}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked summary cards */}
      <ul className="space-y-4 lg:hidden">
        {services.map((s) => (
          <li
            key={s.id}
            className={`rounded-2xl border bg-card p-5 shadow-sm ${
              s.highlight ? "border-clay" : "border-line"
            }`}
          >
            <a href={`#${s.id}`} className="font-serif text-lg font-semibold text-ink">
              {s.name}
            </a>
            {siteConfig.showPricing && (
              <p className="mt-1 text-base font-semibold text-clay-dark">{s.price}</p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.preview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
