import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectGallery from "./ProjectGallery";
import { TECH_ICONS } from "../../data/projects";

/**
 * Full project detail. The gallery wrapper shares its layoutId with
 * ProjectCard's image, so Framer Motion animates it expanding from the
 * clicked card's position/size rather than the modal just fading in
 * centered on screen. Bottom sheet on mobile, centered panel on desktop.
 */
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-0 bottom-0 sm:inset-0 sm:m-auto z-50 sm:max-w-2xl sm:max-h-[85vh]
                       w-full max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-surface
                       border border-border p-6 sm:p-8"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 rounded-full border border-border hover:border-rose transition-colors bg-surface"
            >
              <X size={18} />
            </button>

            <motion.div layoutId={`project-image-${project.id}`} className="mb-5 rounded-xl overflow-hidden">
              <ProjectGallery images={project.gallery} alt={project.title} />
            </motion.div>

            <span className="text-xs font-semibold tracking-wide" style={{ color: "var(--accent)" }}>
              {project.number}
            </span>
            <h3 className="text-2xl font-bold mt-1 mb-1">{project.title}</h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              {project.type} · {project.meta} · {project.role}
            </p>

            {project.achievement && (
              <span
                className="inline-block text-xs font-medium px-2.5 py-1 rounded-pill mb-4"
                style={{
                  background: "color-mix(in srgb, var(--accent-rose) 15%, transparent)",
                  color: "var(--accent-rose)",
                }}
              >
                {project.achievement}
              </span>
            )}

            <p className="text-sm sm:text-base mb-5" style={{ color: "var(--text-muted)" }}>
              {project.description}
            </p>

            {project.features?.length > 0 && (
              <ul className="mb-5 space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2" style={{ color: "var(--text-muted)" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((id) => {
                const t = TECH_ICONS[id];
                if (!t) return null;
                return (
                  <span
                    key={id}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-pill text-xs border border-border"
                  >
                    <t.Icon size={12} style={{ color: t.color }} />
                    {t.label}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-pill border border-border hover:border-rose transition-colors text-sm font-medium"
                >
                  <FaGithub size={16} /> View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-pill text-sm font-medium"
                  style={{ background: "var(--accent)", color: "var(--bg)" }}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}