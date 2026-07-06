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

// Honors college admissions.
// TODO — CONFIRM this list. These are well-known honors colleges/programs at
// schools already on the acceptances list, added per the client's note that
// students have been admitted to honors colleges across many of them. Trim or
// expand to match actual honors-college admits before go-live.
export const honorsColleges = [
  "University of Maryland Honors College",
  "Purdue University Honors College",
  "Penn State Schreyer Honors College",
  "University of Oklahoma Honors College",
  "Indiana University Hutton Honors College",
  "University of Oregon Clark Honors College",
  "Baylor University Honors College",
  "Colorado State University Honors Program",
  "University of Denver Honors Program",
  "Miami University Honors College",
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

// DRAFT — needs client sign-off on the "$2 million+" aggregate before go-live.
// No scholarship-program names, per the no-DIY-discovery policy; dollar figures
// and school names only.
export const scholarshipStatement =
  "Personalized Pathways students have earned scholarships and merit-based financial aid worth well over $2 million, including individual awards up to $280,000, a $240,000 award to a top music program, and scholarships ranging from $1,000 to $10,000 and up at schools nationwide.";

// Testimonials. Real, approved quotes only. Attribute by first name + last
// initial or "Parent / Student, Class of 20XX". Empty until provided.
export type Testimonial = {
  quote: string;
  attribution: string;
  category?: "admissions" | "scholarships" | "honors" | "experience";
};
export const testimonials: Testimonial[] = [
  // TODO — add approved testimonials, e.g.:
  // { quote: "…", attribution: "Parent of a 2025 applicant", category: "experience" },
];
