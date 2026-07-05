// The application types Personalized Pathways supports. Shown on the homepage
// hero and the Services page so the two stay in sync. Edit labels/descriptions
// here. `icon` maps to an inline SVG in components that render these.

export type ApplicationType = {
  label: string;
  description: string;
  icon: "application" | "honors" | "scholarship" | "specialized";
};

export const applicationTypes: ApplicationType[] = [
  {
    label: "Colleges & Universities",
    description:
      "The core Common App or Coalition application, essays, activities, and supplements, for the right-fit schools, selective or not.",
    icon: "application",
  },
  {
    label: "Honors Colleges",
    description:
      "Separate honors program applications, essays, and interviews at many universities.",
    icon: "honors",
  },
  {
    label: "Scholarships",
    description:
      "Merit and named scholarship applications, each with its own requirements.",
    icon: "scholarship",
  },
  {
    label: "BS/MD & Specialized Programs",
    description:
      "Combined-degree BS/MD, medical school admissions, and other competitive or performing-arts programs.",
    icon: "specialized",
  },
];
