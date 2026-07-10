import { useRef, useState } from "react";
import { PROJECTS } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import FloatingIcons from "./FloatingIcons";

function Projects() {
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredImg, setHoveredImg] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25, mass: 0.4 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 144);
    mouseY.set(e.clientY - rect.top - 200);
  };

  return (
    <div className="relative">
      <FloatingIcons />

      <section className="relative px-6 py-24 md:px-12 lg:px-20" id="projects">
        {/* Heading */}
        <motion.div
          className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-lg text-[var(--text-secondary)] lg:text-2xl">
            const{" "}
          </span>

          <motion.span
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer font-mono text-3xl font-bold md:text-5xl"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            myProjects
          </motion.span>

          <span className="font-mono text-lg text-[var(--text-secondary)] lg:text-2xl">
            {" "}
            = () =&gt; {"{"}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-14 ml-1 font-mono text-xs text-[var(--text-secondary)] sm:text-sm"
        >
          // {String(PROJECTS.length).padStart(2, "0")} things I&apos;ve shipped — hover to preview
        </motion.p>

        {/* Desktop: editorial list with cursor-follow preview */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredId(null)}
          className="relative hidden md:block"
        >
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              onMouseEnter={() => {
                setHoveredId(project.id);
                setHoveredImg(project.imgSrc);
              }}
              className="group relative flex items-center justify-between gap-6 border-b border-white/10 py-7 first:border-t"
            >
              <div className="flex min-w-0 items-baseline gap-6">
                <span className="font-mono text-sm text-[var(--text-secondary)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="truncate text-2xl font-semibold text-[var(--text-primary)] transition-all duration-300 group-hover:tracking-wide lg:text-4xl"
                  style={
                    hoveredId === project.id
                      ? {
                          background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : undefined
                  }
                >
                  {project.title}
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-6">
                {project.tags?.length ? (
                  <div className="hidden items-center gap-2 lg:flex">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                <motion.span
                  whileHover={{ rotate: 45 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--text-primary)] transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]"
                >
                  <LuArrowUpRight />
                </motion.span>
              </div>
            </motion.a>
          ))}

          {/* Floating cursor-follow preview */}
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-10 w-72 overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            style={{ x: springX, y: springY }}
            animate={{
              opacity: hoveredId ? 1 : 0,
              scale: hoveredId ? 1 : 0.9,
            }}
            transition={{ duration: 0.25 }}
          >
            {hoveredImg ? (
              <img src={hoveredImg} alt="" className="h-44 w-full object-cover" />
            ) : null}
          </motion.div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--text-secondary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <LuArrowUpRight className="text-[var(--primary)]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-[var(--text-secondary)]">
                  {project.description}
                </p>
                {project.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Closing bracket */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xl text-[var(--text-secondary)]">
            {"}"}
          </span>
        </motion.div>
      </section>
    </div>
  );
}

export default Projects;