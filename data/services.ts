// All package and pricing content lives here.
// Michelle: edit prices, descriptions, and included items below. The Services
// page and the homepage preview both read from this file.

export type Service = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  summary: string;
  // Short tagline used on preview cards.
  preview: string;
  includes?: string[];
  // For add-on style services that list a few example uses instead of includes.
  examples?: string[];
  limitations?: string[];
  // Premium is visually flagged as the most comprehensive option.
  highlight?: boolean;
  highlightLabel?: string;
};

export const services: Service[] = [
  {
    id: "essentials",
    name: "Essentials Package",
    price: "$4,000",
    priceNote: "flat",
    preview:
      "Comprehensive senior-year support for students who already have a working school list.",
    summary:
      "Comprehensive, senior-year support for students who already have a working list of schools and are ready to apply. We manage the full application process with you: refining the school list for academic, financial, and fit balance, building an application and essay strategy, tracking every deadline, and guiding final decisions once offers and aid letters arrive.",
    includes: [
      "School list review for academic, financial, and fit balance",
      "Common App or Coalition App strategy and management",
      "Activities and honors strategy",
      "Deadline and milestone tracking",
      "Common App or Coalition main essay support",
      "Supplemental essay support for up to 10 schools",
      "Final decision guidance",
      "Review of acceptance, financial aid, and merit aid letters",
      "Appeals consultation if needed",
    ],
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "$5,000",
    priceNote: "flat",
    highlight: true,
    highlightLabel: "Most comprehensive",
    preview:
      "Multi-year planning, the full senior application, and deep support for honors, scholarships, and specialized programs.",
    summary:
      "For students in any high school year who want support that starts well before senior year. Premium builds a multi-year academic and college plan, then delivers the full senior-year application process, and adds dedicated guidance through honors, scholarship, and specialized-program applications. It includes full support on the standard college application, plus up to 6 honors college, scholarship, and specialized-program applications such as BS/MD, each with its own essays, interviews, and requirements.",
    includes: [
      "Multi-year course and academic planning, started well before senior year",
      "Extracurricular and activity planning and recommendations",
      "SAT/ACT testing strategy and timeline",
      "Major and career interest exploration",
      "Personalized best-fit college list",
      "Campus visit and demonstrated interest strategy",
      "The full senior-year application process (everything in the Essentials package)",
      "Dedicated support for up to 6 honors college, scholarship, and specialized-program applications, including BS/MD, each with its own essays, interviews, and requirements",
    ],
  },
  {
    id: "honors-scholarships",
    name: "Honors and Scholarships Support",
    price: "$1,000 add-on / $2,000 standalone",
    priceNote:
      "$1,000 add-on for current Essentials clients (up to 6 applications); $2,000 standalone for new clients (up to 6 applications)",
    preview:
      "Focused help for honors colleges, scholarships, and competitive special programs.",
    summary:
      "Dedicated help for students applying to honors colleges, scholarship programs, and competitive special programs, each of which often carries its own essays, strategy, and interviews. We help students plan, position, and prepare across up to 6 programs so these applications get the focused attention they need, whether as an add-on to Essentials or on their own.",
  },
  {
    id: "essay-support",
    name: "Essay Support Only",
    price: "$1,800",
    priceNote: "flat",
    preview: "Focused brainstorming, drafting support, and revision for essays.",
    summary:
      "Focused essay help for students who mainly need support with their writing. We work through brainstorming, drafting, feedback, and revision on the main Common App essay and supplements for up to 5 colleges, keeping the voice and the writing the student's own.",
    includes: [
      "Brainstorming",
      "Drafting support",
      "Feedback and revision",
      "Common App main essay",
      "Supplemental essays for up to 5 colleges",
    ],
  },
  {
    id: "hourly",
    name: "Hourly Consulting",
    price: "$175",
    priceNote: "per hour",
    preview: "Targeted help with specific questions or tasks, billed by the hour.",
    summary:
      "Targeted, pay-as-you-go help for specific questions or tasks, from course selection and testing timelines to application planning, interview preparation, and essay feedback. A good fit for families who want expert guidance on particular decisions without committing to a full package.",
    examples: [
      "Class selection",
      "Testing timelines",
      "Application planning",
      "College visit preparation",
      "Interview preparation",
      "Essay feedback",
      "Q&A sessions",
      "Portfolio website planning",
    ],
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website Support",
    price: "$800 add-on / $1,000 new clients",
    priceNote:
      "$800 add-on to the Premium Package; $1,000 for new clients",
    preview:
      "Guidance building a simple Google Sites portfolio to showcase student work.",
    summary:
      "Guidance building a simple Google Sites portfolio of up to 8 pages to showcase a student's work, projects, activities, accomplishments, or media. We help with initial design planning, structure, theme, and navigation, plus two feedback sessions, so students have a clean place to point colleges and programs. Available as an add-on to Premium or on its own.",
    includes: [
      "Up to 1 hour of initial design planning",
      "Structure, theme, and navigation guidance within Google Sites",
      "Two feedback and correction sessions of 30 minutes each",
    ],
    limitations: [
      "Families must provide ready-to-post content",
      "Families are responsible for copyright permissions",
      "No advanced custom coding inside Google Sites",
      "Timeline depends on timely content submission and feedback",
    ],
  },
];

// Services featured as preview cards on the homepage.
export const featuredServiceIds = ["essentials", "premium", "essay-support"];

export const servicesNote =
  "Every family's situation is different. A consultation can help determine which level of support makes sense.";
