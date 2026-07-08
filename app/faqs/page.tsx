import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import FAQList from "@/components/FAQList";
import Backdrop from "@/components/Backdrop";
import CTASection from "@/components/CTASection";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about college consulting, essays, honors and scholarship support, hourly help, and getting started with Personalized Pathways.",
};

// FAQ structured data for search engines.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer.join("\n\n") },
  })),
};

export default function FAQsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions families ask"
        description="Honest answers, including what this work can and cannot do. If your question is not here, reach out."
      />

      <section className="relative overflow-hidden py-16 lg:py-20">
        <Backdrop dots />
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <FAQList items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Still have a question?"
        description="Reach out and ask. A short consultation is often the quickest way to get a clear answer."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
