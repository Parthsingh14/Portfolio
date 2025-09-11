// components/Skills.jsx
import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Framer Motion",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "AI Integrations",
    "Rate Limiting",
  ],
  "Database & ORM": [
    "MongoDB",
    "PostgreSQL",
    "Mongoose",
    "Redis (Caching)",
  ],
  Languages: ["JavaScript", "TypeScript","JAVA"],
  "AI & GenAI": [
    "LangChain.js (Learning)",
    "LLM Integration",
    "Generative AI",
    "Prompt Engineering",
  ],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Docker",
    "System Design Basics",
    "Deployment",
  ],
};


function Skills() {
  return (
    <div className="relative font-mono bg-transparent text-white">
      <section id="skills" className="relative py-20 px-6 md:px-12">
        {/* Function-style heading */}
        <motion.pre
          whileHover={{
            textShadow: "0px 0px 15px rgba(163,230,53,1)",
          }}
          className="text-left whitespace-pre-wrap mb-16"
        >
          <span className="text-white text-md">const </span>
          <span className="text-lime-300 text-xl md:text-3xl font-bold cursor-pointer transition duration-300 hover:text-lime-200 hover:drop-shadow-[0_0_6px_rgba(163,230,53,0.8)]">
            Skills
          </span>
          <span className="text-white"> = () =&gt; {"{"} </span>
        </motion.pre>

        {/* Skills Circles */}
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
                  className="text-md text-lime-300 font-bold z-10 px-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {category}
                </motion.h3>

                {skills.map((skill, skillIndex) => {
                  const angle =
                    skillIndex * (360 / skills.length) * (Math.PI / 180);
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
                          stiffness: 100,
                        },
                      }}
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: "rgba(163, 230, 53, 0.2)",
                        transition: { duration: 0.2 },
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

        {/* Closing bracket */}
        <motion.pre className="text-left whitespace-pre-wrap mt-16">
          <span className="text-white">{"}"}</span>
        </motion.pre>
      </section>
    </div>
  );
}

export default Skills;
