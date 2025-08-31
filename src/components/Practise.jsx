"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function PrimaryPulseButton() {
  const [launched, setLaunched] = useState(false);

  const handleClick = () => {
    setLaunched(true);
    setTimeout(() => setLaunched(false), 3500); // Reset after 3.5s (1.5s delay + 2s flight)
  };

  const particleVariants = {
    initial: { opacity: 0 },
    animate: (i) => ({
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.5],
      x: Math.random() * 40 - 20,
      y: Math.random() * 40 - 20,
      transition: {
        duration: 1.2,
        delay: i * 0.1,
        repeat: Infinity,
        repeatDelay: 1.5,
      },
    }),
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-8 py-4 rounded-xl font-bold 
                 bg-gradient-to-r from-gray-900 via-black to-gray-900 
                 text-white shadow-2xl overflow-hidden group"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-80 group-hover:opacity-100"
        animate={{
          background: [
            "linear-gradient(45deg, #000000, #171717, #000000)",
            "linear-gradient(60deg, #000000, #262626, #000000)",
            "linear-gradient(45deg, #000000, #171717, #000000)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Pulsing lime border */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          boxShadow: [
            "0 0 0px 0px rgba(132, 204, 22, 0.3)",
            "0 0 0px 3px rgba(132, 204, 22, 0.6)",
            "0 0 0px 0px rgba(132, 204, 22, 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          boxShadow: [
            "inset 0 0 10px rgba(0, 0, 0, 0.5)",
            "inset 0 0 20px rgba(0, 0, 0, 0.8)",
            "inset 0 0 10px rgba(0, 0, 0, 0.5)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Particles */}
      {!launched &&
        [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            className="absolute w-1.5 h-1.5 rounded-full bg-lime-400"
            style={{ left: "50%", top: "50%" }}
          />
        ))}

      {/* Button content */}
      <div className="relative z-10 flex items-center justify-center space-x-2">
        {!launched ? (
          <>
            {/* Idle: tilted rocket */}
            <div>
              <Rocket size={20} className="text-lime-400 " />
            </div>
            <span>Launch</span>
          </>
        ) : (
          // Rocket launch animation
          <motion.div
            initial={{ y: 0, opacity: 1, scale: 1, rotate: -45 }}
            animate={[
              {
                rotate: -45, // step 1: straighten
                y: 0,
                opacity: 1,
                scale: 1,
                transition: { duration: 0.25, ease: "easeInOut" },
              },
              {
                y: -200, // step 2: fly up
                opacity: 0,
                transition: { duration: 3, ease: "easeInOut" },
              },
            ]}
          >
            <Rocket size={24} className="text-lime-400" />
          </motion.div>
        )}
      </div>

      {/* Hover shine */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        whileHover={{ translateX: "200%" }}
        transition={{ duration: 0.8 }}
      />
    </motion.button>
  );
}
