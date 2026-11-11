import {
  FiActivity,
  FiArrowUpRight,
  FiAward,
  FiCode,
  FiCommand,
  FiCpu,
  FiGitBranch,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiSend,
  FiShield,
  FiStar,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import {
  SiCplusplus,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLeetcode,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostman,
  SiPython,
  SiRazorpay,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/console-log-life", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/apeksha-jain-b95169295",
    icon: FiLinkedin,
  },
  { label: "LeetCode", href: "https://leetcode.com/u/jainksha8805/", icon: SiLeetcode },
  { label: "Email", href: "mailto:apekshaj8805@gmail.com", icon: FiMail },
];

export const navItems = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Education", href: "education" },
  { label: "Projects", href: "projects" },
  { label: "Achievements", href: "achievements" },
  { label: "Terminal", href: "terminal" },
  { label: "Chess", href: "chess" },
  { label: "Contact", href: "contact" },
];

export const heroRoles = [
  "Full-Stack Developer",
  "Undergraduate Researcher",
  "Payments Systems Engineer",
  "Problem-Solving Focused Engineer",
];

export const heroHighlights = [
  {
    title: "Payments-grade correctness",
    description:
      "Double-entry ledgers, idempotency keys and HMAC-verified webhooks so a transfer can never double-charge.",
  },
  {
    title: "AI-powered products",
    description:
      "Text-to-image SaaS on Workers AI, adaptive interview platforms, and retrieval pipelines built on real evaluation.",
  },
  {
    title: "Published research",
    description:
      "A facet-aware RAG pipeline for IoT security QA — first-author manuscript under revision for ACM DTRAP.",
  },
];

export const heroStats = [
  { label: "Location", value: "India", icon: FiMapPin },
  { label: "Focus", value: "React, TypeScript, Node.js", icon: FiCommand },
  { label: "Current mode", value: "Explainable IoT security research", icon: FiZap },
];

export const aboutParagraphs = [
  "I'm an Integrated B.Tech + M.Tech (IT) student at ABV-IIITM, Gwalior, and most of my work sits where product meets correctness — payments systems where a double charge is unacceptable, and retrieval pipelines where a wrong answer is worse than no answer.",
  "That pushed me toward the unglamorous parts: idempotency keys written in the same transaction as the payment, HMAC-verified webhooks, atomic credit updates, and benchmarks that actually measure whether retrieval improved. PayLite ships with 37 automated CI tests; ICOT-RAG lifted facet recall from 0.69 to 1.00 on a 50-question benchmark.",
  "Alongside that I research explainable IoT cybersecurity QA under Dr. Bhanu Chander, and I keep the fundamentals sharp with daily DSA in C++.",
];

export const aboutStats = [
  { value: "0.69 → 1.00", label: "Facet recall lift · ICOT-RAG benchmark" },
  { value: "Rank 187", label: "ICPC Algo Queen 2026 · College" },
  { value: "365-day", label: "LeetCode badge · year-long streak" },
  { value: "AWS", label: "Certified AI Practitioner" },
];

export const aboutCards = [
  {
    title: "Correctness under concurrency",
    description:
      "Idempotent writes, conditional debits and atomic updates so concurrent requests cannot overdraw a wallet or overspend credits.",
    icon: FiShield,
  },
  {
    title: "Full-stack delivery",
    description:
      "React and Next.js frontends wired to Express APIs, MongoDB persistence, JWT auth and payment gateways — shipped and deployed.",
    icon: FiCode,
  },
  {
    title: "Evidence-driven research",
    description:
      "Retrieval pipelines measured against benchmarks rather than vibes, with results written up for peer review.",
    icon: FiSearch,
  },
];

