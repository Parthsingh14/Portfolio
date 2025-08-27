import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

function About() {
  return (
    <div className="relative">
      <FloatingIcons />
      <section id="about" className="relative py-20 lg:min-h-screen">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            transition={{ duration: 0.5 }}
            whileHover={{ 
              textShadow: "0px 0px 15px rgba(163,230,53,1)",
            }}
            className="text-4xl md:text-6xl lg:text-8xl text-lime-300 font-extrabold mb-6"
          >
            About Me
          </motion.h2>
          
          <div className="flex justify-center">
            <motion.div
              className="h-1 bg-lime-300 w-24"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        <div className="flex justify-center px-4 mt-12">
          <motion.div
            className="max-w-4xl relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-2 bg-lime-300/10 rounded-xl blur-lg opacity-50"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-lime-300/20 rounded-xl p-8 md:p-12">
              <motion.p
                className="text-lg md:text-xl lg:text-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
              As a passionate <span className="text-lime-300 font-medium">AI-Full Stack Developer</span>, I craft intelligent and scalable web applications that seamlessly integrate artificial intelligence to enhance productivity and user experience. I focus on building modern, efficient solutions where AI is not just an add-on, but a core part of the architecture—enabling smarter workflows, automation, and innovation across projects.
              </motion.p>
              
              <motion.p
                className="mt-6 text-lg md:text-xl lg:text-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                My approach combines clean code principles with innovative problem-solving. I'm passionate about continuous learning and staying current with industry trends to implement cutting-edge solutions that deliver real value.
              </motion.p>

              <motion.div
                className="mt-10 flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-lime-300 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;