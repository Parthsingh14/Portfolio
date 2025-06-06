// components/Education.jsx
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

const educationData = [
  {
    id: 1,
    degree: "BTech in Computer Science",
    institution: "AKTU University",
    year: "2021-2025",
    score: "8.2 CGPA"
  },
  {
    id: 2,
    degree: "12th Grade (PCM)",
    institution: "St. Mary's Academy",
    year: "2020-2021",
    score: "85%"
  },
  {
    id: 3,
    degree: "10th Grade",
    institution: "St. Mary's Academy",
    year: "2018-2019",
    score: "87%"
  }
];

function Education() {
  return (
    <div className="relative">
      <FloatingIcons />
      <section id="education" className="relative py-20 overflow-hidden">
        <motion.h2
          whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
          className="my-10 text-center text-3xl md:text-4xl lg:text-8xl text-lime-300 font-extrabold"
        >
          Education
        </motion.h2>

        <div className="flex h-[500px] items-center justify-center perspective-1000">
          <div className="relative h-full w-full flex items-center">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="absolute bg-gray-900 p-6 rounded-xl border border-lime-300 shadow-lg shadow-lime-300/20"
                style={{
                  width: "300px",
                  left: `${index * 350 - 350}px`,
                  zIndex: educationData.length - index
                }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  rotateY: index % 2 === 0 ? -15 : 15
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lime-300 text-xl font-bold">{edu.degree}</h3>
                <p className="text-gray-300 mt-2">{edu.institution}</p>
                <div className="mt-4 flex justify-between text-sm">
                  <span className="text-lime-100">{edu.year}</span>
                  <span className="bg-lime-300 text-black px-2 py-1 rounded">
                    {edu.score}
                  </span>
                </div>
                <div className="mt-4 h-1 bg-lime-300/30 w-full rounded-full">
                  <motion.div 
                    className="h-full bg-lime-300 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;