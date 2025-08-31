import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Code2, Eye } from "lucide-react";
import { Rocket, Save } from "lucide-react";

function ButtonCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="relative h-52 sm:h-60 lg:h-72 [perspective:1200px]">
      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front — Preview */}
        <div className="absolute inset-0 bg-gray-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-sm [backface-visibility:hidden] flex flex-col justify-between">
          <div className="flex items-center justify-center flex-1 scale-90 sm:scale-95 lg:scale-100">
            {item.preview}
          </div>

          <div className="mt-2 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            <button
              onClick={handleCopy}
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition flex items-center gap-1"
              aria-label="Copy code"
            >
              <Copy size={14} />
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              onClick={() => setFlipped(true)}
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm bg-lime-400 hover:bg-lime-300 text-black font-medium transition flex items-center gap-1"
              aria-label="Show code"
            >
              <Code2 size={14} /> Code
            </button>
          </div>
        </div>

        {/* Back — Code */}
        <div className="absolute inset-0 bg-neutral-900 text-neutral-100 border border-neutral-800 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-wide opacity-70">
              {item.title || "Component Code"}
            </span>
            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
              <button
                onClick={handleCopy}
                className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs bg-neutral-800 hover:bg-neutral-700 transition flex items-center gap-1"
              >
                <Copy size={12} /> {copied ? "Copied!" : "Copy"}
              </button>
              <button
                onClick={() => setFlipped(false)}
                className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs bg-lime-400 hover:bg-lime-300 text-black font-medium transition flex items-center gap-1"
              >
                <Eye size={12} /> Preview
              </button>
            </div>
          </div>

          <pre className="text-[10px] sm:text-xs leading-4 overflow-auto whitespace-pre-wrap flex-1 rounded-md bg-neutral-950/60 p-2 sm:p-3">
            {item.code.trim()}
          </pre>
        </div>
      </motion.div>
    </div>
  );
}

