import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";
import FloatingIcons from "./FloatingIcons";

const experienceData = [
  {
    id: 0,
    role: "Associate System Engineer",
    company: "IBM",
    period: "May 2026 - Present",
    description: [
      "Successfully completed IBM's SAP SCM MM training program and cleared the internal assessment.",
      "Developed a strong understanding of enterprise procurement, inventory management, and business processes within SAP MM.",
      "Currently on the bench, focusing on strengthening Full Stack Development, Data Structures & Algorithms, and Generative AI through hands-on projects and continuous learning.",
    ],
  },

  {
    id: 1,
    role: "Frontend & Backend Developer (Internship)",
    company: "Bytemasks",
    period: "April 2025 - July 2025",
    description: [
      "Developed and optimized UI for Monitor (AI monitoring dashboard) and Safe AI (multi-model AI platform) using Next.js and TypeScript.",
      "Implemented features such as Lab, Collaboration, Prompt Library, and enhanced dashboard components.",
      "Contributed to backend APIs using Python FastAPI and PostgreSQL.",
      "Worked on authentication, bookmarking, and sharing systems.",
      "Collaborated in agile workflow with GitHub, standups, and code reviews.",
    ],
  },

  {
    id: 2,
    role: "Full Stack Developer - Shrikart E-commerce",
    company: "Freelance Project",
    period: "May 2025",
    description: [
      "Built a full-featured e-commerce platform using the MERN stack.",
      "Implemented authentication, product management, and order workflows.",
      "Created an admin dashboard for analytics and inventory tracking.",
    ],
  },

  {
    id: 3,
    role: "Frontend Developer - Discovery Drift",
    company: "Freelance Project",
    period: "Feb 2025",
    description: [
      "Developed a responsive travel and service agency portfolio website.",
      "Implemented animations and interactive service galleries.",
      "Optimized layouts for mobile-first responsiveness.",
    ],
  },
];

function Experience() {
  const currentIndex = experienceData.findIndex((exp) =>
    exp.period.includes("Present")
  );
  const [activeId, setActiveId] = useState(
    currentIndex >= 0 ? experienceData[currentIndex].id : experienceData[0].id
  );

  return (
    <div className="relative">
      <FloatingIcons />

      <section id="experience" className="relative px-6 py-24 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[var(--text-secondary)] lg:text-2xl">
            const{" "}
          </span>

          <motion.span
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer text-3xl font-bold md:text-5xl"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Experience
          </motion.span>

          <span className="text-[var(--text-secondary)] lg:text-2xl">
            {" "}
            = () =&gt; {"{"}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 ml-1 text-sm text-[var(--text-secondary)] sm:text-base"
        >
          {experienceData.length} roles across internships, freelance builds,
          and IBM — tap a role to read more.
        </motion.p>

        {/* Vertical ledger */}
        <div className="relative mx-auto max-w-3xl">
          {/* Connecting line */}
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-white/10">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="space-y-3">
            {experienceData.map((exp, index) => {
              const isCurrent = exp.period.includes("Present");
              const isOpen = activeId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative pl-10"
                >
                  {/* Node */}
                  <span
                    className={`absolute left-0 top-3 h-3.5 w-3.5 rounded-full border-2 ${
                      isCurrent
                        ? "border-[var(--primary)] bg-[var(--primary)]"
                        : "border-white/30 bg-[var(--surface,#0a0a0f)]"
                    }`}
                  />

                  <div
                    className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                      isOpen
                        ? "border-[rgba(124,58,237,0.35)] bg-white/[0.06]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20"
                    }`}
                  >
                    {/* Header */}
                    <button
                      type="button"
                      onClick={() => setActiveId(isOpen ? null : exp.id)}
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              isCurrent
                                ? "bg-[rgba(124,58,237,0.18)] text-[var(--primary)]"
                                : "bg-white/10 text-[var(--text-secondary)]"
                            }`}
                          >
                            {exp.company}
                          </span>
                          {isCurrent && (
                            <span className="flex items-center gap-1.5 text-xs text-[var(--secondary)]">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--secondary)]" />
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
                          {exp.period}
                        </p>
                      </div>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-[var(--text-secondary)]"
                      >
                        <LuChevronDown />
                      </motion.span>
                    </button>

                    {/* Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-3 px-5 pb-6 text-sm leading-7 text-[var(--text-secondary)] sm:px-6 md:text-base">
                            {exp.description.map((point, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--secondary)]" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Bracket */}
        <div className="mt-16">
          <span className="text-xl text-[var(--text-secondary)]">{"}"}</span>
        </div>
      </section>
    </div>
  );
}

export default Experience;