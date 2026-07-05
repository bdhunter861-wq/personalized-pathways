import Link from "next/link";
import { faqs as defaultFaqs, type Faq } from "@/data/faqs";

// Accessible FAQ list built on native <details>/<summary> so each answer toggles
// open and closed (collapsed by default) and it works without JavaScript.
export default function FAQList({ items = defaultFaqs }: { items?: Faq[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
      {items.map((faq) => (
        <details key={faq.question} className="group px-6 py-2">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-medium text-ink marker:content-['']">
            <span className="font-serif text-lg">{faq.question}</span>
            <span
              aria-hidden="true"
              className="shrink-0 text-clay-dark transition-transform duration-200 group-open:rotate-45"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <div className="space-y-4 pb-5 pr-8 text-base leading-relaxed text-ink-soft">
            {faq.answer.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            {faq.cta && (
              <Link
                href={faq.cta.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-clay-dark hover:gap-2"
              >
                {faq.cta.label}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
