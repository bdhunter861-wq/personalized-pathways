import Link from "next/link";
import type { Service } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

// Card used for service previews (homepage) and the services grid.
export default function ServiceCard({
  service,
  href = "/services",
  showPrice = true,
}: {
  service: Service;
  href?: string;
  showPrice?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md ${
        service.highlight ? "border-clay" : "border-line"
      }`}
    >
      {service.highlight && service.highlightLabel && (
        <span className="mb-3 inline-flex w-fit rounded-full bg-clay-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-clay-dark">
          {service.highlightLabel}
        </span>
      )}
      <h3 className="font-serif text-xl font-semibold text-ink">{service.name}</h3>
      {/* Prices only appear per-card when pricing is public. When hidden, a
          single note is shown once at the section level instead of repeating
          "Contact for pricing" on every card. */}
      {showPrice && siteConfig.showPricing && (
        <p className="mt-2 text-lg font-semibold text-clay-dark">
          {service.price}
          {service.priceNote && service.priceNote.length < 16 && (
            <span className="ml-1 text-sm font-normal text-ink-muted">
              {service.priceNote}
            </span>
          )}
        </p>
      )}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
        {service.preview}
      </p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-clay-dark hover:gap-2"
      >
        Learn more
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
