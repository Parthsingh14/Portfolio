import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

const AboutMe = () => {
  return (
    <div className="relative font-mono bg-transparent text-white">
      <FloatingIcons />
      <section id="about" className="relative py-16 lg:py-24 px-6 md:px-12">
        <motion.pre
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left whitespace-pre-wrap text-sm sm:text-base md:text-lg leading-relaxed"
        >
<span className="text-white">const </span>
<span className="text-lime-300 text-xl md:text-3xl font-bold cursor-pointer transition duration-300 hover:text-lime-200 hover:drop-shadow-[0_0_6px_rgba(163,230,53,0.8)]">AboutMe</span>
<span className="text-white"> = () =&gt; {'{'} </span>

{"\n"}
   <p className="mt-4">"I’m a passionate AI-Full Stack Developer who loves crafting intelligent and scalable applications.
   For me, AI is not just an extra feature — it’s woven into the very architecture, powering smarter workflows,
   automation, and user experiences."

{"\n\n"}
   "I believe in clean code, continuous learning, and solving real-world problems with creativity.
   My focus is on building modern, efficient solutions while staying curious and adapting to new trends in technology."</p>

{"\n"}
{' }'}
        </motion.pre>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-28 bg-gradient-to-r from-transparent via-lime-300 to-transparent"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutMe;