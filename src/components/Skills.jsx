// components/Skills.jsx
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

const skillsData = {
  "Frontend": ["React", "Next.js", "HTML5", "CSS3", "Tailwind", "Framer Motion"],
  "Backend": ["Node.js", "Express", "MongoDB", "SQL", "REST APIs"],
  "Languages": ["JavaScript", "Java", "Python", "C++"],
  "Tools": ["Git", "Postman", "VS Code", "Figma", "Linux"]
};

function Skills() {
  return (
    <div className="relative">
      <FloatingIcons />
      <section id="skills" className="relative py-20">
        <motion.h2
          whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
          className="my-10 text-center text-3xl md:text-4xl lg:text-8xl text-lime-300 font-extrabold"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              className="relative h-64 w-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 rounded-full border border-lime-300/30 flex items-center justify-center">
                <motion.h3 
                  className="text-xl text-lime-300 font-bold z-10 bg-black px-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {category}
                </motion.h3>
                
                {skills.map((skill, skillIndex) => {
                  const angle = (skillIndex * (360 / skills.length)) * (Math.PI / 180);
                  const radius = 100;
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);
                  
                  return (
                    <motion.div
                      key={skill}
                      className="absolute text-sm bg-gray-800 border border-lime-300/30 rounded-full px-3 py-1 cursor-default"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      whileInView={{ 
                        x, 
                        y, 
                        opacity: 1,
                        transition: { 
                          delay: skillIndex * 0.05,
                          type: "spring",
                          stiffness: 100
                        }
                      }}
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: "rgba(163, 230, 53, 0.2)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {skill}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;