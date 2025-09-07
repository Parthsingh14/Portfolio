import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import FloatingIcons from "./FloatingIcons";

function Projects() {
  return (
    <div className="relative">
      <FloatingIcons />
      <section className="p-8 relative" id="projects">
        {/* Heading */}
        <motion.h2
          transition={{ duration: 0.5 }}
          whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
          className="my-10 text-center font-medium text-3xl lg:text-8xl"
        >
          My Work
        </motion.h2>

        {/* Grid layout instead of columns for cleaner responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="block"
            >
              <div className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <motion.img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-auto w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                {/* Text BELOW the image */}
                <div className="p-5 bg-black text-white relative z-10">
                  <motion.h3
                    className="text-base md:text-2xl lg:text-3xl mb-2 underline font-semibold"
                    whileHover={{ color: "rgb(163,230,53)" }} // theme accent glow
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm md:text-base lg:text-lg text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
