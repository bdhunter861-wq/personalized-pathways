// Results / social proof for the Testimonials & Results page.
// Client-provided acceptances (real). Edit here.
//
// Within every section below, schools are ordered most- to least-selective —
// a judgment call for marketing presentation, not a precise ranking.
//
// TODO — confirm before go-live:
//  - Institution name for one abbreviation (SUNY Albany).
//  - Exact program names for Drexel and CU Denver's music production programs
//    (left generic below — do not publish a specific title until confirmed).
//  - Exact BS/MD program names for Penn State, GW, Pitt, CU, Hofstra, and
//    Indiana (only Case Western, RPI, and Rochester have confirmed names).
//  - Any additional honors colleges to list beyond what's below.

// Specialized / performing-arts / athletics placements (distinctive proof),
// most- to least-selective within each group.
export const specializedPlacements = [
  {
    school: "University of Miami",
    field: "Music Production — Frost School of Music",
    category: "arts" as const,
  },
  {
    school: "University of Denver",
    field: "Music Production — Lamont School of Music",
    category: "arts" as const,
  },
  {
    // TODO — confirm Drexel's exact music production program name.
    school: "Drexel University",
    field: "Music Production",
    category: "arts" as const,
  },
  {
    // TODO — confirm CU Denver's exact music production program name.
    school: "University of Colorado Denver",
    field: "Music Production",
    category: "arts" as const,
  },
  { school: "University of Arizona", field: "Dance", category: "arts" as const },
  { school: "Pace University", field: "Dance", category: "arts" as const },
  { school: "Dean College", field: "Dance", category: "arts" as const },
  { school: "University of Dallas", field: "Soccer", category: "athletics" as const },
];

// Medical school admissions, most- to least-selective.
export const medSchools = ["Johns Hopkins", "University of Colorado School of Medicine", "SUNY Albany"];

// BS/MD combined-degree program admissions, most- to least-selective.
// Program name shown as a tag when confirmed; otherwise a generic label.
export const bsMdPrograms = [
  { school: "Case Western Reserve University", program: "Pre-Professional Scholars Program (PPSP)" },
  { school: "Rensselaer Polytechnic Institute (RPI)", program: "Physician-Scientist Program" },
  { school: "University of Rochester", program: "REMS Program" },
  { school: "Penn State", program: "BS/MD Program" },
  { school: "George Washington University", program: "BS/MD Program" },
  { school: "University of Pittsburgh", program: "BS/MD Program" },
  { school: "University of Colorado", program: "BS/MD Program" },
  { school: "Hofstra University", program: "BS/MD Program" },
  { school: "Indiana University", program: "BS/MD Program" },
];

// Honors college admissions, most- to least-selective. Each has the school
// (for the logo) and the honors program name (shown as a tag on the card).
export const honorsColleges = [
  { school: "Penn State", program: "Schreyer Honors College" },
  { school: "University of Maryland", program: "Honors College" },
  { school: "Indiana University", program: "Hutton Honors College" },
  { school: "Purdue University", program: "Honors College" },
  { school: "University of Oregon", program: "Clark Honors College" },
  { school: "Baylor University", program: "Honors College" },
  { school: "Miami University (Ohio)", program: "Honors College" },
  { school: "University of Oklahoma", program: "Honors College" },
  { school: "University of Denver", program: "Honors Program" },
  { school: "Colorado State University", program: "Honors Program" },
];

// Highly competitive programs/majors (harder than general admission),
// most- to least-selective.
export const competitiveMajorSchools = [
  "Duke University",
  "Brown University",
  "University of Southern California",
  "University of Illinois Urbana-Champaign",
  "Purdue University",
  "University of Maryland",
  "University of Colorado Boulder",
  "California Polytechnic State University, San Luis Obispo",
];

// Combined, categorized view for the "Highly competitive programs and majors"
// section: BS/MD & medical school, engineering/competitive majors, athletics,
// and performing arts — in that order, each visually its own group.
export type CompetitiveItem = { name: string; domain?: string; tag?: string };
export type CompetitiveCategory = {
  key: string;
  label: string;
  description: string;
  accent: "blue" | "green";
  items: CompetitiveItem[];
};

