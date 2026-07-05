import Link from "next/link";
import type { Resource } from "@/data/resources";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-2">
        {resource.comingSoon && (
          <span className="inline-flex rounded-full bg-sage-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sage">
            Coming soon
          </span>
        )}
      </div>
      <h3 className="mt-3 font-serif text-xl font-semibold text-ink">
        <Link href={`/resources/${resource.slug}`} className="hover:text-clay-dark">
          {resource.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
        {resource.excerpt}
      </p>
      <Link
        href={`/resources/${resource.slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-clay-dark hover:gap-2"
      >
        {resource.comingSoon ? "Preview" : "Read"}
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
