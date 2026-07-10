"use client";

import { LuImport, LuTerminal, LuCircleDot } from "react-icons/lu";
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

const name = "Parth Singh";

const taglineLines = [
  "Full Stack Development",
  "Generative AI & Intelligent Systems",
  "Built for Real-World Problems",
];

const shortDescription =
  "I am an Associate System Engineer at IBM with a strong interest in Full Stack Development and Generative AI. I enjoy building scalable web applications, AI-powered tools, and intelligent backend systems using modern technologies. From full-stack platforms to RAG applications and AI agents, I focus on creating software that is practical, reliable, and built to solve real-world problems.";

// Content rendered inside the terminal signature panel
const codeLines = [
  {
    id: "l1",
    content: (
      <span style={{ color: "var(--text-secondary)" }}>
        // currently building
      </span>
    ),
  },
  {
    id: "l2",
    content: (
      <>
        <span style={{ color: "var(--secondary)" }}>const</span>{" "}
        <span style={{ color: "var(--text-primary)" }}>engineer</span> = {"{"}
      </>
    ),
  },
  {
    id: "l3",
    content: (
      <>
        {"  "}role:{" "}
        <span style={{ color: "var(--primary)" }}>
          &apos;Associate System Engineer @ IBM&apos;
        </span>
        ,
      </>
    ),
  },
  {
    id: "l4",
    content: (
      <>
        {"  "}stack: [
        <span style={{ color: "var(--primary)" }}>&apos;React&apos;</span>,{" "}
        <span style={{ color: "var(--primary)" }}>&apos;Next.js&apos;</span>,{" "}
        <span style={{ color: "var(--primary)" }}>&apos;Node.js&apos;</span>,{" "}
        <span style={{ color: "var(--primary)" }}>&apos;Python&apos;</span>],
      </>
    ),
  },
  {
    id: "l5",
    content: (
      <>
        {"  "}focus:{" "}
        <span style={{ color: "var(--primary)" }}>
          &apos;Generative AI &amp; RAG Systems&apos;
        </span>
        ,
      </>
    ),
  },
  {
    id: "l6",
    content: (
      <>
        {"  "}status:{" "}
        <span style={{ color: "var(--primary)" }}>
          &apos;Building something new&apos;
        </span>
        ,
      </>
    ),
  },
  { id: "l7", content: <>{"}"};</> },
];

function Hero() {
  return (
    <div className="relative">
      <FloatingIcons />

      <section
        className="relative flex min-h-screen items-center pt-24 md:pt-28"
        id="home"
      >
        <div className="mx-5 grid w-full max-w-7xl grid-cols-1 items-center gap-14 sm:mx-10 md:mx-16 lg:mx-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* ----------------- LEFT: existing content ----------------- */}
          <div className="flex flex-col justify-center">
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
              className="mb-4 flex flex-wrap items-end gap-3 text-4xl font-bold leading-tight sm:text-6xl lg:text-6xl xl:text-7xl"
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
                @IBM
              </span>
            </motion.h1>

            {/* Tagline */}
            <div className="max-w-5xl text-xl font-semibold leading-relaxed tracking-wide text-[var(--text-primary)] sm:text-2xl lg:text-4xl xl:text-5xl">
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
              
                <a href="/Parth_Singh Resume.pdf"
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

          {/* ----------------- RIGHT: terminal signature panel ----------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            {/* ambient glow behind the card */}
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-3xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary), var(--secondary))",
              }}
            />

            {/* window chrome */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                  <LuTerminal className="text-sm" />
                  <span className="font-mono">whoami.js</span>
                </div>
                <span className="w-9" />
              </div>

              <div className="px-5 py-6 font-mono text-xs leading-7 sm:text-sm">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={line.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.4 + index * 0.18,
                    }}
                    className="whitespace-pre text-[var(--text-primary)]"
                  >
                    {line.content}
                    {index === codeLines.length - 1 && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: 1.4 + codeLines.length * 0.18,
                        }}
                        className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 bg-[var(--primary)] align-middle"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* status strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[var(--text-secondary)] backdrop-blur-md sm:text-sm"
            >
              <LuCircleDot className="text-[var(--primary)]" />
              <span className="font-mono">process exited with code 0</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;