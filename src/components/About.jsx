"use client";

import { motion } from "framer-motion";
import { LuBriefcase, LuSparkles } from "react-icons/lu";
import FloatingIcons from "./FloatingIcons";
import ParthCoding from "../assets/Parth.png";

const facts = [
  { label: "Currently", value: "Associate System Engineer @ IBM" },
  { label: "Previously", value: "Full Stack Intern @ Bytemasks" },
  { label: "Focus", value: "Full Stack Development + Generative AI" },
  { label: "Shipped", value: "MindScribe · RAG Assistant · SQL AI Agent" },
];

const AboutMe = () => {
  return (
    <div className="relative bg-transparent text-[var(--text-primary)]">
      <FloatingIcons />

      <section
        id="about"
        className="relative flex flex-col items-center gap-16 px-6 py-24 md:flex-row md:items-start md:px-12 lg:gap-20 lg:px-20"
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 md:order-1 md:flex-1"
        >
          {/* Heading */}
          <div className="mb-8 text-sm sm:text-base lg:text-lg">
            <span className="text-[var(--text-secondary)]">const </span>

            <motion.span
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer text-3xl font-bold md:text-5xl"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              aboutMe
            </motion.span>

            <span className="text-[var(--text-secondary)]">
              {" "}
              = () =&gt; {"{"}
            </span>
          </div>

          {/* Lead statement */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="mb-8 text-xl font-medium leading-relaxed text-[var(--text-primary)] sm:text-2xl md:text-3xl"
          >
            Hey, I&apos;m{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Parth
            </span>{" "}
            — I build software that solves real problems, from full-stack
            platforms to AI agents that actually ship.
          </motion.p>

          {/* Facts */}
          <motion.dl
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
            className="mb-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          >
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--secondary)]">
                  {fact.label}
                </dt>
                <dd className="text-sm text-[var(--text-primary)] sm:text-right sm:text-base">
                  {fact.value}
                </dd>
              </div>
            ))}
          </motion.dl>

          {/* Narrative */}
          <motion.div
            className="space-y-5 text-sm leading-8 text-[var(--text-secondary)] sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>
              I previously worked as a Full Stack Developer Intern at{" "}
              <span className="font-medium text-[var(--text-primary)]">
                Bytemasks
              </span>
              , where I contributed to both frontend and backend development on
              products like{" "}
              <span className="font-medium text-[var(--text-primary)]">
                Monitor
              </span>{" "}
              (analytics dashboard) and{" "}
              <span className="font-medium text-[var(--text-primary)]">
                Safe AI
              </span>
              , gaining hands-on experience in building production-ready
              applications.
            </p>

            <p>
              I&apos;ve built projects including{" "}
              <span className="font-medium text-[var(--text-primary)]">
                MindScribe
              </span>
              , a modern AI-powered blogging platform, a{" "}
              <span className="font-medium text-[var(--text-primary)]">
                RAG-based Internal Knowledge Assistant
              </span>
              , and an{" "}
              <span className="font-medium text-[var(--text-primary)]">
                SQL AI Agent
              </span>
              . Through these projects, I&apos;ve worked with React, Next.js,
              Node.js, TypeScript, Python, PostgreSQL, MongoDB, LangChain, and
              modern LLM workflows.
            </p>

            <p>
              I&apos;m currently focused on strengthening my software
              engineering fundamentals, exploring AI agent architectures, and
              building reliable, scalable applications with clean
              architecture, strong backend systems, and intuitive user
              experiences.
            </p>
          </motion.div>

          <div className="mt-8 text-[var(--text-secondary)]">{"}"}</div>
        </motion.div>

        {/* Image */}
        <div className="order-1 flex justify-center md:order-2 md:sticky md:top-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Offset frame behind the photo */}
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] opacity-60 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary), var(--secondary))",
              }}
            />

            {/* Dot texture accent */}
            <div
              className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(var(--text-secondary) 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            />

            {/* Photo card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <img
                src={ParthCoding}
                alt="Parth Singh coding at his desk"
                className="h-72 w-64 object-cover sm:h-80 sm:w-72 lg:h-[26rem] lg:w-80"
              />

              {/* Role badge overlapping the bottom edge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 backdrop-blur-md"
              >
                <LuBriefcase className="shrink-0 text-[var(--primary)]" />
                <span className="text-xs font-medium text-white sm:text-sm">
                  Associate System Engineer @ IBM
                </span>
              </motion.div>
            </motion.div>

            {/* Floating accent icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <LuSparkles className="text-[var(--primary)]" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;