export const experienceItems = [
  {
    title: "Software Development Intern — Sangillence Pvt. Ltd.",
    period: "May – Jul 2026",
    summary:
      "Built production-ready features for the AI-powered Sangillence Insight System 2026, supporting student assessment and learning analytics.",
    bullets: [
      "Integrated 6+ frontend and backend modules with REST APIs and MongoDB, improving application functionality.",
      "Resolved 20+ software defects through functional testing, strengthening platform stability before deployment.",
      "Worked in a 5-member engineering team across Agile sprints, participating in code reviews and delivering on schedule.",
      "Maintained reusable code and technical documentation across integrated modules under Git-based version control.",
    ],
  },
  {
    title: "Undergraduate Researcher — ABV-IIITM Gwalior",
    period: "May 2026 – Present",
    summary:
      "ICOT-RAG: Explainable IoT Cybersecurity QA, guided by Dr. Bhanu Chander. Python, RAG, ChromaDB, LLMs.",
    bullets: [
      "Built an iterative, facet-aware RAG pipeline that retrieves evidence across IoT attack behaviours, techniques, vulnerabilities, exploits and mitigations.",
      "Integrated 1,837+ documents from IoT-23, MITRE ATT&CK and VARIoT into ChromaDB.",
      "Raised facet recall from 0.69 to 1.00 on a 50-question benchmark.",
      "First-author manuscript under revision for ACM DTRAP.",
    ],
  },
  {
    title: "Hogwarts OS — Hacknovate 6.0",
    period: "Mar – Apr 2025",
    summary:
      "Engineered a Linux Mint customisation suite with a 3-member team during a 48-hour hackathon.",
    bullets: [
      "Created 7 desktop modules with Electron.js, Node.js and Python, including an AI-powered file explorer, a spell-based terminal and a notification centre.",
      "Implemented Agent AI and Akash Chat APIs across all 7 modules for conversational assistance and semantic desktop search.",
      "Delivered a fully integrated prototype inside the 48-hour window by resolving cross-module integration challenges.",
    ],
  },
  {
    title: "Algorithms & DSA Practice",
    period: "Daily habit",
    summary:
      "Consistent C++ problem-solving to sharpen debugging speed, data-structure fluency and implementation discipline.",
    bullets: [
      "Earned the LeetCode 365-Day badge through a year-long daily problem-solving streak.",
      "Applied DSA fundamentals to cleaner state handling and edge-case awareness in product code.",
    ],
  },
];

export const education = {
  institute: "ABV-IIITM, Gwalior",
  instituteFull:
    "Atal Bihari Vajpayee Indian Institute of Information Technology and Management",
  degree: "Integrated B.Tech + M.Tech",
  field: "Information Technology",
  duration: "Aug 2023 – Jun 2028",
  location: "Gwalior, Madhya Pradesh, India",
  badge: "Integrated dual-degree · in progress",
  description:
    "A five-year dual-degree programme combining core computer science with applied software engineering, where coursework in systems, algorithms and databases feeds directly into the projects and research in this portfolio. Previously: Class XII, Board of Secondary Education, Madhya Pradesh — 91%.",
};

export const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
];

