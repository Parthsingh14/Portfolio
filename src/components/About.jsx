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
            whileHover="hover"
            className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
          >
            {/* IMAGE */}
            <img
              src={ParthCoding}
              alt="Parth Coding"
              className="w-full h-full object-cover relative z-10"
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
          className="order-2 md:order-1 text-left whitespace-pre-wrap text-xs sm:text-sm md:text-base leading-relaxed md:flex-1"
        >
          <span className="text-white lg:text-xl">const </span>
          <span className="text-lime-300 text-lg md:text-4xl font-bold cursor-pointer transition duration-300 hover:text-lime-200 hover:drop-shadow-[0_0_6px_rgba(163,230,53,0.8)]">
            aboutMe
          </span>
          <span className="text-white lg:text-xl"> = () =&gt; {'{'}</span>

          {"\n"}
          <p className="mt-4 lg:mt-6 lg:text-lg">
            Hey, I'm Parth Singh — a B.Tech Computer Science graduate and an
            AI-Full Stack Developer passionate about building scalable web and
            AI-driven systems.
            {"\n\n"}
            During my time at Bytemasks, I contributed to both frontend and
            backend development on projects like <b>Monitor</b> (analytics
            dashboard) and <b>Safe AI</b> (multi-model chat platform with prompt
            library and collaboration). I also built <b>Blogify</b> (advanced
            blog management system with GenAI integrations, Cloudinary, Redis
            caching, and admin APIs) and <b>EchoAI</b> (multi-LLM playground for
            comparing outputs across models), showcasing my expertise in
            full-stack and AI integrations.
            {"\n\n"}
            I specialize in <b>React.js, Next.js, Node.js, Express.js, MongoDB,
            Redis, and Docker</b>, with hands-on experience integrating{" "}
            <b>Generative AI, LangChain.js, and LLMs</b> into real-world
            applications. My focus is on <b>clean architecture, scalability, and
            performance optimization</b>.
            {"\n\n"}
            Beyond coding, I constantly explore new technologies, refine
            problem-solving skills, and aim to build products that combine{" "}
            <b>creativity, intelligence, and impact</b>.
          </p>

          {"\n"}
          <span className="text-white lg:text-xl">{'}'}</span>
        </motion.pre>
      </section>
    </div>
  );
};

export default AboutMe;