function ButtonsUI() {
  /*All the importent functions*/
  //For 1st button
  const [launched, setLaunched] = useState(false);

  const handleClickLaunch = () => {
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
  //For 2nd Button
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3200);
  };

  //for 3rd Button
  const [isHovered, setIsHovered] = useState(false);

  const buttonsData = [
    {
      id: 1,
      title: "Primary / Pulse",
      preview: (
        <motion.button
      onClick={handleClickLaunch}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative  px-8 py-4 rounded-xl font-bold 
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
      ),
      code: `
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

      `,
    },
    {
      id: 2,
      title: "Glass / Tilt",
      preview: (
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative px-5 py-2.5 sm:px-8 sm:py-4 rounded-2xl font-semibold 
             bg-white/5 backdrop-blur-xl border border-white/20 text-white 
             shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden group
             text-sm sm:text-base"
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
                "linear-gradient(75deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full"
            whileHover={{ translateX: "200%" }}
            transition={{ duration: 1.2 }}
          />

          {/* Border glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{
              boxShadow: [
                "inset 0 0 12px rgba(255,255,255,0.1), 0 0 0px rgba(255,255,255,0.1)",
                "inset 0 0 16px rgba(255,255,255,0.2), 0 0 12px rgba(255,255,255,0.15)",
                "inset 0 0 12px rgba(255,255,255,0.1), 0 0 0px rgba(255,255,255,0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Content container */}
          <div className="relative z-10 flex items-center justify-center min-w-[90px] sm:min-w-[120px]">
            {isLoading ? (
              // Loading dots animation
              <motion.div
                className="flex space-x-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                    animate={{
                      y: [0, -6, 0], // smaller bounce for mobile
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            ) : (
              // Button text with hover animation
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="flex items-center"
              >
                <motion.span
                  animate={{
                    letterSpacing: ["0px", "2px", "0px"],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Click Me
                </motion.span>

                {/* Hover arrow indicator */}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="ml-1 sm:ml-2"
                >
                  →
                </motion.span>
              </motion.span>
            )}
          </div>

          {/* Progress bar that appears during loading */}
          {isLoading && (
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              className="absolute bottom-0 left-0 h-0.5 bg-white/60"
            />
          )}
        </motion.button>
      ),
      code: `
import { motion } from "framer-motion";
import { useState } from "react";

export default function GlassTiltButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3200);
  };

  return (
    <motion.button
  onClick={handleClick}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="relative px-5 py-2.5 sm:px-8 sm:py-4 rounded-2xl font-semibold 
             bg-white/5 backdrop-blur-xl border border-white/20 text-white 
             shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden group
             text-sm sm:text-base"
>
  {/* Animated background gradient */}
  <motion.div
    className="absolute inset-0 opacity-40"
    animate={{
      background: [
        "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
        "linear-gradient(75deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
        "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
      ],
    }}
    transition={{ duration: 4, repeat: Infinity }}
  />

  {/* Shimmer effect */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full"
    whileHover={{ translateX: "200%" }}
    transition={{ duration: 1.2 }}
  />

  {/* Border glow effect */}
  <motion.div
    className="absolute inset-0 rounded-2xl"
    animate={{
      boxShadow: [
        "inset 0 0 12px rgba(255,255,255,0.1), 0 0 0px rgba(255,255,255,0.1)",
        "inset 0 0 16px rgba(255,255,255,0.2), 0 0 12px rgba(255,255,255,0.15)",
        "inset 0 0 12px rgba(255,255,255,0.1), 0 0 0px rgba(255,255,255,0.1)",
      ],
    }}
    transition={{ duration: 3, repeat: Infinity }}
  />

  {/* Content container */}
  <div className="relative z-10 flex items-center justify-center min-w-[90px] sm:min-w-[120px]">
    {isLoading ? (
      // Loading dots animation
      <motion.div
        className="flex space-x-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
            animate={{
              y: [0, -6, 0], // smaller bounce for mobile
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    ) : (
      // Button text with hover animation
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="flex items-center"
      >
        <motion.span
          animate={{
            letterSpacing: ["0px", "2px", "0px"],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Click Me
        </motion.span>

        {/* Hover arrow indicator */}
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="ml-1 sm:ml-2"
        >
          →
        </motion.span>
      </motion.span>
    )}
  </div>

  {/* Progress bar that appears during loading */}
  {isLoading && (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 3, ease: "linear" }}
      className="absolute bottom-0 left-0 h-0.5 bg-white/60"
    />
  )}
</motion.button>

  );
}
      `,
    },
    {
      id: 3,
      title: "Outline / Ripple",
      preview: (
        <motion.div
          className="relative inline-flex"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          // Mobile: trigger "hover" on tap
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* Animated border pieces */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-1/2 border-t-2 border-l-2 border-lime-400 rounded-tl-lg"
            animate={{ opacity: isHovered ? 0 : 0.8 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b-2 border-r-2 border-lime-400 rounded-br-lg"
            animate={{ opacity: isHovered ? 0 : 0.8 }}
            transition={{ duration: 0.3 }}
          />

          {/* Full border on hover */}
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-lime-400"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.95,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Ripple background */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-lime-400/10 -z-10"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Actual Save button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="relative inline-flex items-center justify-center 
                     gap-2 rounded-lg font-semibold text-lime-300 
                     bg-neutral-900 overflow-hidden
                     px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full"
              animate={{ translateX: isHovered ? "200%" : "-100%" }}
              transition={{ duration: isHovered ? 0.8 : 0 }}
            />

            {/* Icon + Text */}
            <motion.span
              animate={{
                letterSpacing: isHovered ? "0.05em" : "0em",
              }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex items-center gap-2"
            >
              <Save size={18} />
              Save
            </motion.span>
          </motion.button>
        </motion.div>
      ),
      code: `
      "use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Save } from "lucide-react";

export default function SaveRippleButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center p-4">
      <motion.div
        className="relative inline-flex"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        // Mobile: trigger "hover" on tap
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Animated border pieces */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 border-t-2 border-l-2 border-lime-400 rounded-tl-lg"
          animate={{ opacity: isHovered ? 0 : 0.8 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b-2 border-r-2 border-lime-400 rounded-br-lg"
          animate={{ opacity: isHovered ? 0 : 0.8 }}
          transition={{ duration: 0.3 }}
        />

        {/* Full border on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-lime-400"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Ripple background */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-lime-400/10 -z-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Actual Save button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="relative inline-flex items-center justify-center 
                     gap-2 rounded-lg font-semibold text-lime-300 
                     bg-neutral-900 overflow-hidden
                     px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full"
            animate={{ translateX: isHovered ? "200%" : "-100%" }}
            transition={{ duration: isHovered ? 0.8 : 0 }}
          />

          {/* Icon + Text */}
          <motion.span
            animate={{
              letterSpacing: isHovered ? "0.05em" : "0em",
            }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex items-center gap-2"
          >
            <Save size={18} />
            Save
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  );
}
 `,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 p-3 sm:p-6">
      {buttonsData.map((item) => (
        <ButtonCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ButtonsUI;
