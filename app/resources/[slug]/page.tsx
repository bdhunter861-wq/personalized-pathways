import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { resources, getResource } from "@/data/resources";

type Params = { slug: string };

// Pre-render every resource page at build time (fully static).
export function generateStaticParams(): Params[] {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return { title: "Resource not found" };
  return {
    title: resource.title,
    description: resource.excerpt,
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return (
    <>
      <article className="py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1 text-sm font-semibold text-clay-dark hover:gap-2"
            >
              <span aria-hidden="true">←</span> All resources
            </Link>

            {resource.comingSoon && (
              <span className="mt-6 inline-flex rounded-full bg-sage-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sage">
                Coming soon
              </span>
            )}

            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink">
              {resource.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {resource.excerpt}
            </p>

            <div className="mt-10 border-t border-line pt-10">
              {resource.body && resource.body.length > 0 ? (
                <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
                  {resource.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-line bg-cream-deep/60 p-8 text-center">
                  <p className="font-serif text-xl font-semibold text-ink">
                    This piece is on the way.
                  </p>
                  <p className="mt-3 text-ink-soft">
                    The full article is being written. In the meantime, the
                    summary above captures the idea. If this is something you
                    want help with now, a consultation is the fastest route.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </article>

      <CTASection />
    </>
  );
}
