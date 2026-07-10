import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

import { DiJava } from "react-icons/di";
import { SiMongodb, SiDocker } from "react-icons/si";

const icons = [
  {
    Component: FaReact,
    size: 90,
    top: "10%",
    left: "8%",
    delay: 0,
    color: "primary",
  },

  {
    Component: FaNodeJs,
    size: 85,
    top: "20%",
    right: "8%",
    delay: 0.8,
    color: "secondary",
  },

  {
    Component: FaJs,
    size: 75,
    top: "65%",
    left: "10%",
    delay: 1.2,
    color: "secondary",
  },

  {
    Component: FaDatabase,
    size: 80,
    top: "70%",
    right: "12%",
    delay: 1.8,
    color: "primary",
  },

  {
    Component: SiMongodb,
    size: 70,
    top: "40%",
    left: "4%",
    delay: 2,
    color: "primary",
  },

  {
    Component: SiDocker,
    size: 70,
    top: "45%",
    right: "5%",
    delay: 2.4,
    color: "secondary",
  },

  {
    Component: FaGitAlt,
    size: 70,
    bottom: "8%",
    left: "45%",
    delay: 1,
    color: "secondary",
  },

  {
    Component: DiJava,
    size: 85,
    top: "12%",
    left: "45%",
    delay: 1.5,
    color: "primary",
  },
];

// small ambient accent dots scattered for a constellation feel
const dots = [
  { top: "15%", left: "28%", delay: 0.3, size: 5 },
  { top: "32%", right: "28%", delay: 1.1, size: 4 },
  { top: "55%", left: "22%", delay: 0.6, size: 3 },
  { top: "62%", right: "30%", delay: 1.6, size: 5 },
  { top: "80%", left: "35%", delay: 2.1, size: 4 },
  { top: "8%", right: "38%", delay: 1.9, size: 3 },
];

const FloatingIcons = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map(
        ({ Component, size, delay, color, ...position }, index) => {
          const colorVar =
            color === "secondary" ? "var(--secondary)" : "var(--primary)";

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ ...position }}
              animate={{
                y: [0, -20, 0, 12, 0],
                x: [0, 8, 0, -8, 0],
                rotate: [0, 4, -4, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            >
              <div className="relative flex items-center justify-center">
                {/* glow halo pulsing behind the icon */}
                <motion.div
                  className="absolute rounded-full blur-2xl"
                  style={{
                    backgroundColor: colorVar,
                    width: size * 1.6,
                    height: size * 1.6,
                  }}
                  animate={{
                    opacity: [0.05, 0.14, 0.05],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                  }}
                />

                <motion.div
                  style={{ color: colorVar }}
                  animate={{
                    opacity: [0.1, 0.22, 0.1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.4,
                  }}
                >
                  <Component size={size} />
                </motion.div>
              </div>
            </motion.div>
          );
        }
      )}

      {/* twinkling accent dots */}
      {dots.map(({ delay, size, ...position }, index) => (
        <motion.span
          key={`dot-${index}`}
          className="absolute rounded-full bg-[var(--text-primary)]"
          style={{ ...position, width: size, height: size }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        />
      ))}

      {/* ambient glow */}
      <div className="absolute left-[20%] top-[25%] h-72 w-72 rounded-full bg-[var(--primary)] opacity-[0.03] blur-3xl" />

      <div className="absolute bottom-[10%] right-[15%] h-80 w-80 rounded-full bg-[var(--secondary)] opacity-[0.03] blur-3xl" />
    </div>
  );
};

export default FloatingIcons;