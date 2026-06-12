import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

const experienceData = [
  {
    id: 0,
    role: "Associate System Engineer (Trainee)",
    company: "IBM",
    period: "May 2026 - Present",
    description: [
      "Currently undergoing structured training and evaluation as part of onboarding.",
      "Building foundational knowledge in enterprise systems, software development practices, and internal tools.",
      "Preparing for assessment to transition into a full-time engineering role.",
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
  return (
    <div className="relative">
      <FloatingIcons />

      <section
        id="experience"
        className="relative px-6 py-20 md:px-12"
      >
        {/* Heading */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
        >
          <span className="text-[var(--text-secondary)] lg:text-2xl">
            const{" "}
          </span>

          <motion.span
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer text-3xl font-bold md:text-5xl"
            style={{
              background:
                "linear-gradient(135deg, #7C3AED, #3B82F6)",
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

        {/* Timeline */}
        <div className="relative mx-auto max-w-6xl">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              style={{
                transformOrigin: "top",
              }}
            />
          </div>

          <div className="space-y-12 lg:space-y-20">
            {experienceData.map((exp, index) => {
              const isIBM =
                exp.company === "IBM";

              return (
                <motion.div
                  key={exp.id}
                  initial={{
                    opacity: 0,
                    x:
                      index % 2 === 0
                        ? -50
                        : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={`relative flex ${
                    index % 2 === 0
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 lg:block">
                    <div
                      className={`h-5 w-5 rounded-full border-4 ${
                        isIBM
                          ? "border-[var(--primary)] bg-[var(--secondary)]"
                          : "border-white/20 bg-[var(--surface)]"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:border-[rgba(124,58,237,0.3)] hover:shadow-[0_16px_40px_rgba(124,58,237,0.18)] lg:w-[46%] ${
                      isIBM
                        ? "ring-1 ring-[rgba(124,58,237,0.2)]"
                        : ""
                    }`}
                  >
                    {/* Badge */}
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          isIBM
                            ? "bg-[rgba(124,58,237,0.15)] text-[var(--primary)]"
                            : "bg-white/10 text-[var(--text-secondary)]"
                        }`}
                      >
                        {exp.company}
                      </span>

                      <span className="text-sm text-[var(--text-secondary)]">
                        {exp.period}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="mb-4 text-xl font-semibold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>

                    {/* Description */}
                    <ul className="space-y-3 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                      {exp.description.map(
                        (point, i) => (
                          <li
                            key={i}
                            className="flex gap-3"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--secondary)]" />
                            <span>{point}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Bracket */}
        <div className="mt-16">
          <span className="text-xl text-[var(--text-secondary)]">
            {"}"}
          </span>
        </div>
      </section>
    </div>
  );
}

export default Experience;