export const projects = [
  {
    title: "PayLite",
    category: "UPI-Style Payments Wallet",
    summary:
      "A peer-to-peer payments wallet with unique PayLite IDs, QR scan-to-pay and collect requests, built on a double-entry ledger so every transaction balances. Idempotency keys stored in the same MongoDB transaction as the payment mean 10 concurrent payments never overdraw a wallet.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Razorpay"],
    liveUrl: "https://paylite-drab.vercel.app",
    codeUrl: "https://github.com/console-log-life/paylite",
    accent: "from-emerald-400/30 via-teal-400/20 to-cyan-400/25",
    badge: "Featured build",
    visual: "Scan > Pay > Settle",
    image: null,
  },
  {
    title: "ICOT-RAG",
    category: "Explainable IoT Security QA · Research",
    summary:
      "An iterative, facet-aware RAG pipeline that retrieves evidence across IoT attack behaviours, techniques, vulnerabilities, exploits and mitigations. 1,837+ documents from IoT-23, MITRE ATT&CK and VARIoT in ChromaDB; facet recall raised from 0.69 to 1.00 on a 50-question benchmark.",
    stack: ["Python", "RAG", "ChromaDB", "LLMs"],
    liveUrl: null,
    codeUrl: "https://github.com/console-log-life/ICOT-RAG",
    accent: "from-sky-400/30 via-indigo-400/20 to-violet-400/25",
    badge: "Under review · ACM DTRAP",
    visual: "Retrieve > Verify > Explain",
    image: null,
  },
  {
    title: "Risk Signal Engine",
    category: "Portfolio Stress Testing",
    summary:
      "Turns news and social text into explainable risk signals, then stress-tests a portfolio the moment a high-impact event appears. Built for the S&P Global × CRISIL Code to Connect Hackathon 2026 as an individual submission to the Strategic Portfolio Stress Testing module.",
    stack: ["Python", "NLP", "Streamlit", "Pandas"],
    liveUrl: null,
    codeUrl: "https://github.com/console-log-life/ABVIIITM-Gwalior-Apeksha-Jain-hackathon",
    accent: "from-amber-400/30 via-orange-400/20 to-rose-400/25",
    badge: "S&P Global × CRISIL",
    visual: "Read > Score > Stress",
    image: null,
  },
  {
    title: "EV Fleet Intelligence",
    category: "AI Fleet & Supply Chain Platform",
    summary:
      "An AI platform for industrial EV fleet management and supply chain risk intelligence, aimed at India’s 2030 commercial-EV targets. Seven trained models over 163K rows of real data, served through a FastAPI backend to a React dashboard.",
    stack: ["Python", "FastAPI", "React", "XGBoost", "Tailwind CSS"],
    liveUrl: null,
    codeUrl: "https://github.com/console-log-life/ev-fleet-intelligence",
    accent: "from-lime-400/30 via-emerald-400/20 to-teal-400/25",
    badge: "7 ML models · 163K rows",
    visual: "Ingest > Predict > Act",
    image: null,
  },
  {
    title: "Imagify",
    category: "AI Image Generation SaaS",
    summary:
      "A full-stack text-to-image app on Cloudflare Workers AI (FLUX.1) with a ClipDrop fallback and a paid credit system. Razorpay checkout is secured with server-set pricing, HMAC-SHA256 verification and replay-safe atomic credit updates.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    liveUrl: "https://imagify-project-phi.vercel.app",
    codeUrl: "https://github.com/console-log-life/Imagify-Project",
    accent: "from-fuchsia-400/30 via-violet-400/20 to-cyan-400/25",
    badge: "Live demo",
    visual: "Prompt > Generate > Refine",
    image: null,
  },
  {
    title: "Revela AI",
    category: "Adaptive Interview Platform",
    summary:
      "The Next.js 15 frontend of an adaptive AI interview platform covering candidates, interview sessions, reports and analytics, with typed TypeScript service layers consuming the backend REST services across every dashboard view.",
    stack: ["Next.js", "TypeScript", "REST APIs", "MongoDB"],
    liveUrl: "https://revela-ai-ap-coral.vercel.app",
    codeUrl: "https://github.com/console-log-life/Revela-AI",
    accent: "from-cyan-400/30 via-sky-400/20 to-blue-400/25",
    badge: "Live demo",
    visual: "Ask > Adapt > Report",
    image: null,
  },
  {
    title: "AI Interview Prep",
    category: "Real-Time Voice Interviewer",
    summary:
      "A voice-based AI interviewer that conducts spoken interviews and checks candidate attentiveness, built for realistic practice rather than scripted question lists.",
    stack: ["Next.js", "TypeScript", "Prisma", "Voice AI"],
    liveUrl: "https://ai-interview-prep-peach.vercel.app",
    codeUrl: "https://github.com/console-log-life/AI-Interview-Prep",
    accent: "from-violet-400/30 via-purple-400/20 to-indigo-400/25",
    badge: "Live demo",
    visual: "Speak > Listen > Score",
    image: null,
  },
  {
    title: "Full Stack Web Apps",
    category: "Four Self-Contained Apps",
    summary:
      "An e-commerce store, a social platform, a real-time Kanban board and a WebRTC video-calling app with end-to-end encrypted chat. Built to get right the parts that are easy to read about and hard to implement: a checkout that cannot oversell stock, drag and drop without a library, WebRTC signalling, and AES-GCM encryption the server genuinely cannot read.",
    stack: ["Node.js", "Express", "SQLite", "Socket.io", "WebRTC", "Web Crypto"],
    liveUrl: null,
    codeUrl: "https://github.com/console-log-life/fullstack-web-apps",
    accent: "from-blue-400/30 via-indigo-400/20 to-purple-400/25",
    badge: "4 apps in one repo",
    visual: "Shop > Post > Plan > Call",
    image: null,
  },
  {
    title: "RansomGuard",
    category: "Ransomware Behaviour Detection",
    summary:
      "A cryptography-based ransomware detection toolkit with an entropy analysis engine, attack simulator and evaluation harness, so detection behaviour can be reproduced and measured rather than just claimed.",
    stack: ["Python", "Cryptography", "Entropy Analysis"],
    liveUrl: null,
    codeUrl: "https://github.com/console-log-life/RansomGuard",
    accent: "from-rose-400/30 via-red-400/20 to-orange-400/25",
    badge: "Security tooling",
    visual: "Watch > Detect > Alert",
    image: null,
  },
  {
    title: "Hogwarts OS",
    category: "Desktop Suite · Hacknovate 6.0",
    summary:
      "A Linux Mint customisation suite built with a 3-member team in 48 hours: seven desktop modules including an AI-powered file explorer, a spell-based terminal and a notification centre, with Agent AI and Akash Chat APIs wired across all of them.",
    stack: ["Electron.js", "Node.js", "Python", "Agent AI"],
    liveUrl: null,
    codeUrl: "https://github.com/console-log-life/Hacknovate-6.0-CodeFusion-Hogwart",
    accent: "from-amber-500/30 via-yellow-400/20 to-orange-400/25",
    badge: "48-hour hackathon",
    visual: "Cast > Search > Automate",
    image: null,
  },
  {
    title: "Traveloop",
    category: "Trip Planning & Discovery",
    summary:
      "A travel planning app that pairs flight and hotel datasets with a guided itinerary builder, turning raw travel data into curated trip recommendations.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://traveloop-topaz.vercel.app",
    codeUrl: "https://github.com/console-log-life/Traveloop",
    accent: "from-orange-400/30 via-amber-400/20 to-yellow-400/25",
    badge: "Live demo",
    visual: "Search > Plan > Go",
    image: null,
  },
  {
    title: "Expense Dashboard",
    category: "Spending Analytics",
    summary:
      "An expense tracker that turns raw transactions into category breakdowns and spending trends, with server-backed aggregation behind an interactive charting dashboard.",
    stack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://expense-dash-visualize.vercel.app",
    codeUrl: "https://github.com/console-log-life/expense-dash-visualize",
    accent: "from-teal-400/30 via-cyan-400/20 to-sky-400/25",
    badge: "Live demo",
    visual: "Track > Group > Compare",
    image: null,
  },
  {
    title: "Finlens",
    category: "Finance Dashboard",
    summary:
      "A clean, interactive finance dashboard with a dark editorial aesthetic, role-based UI, persistent state and CSV export.",
    stack: ["React", "JavaScript", "CSV Export"],
    liveUrl: null,
    codeUrl: "https://github.com/console-log-life/finlens",
    accent: "from-slate-400/30 via-sky-400/15 to-indigo-400/25",
    badge: "Dashboard UI",
    visual: "Review > Filter > Export",
    image: null,
  },
  {
    title: "WallCal",
    category: "Interactive Wall Calendar",
    summary:
      "A wall-calendar interface with month-specific hero imagery, a click-to-click day range selector and per-date memos saved locally, built for a frontend engineering assessment.",
    stack: ["React 18", "Vite", "Tailwind CSS"],
    liveUrl: "https://my-wall-calendar-vert.vercel.app",
    codeUrl: "https://github.com/console-log-life/my-wall-calendar",
    accent: "from-pink-400/30 via-rose-400/20 to-amber-400/25",
    badge: "Live demo",
    visual: "Pick > Range > Note",
    image: null,
  },
];

