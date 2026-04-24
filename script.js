const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = Array.from(document.querySelectorAll("header[id], main section[id]"));
const contactForm = document.querySelector(".contact-form");
const langToggle = document.querySelector(".lang-toggle");
const navbar = document.querySelector(".navbar");

const translations = {
  en: {
    brandName: "اعمار المشرق",
    brandSubtitle: "Consulting & Business Development",
    navHome: "Home",
    navServices: "Services",
    navProjects: "Projects",
    navJourney: "Journey",
    navAbout: "About Us",
    navClients: "Our Clients",
    navContact: "Contact Us",
    langButton: "AR",
    whatsAppButton: "WhatsApp",
    heroEyebrow: "Your consulting partner for growth and transformation",
    heroTitle: "We guide businesses toward clearer decisions, stronger operations, and faster growth.",
    heroText: "At Emmar Al Mashreq, we help companies build actionable plans, improve performance, and prepare for expansion with confidence.",
    bookConsultation: "Book a Consultation",
    exploreServices: "Explore Services",
    chatWhatsApp: "Chat on WhatsApp",
    metricProjects: "Consulting projects",
    metricRetention: "Client retention",
    metricIndustries: "Industries served",
    focusTitle: "What We Deliver",
    focus1: "Practical growth and expansion strategies",
    focus2: "Operational improvement and efficiency",
    focus3: "Digital transformation tied to business goals",
    focus4: "Leadership advisory and change enablement",
    floatingNote: "A clearer user journey from first impression to direct consultation request.",
    introText: "The site now guides visitors from value proposition to trust-building to fast contact conversion.",
    projectsEyebrow: "Selected Work",
    projectsHeroTitle: "Engineering projects that reflect our infrastructure and supervision expertise.",
    projectsHeroText: "A selected portfolio of Emmar Al Mashreq projects in design, supervision, infrastructure development, and site service improvement.",
    projectsListEyebrow: "Projects",
    projectsListTitle: "Selected projects by Emmar Al Mashreq.",
    servicesEyebrow: "Services",
    servicesTitle: "Professional advisory services built around measurable outcomes.",
    servicesText: "We help ambitious organizations turn complex challenges into clear plans and focused execution.",
    service1Title: "Business Strategy",
    service1Text: "Define direction, sharpen priorities, and strengthen your market position.",
    service2Title: "Operations Consulting",
    service2Text: "Improve workflows, reduce friction, and build scalable operating systems.",
    service3Title: "Digital Transformation",
    service3Text: "Align technology choices and process improvements with commercial goals.",
    service4Title: "Market Expansion",
    service4Text: "Plan market entry and expansion with structured, data-backed execution.",
    journeyEyebrow: "Journey",
    journeyTitle: "A smoother journey that helps users know what happens next.",
    journey1Title: "We understand your current situation",
    journey1Text: "We start by identifying your goals, pain points, and business stage.",
    journey2Title: "We define priorities",
    journey2Text: "We highlight the highest-impact opportunities and organize them clearly.",
    journey3Title: "We move into execution",
    journey3Text: "We turn recommendations into practical steps your team can act on.",
    aboutEyebrow: "About Us",
    aboutTitle: "Emmar Al Mashreq connects strategic thinking with real execution.",
    aboutText1: "We believe consulting creates value when ideas are translated into realistic action plans that fit the speed and context of the organization.",
    aboutText2: "That is why we work closely with decision makers to build practical solutions in growth, operations, and transformation.",
    aboutPoint1Title: "Clear Methodology",
    aboutPoint1Text: "We turn complexity into simple, trackable next steps.",
    aboutPoint2Title: "Practical Experience",
    aboutPoint2Text: "Deep understanding of what ambitious businesses need in modern markets.",
    aboutPoint3Title: "Impact Focus",
    aboutPoint3Text: "Every recommendation is tied to a measurable business objective.",
    clientsEyebrow: "Our Clients",
    clientsTitle: "Companies that trusted us to improve performance and drive growth.",
    testimonialText: "\"Emmar Al Mashreq helped us reorganize our operational priorities and shape a clearer growth plan we could actually execute.\"",
    testimonialAuthor: "Executive Director, technology sector client",
    ctaEyebrow: "Start Now",
    ctaTitle: "Looking for a partner to help you take the next step with confidence?",
    contactEyebrow: "Contact Us",
    contactTitle: "Start a direct conversation about your consulting needs.",
    contactText: "Choose the channel that works best for you and we will help define the right next step for your business.",
    directContact: "Direct Contact",
    contactEmail: "Email: info@emaarconsult.com",
    contactPhone: "Phone: 0138877751",
    contactWhatsApp: "WhatsApp: +966 56 378 3551",
    contactLocation: "Location: King Abdulaziz Road, Al Khobar Al Shamalia, Al Khobar 34428",
    emailUs: "Email Us",
    labelName: "Full Name",
    labelEmail: "Email Address",
    labelCompany: "Company",
    labelHelp: "How can we help?",
    placeholderName: "Your name",
    placeholderEmail: "you@example.com",
    placeholderCompany: "Your company",
    placeholderMessage: "Tell us about your consulting needs",
    sendRequest: "Send Request",
    requestSent: "Request Sent",
    requestHint: "Thank you. Your request has been noted and we will get back to you soon.",
    footerIntro: "Professional consulting in growth, operations, and organizational transformation.",
    footerLinksTitle: "Quick Links",
    footerContactTitle: "Contact",
    footerWhatsApp: "WhatsApp Chat",
    footerCopyright: "Copyright 2026 Emmar Al Mashreq. All rights reserved.",
    backToTop: "Back to top"
  },
  ar: {
    brandName: "اعمار المشرق",
    brandSubtitle: "للاستشارات وتطوير الأعمال",
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navProjects: "المشاريع",
    navJourney: "رحلة العمل",
    navAbout: "من نحن",
    navClients: "عملاؤنا",
    navContact: "تواصل معنا",
    langButton: "EN",
    whatsAppButton: "واتساب",
    heroEyebrow: "شريكك الاستشاري للنمو والتحول",
    heroTitle: "نقود الشركات نحو قرارات أوضح، تشغيل أقوى، ونمو أسرع.",
    heroText: "في اعمار المشرق نساعد الشركات والمؤسسات على بناء خطط قابلة للتنفيذ، تحسين الأداء، ورفع الجاهزية للتوسع بثقة.",
    bookConsultation: "احجز استشارة",
    exploreServices: "استعرض الخدمات",
    chatWhatsApp: "تحدث عبر واتساب",
    metricProjects: "مشروع استشاري",
    metricRetention: "استمرارية العملاء",
    metricIndustries: "قطاعا مخدوما",
    focusTitle: "ماذا نقدم؟",
    focus1: "استراتيجيات نمو وتوسع عملية",
    focus2: "تحسين العمليات ورفع الكفاءة",
    focus3: "خطط تحول رقمي مرتبطة بالأهداف",
    focus4: "استشارات قيادة وإدارة تغيير",
    floatingNote: "نحو تجربة عميل أوضح: من أول انطباع حتى طلب الاستشارة.",
    introText: "صممنا الموقع ليقود الزائر بسرعة من التعرف على القيمة، إلى الثقة، ثم إلى التواصل المباشر.",
    projectsEyebrow: "أعمالنا السابقة",
    projectsHeroTitle: "مشاريع هندسية تعكس خبرتنا في البنية التحتية والإشراف.",
    projectsHeroText: "مجموعة مختارة من مشاريع اعمار المشرق في التصميم، الإشراف، تطوير البنية التحتية، وتحسين جودة المواقع والخدمات.",
    projectsListEyebrow: "المشاريع",
    projectsListTitle: "نماذج من مشاريع اعمار المشرق.",
    servicesEyebrow: "الخدمات",
    servicesTitle: "خدمات استشارية احترافية مبنية على نتائج فعلية.",
    servicesText: "نعمل مع المؤسسات الطموحة على تحويل التحديات إلى خطط واضحة وتنفيذ منظم.",
    service1Title: "استراتيجية الأعمال",
    service1Text: "صياغة توجه واضح للنمو، وتحديد الأولويات، وتحسين التمركز التنافسي.",
    service2Title: "الاستشارات التشغيلية",
    service2Text: "تحسين سير العمل، تقليل الهدر، وبناء أنظمة قابلة للتوسع.",
    service3Title: "التحول الرقمي",
    service3Text: "ربط التقنية بالأهداف التجارية واختيار الأدوات والعمليات المناسبة.",
    service4Title: "التوسع وتطوير السوق",
    service4Text: "خطط دخول السوق والتوسع مع رؤية تنفيذية مدعومة بالبيانات.",
    journeyEyebrow: "رحلة العمل",
    journeyTitle: "رحلة واضحة تجعل التواصل معنا أسهل وأسرع.",
    journey1Title: "نفهم وضعك الحالي",
    journey1Text: "نبدأ بفهم أهدافك، التحديات الأساسية، والمرحلة التي تمر بها الشركة.",
    journey2Title: "نحدد الأولويات",
    journey2Text: "نرتب نقاط التأثير الأعلى ونبني خارطة عمل واضحة ومركزة.",
    journey3Title: "ننطلق في التنفيذ",
    journey3Text: "نحوّل التوصيات إلى خطوات قابلة للتطبيق ونتابع التنفيذ بثبات.",
    aboutEyebrow: "من نحن",
    aboutTitle: "اعمار المشرق شريك استشاري يربط بين الرؤية والتنفيذ.",
    aboutText1: "نؤمن أن القيمة الحقيقية في الاستشارات لا تأتي من الأفكار فقط، بل من تحويلها إلى مسارات تنفيذية واضحة تناسب واقع الشركة وسرعة فريقها.",
    aboutText2: "لذلك نعمل بشكل مباشر مع أصحاب القرار لبناء حلول عملية في النمو، التشغيل، والتحول المؤسسي، مع تركيز دائم على النتائج.",
    aboutPoint1Title: "منهج واضح",
    aboutPoint1Text: "نحول التعقيد إلى خطوات مفهومة وسهلة المتابعة.",
    aboutPoint2Title: "خبرة عملية",
    aboutPoint2Text: "فهم عميق لاحتياجات الشركات الطموحة في السوق الحديث.",
    aboutPoint3Title: "تركيز على الأثر",
    aboutPoint3Text: "كل توصية لدينا مرتبطة بهدف عمل قابل للقياس.",
    clientsEyebrow: "عملاؤنا",
    clientsTitle: "شركات وثقت بنا لتطوير الأداء وتحقيق النمو.",
    testimonialText: "\"ساعدنا فريق اعمار المشرق على إعادة تنظيم أولوياتنا التشغيلية وبناء خطة نمو أكثر وضوحا وقابلية للتنفيذ.\"",
    testimonialAuthor: "مدير تنفيذي، عميل في قطاع التقنية",
    ctaEyebrow: "ابدأ الآن",
    ctaTitle: "هل تبحث عن شريك يساعدك على اتخاذ الخطوة التالية بثقة؟",
    contactEyebrow: "تواصل معنا",
    contactTitle: "ابدأ محادثة مباشرة حول احتياجك الاستشاري.",
    contactText: "اختر القناة الأنسب لك وسنساعدك في تحديد الخطوة القادمة المناسبة لعملك.",
    directContact: "بيانات التواصل",
    contactEmail: "البريد الإلكتروني: info@emaarconsult.com",
    contactPhone: "الهاتف: 0138877751",
    contactWhatsApp: "واتساب: +966 56 378 3551",
    contactLocation: "الموقع: طريق الملك عبدالعزيز، الخبر الشمالية، الخبر 34428",
    emailUs: "راسلنا",
    labelName: "الاسم الكامل",
    labelEmail: "البريد الإلكتروني",
    labelCompany: "الشركة",
    labelHelp: "كيف يمكننا مساعدتك؟",
    placeholderName: "اكتب اسمك",
    placeholderEmail: "you@example.com",
    placeholderCompany: "اسم شركتك",
    placeholderMessage: "اخبرنا باحتياجاتك الاستشارية",
    sendRequest: "إرسال الطلب",
    requestSent: "تم إرسال الطلب",
    requestHint: "شكرا لك. تم تسجيل طلبك وسنتواصل معك قريبا.",
    footerIntro: "استشارات احترافية في النمو، التشغيل، والتحول المؤسسي.",
    footerLinksTitle: "روابط سريعة",
    footerContactTitle: "التواصل",
    footerWhatsApp: "محادثة واتساب",
    footerCopyright: "حقوق النشر 2026 اعمار المشرق. جميع الحقوق محفوظة.",
    backToTop: "العودة للأعلى"
  }
};

function applyLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) {
    return;
  }

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.placeholder = dictionary[key];
    }
  });

  localStorage.setItem("site-language", lang);
}

function closeMenu() {
  if (!navMenu || !navToggle) {
    return;
  }

  navMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function setActiveSection() {
  const scrollPosition = window.scrollY + 140;
  let currentId = "home";

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === currentId);
  });
}

function updateNavbarState() {
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  }
}

applyLanguage(localStorage.getItem("site-language") || "ar");
setActiveSection();
updateNavbarState();

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "ar" ? "en" : "ar";
    applyLanguage(nextLanguage);
  });
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
  setActiveSection();
  updateNavbarState();
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const note = contactForm.querySelector(".form-note");
    const currentLanguage = document.documentElement.lang === "ar" ? "ar" : "en";

    if (submitButton) {
      submitButton.textContent = translations[currentLanguage].requestSent;
      submitButton.disabled = true;
    }

    if (note) {
      note.textContent = translations[currentLanguage].requestHint;
    }
  });
}
