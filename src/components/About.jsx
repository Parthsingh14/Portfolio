import { ABOUT } from "../constants"
import { AnimatePresence,motion } from "motion/react";
import FloatingIcons from "./FloatingIcons"


function About() {
    return (
        <div className="relative">
            <FloatingIcons/>
            <section id="about" className="relative lg:h-screen lg:mt-20">
                <motion.h2
                transition={{ duration: 0.5, }}
                whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
                 className="my-10 text-center text-3xl md:text-4xl lg:text-8xl text-lime-300 font-extrabold">About Me</motion.h2>
                <div className="flex items-center justify-center">
                    <p className="m-8 text-center max-w-6xl text-xl md:text-3xl lg:text-5xl" id="about-span">As a dedicated <span>Full Stack Developer</span>, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as <span>React</span> and <span>Node.js</span>, as well as proficiency in databases like <span>MongoDB</span> and <span>SQL</span>. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About
