"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Namaste",
  "Hello",
  "こんにちは",
  "Hola",
  "Bonjour",
  "Ciao",
  "안녕하세요",
];

function IntroLoader({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]"
    >
      <div className="relative">
        {/* subtle glow */}
        <div className="absolute inset-0 blur-3xl opacity-20 bg-[var(--primary)] rounded-full" />

        <h1 className="relative flex items-center text-lg md:text-2xl font-light text-[var(--text-primary)]">
          <span className="mr-2 text-[var(--text-secondary)]">
            Parth Says:
          </span>

          <span className="inline-block min-w-[120px] text-[var(--primary)] font-medium">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: -90 }}
                transition={{ duration: 0.15 }}
                className="inline-block"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </div>
    </motion.div>
  );
}

export default IntroLoader;