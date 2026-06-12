"use client";

import { LuImport } from "react-icons/lu";
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

const name = "Parth Singh";

const taglineLines = [
  "Building Scalable Web Applications & GenAI",
  "Solutions with LLMs, LangChain.js",
  "and Modern Full-Stack Technologies",
];

const shortDescription =
  "I am an AI-Full Stack Developer and currently an Associate System Engineer (Trainee) at IBM, passionate about blending modern web technologies with Generative AI. From building multi-LLM playgrounds and scalable content platforms to integrating LangChain.js and AI pipelines into real-world systems, I focus on crafting products that are intelligent, scalable, and reliable.";

function Hero() {
  return (
    <div className="relative">
      <FloatingIcons />

      <section
        className="relative flex min-h-screen items-center pt-24 md:pt-28"
        id="home"
      >
        <div className="mx-5 flex max-w-6xl flex-col justify-center sm:mx-10 md:mx-20 lg:mx-32">
          {/* Terminal style whoami */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <span className="mr-2 font-mono text-[var(--primary)]">$</span>

            <motion.p
              whileHover={{
                scale: 1.03,
              }}
              className="font-mono text-sm tracking-wider text-[var(--text-primary)] sm:text-base"
            >
              whoami
            </motion.p>
          </motion.div>

          {/* Small intro */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-sm uppercase tracking-[0.25em] text-[var(--secondary)] sm:text-base"
          >
            AI Full Stack Developer
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex flex-wrap items-end gap-3 text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl"
          >
            <span>
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                    },
                  }}
                  className="inline-block cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>

            <span className="mb-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-normal text-[var(--text-secondary)] backdrop-blur-md">
              IBM (Trainee)
            </span>
          </motion.h1>

          {/* Tagline */}
          <div className="max-w-5xl text-xl font-semibold leading-relaxed tracking-wide text-[var(--text-primary)] sm:text-2xl lg:text-5xl">
            {taglineLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5 + index * 0.2,
                }}
              >
                {line.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    whileHover={{
                      color: "#3B82F6",
                      scale: 1.08,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    className="inline-block cursor-pointer"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.p>
            ))}
          </div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-8"
          >
            <a
              href="/Parth_Singh Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-[var(--text-primary)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)] sm:text-base"
            >
              Resume
              <motion.span
                whileHover={{
                  scale: 1.15,
                  rotate: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <LuImport className="text-lg text-[var(--primary)]" />
              </motion.span>
            </a>
          </motion.div>

          {/* Description */}
          <div className="mt-8 max-w-3xl text-sm leading-8 text-[var(--text-secondary)] sm:text-base md:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.7,
              }}
            >
              {shortDescription.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    color: "#7C3AED",
                    scale: 1.03,
                    transition: {
                      duration: 0.15,
                    },
                  }}
                  className="inline-block cursor-pointer"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
