"use client";
import { LuImport } from "react-icons/lu";
import parth from "../assets/Parthpic8.jpg";
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

const flipperVariants = {
  hidden: { rotateX: 90, opacity: 0 },
  visible: (i) => ({
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15, // stagger each letter
      ease: "easeOut",
    },
  }),
};

function FlipperText({ text }) {
  return (
    <div className="flex space-x-2 overflow-hidden">
      {text.split("").map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={flipperVariants}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <div className="relative">
      <FloatingIcons />
      <section className="relative" id="home">
        <div className="flex flex-col items-center justify-center">
          {/* First Name */}
          <h1 className="mt-16 text-[12vw] font-semibold uppercase leading-none">
            <FlipperText text="Parth" />
          </h1>

          {/* Last Name */}
          <h1 className="text-[12vw] font-semibold uppercase leading-none">
            <FlipperText text="Singh" />
          </h1>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-8"
          >
            <a
              href="/Parth_Singh Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black 
                   hover:bg-lime-400 hover:text-white 
                   hover:shadow-[0px_0px_12px_rgba(163,230,53,1)] transition-all duration-300"
            >
              <span className="hover:shadow-[0px_0px_10px_rgba(163,230,53,1)]">
                Resume.pdf
              </span>
              <LuImport className="ml-2" />
            </a>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="w-full"
          >
            <img
              src={parth}
              alt="Parth Singh"
              className="mt-8 h-96 w-full object-cover lg:object-[0px_-8em]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
