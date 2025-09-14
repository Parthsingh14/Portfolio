// components/Experience.jsx
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

const experienceData = [
 {
  id: 1,
  role: "Frontend & Backend Developer (Internship)",
  company: "Bytemasks",
  period: "April 2025 - July 2025",
  description: [
    "Developed and optimized the UI for key projects: 'Monitor' (AI monitoring dashboard) and 'Safe AI' (multi-model AI chat platform) using Next.js and TypeScript.",
    "Implemented new features such as Lab, Collaboration, Prompt Library, and enhanced dashboard components to improve user experience.",
    "Contributed to backend development by creating and integrating REST API endpoints with Python FastAPI and PostgreSQL.",
    "Worked on authentication, bookmarking, and sharing features, ensuring smooth API consumption on the frontend.",
    "Collaborated with the team in an agile workflow, performing regular GitHub pushes, standups, and code reviews."
  ],
  type: "internship",
},
  {
  id: 2,
  role: "Full Stack Developer - Shrikart E-commerce",
  company: "Freelance Project",
  period: "Feb 2025",
  description: [
    "Developed Shrikart, a full-featured e-commerce platform for local artisans using MERN stack",
    "Implemented CRUD operations for product management, user authentication, and order processing",
    "Created admin dashboard with analytics for business owners to track sales and inventory",
  ],
  type: "freelance",
},
{
  id: 3,
  role: "Frontend Developer - Discovery Drift ",
  company: "Freelance Project",
  period: "May 2025",
  description: [
     "Developed a responsive portfolio website for a travel and service agency showcasing cars, hotel rooms, and curated experiences",
    "Implemented engaging animations and smooth transitions for service galleries to enhance user interaction",
    "Optimized layouts and design for mobile-first responsiveness, improving client’s online presence",
  ],
  type: "freelance",
},

];

function Experience() {
  return (
    <div className="relative">
      <FloatingIcons />
      <section id="experience" className="relative py-20">
        <motion.pre
          className="text-left ml-10 whitespace-pre-wrap mb-16"
        >
          <span className="text-white lg:text-2xl">const </span>
          <span className="text-lime-300 text-xl md:text-5xl font-bold cursor-pointer transition duration-300 hover:text-lime-200 hover:drop-shadow-[0_0_6px_rgba(163,230,53,0.8)]">
            Experience
          </span>
          <span className="text-white lg:text-2xl"> = () =&gt; {"{"} </span>
        </motion.pre>

        {/* Mobile Timeline */}
        <div className="lg:hidden mx-auto max-w-md px-4">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-1 bg-lime-300/30 -translate-x-1/2">
              <motion.div 
                className="h-full bg-lime-300 w-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1 }}
              />
            </div>

            {experienceData.map((exp, index) => (
              <div key={exp.id} className="relative pl-12 mb-12">
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 -translate-x-1/2 w-4 h-4 rounded-full ${exp.type === 'internship' ? 'bg-lime-300' : 'bg-gray-400'}`} />
                
                <motion.div
                  className={`p-5 rounded-xl border ${exp.type === 'internship' ? 'border-lime-300 bg-lime-300/10' : 'border-gray-600 bg-gray-800/50'} shadow-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-lime-300">{exp.role}</h3>
                  {exp.company && <p className="text-gray-400 text-sm">{exp.company}</p>}
                  <p className="text-gray-300 mt-1 text-xs">{exp.period}</p>
                  <p className="mt-2 text-gray-200 text-sm">{exp.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mx-auto max-w-6xl px-8">
          <div className="relative">
            {/* Timeline line */}
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
                className={`relative mb-16 w-full ${index % 2 === 0 ? "pr-[52%]" : "pl-[52%]"}`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-6 -translate-y-1/2 w-6 h-6 rounded-full ${exp.type === 'internship' ? 'bg-lime-300' : 'bg-gray-400'} ${index % 2 === 0 ? 'right-[calc(50%-14px)]' : 'left-[calc(50%-14px)]'}`} />
                
                <motion.div
                  className={`p-6 rounded-xl border ${exp.type === 'internship' ? 'border-lime-300 bg-lime-300/10' : 'border-gray-600 bg-gray-800/50'} shadow-lg relative ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-lime-300">{exp.role}</h3>
                  {exp.company && <p className="text-gray-400">{exp.company}</p>}
                  <p className="text-gray-300 mt-1 text-sm">{exp.period}</p>
                  <p className="mt-3 text-gray-200">{exp.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

         <motion.pre className="text-left ml-5 whitespace-pre-wrap mt-16">
          <span className="text-white text-2xl">{"}"}</span>
        </motion.pre>
      </section>
    </div>
  );
}

export default Experience;