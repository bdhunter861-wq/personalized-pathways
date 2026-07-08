import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ResourceCard from "@/components/ResourceCard";
import Backdrop from "@/components/Backdrop";
import CTASection from "@/components/CTASection";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical articles for families thinking about college lists, essays, campus visits, honors colleges, scholarships, and how parents can help.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Notes for families"
        description="Short, practical pieces on the parts of the college process families ask about most. New articles are on the way."
      />

      <section className="relative overflow-hidden py-20">
        <Backdrop dots />
        <Container className="relative">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Questions these notes don't answer?"
        description="Reach out. A consultation is the best way to get answers specific to your student."
      />
    </>
  );
}