// Manual interleave order for the combined BS/MD & medical school category —
// most- to least-selective across both source lists together.
const bsMdMedicalOrder: { type: "med" | "bsmd"; school: string }[] = [
  { type: "med", school: "Johns Hopkins" },
  { type: "bsmd", school: "Case Western Reserve University" },
  { type: "bsmd", school: "Rensselaer Polytechnic Institute (RPI)" },
  { type: "bsmd", school: "University of Rochester" },
  { type: "med", school: "University of Colorado School of Medicine" },
  { type: "bsmd", school: "Penn State" },
  { type: "bsmd", school: "George Washington University" },
  { type: "bsmd", school: "University of Pittsburgh" },
  { type: "bsmd", school: "University of Colorado" },
  { type: "bsmd", school: "Hofstra University" },
  { type: "bsmd", school: "Indiana University" },
  { type: "med", school: "SUNY Albany" },
];

function buildCategories(domains: Record<string, string>): CompetitiveCategory[] {
  return [
    {
      key: "bsmd-medical",
      label: "BS/MD & medical school",
      description: "Combined-degree BS/MD pathways and direct medical school admissions.",
      accent: "blue",
      items: bsMdMedicalOrder.map(({ type, school }) => ({
        name: school,
        domain: domains[school],
        tag:
          type === "med"
            ? "Medical school"
            : bsMdPrograms.find((p) => p.school === school)?.program ?? "BS/MD Program",
      })),
    },
    {
      key: "engineering",
      label: "Engineering & competitive majors",
      description:
        "Selective engineering, business, and computer science programs, often harder to enter than the university overall.",
      accent: "green",
      items: competitiveMajorSchools.map((name) => ({
        name,
        domain: domains[name],
        tag: "Selective program",
      })),
    },
    {
      key: "athletics",
      label: "Athletics",
      description: "Recruited and competitive collegiate athletics admissions.",
      accent: "blue",
      items: specializedPlacements
        .filter((p) => p.category === "athletics")
        .map((p) => ({ name: p.school, domain: domains[p.school], tag: p.field })),
    },
    {
      key: "performing-arts",
      label: "Performing arts",
      description: "Competitive music and dance program admissions.",
      accent: "green",
      items: specializedPlacements
        .filter((p) => p.category === "arts")
        .map((p) => ({ name: p.school, domain: domains[p.school], tag: p.field })),
    },
  ];
}

// General college and university acceptances, most- to least-selective
// (a reasonable presentation order, not a precise ranking).
export const colleges = [
  "Yale University",
  "Duke University",
  "Brown University",
  "Northwestern University",
  "Vanderbilt University",
  "University of Virginia",
  "University of North Carolina at Chapel Hill",
  "Emory University",
  "Washington University in St. Louis",
  "University of Michigan",
  "University of Southern California",
  "Wake Forest University",
  "Boston College",
  "University of Notre Dame",
  "Carleton College",
  "William & Mary",
  "Case Western Reserve University",
  "University of Rochester",
  "Boston University",
  "The Ohio State University",
  "Purdue University",
  "University of Illinois Urbana-Champaign",
  "University of Wisconsin",
  "University of Colorado Boulder",
  "Santa Clara University",
  "Texas Christian University",
  "Gonzaga University",
  "Creighton University",
  "Saint Louis University",
  "University of Oklahoma",
  "Baylor University",
  "Colorado State University",
  "University of Denver",
  "Miami University (Ohio)",
  "Grinnell College",
  "University of Richmond",
  "Whitman College",
  "Lewis & Clark College",
  "Chapman University",
  "University of San Diego",
  "University of Dallas",
  "University of Oregon",
  "University of Nebraska",
  "Oregon State University",
  "Flagler College",
  "Dean College",
  "Pace University",
  "San Diego State University",
  "California State University, Long Beach",
  "California State University, Northridge",
  "Colorado School of Mines",
  "Worcester Polytechnic Institute",
  "California Polytechnic State University, San Luis Obispo",
  "University of British Columbia",
];

