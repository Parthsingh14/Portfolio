import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuFolderGit2 } from "react-icons/lu";

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
    "FastAPI",
    "REST APIs",
    "Authentication & Authorization",
  ],

  "Database & ORM": [
    "MongoDB",
    "PostgreSQL",
    "Mongoose",
    "SQLAlchemy",
    "Redis",
  ],

  Languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],

  "AI & GenAI": [
    "LLMs",
    "LangChain",
    "LangGraph (Basics)",
    "RAG",
    "Prompt Engineering",
    "AI Agents",
  ],

  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Streamlit",
    "Vercel",
    "Render",
  ],
};

// A fitting file extension per category — turns the sidebar into a
// believable little project tree instead of a generic tab list.
const extensionMap = {
  Frontend: "jsx",
  Backend: "js",
  "Database & ORM": "sql",
  Languages: "md",
  "AI & GenAI": "ipynb",
  "Tools & Platforms": "yml",
};

const categories = Object.keys(skillsData).map((label) => ({
  label,
  ext: extensionMap[label] || "txt",
  skills: skillsData[label],
}));

function Skills() {
  const [active, setActive] = useState(categories[0].label);
  const activeCategory =
    categories.find((c) => c.label === active) || categories[0];

  const codeLines = [
    { id: "header", text: "export const skills = [", indent: false },
    ...activeCategory.skills.map((skill, i) => ({
      id: `skill-${i}`,
      text: skill,
      indent: true,
    })),
    { id: "footer", text: "];", indent: false },
  ];

  return (
    <div className="relative bg-transparent text-[var(--text-primary)]">
      <section id="skills" className="relative px-6 py-20 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[var(--text-secondary)] lg:text-2xl">
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
            Skills
          </motion.span>

          <span className="font-mono text-[var(--text-secondary)] lg:text-2xl">
            {" "}
            = () =&gt; {"{"}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 ml-1 font-mono text-xs text-[var(--text-secondary)] sm:text-sm"
        >
          // {categories.length} modules, {Object.values(skillsData).flat().length} skills — pick a file
        </motion.p>

        {/* File tree + code viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:grid-cols-[240px_1fr]"
        >
          {/* Sidebar: category files */}
          <div className="border-b border-white/10 bg-white/[0.03] lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-[var(--text-secondary)]">
              <LuFolderGit2 className="text-sm" />
              <span className="font-mono">skills/</span>
            </div>

            <div className="flex gap-1 overflow-x-auto px-2 py-2 lg:flex-col lg:overflow-visible">
              {categories.map((cat) => {
                const isActive = cat.label === active;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActive(cat.label)}
                    className={`group flex shrink-0 items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left font-mono text-xs transition-all duration-200 sm:text-sm lg:w-full ${
                      isActive
                        ? "bg-white/10 text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:bg-white/5 hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <span className="flex items-center gap-2 whitespace-nowrap">
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200 ${
                          isActive
                            ? "bg-[var(--primary)]"
                            : "bg-white/20 group-hover:bg-white/40"
                        }`}
                      />
                      {cat.label}
                      <span className="text-[var(--text-secondary)]">
                        .{cat.ext}
                      </span>
                    </span>
                    <span className="hidden shrink-0 rounded-full border border-white/10 px-1.5 py-0.5 text-[10px] text-[var(--text-secondary)] lg:inline-block">
                      {cat.skills.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Code viewer */}
          <div className="min-w-0">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="font-mono text-xs text-[var(--text-secondary)] sm:text-sm">
                {activeCategory.label}.{activeCategory.ext}
              </span>
              <span className="w-9" />
            </div>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="px-5 py-6 font-mono text-xs leading-8 sm:text-sm"
                >
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={line.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-4"
                    >
                      <span className="w-4 shrink-0 select-none text-right text-[var(--text-secondary)]/50">
                        {index + 1}
                      </span>

                      {line.indent ? (
                        <span className="whitespace-pre-wrap">
                          <span className="text-[var(--text-secondary)]">
                            {"  "}
                          </span>
                          <span style={{ color: "var(--primary)" }}>
                            &quot;{line.text}&quot;
                          </span>
                          <span className="text-[var(--text-secondary)]">
                            ,
                          </span>
                        </span>
                      ) : (
                        <span style={{ color: "var(--secondary)" }}>
                          {line.text}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

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

          <div className="mt-8 flex justify-center">
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Skills;