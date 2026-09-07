// src/components/sections/Projects.jsx
import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Reveal from "../common/Reveal";
import ProjectCard from "../projects/ProjectCard";
import ProjectNode from "../projects/ProjectNode";
import ProjectModal from "../projects/ProjectModal";
import { PROJECTS } from "../../data/projects";

export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 w-full px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        
        {/* Standardized Eyebrow */}
        <Reveal trigger="inView">
          <p className="text-left text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
            PROJECTS
          </p>
        </Reveal>

        {/* Standardized Two-Tone Title */}
        <Reveal trigger="inView" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 text-left text-[var(--text)]">
            A few things <span className="text-[var(--accent)]">I've built</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Timeline progress bar */}
          <div
            className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px"
            style={{ background: "var(--border)" }}
          />
          <motion.div
            className="absolute top-0 left-4 md:left-1/2 w-px h-full origin-top"
            style={{ background: "var(--line)", scaleY: scrollYProgress }}
          />

          <div className="space-y-16 md:space-y-24">
            {PROJECTS.map((project, i) => {
              const onRight = i % 2 === 1;
              return (
                <div
                  key={project.id}
                  className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  <div className="absolute top-6 left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <ProjectNode />
                  </div>

                  <div className={onRight ? "md:col-start-2" : "md:col-start-1"}>
                    <ProjectCard project={project} onOpen={setActiveProject} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}