// Domain per school, used to fetch a logo from a logo service. Schools without
// an entry fall back to a colored monogram. Add/adjust domains here.
export const schoolDomains: Record<string, string> = {
  "University of Colorado Boulder": "colorado.edu",
  "Yale University": "yale.edu",
  "Case Western Reserve University": "case.edu",
  "University of Rochester": "rochester.edu",
  "Vanderbilt University": "vanderbilt.edu",
  "University of Virginia": "virginia.edu",
  "University of North Carolina at Chapel Hill": "unc.edu",
  "Duke University": "duke.edu",
  "Brown University": "brown.edu",
  "University of Southern California": "usc.edu",
  "University of Wisconsin": "wisc.edu",
  "University of Notre Dame": "nd.edu",
  "University of Richmond": "richmond.edu",
  "Miami University (Ohio)": "miamioh.edu",
  "Emory University": "emory.edu",
  "Grinnell College": "grinnell.edu",
  "Colorado State University": "colostate.edu",
  "University of British Columbia": "ubc.ca",
  "San Diego State University": "sdsu.edu",
  "California State University, Long Beach": "csulb.edu",
  "California State University, Northridge": "csun.edu",
  "Washington University in St. Louis": "wustl.edu",
  "Colorado School of Mines": "mines.edu",
  "Worcester Polytechnic Institute": "wpi.edu",
  "Purdue University": "purdue.edu",
  "University of Illinois Urbana-Champaign": "illinois.edu",
  "California Polytechnic State University, San Luis Obispo": "calpoly.edu",
  "Wake Forest University": "wfu.edu",
  "Baylor University": "baylor.edu",
  "Boston College": "bc.edu",
  "Creighton University": "creighton.edu",
  "University of Oklahoma": "ou.edu",
  "Santa Clara University": "scu.edu",
  "University of Michigan": "umich.edu",
  "Boston University": "bu.edu",
  "Northwestern University": "northwestern.edu",
  "The Ohio State University": "osu.edu",
  "Carleton College": "carleton.edu",
  "William & Mary": "wm.edu",
  "University of Denver": "du.edu",
  "University of Dallas": "udallas.edu",
  "Lewis & Clark College": "lclark.edu",
  "Whitman College": "whitman.edu",
  "University of Oregon": "uoregon.edu",
  "Flagler College": "flagler.edu",
  "University of Nebraska": "unl.edu",
  "Oregon State University": "oregonstate.edu",
  "Chapman University": "chapman.edu",
  "Dean College": "dean.edu",
  "Pace University": "pace.edu",
  "University of San Diego": "sandiego.edu",
  "Texas Christian University": "tcu.edu",
  "Gonzaga University": "gonzaga.edu",
  "Saint Louis University": "slu.edu",
  // Medical schools
  "SUNY Albany": "albany.edu",
  "University of Colorado School of Medicine": "cuanschutz.edu",
  "Johns Hopkins": "jhu.edu",
  // BS/MD programs
  "University of Pittsburgh": "pitt.edu",
  "George Washington University": "gwu.edu",
  "University of Colorado": "colorado.edu",
  "Penn State": "psu.edu",
  "Hofstra University": "hofstra.edu",
  "Indiana University": "indiana.edu",
  "Rensselaer Polytechnic Institute (RPI)": "rpi.edu",
  // Honors + specialized/arts schools
  "University of Maryland": "umd.edu",
  "University of Miami": "miami.edu",
  "Drexel University": "drexel.edu",
  "University of Colorado Denver": "ucdenver.edu",
  "University of Arizona": "arizona.edu",
};

// Built after schoolDomains so each item can carry its logo domain.
export const competitiveCategories: CompetitiveCategory[] = buildCategories(schoolDomains);

// DRAFT — needs client sign-off before go-live. Figures are illustrative,
// built from confirmed anchor points (4 awards up to ~$280,000 each; one
// $240,000 music scholarship to University of Miami; several additional
// individual offers around $200,000, some declined). No scholarship-program
// names are used anywhere, per the no-DIY-discovery policy — dollar figures
// and school names only.
export const scholarshipTotal = "$2M+";

