import {
  SiReact, SiHtml5, SiCss, SiJavascript, SiFlutter, SiDart,
  SiMongodb, SiMysql, SiPostgresql, SiGit, SiNodedotjs, SiExpress,
  SiSwagger, SiDocker,
} from "react-icons/si";
import { Cloud } from "lucide-react";

// layout: "kite" (main + 3 satellites), "chain" (3 in a row), "solo" (1 node)
export const skillClusters = [
  {
    id: "frontend",
    label: "Frontend",
    layout: "kite",
    nodes: [
      { id: "react", name: "React", Icon: SiReact, color: "#61DAFB", size: "main", slot: "top" },
      { id: "html", name: "HTML", Icon: SiHtml5, color: "#E34F26", size: "small", slot: "left" },
      { id: "css", name: "CSS", Icon: SiCss, color: "#1572B6", size: "small", slot: "right" },
      { id: "js", name: "JavaScript", Icon: SiJavascript, color: "#F0DB4F", size: "small", slot: "bottom" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    layout: "kite",
    nodes: [
      { id: "node", name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E", size: "main", slot: "top" },
      { id: "express", name: "Express", Icon: SiExpress, color: "var(--node-icon)", size: "small", slot: "left" },
      { id: "api", name: "API", Icon: Cloud, color: "var(--node-icon)", size: "small", slot: "right" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    layout: "solo",                           // 🔁 changed from "solo"
    nodes: [
      { id: "flutter", name: "Flutter", Icon: SiFlutter, color: "#02569B", size: "main" },
      // { id: "dart", name: "Dart", Icon: SiDart, color: "#00B4AB", size: "small" },  // 🆕 added
    ],
  },
  {
    id: "data",
    label: "Data",
    layout: "chain",
    nodes: [
      { id: "mongodb", name: "MongoDB", Icon: SiMongodb, color: "#47A248", size: "small" },
      { id: "mysql", name: "MySQL", Icon: SiMysql, color: "#4479A1", size: "main" },
      { id: "postgresql", name: "PostgreSQL", Icon: SiPostgresql, color: "#336791", size: "small" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    layout: "kite",                           
    nodes: [
      { id: "git", name: "Git", Icon: SiGit, color: "#F05032", size: "main" },
      { id: "swagger", name: "Swagger", Icon: SiSwagger, color: "#85EA2D", size: "small" },
      { id: "docker", name: "Docker", Icon: SiDocker, color: "#2496ED", size: "small" },     
    ],
  },
];