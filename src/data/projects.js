import {
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiJsonwebtokens,
  SiCloudinary,
  SiSwagger,
  SiNextdotjs,
  SiMysql,
  SiLaravel,
} from "react-icons/si";


export const TECH_ICONS = {
  react: { label: "React", Icon: SiReact, color: "#61DAFB" },
  flutter: { label: "Flutter", Icon: SiFlutter, color: "#02569B" },
  nodejs: { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  express: { label: "Express.js", Icon: SiExpress, color: "var(--node-icon)" },
  postgresql: { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  jwt: { label: "JWT", Icon: SiJsonwebtokens, color: "var(--node-icon)" },
  cloudinary: { label: "Cloudinary", Icon: SiCloudinary, color: "#3448C5" },
  swagger: { label: "Swagger", Icon: SiSwagger, color: "#85EA2D" },
  nextjs: { label: "Next.js", Icon: SiNextdotjs, color: "var(--node-icon)" },
  mysql: { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
  laravel: { label: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
};


import zakat1 from "../assets/projects/zakat-1.png";
import zakat2 from "../assets/projects/zakat-4.png";
import zakat3 from "../assets/projects/zakat-3.png";

import zeroWaste1 from "../assets/projects/zerowaste_1.jpg";
import zeroWaste2 from "../assets/projects/zerowaste_2.jpg";

import post1 from "../assets/projects/algerpost_1.png";
import post2 from "../assets/projects/algerpost_2.png";
import post3 from "../assets/projects/algerpost_4.jpg";

import event1 from "../assets/projects/eventsphere_1.png";
import event2 from "../assets/projects/eventsphere_2.png";

export const PROJECTS = [
  {
    id: "zakat-aid",
    number: "01",
    title: "Zakat Aid",
    type: "Full-Stack Web Application",
    meta: "Internship · 2 Months",
    role: "Full-Stack Developer",
    description:
      "A full-stack platform for managing financial aid applications for students. It centralizes the entire process, from application submission and document collection to volunteer review, commission decisions, fund disbursement, and follow-up.",
    features: [
      "Public application and renewal forms",
      "Volunteer review and application management",
      "Commission decision and fund management",
      "Organization and user management",
      "PDF/CSV exports and audit tracking",
      "Automated renewal and notification workflows",
    ],
    tech: ["react", "nodejs", "express", "postgresql", "jwt", "cloudinary", "swagger"],
    achievement: null,
    github: "https://github.com/cssafia/zakat_managemnet",
    demo: "https://zakat-managemnet.vercel.app/",
    mainImage: zakat1,
    gallery: [zakat1, zakat2, zakat3],
  },
  {
    id: "zerowaste",
    number: "02",
    title: "ZeroWaste",
    type: "Mobile & Web Application",
    meta: "University Project",
    role: "Frontend Mobile Developer",
    description:
      "A platform designed to reduce food waste by connecting donors, organizations, and beneficiaries to facilitate the donation and redistribution of surplus food. Includes a Flutter mobile app and a Next.js web platform for complete management of donations, reservations, organizations, and users.",
    features: [
      "Food donation and reservation",
      "Organization and user management",
      "Donation tracking",
      "Notifications and real-time interactions",
      "Maps and location-based features",
      "Management dashboard",
    ],
    tech: ["flutter", "nextjs", "express", "mysql"],
    achievement: null,
    github: "https://github.com/Project1cs14/Frontend_mobile",
    mainImage: zeroWaste1,
    gallery: [zeroWaste1, zeroWaste2],
  },
  {
    id: "algeria-post",
    number: "03",
    title: "Algeria Post",
    type: "Hackathon Project",
    meta: "Community Engagement Track",
    role: "Frontend Developer",
    description:
      "A digital platform designed to improve citizen awareness and engagement with Algeria Post services. Users can discover news and services, share ideas and suggestions, collaborate with Algeria Post, submit complaints, and interact with an integrated chatbot. A key feature lets users check the availability and operational status of nearby ATMs.",
    features: [
      "Algeria Post news and service updates",
      "Citizen ideas and suggestions",
      "Citizen–Algeria Post collaboration",
      "Complaint management",
      "AI chatbot",
      "ATM availability and status checking",
    ],
    tech: ["react", "laravel", "mysql"],
    achievement: "🥉 3rd Place — Community Engagement Track",
    github: "https://github.com/hamida2004/AlgPoste",
    demo: "https://hamida2004.github.io/client_innovposte/",
    mainImage: post1,
    gallery: [post1, post2, post3],
  },
  {
    id: "eventsphere",
    number: "04",
    title: "EventSphere",
    type: "Mobile & Web Event Management Platform",
    meta: "University Project · 2CP",
    role: "Frontend Mobile Developer",
    description:
      "A platform designed to centralize event creation, discovery, and booking for clubs, organizations, and event organizers. Organizers can publish and manage events, while users can discover events, view details, and book their participation.",
    features: [
      "Event creation and publishing",
      "Event management for clubs and organizations",
      "Event discovery and search",
      "Event details and schedules",
      "User bookings and reservations",
      "Participant management",
    ],
    tech: ["react", "laravel", "mysql"],
    achievement: null,
    github: "https://github.com/project2cp/eventsphere",
    demo: "https://project2cp.github.io/eventsphere/",
    mainImage: event1,
    gallery: [event1, event2],
  },
];