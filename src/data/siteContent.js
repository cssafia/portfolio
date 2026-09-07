import { SiReact, SiNodedotjs, SiFlutter, SiMongodb, SiJavascript,SiGit, SiWhatsapp, SiTelegram } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Sparkles, Heart, Radar, Mail } from "lucide-react";

export const TECH_STACK = [
  { id: "react", label: "React", Icon: SiReact, color: "#61DAFB" },
  { id: "nodejs", label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { id: "flutter", label: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { id: "mongodb", label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { id: "javascript", label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { id: "git", label: "git", Icon: SiGit, color: "#F05032" },
];

export const SOCIAL_LINKS = [
  { id: "github", label: "GitHub", Icon: FaGithub, href: "https://github.com/cssafia" },
  { id: "linkedin", label: "LinkedIn", Icon: FaLinkedin, href: "https://www.linkedin.com/in/lounassi-safia-594641259/" },
];



export const contactLinks = [
  {
    id: "github",
    label: "GitHub",
    Icon: FaGithub,
    color: "var(--node-icon)", 
    href: "https://github.com/cssafia",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    Icon: FaLinkedin,
    color: "#0A66C2",
    href: "https://www.linkedin.com/in/lounassi-safia-594641259/",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    Icon: SiWhatsapp,
    color: "#25D366",
    href: "https://wa.me/213675987651", 
  },
  {
    id: "telegram",
    label: "Telegram",
    Icon: SiTelegram,
    color: "#26A5E4",
    href: "https://t.me/safia_lounassi",
  },
  {
    id: "email",
    label: "Email",
    Icon: Mail,
    color: "var(--node-icon)",
    href: "louanssisafia6@gmail.com",
  },
];

export const PILLARS = [
  {
    id: "full-stack",
    title: "Full-Stack",
    description: "Building web & mobile applications, APIs, and complete digital products.",
    Icon: Sparkles,
  },
  {
    id: "building",
    title: "Building",
    description: "Turning ideas into practical, thoughtful solutions.",
    Icon: Heart,
  },
  {
    id: "security",
    title: "Security",
    description: "Exploring how to make the things I build more secure.",
    Icon: Radar,
  },
];