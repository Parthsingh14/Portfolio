"use client";
import { LuImport } from "react-icons/lu";
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

const name = "Parth Singh.";
const taglineLines = [
  "Building Scalable Web Applications & GenAI",
  "Solutions by Integrating LLMs, LangChain.js,",
  "and Modern Full-Stack Technologies",
];

function Hero() {
  return (
    <div className="relative">
      <FloatingIcons />
      <section className="relative" id="home">
        <div className="flex flex-col items-start justify-center min-h-screen ml-5 md:ml-40 sm:ml-10">
          {/* Terminal style whoami */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-white text-md sm:text-2xl mb-2 md:mb-4 tracking-wide hover:text-lime-300 hover:scale-105 transition-all duration-300"
          >
            $ whoami
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl sm:text-4xl lg:text-6xl font-extrabold select-none tracking-wider mb-4"
          >
            {name.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ color: "#a3e635" }} // lime-400
                whileHover={{
                  scale: 1.2,
                  color: "#84cc16", // lime-500
                  y: -5,
                  textShadow: "0 0 8px rgba(163, 230, 53, 0.7)",
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                className="inline-block mr-1 cursor-pointer"
                style={{
                  background:
                    "linear-gradient(to right, #a3e635, #65a30d, #a3e635)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Tagline with manual line breaks */}
          <div className="text-lg sm:text-xl lg:text-5xl font-semibold text-gray-300 tracking-wide leading-relaxed">
            {taglineLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 + index * 0.2 }}
              >
                {line.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ color: "#d1d5db" }}
                    whileHover={{
                      color: "#a3e635",
                      scale: 1.2,
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
            transition={{ duration: 0.7, delay: 1.5 }}
            className="mt-6"
          >
            <a
              href="/Parth_Singh Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group flex items-center gap-2 rounded-md border border-lime-400 bg-black 
               px-4 py-2 text-sm sm:px-5 sm:py-3 sm:text-base 
               font-mono text-lime-300 shadow-[0_0_6px_rgba(163,230,53,0.5)] transition-all duration-300 
               hover:bg-lime-400 hover:text-black hover:shadow-[0_0_14px_rgba(163,230,53,1)]"
            >
              <span className="before:content-['$'] before:mr-1 sm:before:mr-2 before:text-lime-400 group-hover:before:text-black">
                Resume
              </span>
              <motion.span
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LuImport className="text-lg sm:text-xl" />
              </motion.span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
