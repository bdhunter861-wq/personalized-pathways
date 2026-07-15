// Results / social proof for the Testimonials & Results page.
// Client-provided acceptances (real). Edit here.
//
// TODO — confirm before go-live:
//  - Institution names for a few abbreviations (SUNY Albany, CU SOM).
//  - Whether "University of Miami" and "Drexel" music placements are music
//    PRODUCTION specifically (labeled "Music" here to avoid overclaiming;
//    University of Denver and CU Denver are labeled "Music production" per the
//    client's explicit note).
//  - Any additional honors colleges to list beyond University of Maryland.

// Specialized / performing-arts / athletics placements (distinctive proof).
export const specializedPlacements = [
  { school: "University of Miami", field: "Music" },
  { school: "Drexel University", field: "Music" },
  { school: "University of Denver", field: "Music production" },
  { school: "University of Colorado Denver", field: "Music production" },
  { school: "University of Arizona", field: "Dance" },
  { school: "Pace University", field: "Dance" },
  { school: "Dean College", field: "Dance" },
  { school: "University of Dallas", field: "Soccer" },
];

// Medical school admissions.
export const medSchools = [
  "SUNY Albany",
  "University of Colorado School of Medicine",
  "Johns Hopkins",
];

// BS/MD combined-degree program admissions.
export const bsMdPrograms = [
  "Case Western Reserve University",
  "University of Pittsburgh",
  "George Washington University",
  "University of Colorado",
  "Penn State",
  "University of Rochester",
  "Hofstra University",
  "Indiana University",
  "Rensselaer Polytechnic Institute (RPI)",
];

// Honors college admissions. Each has the school (for the logo) and the honors
// program name (shown as a tag on the card).
// TODO — CONFIRM this list. These are well-known honors colleges/programs at
// schools already on the acceptances list, added per the client's note that
// students have been admitted to honors colleges across many of them. Trim or
// expand to match actual honors-college admits before go-live.
export const honorsColleges = [
  { school: "University of Maryland", program: "Honors College" },
  { school: "Purdue University", program: "Honors College" },
  { school: "Penn State", program: "Schreyer Honors College" },
  { school: "University of Oklahoma", program: "Honors College" },
  { school: "Indiana University", program: "Hutton Honors College" },
  { school: "University of Oregon", program: "Clark Honors College" },
  { school: "Baylor University", program: "Honors College" },
  { school: "Colorado State University", program: "Honors Program" },
  { school: "University of Denver", program: "Honors Program" },
  { school: "Miami University (Ohio)", program: "Honors College" },
];

// Highly competitive programs/majors (harder than general admission).
export const competitiveMajorSchools = [
  "Purdue University",
  "University of Illinois Urbana-Champaign",
  "California Polytechnic State University, San Luis Obispo",
];

// General college and university acceptances (Round 2 + Round 3, combined).
export const colleges = [
  "University of Colorado Boulder",
  "Yale University",
  "Case Western Reserve University",
  "University of Rochester",
  "Vanderbilt University",
  "University of Virginia",
  "University of North Carolina at Chapel Hill",
  "Duke University",
  "Brown University",
  "University of Southern California",
  "University of Wisconsin",
  "University of Notre Dame",
  "University of Richmond",
  "Miami University (Ohio)",
  "Emory University",
  "Grinnell College",
  "Colorado State University",
  "University of British Columbia",
  "San Diego State University",
  "California State University, Long Beach",
  "California State University, Northridge",
  "Washington University in St. Louis",
  "Colorado School of Mines",
  "Worcester Polytechnic Institute",
  "Purdue University",
  "University of Illinois Urbana-Champaign",
  "California Polytechnic State University, San Luis Obispo",
  "Wake Forest University",
  "Baylor University",
  "Boston College",
  "Creighton University",
  "University of Oklahoma",
  "Santa Clara University",
  "University of Michigan",
  "Boston University",
  "Northwestern University",
  "The Ohio State University",
  "Carleton College",
  "William & Mary",
  "University of Denver",
  "University of Dallas",
  "Lewis & Clark College",
  "Whitman College",
  "University of Oregon",
  "Flagler College",
  "University of Nebraska",
  "Oregon State University",
  "Chapman University",
  "Dean College",
  "Pace University",
  "University of San Diego",
  "Texas Christian University",
  "Gonzaga University",
  "Saint Louis University",
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

// DRAFT — needs client sign-off on the "$2 million+" aggregate before go-live.
// No scholarship-program names, per the no-DIY-discovery policy; dollar figures
// and school names only.
export const scholarshipStatement =
  "Personalized Pathways students have earned scholarships and merit-based financial aid worth well over $2 million, including individual awards up to $280,000, a $240,000 award to a top music program, and scholarships ranging from $1,000 to $10,000 and up at schools nationwide.";

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
