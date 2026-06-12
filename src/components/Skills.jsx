import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Framer Motion",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "AI Integrations",
    "Rate Limiting",
  ],

  "Database & ORM": [
    "MongoDB",
    "PostgreSQL",
    "Mongoose",
    "Redis (Caching)",
  ],

  Languages: [
    "JavaScript",
    "TypeScript",
    "Java",
  ],

  "AI & GenAI": [
    "LangChain.js",
    "LLM Integration",
    "Generative AI",
    "Prompt Engineering",
  ],

  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Docker",
    "System Design Basics",
    "Deployment",
  ],
};

function Skills() {
  return (
    <div className="relative bg-transparent text-[var(--text-primary)]">
      <section
        id="skills"
        className="relative px-6 py-20 md:px-12"
      >
        {/* Heading */}
        <motion.div
          className="mb-16"
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
              background:
                "linear-gradient(135deg, #7C3AED, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills
          </motion.span>

          <span className="text-[var(--text-secondary)] lg:text-2xl">
            {" "}
            = () =&gt; {"{"}
          </span>
        </motion.div>

        {/* Skill Orbit Cards */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(skillsData).map(
            ([category, skills], catIndex) => (
              <motion.div
                key={category}
                className="relative flex h-[320px] items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: catIndex * 0.08,
                }}
                viewport={{ once: true }}
              >
                {/* Glow */}
                <div className="absolute h-48 w-48 rounded-full bg-[var(--primary)] opacity-5 blur-3xl" />

                {/* Outer Circle */}
                <div className="absolute h-56 w-56 rounded-full border border-white/10" />

                {/* Category */}
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className="z-10 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-[var(--text-primary)] backdrop-blur-md"
                >
                  {category}
                </motion.h3>

                {/* Skills */}
                {skills.map(
                  (skill, skillIndex) => {
                    const angle =
                      skillIndex *
                      (360 / skills.length) *
                      (Math.PI / 180);

                    const radius = 110;

                    const x =
                      radius *
                      Math.cos(angle);

                    const y =
                      radius *
                      Math.sin(angle);

                    return (
                      <motion.div
                        key={skill}
                        className="absolute cursor-default rounded-full border border-white/10 bg-[var(--surface)]/70 px-4 py-2 text-xs text-[var(--text-secondary)] backdrop-blur-md sm:text-sm"
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 0,
                          scale: 0.8,
                        }}
                        whileInView={{
                          x,
                          y,
                          opacity: 1,
                          scale: 1,
                          transition: {
                            delay:
                              skillIndex * 0.05,
                            type: "spring",
                            stiffness: 100,
                          },
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: y - 4,
                          borderColor:
                            "rgba(124,58,237,0.5)",
                          color: "#F3F4F6",
                          boxShadow:
                            "0 8px 24px rgba(124,58,237,0.18)",
                        }}
                      >
                        {skill}
                      </motion.div>
                    );
                  }
                )}
              </motion.div>
            )
          )}
        </div>

        {/* Closing bracket */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xl text-[var(--text-secondary)]">
            {"}"}
          </span>

          <div className="mt-8 flex justify-center">
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Skills;