// Resource / blog index. These are placeholder drafts.
// Michelle: edit titles, excerpts, and (later) full content here. To publish a
// post, set `comingSoon: false` and add a `body` (paragraph strings). The site
// is built so real Markdown/MDX can be added later without rework.

export type Resource = {
  slug: string;
  title: string;
  excerpt: string;
  // When true, the post shows a "Coming soon" label and no full article.
  comingSoon: boolean;
  // Optional draft body. Each string is a paragraph.
  body?: string[];
  // Optional published date (ISO). Used for ordering/SEO when available.
  date?: string;
};

export const resources: Resource[] = [
  {
    slug: "balanced-college-list",
    title: "How to Think About a Balanced College List",
    excerpt:
      "A strong list is not just a ranking. It balances reach, match, and likely schools across academic, financial, and personal fit.",
    comingSoon: true,
  },
  {
    slug: "specific-college-essay",
    title: "What Makes a College Essay Feel Specific",
    excerpt:
      "Specific details do more work than big claims. A look at how concrete moments help an essay sound like the student who wrote it.",
    comingSoon: true,
  },
  {
    slug: "campus-visit-questions",
    title: "Questions to Ask Before a Campus Visit",
    excerpt:
      "A short list of questions that help families get past the brochure and learn what daily life at a school is actually like.",
    comingSoon: true,
  },
  {
    slug: "honors-and-scholarships",
    title: "Honors Colleges and Scholarships: What Families Often Miss",
    excerpt:
      "Honors programs and scholarships frequently have their own essays, deadlines, and strategy. Here is what tends to slip through the cracks.",
    comingSoon: true,
  },
  {
    slug: "parents-help-without-taking-over",
    title: "How Parents Can Help Without Taking Over",
    excerpt:
      "Parents play a real role in the process. A few practical ways to support a student while keeping the work, and the voice, theirs.",
    comingSoon: true,
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
