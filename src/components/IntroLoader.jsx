"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Namaste", "Hello", "こんにちは", "Hola", "Bonjour", "Ciao", "안녕하세요"];

function IntroLoader({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // word flip interval
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // auto close after 2s
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
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <h1 className="text-white text-lg md:text-xl flex items-center">
        <span className="mr-2">Parth Says:</span>
        <span className="w-30 inline-block text-lime-400">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: -90 }}
              transition={{ duration: 0.05 }}
              className="inline-block"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>
    </motion.div>
  );
}

export default IntroLoader;