export const achievements = [
  {
    title: "AWS Certified AI Practitioner",
    org: "Amazon Web Services",
    tag: "Certification",
    description:
      "Earned the AWS Certified AI Practitioner certification, validating applied cloud and AI fundamentals.",
    icon: FiCpu,
  },
  {
    title: "ICPC Algo Queen 2026 — Rank 187",
    org: "Amrita Vishwa Vidyapeetham",
    tag: "Competitive Programming",
    description:
      "Placed Rank 187 (College) in the ICPC-endorsed Girls' Programming Cup.",
    icon: FiAward,
  },
  {
    title: "Agent AI Track — Winner",
    org: "Google BigCode",
    tag: "Hackathon",
    description:
      "Won the Agent AI Track at Google BigCode and advanced to the semi-finals.",
    icon: FiStar,
  },
  {
    title: "Hackathon Placements",
    org: "Hackvega 2.0 · Xenith (IEEE JIIT)",
    tag: "Hackathon",
    description:
      "Finalist at Hackvega 2.0 and a Top 5 finish at the Xenith Hackathon hosted by IEEE JIIT.",
    icon: FiTarget,
  },
  {
    title: "LeetCode 365-Day Badge",
    org: "Year-long daily streak",
    tag: "Consistency",
    description:
      "Earned the LeetCode 365-Day badge by maintaining a year-long daily problem-solving streak.",
    icon: FiActivity,
  },
  {
    title: "SheFi Scholar 2024–25",
    org: "SheFi",
    tag: "Scholarship",
    description:
      "Awarded the SheFi Scholar scholarship recognising women building in technology and web3.",
    icon: FiLayers,
  },
  {
    title: "Codess Café Mentee",
    org: "Mentorship programme",
    tag: "Mentorship",
    description:
      "Selected as a Codess Café Mentee for structured guidance in software engineering growth.",
    icon: FiUsers,
  },
  {
    title: "GSSoC & Flipkart GRiD",
    org: "Open source & engineering challenges",
    tag: "Programs",
    description:
      "Participated in GirlScript Summer of Code and Flipkart GRiD, contributing across open-source and product challenges.",
    icon: FiGitBranch,
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: "apekshaj8805@gmail.com",
    href: "mailto:apekshaj8805@gmail.com",
    icon: FiMail,
  },
  {
    label: "Phone",
    value: "+91 99264 04271",
    href: "tel:+919926404271",
    icon: FiPhone,
  },
  {
    label: "GitHub",
    value: "github.com/console-log-life",
    href: "https://github.com/console-log-life",
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/apeksha-jain-b95169295",
    href: "https://www.linkedin.com/in/apeksha-jain-b95169295",
    icon: FiLinkedin,
  },
];

