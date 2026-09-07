import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "../common/Reveal";
import { TECH_ICONS } from "../../data/projects";

const MAX_VISIBLE_TECH = 4;

/**
 * The timeline teaser: image, title, a few tech pills, quick GitHub/demo
 * links. Everything else (full description, features, full tech list)
 * lives in ProjectModal — clicking anywhere on the card (except the two
 * link buttons) opens it.
 *
 * The image wrapper carries a layoutId shared with ProjectModal's gallery,
 * so Framer Motion animates it growing from this exact position/size into
 * the modal instead of the modal just appearing centered on screen.
 */
export default function ProjectCard({ project, onOpen }) {
  const { number, title, type, meta, tech, achievement, github, demo, mainImage } = project;
  const visibleTech = tech.slice(0, MAX_VISIBLE_TECH);
  const extraCount = tech.length - visibleTech.length;

  return (
    <Reveal as="div" trigger="inView" delay={0.1}>
      <article
        onClick={() => onOpen(project)}
        className="group cursor-pointer rounded-2xl border border-border bg-surface overflow-hidden
                   transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:[border-color:var(--accent)]"
      >
        <motion.div layoutId={`project-image-${project.id}`} className="aspect-[4/3] overflow-hidden">
          <img
            src={mainImage}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold tracking-wide" style={{ color: "var(--accent)" }}>
              {number}
            </span>
            {/* stopPropagation so these don't also trigger the modal */}
            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} on GitHub`}
                  className="p-1.5 rounded-full border border-border hover:border-rose transition-colors"
                >
                  <FaGithub size={14} />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} live demo`}
                  className="p-1.5 rounded-full border border-border hover:border-rose transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
            {type} · {meta}
          </p>

          {achievement && (
            <span
              className="inline-block text-xs font-medium px-2.5 py-1 rounded-pill mb-3"
              style={{
                background: "color-mix(in srgb, var(--accent-rose) 15%, transparent)",
                color: "var(--accent-rose)",
              }}
            >
              {achievement}
            </span>
          )}

          <div className="flex flex-wrap gap-1.5">
            {visibleTech.map((id) => {
              const t = TECH_ICONS[id];
              if (!t) return null;
              return (
                <span
                  key={id}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-pill text-xs border border-border"
                >
                  <t.Icon size={12} style={{ color: t.color }} />
                  {t.label}
                </span>
              );
            })}
            {extraCount > 0 && (
              <span
                className="inline-flex items-center px-2 py-1 rounded-pill text-xs border border-border"
                style={{ color: "var(--text-muted)" }}
              >
                +{extraCount} more
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}