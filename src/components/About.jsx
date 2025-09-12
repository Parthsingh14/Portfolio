"use client"
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";
import ParthCoding from "../assets/ParthCoding.jpeg";

const AboutMe = () => {
  return (
    <div className="relative font-mono bg-transparent text-white">
      <FloatingIcons />
      <section
        id="about"
        className="relative py-16 lg:py-24 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12"
      >
        {/* IMAGE FIRST ON MOBILE, SECOND ON DESKTOP */}
        <div className="order-1 md:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover="hover" // 👈 hover state
            className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
          >
            {/* IMAGE */}
            <img
              src={ParthCoding}
              alt="Parth Coding"
              className="w-full h-full object-cover rounded-xl relative z-10"
            />

            {/* BORDER */}
            <motion.div
              variants={{
                rest: { scale: 0.9, opacity: 0 },
                hover: { scale: 1.1, opacity: 1 },
              }}
              initial="rest"
              animate="rest"
              whileHover="hover"
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-xl border-2 border-lime-300 z-0"
            />
          </motion.div>
        </div>

        {/* ABOUT CONTENT */}
        <motion.pre
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 md:order-1 text-left whitespace-pre-wrap text-sm sm:text-base md:text-lg leading-relaxed md:flex-1"
        >
          <span className="text-white lg:text-2xl">const </span>
          <span className="text-lime-300 text-xl md:text-5xl font-bold cursor-pointer transition duration-300 hover:text-lime-200 hover:drop-shadow-[0_0_6px_rgba(163,230,53,0.8)]">
            aboutMe
          </span>
          <span className="text-white lg:text-2xl"> = () =&gt; {'{'}</span>

          {"\n"}
          <p className="mt-4 lg:mt-8 lg:text-2xl">
            "I’m a passionate AI-Full Stack Developer who loves crafting
            intelligent and scalable applications. For me, AI is not just an
            extra feature — it’s woven into the very architecture, powering
            smarter workflows, automation, and user experiences."
            {"\n\n"}
            "I believe in clean code, continuous learning, and solving
            real-world problems with creativity. My focus is on building modern,
            efficient solutions while staying curious and adapting to new trends
            in technology."
          </p>

          {"\n"}
          <span className="text-white lg:text-2xl">{'}'}</span>
        </motion.pre>
      </section>
    </div>
  );
};

export default AboutMe;