export const skillGroups = [
  { label: "Languages", items: "JavaScript · TypeScript · Java · C++ · Python · SQL" },
  { label: "Web & Frontend", items: "React · Next.js · Tailwind CSS · HTML5 · CSS3" },
  {
    label: "Backend & APIs",
    items: "Node.js · Express · REST APIs · JWT Auth · Payment Gateways",
  },
  { label: "Databases", items: "MongoDB" },
  {
    label: "Core CS",
    items: "DSA · OOP · DBMS · Operating Systems · Computer Networks",
  },
  { label: "Developer Tools", items: "Git · GitHub · Postman · VS Code · Vercel · Render" },
];

// The shared neutral tones keep the globe's icons cohesive against the dark background.
export const skills = [
  {
    title: "JavaScript",
    icon: SiJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    url: "https://www.typescriptlang.org/",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  { title: "Java", icon: SiOpenjdk, url: "https://dev.java/", color: "#d8d2c2", glow: "#a69b7d" },
  { title: "C++", icon: SiCplusplus, url: "https://isocpp.org/", color: "#d8d2c2", glow: "#a69b7d" },
  {
    title: "Python",
    icon: SiPython,
    url: "https://www.python.org/",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  { title: "SQL", icon: SiMysql, url: "https://www.mysql.com/", color: "#d8d2c2", glow: "#a69b7d" },
  { title: "React", icon: SiReact, url: "https://react.dev/", color: "#d8d2c2", glow: "#a69b7d" },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    url: "https://nextjs.org/",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    url: "https://tailwindcss.com/",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  {
    title: "HTML5",
    icon: SiHtml5,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  {
    title: "CSS3",
    icon: SiCss,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  {
    title: "Node.js",
    icon: SiNodedotjs,
    url: "https://nodejs.org/",
    color: "#c7cbb4",
    glow: "#798262",
  },
  {
    title: "Express",
    icon: SiExpress,
    url: "https://expressjs.com/",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    url: "https://www.mongodb.com/",
    color: "#c7cbb4",
    glow: "#798262",
  },
  {
    title: "JWT Auth",
    icon: SiJsonwebtokens,
    url: "https://jwt.io/",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  {
    title: "Razorpay",
    icon: SiRazorpay,
    url: "https://razorpay.com/docs/",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  { title: "Git", icon: SiGit, url: "https://git-scm.com/", color: "#d8d2c2", glow: "#a69b7d" },
  { title: "GitHub", icon: SiGithub, url: "https://github.com/", color: "#d8d2c2", glow: "#a69b7d" },
  {
    title: "Postman",
    icon: SiPostman,
    url: "https://www.postman.com/",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  {
    title: "Vercel",
    icon: SiVercel,
    url: "https://vercel.com/docs",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  {
    title: "Render",
    icon: SiRender,
    url: "https://render.com/docs",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
  {
    title: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/jainksha8805/",
    color: "#d8d2c2",
    glow: "#a69b7d",
  },
];

export const portfolioMeta = {
  name: "Apeksha Jain",
  title: "Full-Stack Developer · Undergraduate Researcher at ABV-IIITM",
  intro:
    "I build full-stack and AI-powered applications — payments wallets, SaaS products and retrieval pipelines — with a bias toward the parts that have to be correct: idempotent writes, verified webhooks and benchmarks that prove the system improved.",
  resumeHref: "/resume.pdf",
  email: "apekshaj8805@gmail.com",
  quote:
    "A double charge is unacceptable and a wrong answer is worse than no answer — that is the standard I build to.",
  primaryCta: { label: "Explore Projects", href: "projects", icon: FiArrowUpRight },
  secondaryCta: { label: "Contact Me", href: "contact", icon: FiSend },
  tertiaryCta: { label: "Download Resume", href: "/resume.pdf", icon: FiAward },
};
