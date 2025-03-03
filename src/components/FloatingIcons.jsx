import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";

const FloatingIcons = () => {
  const icons = [
    { Component: FaReact, size: 60 },
    { Component: FaNodeJs, size: 60 },
    { Component: FaJs, size: 50 },
    { Component: FaDatabase, size: 50 },
    { Component: FaHtml5, size: 50 },
    { Component: FaCss3Alt, size: 50 },
    { Component: FaGitAlt, size: 50 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map(({ Component, size }, index) => {
        const randomX = Math.random() * 100 - 50; // Random X position
        const randomY = Math.random() * 100 - 50; // Random Y position
        const duration = Math.random() * 4 + 2; // Random animation duration

        return (
          <motion.div
            key={index}
            className="absolute text-gray-400 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ y: randomY, x: randomX, opacity: 0.2 }}
            animate={{
              y: [randomY, randomY + 20, randomY],
              x: [randomX, randomX + 20, randomX],
              opacity: 0.2,
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Component size={size} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
