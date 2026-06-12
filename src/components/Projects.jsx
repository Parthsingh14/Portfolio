import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

function Projects() {
  return (
    <div className="relative">
      <FloatingIcons />

      <section
        className="relative px-6 py-20 md:px-12"
        id="projects"
      >
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[var(--text-secondary)] lg:text-2xl">
            const{" "}
          </span>

          <motion.span
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer text-3xl font-bold md:text-5xl"
            style={{
              background:
                "linear-gradient(135deg, #7C3AED, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            myProjects
          </motion.span>

          <span className="text-[var(--text-secondary)] lg:text-2xl">
            {" "}
            = () =&gt; {"{"}
          </span>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
              viewport={{ once: true }}
              className="group block"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-[rgba(124,58,237,0.3)] hover:shadow-[0_16px_40px_rgba(124,58,237,0.18)]">
                {/* Image */}
                <div className="overflow-hidden">
                  <motion.img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3
                    whileHover={{
                      x: 4,
                    }}
                    className="mb-3 text-xl font-semibold text-[var(--text-primary)] md:text-2xl"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    whileHover={{
                      x: 3,
                    }}
                    className="text-sm leading-7 text-[var(--text-secondary)] md:text-base"
                  >
                    {project.description}
                  </motion.p>

                  {/* View Project */}
                  <div className="mt-5 inline-flex items-center text-sm font-medium text-[var(--secondary)] transition duration-300 group-hover:translate-x-1">
                    View Project →
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Closing bracket */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xl text-[var(--text-secondary)]">
            {"}"}
          </span>
        </motion.div>
      </section>
    </div>
  );
}

export default Projects;