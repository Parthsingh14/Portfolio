// components/Experience.jsx
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

const experienceData = [
  {
  id: 1,
  role: "Frontend Lead (Full Stack Contributions)",
  company: "Bytemasks",
  period: "April 2025 - Present",
  description: [
    "Leading frontend development for an AI Security platform, architecting the main dashboard and AI visualization interfaces using React/TypeScript",
    "Extended role to full stack development: Designing and building REST APIs with Python FastAPI, SQLAlchemy ORM, and PostgreSQL",
    "Implementing Pydantic models for robust data validation and PGAdmin for database management",
    "Optimizing performance of data-intensive AI visualizations through efficient state management and Web Workers",
    "Collaborating with AI team to design intuitive interfaces for complex security analytics"
  ],
  type: "internship",
},
  {
  id: 2,
  role: "Full Stack Developer - Shrikart E-commerce",
  company: "Freelance Project",
  period: "Feb 2025 - Apr 2025",
  description: [
    "Developed Shrikart, a full-featured e-commerce platform for local artisans using MERN stack",
    "Implemented CRUD operations for product management, user authentication, and order processing",
    "Created admin dashboard with analytics for business owners to track sales and inventory",
    "Integrated Razorpay payment gateway."
  ],
  type: "freelance",
},
{
  id: 3,
  role: "Full Stack Developer - TaskSync Pro",
  company: "Freelance Project",
  period: "July 2024 - Oct 2024",
  description: [
    "Built real-time collaborative task management application for remote teams",
    "Implemented Socket.io for instant updates across client devices",
    "Developed drag-and-drop interface with React DnD library",
    "Created user role system (admin/member) with permission controls",
  ],
  type: "freelance",
},
{
  id: 4,
  role: "Frontend Developer - Travel Co. Portfolio",
  company: "Freelance Project",
  period: "Nov 2023 - Dec 2023",
  description: [
    "Designed and built a responsive showcase website for Wanderlust Travels agency",
    "Implemented smooth animations and transitions for destination galleries",
  ],
  type: "freelance",
},

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
      </section>
    </div>
  );
}

export default Experience;