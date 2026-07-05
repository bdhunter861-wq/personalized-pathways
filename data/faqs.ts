// FAQ content. Edit questions and answers here.
// `answer` is an array of paragraphs. Add an optional `cta` link when an answer
// should point somewhere (e.g. a package). Answers are intentionally careful
// and do not promise outcomes.

export type Faq = {
  question: string;
  answer: string[];
  cta?: { href: string; label: string };
};

export const faqs: Faq[] = [
  {
    question:
      "Why should we work with a college consultant when we can use AI or our school counselor?",
    answer: [
      "AI tools and school counselors can both be helpful. They provide information, generate ideas, explain deadlines, and help families understand parts of the college process.",
      "But students and families often need more than information. A strong application strategy depends on judgment: knowing what to emphasize, what to leave out, what needs more context, what sounds generic, what feels forced, and what will help an admissions reader understand the student more fully. That kind of work takes careful listening, follow-up questions, developmental insight, writing judgment, and a clear understanding of the student's full academic, personal, and family context.",
      "School counselors often support large numbers of students and may not have time to work deeply on essays, activity framing, scholarship strategy, honors programs, or specialized applications. AI can help with brainstorming or organization, but it does not know the student the way a thoughtful human guide can. It also cannot reliably judge whether an application sounds true to the student, whether the writing sounds like AI, whether a story is framed well, or whether the pieces of the application are working together.",
      "Our role is to help students make better choices, not just produce more words. We help them sort through their experiences, identify their strongest lens, strengthen their writing, and build an application strategy that is clear, purposeful, and true to who they are.",
    ],
  },
  {
    question: "How do you help students build a college list?",
    answer: [
      "A strong college list is not just a mix of reach, target, and likely schools. It should reflect the student's academic profile, goals, interests, budget, preferred learning environment, and sense of fit.",
      "We help families look carefully at the full picture: admissibility, academic programs, campus culture, location, size, career pathways, scholarships, affordability, honors opportunities, and specialized programs. We also pay attention to admissions trends and institutional data so families can make decisions with clearer expectations.",
      "This is where Meaghan Elliott's background is especially valuable. As a consultant and math educator, she brings a structured, data-informed approach to list building. She helps students identify schools where they can be academically competitive while also thinking about where they are likely to thrive.",
      "The goal is not to create the longest list. It is to create a balanced, thoughtful list that gives the student strong options.",
    ],
  },
  {
    question: "Do you only work with juniors and seniors?",
    answer: [
      "No. Juniors and seniors usually need the most direct application support, while younger students can benefit from multi-year strategy sessions. Our support varies depending on the student and what kind of help is most useful.",
      "Some families come to us in 8th, 9th, or 10th grade because they want help thinking ahead: course choices, academic direction, activities, summer plans, leadership, service, or how to use the next few years more intentionally. At this stage, the work is future planning without pressure. We help students make better choices while they still have time to explore, adjust, and grow.",
      "Other families begin junior or senior year, when the work becomes more directly focused on college lists, application strategy, essays, activity descriptions, honors programs, specialized programs, and scholarships.",
      "We match the work to the student's age, goals, opportunities, and timeline. When deciding whether to work with a college counselor, ask yourself: what are the next decisions in front of my student, and how can support help them make those decisions with more clarity and purpose?",
      "Beginning work in the early years of high school helps ease early pressure and helps students avoid drifting from one random activity or decision to the next. When students have time to make intentional choices, they often arrive at the application process with stronger experiences and a clearer sense of what they want to communicate.",
    ],
  },
  {
    question: "Do you only do essay editing?",
    answer: [
      "No. Essays are part of the work, but strong essays come from a stronger strategy.",
      "Before focusing on wording, we look at what the essay needs to accomplish. What should the reader understand about this student? What is already clear from the transcript, activity list, honors section, or recommendations? What is missing? What story, detail, or reflection would add something?",
      "Then we help the student brainstorm, organize their thinking, choose stronger details, draft, revise, and sharpen their language. We ask questions, point out what is landing and what is not, and help them get closer to what they are actually trying to say. The essay should sound like the student on their best writing day.",
    ],
  },
  {
    question: "What makes Personalized Pathways different?",
    answer: [
      "We start with the student in front of us.",
      "Some students have strong grades and full activity lists, but no clear sense of how their experiences connect. Some have unusual interests, uneven transcripts, learning differences, family responsibilities, medical or personal challenges, or stories that need to be handled thoughtfully. Some have done meaningful work, but the depth of that work is not yet visible in the application.",
      "Our job is to help students and families sort through that material and build a strategy around who the student actually is. That includes deciding what to emphasize, what to connect, what to explain, what to leave in the background, and how to help the full application work together.",
    ],
  },
  {
    question: 'What does "turning experience into strategy" mean?',
    answer: [
      "Most students have more raw material than they realize.",
      "They may have classes, activities, jobs, service, creative work, research, family responsibilities, leadership roles, personal challenges, or a hard year they got through. At first, those pieces may feel scattered or ordinary.",
      "We help students look across what they have done and find the through-lines. Then we help them communicate those connections clearly across essays, activity lists, honors applications, scholarships, specialized programs, and interviews.",
      "The goal is to help decision-makers see the student more fully, not just as a list of grades and activities.",
    ],
  },
  {
    question: "What if my student does not have a clear story?",
    answer: [
      "That is completely normal.",
      "Most students do not arrive with a polished application story. They arrive with pieces: a class they loved, an activity they stuck with, a challenge they worked through, a leadership role, a question they keep returning to, a family responsibility, a creative interest, or something they care about more than they realized.",
      "A lot of our work is helping students notice what is already there. Once we understand the pieces, we can help the student figure out which ones are strongest and how they fit together.",
    ],
  },
  {
    question: "What if my student has done a lot, but it feels scattered?",
    answer: [
      "This is one of the places where strategy makes the biggest difference. Many strong students have long activity lists, but the pieces do not automatically add up to a clear application, and these students are often surprised by the outcomes they are limited to.",
      "We help students decide what should lead, how to connect disparate parts of their applications, what needs explanation, and what can stay in the background. Each student has their own theme, and we support them as they move from a list to a fuller picture that feels thoughtful, purposeful, and true to who they are.",
    ],
  },
  {
    question: "Do you help with getting scholarships?",
    answer: [
      "Depending on the selected package, yes. Scholarship applications often ask students to go further than a standard college application. They may need to explain leadership, service, goals, values, challenges, financial context, academic interests, or the impact they hope to have.",
      "We help students identify strong-fit opportunities and shape essays, short answers, resumes, and supporting materials so their experiences come through clearly.",
      "Many of our students have earned top scholarships at their colleges, and many have been awarded outside scholarships as well. We cannot promise scholarship results, but we can help students present their strongest case.",
    ],
  },
  {
    question:
      "Do you help with honors colleges or specialized programs like music production or BS/MD?",
    answer: [
      "Yes. Honors colleges and specialized programs, such as BS/MD and other pathways like music production or dance, usually need a more focused strategy than a standard application.",
      "Honors colleges often want to see intellectual curiosity, initiative, academic depth, and fit with a specific learning community. BS/MD and health-related programs often look for maturity, service, clinical exposure, research experience, ethical awareness, and a fuller understanding of the field.",
      "Through the Premium Package, we help students understand what each opportunity is asking for and build experiences and materials that respond directly to it.",
    ],
    cta: { href: "/services#premium", label: "See the Premium package" },
  },
  {
    question: "Do you work with gifted or twice-exceptional students?",
    answer: [
      "Yes. This is one of the areas where our background is especially useful.",
      "Gifted and twice-exceptional students often have profiles that are harder to capture in a standard application. A student may be advanced in one area and uneven in another. They may have ADHD, autism, anxiety, a learning difference, writing challenges, social complexity, or a school history that needs thoughtful framing.",
      "We help families think carefully about what to share, how to frame it, and how to keep the focus on the student's strengths, growth, readiness, and fit.",
    ],
  },
  {
    question: "How involved are parents in the process?",
    answer: [
      "Parents are crucial, especially around planning, timelines, finances, college fit, and big decisions. Students also need ownership of their applications.",
      "We help families find a workable balance. Parents are relieved of managing every detail but stay involved in the planning process. Students get support to move through their own experience on their own terms.",
      "How involved parents are in each step depends on the student's age, needs, the family's preferences, and the stage of the process.",
    ],
  },
  {
    question: "Can you help if we are already behind?",
    answer: [
      "Yes. When deadlines are close, we help families figure out what needs to happen first, what can still be strengthened, and where the student's remaining time and energy should go. Sometimes the most useful support is a focused, realistic plan instead of trying to fix everything at once.",
      "Even late in the process, good strategy can make the work clearer, calmer, and stronger.",
    ],
  },
  {
    question: "Do you guarantee admission or scholarships?",
    answer: [
      "No. No ethical consultant can guarantee admission, scholarships, or specific outcomes.",
      "What we can do is help students make thoughtful decisions, strengthen their writing, clarify their strategy, and present themselves as clearly and compellingly as possible. Our work is designed to help students put forward their strongest case while staying true to who they are.",
    ],
  },
  {
    question: "How does the Personalized Pathways process work?",
    answer: [
      "We begin by getting to know the student: their academic path, interests, activities, strengths, challenges, goals, family priorities, and the decisions immediately in front of them.",
      "From there, we help build a plan that fits the student's stage. For younger students, that may include course planning, activity choices, summer opportunities, leadership, service, or early college exploration. For juniors and seniors, the work may include college lists, application strategy, essays, activity descriptions, honors programs, specialized applications, scholarships, and deadlines.",
      "Throughout the process, we combine individual strategy with practical structure. Students need help understanding what story they are telling, but they also need timelines, organization, data, and clear next steps.",
      "Our goal is to help families make informed decisions and help students build applications that are thoughtful, strategic, and true to who they are.",
    ],
  },
];
