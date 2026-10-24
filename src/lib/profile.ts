// Bundled image import so the photo ships with the code and works on any
// host (Vercel, Netlify, self-hosted) — not just the Lovable asset CDN.
import portrait from "@/assets/pavan_profile.jpg";

// Single source of truth for every page and the AI assistant.
export const profile = {
  name: "Pavan Bhansali",
  handle: "pavanbhansali",
  photo: portrait,
  role: "Senior Full Stack Engineer and Frontend Expert",
  location: "London, UK",
  tagline: "I design and build calm, fast software for humans.",
  bio: "I work where design meets engineering — turning messy problems into simple interfaces, then shipping them in clean, typed code. Eight years of full stack work across energy and enterprise platforms, currently building for British Petroleum through Infosys.",
  email: "pavanbhansali95@gmail.com",
  phone: "07861146413",
  links: {
    github: "https://github.com/bittu9595",
    linkedin: "https://www.linkedin.com/in/pavan-bhansali-682bb2128",
  },
  available: true,
};

export const skills: { group: string; items: { name: string; level: number }[] }[] = [
  {
    group: "Design",
    items: [
      { name: "UX research", level: 90 },
      { name: "Interaction design", level: 92 },
      { name: "Design systems", level: 85 },
      { name: "Figma", level: 95 },
    ],
  },
  {
    group: "Engineering",
    items: [
      { name: "TypeScript", level: 90 },
      { name: "React", level: 92 },
      { name: "Node.js", level: 78 },
      { name: "Postgres", level: 70 },
    ],
  },
  {
    group: "AI",
    items: [
      { name: "LLM product design", level: 82 },
      { name: "Prompt engineering", level: 80 },
      { name: "RAG pipelines", level: 65 },
    ],
  },
];

export const projects = [
  {
    slug: "plate-lens",
    title: "PlateLens — Food Analyzer",
    year: "2026",
    kind: "AI · Food & recipes",
    summary: "An AI-powered food analyzer that identifies and categorizes ingredients from fridge or food photos using Google Gemini, then suggests recipes with step-by-step instructions from your selected ingredients.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "Google Gemini"],
    link: "https://github.com/bittu9595/Plate-Lens-Food-Analyzer",
    liveUrl: "https://plate-lens-food-analyzer-p4l2.vercel.app/",
    deploymentStatus: "available",
  },
  {
    slug: "ceiling-grid-ui",
    title: "Ceiling Grid Studio",
    year: "2026",
    kind: "Interactive tool · Layout planning",
    summary: "A browser-based ceiling layout editor for architects and engineers, with drag-and-drop placement of lighting, HVAC and safety components, scalable canvas grids, and smooth zoom and pan.",
    stack: ["React", "TypeScript", "Vite", "React Konva", "Zustand"],
    link: "https://github.com/bittu9595/ceiling-grid-ui",
    liveUrl: "https://ceiling-grid-ui.vercel.app",
    deploymentStatus: "available",
  },
  {
    slug: "the-elegence-app",
    title: "Elegance App",
    year: "2025",
    kind: "Fashion · Shopping",
    summary: "A modern fashion-focused web application offering a smooth shopping experience with a responsive interface, reusable React components and accessible, customizable UI elements.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    link: "https://github.com/bittu9595/TheElegenceApp",
    liveUrl: "https://elegenceshop.vercel.app/",
    deploymentStatus: "available",
  },
  {
    slug: "credit-card-app",
    title: "Credit Card Management",
    year: "2022",
    kind: "Full stack · Financial tools",
    summary: "A full-stack credit card management application for adding and viewing cards with cardholder names and withdrawal limits. A Spring Boot backend validates card numbers using the Luhn algorithm and stores records in an H2 database.",
    stack: ["React", "JavaScript", "Java", "Spring Boot", "H2", "Axios"],
    link: "https://github.com/bittu9595/credit-card-app",
    liveUrl: null,
    deploymentStatus: "not-listed",
  },
];

export const experience = [
  {
    when: "2020 — now",
    what: "Senior Full Stack Engineer | Frontend Expert",
    where: "British Petroleum (via Infosys)",
  },
  { when: "2018 — 2020", what: "Full Stack Engineer", where: "LTI Mindtree Ltd" },
];
