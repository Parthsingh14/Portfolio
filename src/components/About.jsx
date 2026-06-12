"use client";

import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";
import ParthCoding from "../assets/ParthCoding.jpeg";

const AboutMe = () => {
  return (
    <div className="relative bg-transparent text-[var(--text-primary)]">
      <FloatingIcons />

      <section
        id="about"
        className="relative flex flex-col items-center gap-16 px-6 py-20 md:flex-row md:px-12 lg:px-20"
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 md:order-1 md:flex-1"
        >
          {/* Heading */}
          <div className="mb-8 text-sm sm:text-base lg:text-lg">
            <span className="text-[var(--text-secondary)]">
              const{" "}
            </span>

            <motion.span
              whileHover={{
                scale: 1.03,
              }}
              className="cursor-pointer text-3xl font-bold md:text-5xl"
              style={{
                background:
                  "linear-gradient(135deg, #7C3AED, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              aboutMe
            </motion.span>

            <span className="text-[var(--text-secondary)]">
              {" "}
              = () =&gt; {"{"}
            </span>
          </div>

          {/* About text */}
          <motion.div
            className="space-y-5 text-sm leading-8 text-[var(--text-secondary)] sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Hey, I'm{" "}
              <span className="font-semibold text-[var(--text-primary)]">
                Parth Singh
              </span>{" "}
              — an AI-Full Stack Developer currently working as an Associate
              System Engineer (Trainee) at IBM, passionate about building
              scalable web and AI-powered systems.
            </p>

            <p>
              During my time at{" "}
              <span className="font-medium text-[var(--text-primary)]">
                Bytemasks
              </span>
              , I contributed across frontend and backend development on
              products like{" "}
              <span className="font-medium text-[var(--text-primary)]">
                Monitor
              </span>{" "}
              (analytics dashboard) and{" "}
              <span className="font-medium text-[var(--text-primary)]">
                Safe AI
              </span>{" "}
              (multi-model AI platform).
            </p>

            <p>
              I have also built projects such as{" "}
              <span className="font-medium text-[var(--text-primary)]">
                Blogify
              </span>{" "}
              and{" "}
              <span className="font-medium text-[var(--text-primary)]">
                EchoAI
              </span>
              , integrating technologies like React.js, Next.js, Node.js,
              MongoDB, Redis, Docker, LangChain.js, and Generative AI into
              practical, real-world solutions.
            </p>

            <p>
              My focus is on{" "}
              <span className="font-medium text-[var(--text-primary)]">
                scalability, clean architecture, performance optimization,
              </span>{" "}
              and building products that combine intelligence with great user
              experience.
            </p>
          </motion.div>

          <div className="mt-6 text-[var(--text-secondary)]">
            {"}"}
          </div>
        </motion.div>

        {/* Image */}
        <div className="order-1 flex justify-center md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-[var(--primary)] opacity-10 blur-3xl transition duration-500 group-hover:opacity-20" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-md">
              <img
                src={ParthCoding}
                alt="Parth Coding"
                className="h-64 w-64 rounded-[1.5rem] object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;