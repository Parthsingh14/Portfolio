// components/Education.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FloatingIcons from "./FloatingIcons";

const educationData = [
  {
    id: 1,
    degree: "BTech in Computer Science",
    institution: "AKTU University",
    year: "2021-2025",
    score: "7.2 CGPA"
  },
  {
    id: 2,
    degree: "12th Grade (PCM)",
    institution: "Holy Angels Public School",
    year: "2020-2021",
    score: "88%"
  },
  {
    id: 3,
    degree: "10th Grade",
    institution: "Surya Academy",
    year: "2018-2019",
    score: "89.4%"
  }
];

function Education() {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
    axis: "x"
  });
  
  // For desktop centering
  const desktopOffset = useTransform(scrollXProgress, [0, 1], [-100, 100]);

  return (
    <div className="relative">
      <FloatingIcons />
      <section id="education" className="relative py-20 overflow-x-hidden">
        <motion.h2
          whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
          className="my-10 text-center text-3xl md:text-4xl lg:text-8xl text-lime-300 font-extrabold"
        >
          Education
        </motion.h2>

        {/* Mobile (horizontal scroll) */}
        <div className="lg:hidden px-4">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory py-8 gap-6 no-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="flex-shrink-0 w-[85vw] snap-center bg-gray-900 p-6 rounded-xl border border-lime-300 shadow-lg shadow-lime-300/20"
                style={{ scrollSnapAlign: "center" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  rotateY: index % 2 === 0 ? -5 : 5
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
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

        {/* Desktop (centered grid) */}
        <div className="hidden lg:block">
          <motion.div 
            className="relative mx-auto max-w-6xl"
            style={{ x: desktopOffset }}
          >
            <div className="grid grid-cols-3 gap-8 px-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="bg-gray-900 p-6 rounded-xl border border-lime-300 shadow-lg shadow-lime-300/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    rotateY: index % 2 === 0 ? -10 : 10
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Education;