export type ScholarshipBand = { range: string; count: string; note?: string };
export const scholarshipBands: ScholarshipBand[] = [
  { range: "$1,000 – $1,500", count: "30+" },
  { range: "$1,500 – $6,000", count: "25+" },
  { range: "$10,000 – $50,000", count: "15+" },
  {
    range: "$200,000+",
    count: "10+",
    note: "Including a $240,000 award to a top music program",
  },
];

export const scholarshipStatement =
  "Personalized Pathways students have earned scholarships and merit-based financial aid worth well over $2 million, including individual awards up to $280,000, a $240,000 award to a top music program, and scholarships ranging from $1,000 to $50,000 and up at schools nationwide.";

// Testimonials from the client's testimonials document. The detailed student
// and her parent are kept anonymous per the client's request (name omitted);
// her statement is split into separate testimonials by topic.
export type Testimonial = {
  quote: string;
  role: "student" | "parent";
  name?: string;
  // Optional student photo + details (shown card-style when present).
  image?: string;
  college?: string;
  collegeDomain?: string; // for the college logo badge on the photo
  areaOfStudy?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dr. Anthony has been instrumental to my college application success. Even before researching colleges or writing essays, she helped me combine my activities, experiences, culture, and personality into one cohesive personal statement that made everything else far more manageable.",
    role: "student",
  },
  {
    quote:
      "In the research process, Dr. Anthony is extremely knowledgeable about many colleges and programs, including BS/MD, scholarships, leadership programs, and honors colleges. She was able to give insight on which of my activities should be emphasized more than others.",
    role: "student",
  },
  {
    quote:
      "I cannot speak highly enough of Dr. Anthony's essay work; 'editing' does not do it justice. I'm a utilitarian writer who struggles with word counts, and she helped me stay under the limits while adding vibrancy, all in my own voice.",
    role: "student",
  },
  {
    quote:
      "For special programs that involve interviews, Dr. Anthony helped me prepare in a realistic one-on-one interview, with advice afterward that left me confident and able to answer questions concisely yet thoroughly. With her help, I was accepted into all three of my top program choices.",
    role: "student",
  },
  {
    quote:
      "College applications are grueling. The only thing that helped me more than being motivated to succeed was Dr. Anthony's consulting.",
    role: "student",
  },
  {
    quote:
      "My student was extremely stressed about applications, and I didn't know how to help. Dr. Anthony guided her through all of it, from the personal statement to essays and interviews, never writing for her but always protecting her voice. I strongly recommend her.",
    role: "parent",
  },
  {
    quote:
      "Meaghan and Dr. Anthony made the college application process easy and approachable, especially for us as parents new to it. Our rising senior loved working with them both, and they helped her achieve her dream school!",
    role: "parent",
    name: "Stacey",
    image: "/testimonials/stacey.jpg",
  },
  {
    quote:
      "Dr. Anthony gave genuinely helpful essay and admission advice that went far beyond the basics and got at the core of my character. She was timely, easy to work with, and put in countless hours outside our scheduled meetings.",
    role: "student",
    name: "Kiran",
    image: "/testimonials/kiran.jpg",
  },
  {
    quote:
      "Dr. Anthony's advice has been helpful across the board. I've now watched her support three applicants, my two children and my niece, tailoring her coaching to each one and helping them show their strengths. Her writing guidance is excellent.",
    role: "parent",
    name: "Beth",
  },
  {
    quote:
      "Our family is so grateful to Meaghan and Dr. Anthony. Their expertise, encouragement, and personalized support played a huge role in my son earning acceptance to the Frost School of Music at the University of Miami. We wholeheartedly recommend them.",
    role: "parent",
    name: "Amanda",
    image: "/testimonials/dylan.jpg",
    college: "University of Miami",
    collegeDomain: "miami.edu",
    areaOfStudy: "Frost School of Music",
  },
];
