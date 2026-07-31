export type Locale = "fa" | "en" | "zh";

export interface PageMeta {
  title: string;
  description: string;
}

export interface CourseTerm {
  id: string;
  level: string; // e.g. "HSK 1"
  term: string; // e.g. "ترم اول"
  sessions: string; // localized "۱۴ جلسه"
  audience?: string;
  bullets: string[];
  note?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Dictionary {
  locale: Locale;
  dir: "rtl" | "ltr";
  langLabel: string; // shown in the language switcher

  brand: {
    name: string; // مستر چاینیز / MR CHINESE / MR CHINESE 中文教育
    nameShort: string; // compact form for the header
    nameLatin: string; // MR CHINESE
    slogan: string; // main slogan
    sloganAlt: string; // complementary slogan
    sloganIntl: string; // Learn Chinese · Connect Cultures · Create Opportunities
    sloganZh: string; // 学中文 · 连文化 · 创机会
    philosophy: string;
  };

  phone: {
    display: string;
    tel: string; // tel: href value
  };

  nav: {
    home: string;
    courses: string;
    about: string;
    faq: string;
    contact: string;
  };

  cta: {
    consult: string; // درخواست مشاوره
    call: string;
    seeCourses: string;
    aboutFounder: string;
    allFaq: string;
    comingSoon: string;
    consultLine: string; // «برای اطلاع از زمان شروع، ظرفیت و شهریه…»
    invitation: string; // main invitation paragraph
  };

  home: {
    heroKicker: string;
    heroTitle: string;
    heroSub: string;
    intro: { title: string; body: string[] };
    audience: {
      title: string;
      sub: string;
      reasons: string[];
      beginnerNote: string;
    };
    founderTeaser: {
      title: string;
      name: string;
      roles: string;
      body: string;
    };
    advantages: {
      title: string;
      sub: string;
      items: { title: string; body: string }[];
      keyMessage: string;
    };
    coursesTeaser: {
      title: string;
      sub: string;
      cards: { title: string; body: string }[];
    };
    path: {
      title: string;
      sub: string;
      steps: string[];
      beginnerNote: string;
    };
  };

  courses: {
    title: string;
    intro: string[];
    format: { label: string; value: string }[];
    formatNote: string;
    termsTitle: string;
    terms: CourseTerm[];
    hsk3Note: string;
    privateCourse: { title: string; body: string };
    higherLevelsNote: string;
    method: {
      title: string;
      intro: string;
      skillsTitle: string;
      skills: string[];
      toolsTitle: string;
      tools: string[];
      atmosphereTitle: string;
      atmosphere: string;
    };
  };

  about: {
    title: string;
    founder: {
      title: string;
      name: string;
      names: { label: string; value: string }[];
      role: string;
      body: string[];
      quote: string;
    };
    story: {
      title: string;
      body: string[];
    };
    certificates: {
      title: string;
      intro: string;
      items: { title: string; body: string }[];
      disclaimer: string;
    };
  };

  faq: {
    title: string;
    sub: string;
    items: FaqItem[];
  };

  contact: {
    title: string;
    sub: string;
    phoneTitle: string;
    phoneNote: string;
    locationTitle: string;
    location: string;
    locationNote: string;
    socialTitle: string;
    socials: { name: string; handle?: string; href?: string }[];
  };

  footer: {
    tagline: string;
    location: string;
    rights: string;
  };

  meta: {
    siteName: string;
    home: PageMeta;
    courses: PageMeta;
    about: PageMeta;
    faq: PageMeta;
    contact: PageMeta;
  };
}
