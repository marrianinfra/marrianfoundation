export const site = {
  name: "Marrian Foundation",
  tagline: "With Love to Spread Love",
  founded: "19 July 2024",
  description:
    "Marrian Foundation works across six core areas — Study Centre, Nurture Scholarship-Support, Lead Academy, Farm Tour & Farm Volunteering, Health & Wellness and other Social Services — to bring education, care, and opportunity to the communities that need it most.",
  email: "hello@marrianfoundation.org",
  phone: "+91 98765 43210",
  address: "Palakkad, Kerala, India",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/study-centres", label: "Study Centres" },
  { href: "/nurture", label: "Nurture" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const home = {
  hero: {
    eyebrow: "Marrian Foundation · With Love to Spread Love",
    title: "Together we deliver, together we Transform",
    subtitle: "Bridging the Gap Changing Lives.",
    ctaPrimary: { label: "Explore Our Work", href: "/about" },
    ctaSecondary: { label: "Partner With Us", href: "/contact" },
    metrics: [
      { value: 2500, suffix: "+", label: "Lives Impacted" },
      { value: 450, suffix: "+", label: "Students Supported" },
      { value: 120, suffix: "+", label: "Leaders Trained" },
    ],
    mediaLabel:
      "Image Placeholder: [Full-screen Hero — Children & mentors at a Palakkad study centre]",
  },
  whoWeAre: {
    eyebrow: "Who We Are",
    title: "Education, care, and opportunity for communities that need it most",
    body: [
      "Marrian Foundation works across six core areas — Study Centre, Nurture Scholarship-Support, Lead Academy, Farm Tour & Farm Volunteering, Health & Wellness and other Social Services — to bring education, care, and opportunity to the communities that need it most.",
      "From remote village classrooms to old age homes, from scholarship students to the leaders who train the next generation of changemakers, our work is built on one belief: real impact requires more than good intentions — it requires consistent, on-ground presence and follow-through.",
    ],
    mediaLabels: [
      "Image Placeholder: [Portrait collage — Study centre mentor with students]",
      "Image Placeholder: [Wide — Community gathering in Palakkad]",
      "Image Placeholder: [Detail — Hands exchanging books / learning materials]",
    ],
  },
  impactMetrics: [
    { value: 13, suffix: "", label: "Study Centres active", detail: "Across Palakkad villages" },
    { value: 11, suffix: "", label: "Villages covered", detail: "Reaching the last mile" },
    { value: 224, suffix: "", label: "Students supported", detail: "At active Study Centres" },
    { value: 200, suffix: "", prefix: "~", label: "Families reached", detail: "Through Study Centres" },
    { value: 180, suffix: "", label: "Scholarship target (by 2026)", detail: "Nurture Scholarship goal" },
    { value: 100, suffix: "+", label: "Students already supported", detail: "Nurture Scholarship progress" },
    { value: 120, suffix: "+", label: "Lead Academy trainees", detail: "Leaders trained so far" },
    { value: 600, suffix: "+", label: "Farm Tour groups targeted this year", detail: "Beneficiaries this financial year" },
  ],
  pillars: [
    {
      title: "Study Centre",
      description:
        "Bringing quality learning support to children in remote villages.",
      href: "/study-centres",
    },
    {
      title: "Nurture Scholarship & Support",
      description:
        "Funding education for deserving students across South India (Kerala, Tamil Nadu, Andhra Pradesh and Karnataka), with continuous care and guidance for every scholarship student.",
      href: "/nurture",
    },
    {
      title: "Lead Academy",
      description:
        "Training the leaders shaping education and social work.",
      href: "/programs",
    },
    {
      title: "Farm Tour & Farm Volunteering",
      description:
        "A day of joy for those often overlooked.",
      href: "/programs",
    },
    {
      title: "Social Services",
      description:
        "Responding wherever the need is greatest.",
      href: "/contact",
    },
  ],
  quote: {
    text: "Every centre we open, every scholarship we fund, every outing we organize — starts with someone who chose to care.",
    attribution: "Marrian Foundation",
    cta: { label: "Join the Mission", href: "/contact" },
  },
  emotional: {
    eyebrow: "Our Belief",
    title: "Real impact requires more than good intentions",
    body: "It requires consistent, on-ground presence and follow-through — from remote village classrooms to old age homes, from scholarship students to the leaders who train the next generation of changemakers.",
    highlights: [
      {
        label: "On-ground presence",
        detail: "We stay close to the people and places we serve, week after week.",
      },
      {
        label: "Follow-through",
        detail: "Support does not end at enrolment — it continues from classroom to career.",
      },
      {
        label: "With love to spread love",
        detail: "Every act of care is rooted in dignity, humaneness, and structured action.",
      },
    ],
  },
  stories: [
    {
      quote:
        "In that moment, he understood that the purpose of living is giving.",
      role: "Our Story · The Beginning",
    },
    {
      quote:
        "The story was never really about the money. It was always about the heart.",
      role: "Marrian Foundation",
    },
    {
      quote:
        "A boy who chose to give. A man who built a foundation on it.",
      role: "Our Story",
    },
  ],
};

export const about = {
  timeline: {
    eyebrow: "Our Story",
    title: "The Beginning Before the Beginning",
    intro:
      "Two years as Marrian Foundation. A lifetime of giving. Long before Marrian Foundation had a name, it had a heartbeat — the heartbeat of a young boy who learned that what matters most is not what you have, but what you choose to do with it.",
    milestones: [
      {
        id: "st-josephs",
        year: "Beginning",
        title: "St. Joseph's, Coimbatore",
        body: "He grew up in a family that struggled financially, studying at St. Joseph's, Coimbatore, with one clear goal in mind: work hard, get a good job, build a stable life. But one ordinary day, everything shifted.",
        mediaLabel:
          "Image Placeholder: [Historical — St. Joseph's / early life context]",
      },
      {
        id: "500-note",
        year: "Turning Point",
        title: "The ₹500 Note",
        body: "He found a ₹500 note on the road, walked into a nearby old age home, and gave it away. What he saw there changed him — elders the institution could barely accommodate, lives the world had quietly stopped noticing. \"In that moment, he understood that the purpose of living is giving.\" Every weekend after that belonged to that home. He helped elders bathe and shave — simple acts of care given freely, with no money, no resources. Just love.",
        mediaLabel:
          "Image Placeholder: [Symbolic — Old age home visit / act of giving]",
      },
      {
        id: "palakkad-centre",
        year: "Growth",
        title: "A Study Centre at Home",
        body: "That seed grew into a small study centre at his own home in Palakkad, where village children came to study and grow. Several of them now work at some of the country's biggest companies.",
        mediaLabel:
          "Image Placeholder: [Historical — Early Palakkad study centre at home]",
      },
      {
        id: "dreams-alive",
        year: "2011",
        title: "Dreams Alive",
        body: "In 2011, that same spirit grew further — into Dreams Alive: Be Human and Do or Die Trust, taking weekend visits to old age homes and orphanages across Coimbatore. It was built on a simple belief: that presence and dignity could change a life as much as money could.",
        mediaLabel:
          "Image Placeholder: [Contemporary — Dreams Alive / community visits]",
      },
      {
        id: "foundation",
        year: "19 July 2024",
        title: "A Name Changed. A Mission Continued.",
        body: "Marrian Foundation was registered on our CEO's 39th birthday — 19th July 2024. Not the start of something new, but the next chapter of a story already being written — in a child handed a scholarship, a grandmother given a day of joy at Marrian Farms, a rural youth handed a job and a purpose at a study centre. The name changed. The mission never did.",
        mediaLabel:
          "Image Placeholder: [Foundation registration / Marrian Foundation identity]",
      },
    ],
  },
  closingLines: [
    "A boy who chose to give.",
    "A man who built a foundation on it.",
    "The story was never really about the money. It was always about the heart.",
  ],
  visionMission: {
    vision: {
      title: "Vision",
      items: [
        "To nurture a compassionate and inclusive society where every individual, regardless of background or circumstance, has access to equal opportunity, and the support needed to realise their full potential.",
        "We envision communities strengthened by education, guided by ethical leadership, and uplifted through collective responsibility and care.",
      ],
    },
    mission: {
      title: "Mission",
      items: [
        "Supporting the education and holistic development of children and youth from economically disadvantaged backgrounds.",
        "Building responsible and value-driven leaders for future generations.",
        "Providing care, protection, and assistance to vulnerable individuals and families.",
        "Strengthening institutions and communities through sustainable partnerships.",
        "Creating long-term impact through transparency, accountability, and compassionate service.",
      ],
      closing:
        "Our mission is not limited to offering aid; it is to build pathways of stability, self-reliance, and hope that empower individuals to thrive with confidence and dignity.",
    },
  },
  approach: [
    {
      title: "Monitoring",
      description:
        "Close, day-to-day oversight of every active program.",
    },
    {
      title: "Strategic Planning",
      description:
        "Every initiative is designed with clear, measurable outcomes.",
    },
    {
      title: "On-Ground Execution",
      description:
        "From project planning to implementation, our team stays hands-on.",
    },
    {
      title: "Sustained Support",
      description:
        "We stay engaged with the people we support well beyond the first intervention.",
    },
  ],
  team: [
    {
      name: "Founder / Trustee",
      role: "Leadership",
      bio: "Placeholder: Founder/trustee name, photo, and short bio to be added by the Foundation.",
    },
    {
      name: "CEO",
      role: "Leadership",
      bio: "Placeholder: CEO name, photo, and short bio to be added by the Foundation.",
    },
    {
      name: "Trustees",
      role: "Board",
      bio: "Placeholder: Trustee names, photos, and short bios to be added by the Foundation.",
    },
    {
      name: "Program Team",
      role: "Operations",
      bio: "Placeholder: Program leads and coordinators — names, photos, and short bios.",
    },
  ],
  extras: {
    annualReport: "Annual Report / Souvenir",
    pressMedia: "Press & Media",
  },
};

export const studyCentres = {
  hero: {
    eyebrow: "Study Centres · Palakkad",
    title: "Reaching the Last Mile, One Village at a Time",
    body: "Across Palakkad, Kerala, Marrian Foundation runs 13 active Study Centres spread over 11 villages, currently supporting 224 students and reaching close to 200 families. For many children, the Study Centre is more than a place to study — it's a safe, structured space that fills the gap left by limited access to quality schooling. Our volunteers and coordinators work closely with families to keep attendance steady and address learning gaps early.",
    mediaLabel:
      "Image Placeholder: [Wide banner — Palakkad Study Centre in session]",
    stats: [
      { value: "13", label: "Active Study Centres" },
      { value: "11", label: "Villages covered" },
      { value: "224", label: "Students supported" },
      { value: "~200", label: "Families reached" },
    ],
  },
  dayAtCentre: {
    title: "What Happens at a Study Centre",
    intro:
      "A safe, structured space that fills the gap left by limited access to quality schooling.",
    items: [
      {
        title: "Daily academic support and tuition",
        description:
          "Regular learning support that helps children stay on track with their studies.",
      },
      {
        title: "Structured learning environment",
        description:
          "A safe, organised space designed for focus, growth, and belonging.",
      },
      {
        title: "Close coordination with families",
        description:
          "Volunteers and coordinators work with families to keep attendance steady.",
      },
      {
        title: "Regular progress tracking",
        description:
          "Learning gaps are identified early and addressed with care.",
      },
    ],
  },
  galleryTestimonial: {
    mediaLabels: [
      "Image Placeholder: [Action — Study Centre in session]",
      "Image Placeholder: [Action — Coordinator with students]",
      "Image Placeholder: [Action — Children learning in Palakkad village centre]",
    ],
    quote:
      "For many children, the Study Centre is more than a place to study — it's a safe, structured space that fills the gap left by limited access to quality schooling.",
    coordinator: {
      name: "Centre Coordinator",
      role: "Palakkad Study Centres",
      mediaLabel: "Image Placeholder: [Portrait — Study Centre coordinator]",
    },
  },
  cta: { label: "Support a Study Centre", href: "/contact?purpose=study-centres" },
};

export const nurture = {
  scholarship: {
    eyebrow: "Nurture Scholarship",
    title: "From Access to Opportunity",
    body: [
      "Nurture Scholarship identifies and supports deserving students — primarily from the southern states of India — helping them stay in school and build toward a real future.",
      "Selection is based on need and merit, with the Foundation working directly with families and local coordinators to identify students who would otherwise be at risk of dropping out.",
    ],
    regions: "Kerala, Tamil Nadu, Andhra Pradesh and Karnataka",
    goal: {
      current: 100,
      target: 180,
      label: "Students supported by the end of 2026",
      yearLabel: "2026 Goal",
      progressLabel: "Students already supported",
    },
    mediaLabel:
      "Image Placeholder: [Group — Nurture scholars / student success story]",
    cta: { label: "Sponsor a Student", href: "/contact?purpose=nurture" },
  },
  support: {
    title: "The Care That Doesn't Stop at Enrolments",
    intro:
      "A scholarship alone isn't enough to change a life — sustained support is. Every student under Nurture Scholarship is brought into Nurture Support, Marrian Foundation's ongoing care program. This is the layer that turns a one-time scholarship into a long-term relationship — one that follows the student from classroom to career.",
    features: [
      {
        title: "Constant monitoring",
        description:
          "Close tracking of each student's academic and personal progress.",
      },
      {
        title: "Emergency assistance",
        description:
          "Support during family crises when students need it most.",
      },
      {
        title: "Career guidance",
        description:
          "Career guidance and job opportunity support for long-term pathways.",
      },
      {
        title: "Counselling",
        description:
          "Personal counselling that protects wellbeing alongside academics.",
      },
      {
        title: "Special classes",
        description:
          "Special classes to reinforce learning and close gaps early.",
      },
    ],
    cta: { label: "Learn How You Can Help", href: "/contact?purpose=nurture" },
  },
  successStory: {
    title: "Student success story",
    body: "Placeholder: student success story / testimonial to be added by the Foundation. Nurture Scholarship and Nurture Support walk with each student from access to opportunity — and from classroom to career.",
    attribution: "Nurture Scholar",
    mediaLabel:
      "Image Placeholder: [Portrait — Nurture student success story]",
  },
};

export const programs = {
  leadAcademy: {
    eyebrow: "Lead Academy",
    title: "Training the Leaders Who Train Others",
    body: [
      "Lead Academy trains principals and directors actively working in education and social work — the people whose decisions shape entire institutions.",
      "By investing in leaders, Lead Academy multiplies its own reach — every trained principal or director carries these skills back into the schools and programs they run, extending the impact far beyond the training room.",
    ],
    metrics: [
      { label: "Batches completed", value: "2 batches · 40 members each" },
      { label: "Trainees benefited", value: "120+" },
      { label: "3rd batch begins", value: "4 July 2026" },
    ],
    mediaLabel:
      "Image Placeholder: [Workshop — Lead Academy training session / participant testimonial]",
  },
  farmTours: {
    eyebrow: "Farm Tour & Farm Volunteering",
    title: "A Day of Joy, A Lifetime of Meaning",
    body: "Farm Tour brings a well-planned day of outing, entertainment, and emotional care to residents of old age homes, orphanages, destitute homes, rehabilitation centres, and differently-abled individuals — people who are too often left out of ordinary joys. Every Farm Tour is designed around one simple goal: a day where love and happiness are shared freely, with no conditions attached.",
    targets: [
      { value: "24", label: "Groups this financial year" },
      { value: "25–30", label: "Members per group" },
      { value: "600+", label: "Total beneficiaries" },
    ],
    mediaLabels: [
      "Image Placeholder: [Farm Tour — Joyful outing with elders / residents]",
      "Image Placeholder: [Farm Tour — Group activity at Marrian Farms]",
      "Image Placeholder: [Farm Tour — Recent outing photo gallery]",
    ],
  },
  cta: {
    title: "Ready to equip the next cohort?",
    body: "Nominate a leader, support Lead Academy, volunteer for a Farm Tour, or sponsor a group outing. Every partnership multiplies love into leadership and joy.",
    buttons: [
      { label: "Nominate a Leader", href: "/contact?purpose=lead-academy" },
      { label: "Support Lead Academy", href: "/contact?purpose=lead-academy" },
      { label: "Volunteer for a Farm Tour", href: "/contact?purpose=farm-tours" },
      { label: "Sponsor a Group Outing", href: "/contact?purpose=farm-tours" },
    ],
  },
};

export const contact = {
  initiatives: {
    eyebrow: "Social Initiatives",
    title: "Wherever There's a Need",
    intro:
      "Beyond our core programs, Marrian Foundation responds directly to urgent, on-ground needs. Each initiative may seem small in scale, but for the individual or family on the receiving end, it often makes all the difference.",
    items: [
      {
        title: "Kitchen support to Mother Teresa's Home",
        description: "Direct kitchen support for residents who deserve dignity every day.",
        mediaLabel: "Image Placeholder: [Thumb — Mother Teresa's Home kitchen support]",
      },
      {
        title: "Solar power support for old age homes",
        description: "Clean energy support restoring light and safety for elders.",
        mediaLabel: "Image Placeholder: [Thumb — Solar power at old age home]",
      },
      {
        title: "Diwali celebration with orphaned children",
        description: "Festival joy shared with children who deserve celebration and care.",
        mediaLabel: "Image Placeholder: [Thumb — Diwali with orphaned children]",
      },
      {
        title: "Support to a paralyzed child and their family",
        description: "Targeted assistance for a child and family navigating medical hardship.",
        mediaLabel: "Image Placeholder: [Thumb — Family medical support]",
      },
      {
        title: "Shelter provided to a homeless individual",
        description: "Emergency shelter restoring safety and dignity.",
        mediaLabel: "Image Placeholder: [Thumb — Shelter support]",
      },
      {
        title: "Support to a single mother rebuilding stability",
        description: "Practical care helping a family regain footing and hope.",
        mediaLabel: "Image Placeholder: [Thumb — Single mother support]",
      },
      {
        title: "Support to children from Northeast India",
        description: "Care and opportunity extended to children from Northeast India.",
        mediaLabel: "Image Placeholder: [Thumb — Northeast India children support]",
      },
      {
        title: "Water purifier installed for a school",
        description: "Safe drinking water protecting children's health at school.",
        mediaLabel: "Image Placeholder: [Thumb — School water purifier]",
      },
      {
        title: "Library facilities developed for a school",
        description: "Learning resources that open doors to reading and growth.",
        mediaLabel: "Image Placeholder: [Thumb — School library facilities]",
      },
    ],
    ctas: [
      { label: "Report a Need", href: "/contact?purpose=social-initiatives" },
      { label: "Support an Initiative", href: "/contact?purpose=social-initiatives" },
    ],
  },
  form: {
    title: "Contact Us",
    intro:
      "Whether you wish to sponsor a student, support a Study Centre, nominate a leader, volunteer for a Farm Tour, report a need, or simply begin a conversation — we read every message with care.",
    purposes: [
      "General Enquiry",
      "Nurture Scholarship",
      "Study Centres",
      "Lead Academy",
      "Farm Tours",
      "Social Initiatives",
      "Volunteer",
      "Partnership",
      "Report a Need",
    ],
  },
  location: {
    title: "Visit & Connect",
    details: [
      { label: "Address", value: site.address },
      { label: "Email", value: site.email },
      { label: "Phone", value: site.phone },
      { label: "Office hours", value: "Placeholder: office hours to be added by the Foundation" },
      { label: "Social media", value: "Placeholder: social media handles to be added by the Foundation" },
    ],
    mapLabel: "Map Placeholder: [Embedded Google Map frame — Marrian Foundation]",
    mediaLabel:
      "Image Placeholder: [Facility exterior — Marrian Foundation premises]",
  },
};

export const gallery = {
  title: "Moments of love in motion",
  intro:
    "A living archive of Study Centres, Farm Tours, Lead Academy cohorts, and Social Initiatives. Images will replace these structural placeholders as media is finalised.",
  filters: [
    "All",
    "Study Centres",
    "Farm Tours",
    "Lead Academy",
    "Social Initiatives",
  ] as const,
  items: [
    { id: "sc-1", category: "Study Centres", label: "Image Placeholder: [Study Centres — Classroom learning]" },
    { id: "sc-2", category: "Study Centres", label: "Image Placeholder: [Study Centres — Mentor with students]" },
    { id: "sc-3", category: "Study Centres", label: "Image Placeholder: [Study Centres — Palakkad village centre]" },
    { id: "sc-4", category: "Study Centres", label: "Image Placeholder: [Study Centres — Progress tracking session]" },
    { id: "ft-1", category: "Farm Tours", label: "Image Placeholder: [Farm Tours — Outing with elders]" },
    { id: "ft-2", category: "Farm Tours", label: "Image Placeholder: [Farm Tours — Marrian Farms activity]" },
    { id: "ft-3", category: "Farm Tours", label: "Image Placeholder: [Farm Tours — Joyful beneficiaries]" },
    { id: "la-1", category: "Lead Academy", label: "Image Placeholder: [Lead Academy — Training workshop]" },
    { id: "la-2", category: "Lead Academy", label: "Image Placeholder: [Lead Academy — Principals & directors]" },
    { id: "la-3", category: "Lead Academy", label: "Image Placeholder: [Lead Academy — Cohort portrait]" },
    { id: "si-1", category: "Social Initiatives", label: "Image Placeholder: [Social — Mother Teresa's Home]" },
    { id: "si-2", category: "Social Initiatives", label: "Image Placeholder: [Social — Solar power support]" },
    { id: "si-3", category: "Social Initiatives", label: "Image Placeholder: [Social — School water purifier]" },
    { id: "si-4", category: "Social Initiatives", label: "Image Placeholder: [Social — School library]" },
    { id: "sc-5", category: "Study Centres", label: "Image Placeholder: [Study Centres — Family coordination]" },
    { id: "ft-4", category: "Farm Tours", label: "Image Placeholder: [Farm Tours — Recent outing gallery]" },
  ],
};
