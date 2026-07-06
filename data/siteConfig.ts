// Centralized site configuration.
// Michelle: edit the values below to update contact details, links, and copy
// that appears across the whole site.

export const siteConfig = {
  // Public-facing brand. The umbrella company is Wide-Eyed Learning, LLC;
  // the consulting service is Personalized Pathways College Consulting.
  serviceName: "Personalized Pathways College Consulting",
  companyName: "Wide-Eyed Learning, LLC",
  shortName: "Personalized Pathways",

  // Used for absolute URLs (sitemap, Open Graph, structured data).
  url: "https://wideeyedlearning.com",

  // SEO defaults.
  title: "Personalized Pathways College Consulting | Wide-Eyed Learning",
  description:
    "College application, essay, scholarship, and admissions strategy support from Wide-Eyed Learning, LLC dba Personalized Pathways College Consulting.",

  // Show exact package prices on the public site? When false, no per-package
  // dollar amounts are shown; a single note (`pricingNote`) appears at the top
  // of the pricing section instead. The real prices stay in data/services.ts,
  // so flip this to true anytime to reveal them.
  showPricing: false,
  pricingHiddenLabel: "Contact for pricing",
  // One line shown at the top of the pricing section when prices are hidden.
  pricingNote:
    "All packages are custom-scoped. Contact Personalized Pathways for pricing.",

  // Company contact email.
  email: "personalizedpathwayscc@gmail.com",

  // TODO_ADD_SCHEDULING_LINK — replace with a real scheduling/booking URL when ready.
  // Until then, "Schedule a consultation" opens an email to the address above.
  schedulingLink: "TODO_ADD_SCHEDULING_LINK",

  // TODO — add social links if/when Michelle wants them (leave empty to hide).
  social: {
    // linkedin: "",
    // instagram: "",
  },

  // Optional contact form endpoint. If you later set NEXT_PUBLIC_CONTACT_ENDPOINT
  // in your environment, the contact form will POST there. Otherwise the page
  // falls back to a prefilled mailto link (no paid form service required).
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",
};

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
];

export const footerNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/faqs" },
];

// Where "Schedule a consultation" leads: a booking link if one is set,
// otherwise the on-site consultation page (a short form that pre-fills an email
// to the company address when submitted).
export const consultationHref =
  siteConfig.schedulingLink &&
  siteConfig.schedulingLink !== "TODO_ADD_SCHEDULING_LINK"
    ? siteConfig.schedulingLink
    : "/consultation";

// Reused legal language.
export const legal = {
  disclaimer:
    "College admissions outcomes are never guaranteed.",
  longDisclaimer:
    "Personalized Pathways College Consulting provides educational consulting and application support. Admission, scholarship, honors, and financial aid outcomes are not guaranteed.",
  privacyNote:
    "We use the information you share with us only to respond to your inquiry.",
};
