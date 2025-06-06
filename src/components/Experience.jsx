// components/Experience.jsx
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

const experienceData = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Bytemask",
    period: "June 2024 - Present",
    description: "Working on building scalable web applications using MERN stack, implementing microservices architecture.",
    type: "internship"
  },
  {
    id: 2,
    role: "Freelance Project - E-commerce Platform",
    period: "Jan 2024 - Mar 2024",
    description: "Built a custom e-commerce solution with React, Node.js, and MongoDB for a local business.",
    type: "freelance"
  },
  {
    id: 3,
    role: "Freelance Project - Portfolio Website",
    period: "Nov 2023 - Dec 2023",
    description: "Designed and developed a responsive portfolio for a photographer with image optimization.",
    type: "freelance"
  },
  {
    id: 4,
    role: "Freelance Project - Task Management App",
    period: "Aug 2023 - Oct 2023",
    description: "Created a collaborative task management tool with real-time updates using Socket.io.",
    type: "freelance"
  }
];

function Experience() {
  return (
    <div className="relative">
      <FloatingIcons />
      <section id="experience" className="relative py-20">
        <motion.h2
          whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
          className="my-10 text-center text-3xl md:text-4xl lg:text-8xl text-lime-300 font-extrabold"
        >
          Experience
        </motion.h2>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-lime-300/30 -translate-x-1/2">
            <motion.div 
              className="h-full bg-lime-300 w-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1 }}
            />
          </div>

          {experienceData.map((exp, index) => (
            <div 
              key={exp.id}
              className={`relative mb-16 w-full ${index % 2 === 0 ? "pr-16 pl-4" : "pl-16 pr-4"}`}
            >
              <motion.div
                className={`p-6 rounded-xl border ${exp.type === 'internship' ? 'border-lime-300 bg-lime-300/10' : 'border-gray-600 bg-gray-800/50'} shadow-lg relative`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`absolute top-6 -translate-y-1/2 w-6 h-6 rounded-full ${exp.type === 'internship' ? 'bg-lime-300' : 'bg-gray-400'} ${index % 2 === 0 ? '-right-8' : '-left-8'}`} />
                <h3 className="text-xl font-bold text-lime-300">{exp.role}</h3>
                {exp.company && <p className="text-gray-400">{exp.company}</p>}
                <p className="text-gray-300 mt-1 text-sm">{exp.period}</p>
                <p className="mt-3 text-gray-200">{exp.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience;