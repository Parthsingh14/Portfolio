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
  },

  {
    Component: FaNodeJs,
    size: 85,
    top: "20%",
    right: "8%",
    delay: 0.8,
  },

  {
    Component: FaJs,
    size: 75,
    top: "65%",
    left: "10%",
    delay: 1.2,
  },

  {
    Component: FaDatabase,
    size: 80,
    top: "70%",
    right: "12%",
    delay: 1.8,
  },

  {
    Component: SiMongodb,
    size: 70,
    top: "40%",
    left: "4%",
    delay: 2,
  },

  {
    Component: SiDocker,
    size: 70,
    top: "45%",
    right: "5%",
    delay: 2.4,
  },

  {
    Component: FaGitAlt,
    size: 70,
    bottom: "8%",
    left: "45%",
    delay: 1,
  },

  {
    Component: DiJava,
    size: 85,
    top: "12%",
    left: "45%",
    delay: 1.5,
  },
];

const FloatingIcons = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map(
        (
          {
            Component,
            size,
            delay,
            ...position
          },
          index
        ) => (
          <motion.div
            key={index}
            className="absolute text-[var(--primary)]"
            style={{
              ...position,
              opacity: 0.125,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 4, -4, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            <Component size={size} />
          </motion.div>
        )
      )}

      {/* ambient glow */}
      <div className="absolute left-[20%] top-[25%] h-72 w-72 rounded-full bg-[var(--primary)] opacity-[0.03] blur-3xl" />

      <div className="absolute bottom-[10%] right-[15%] h-80 w-80 rounded-full bg-[var(--secondary)] opacity-[0.03] blur-3xl" />
    </div>
  );
};

export default FloatingIcons;