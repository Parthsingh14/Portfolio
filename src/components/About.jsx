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
                    <p className="m-8 text-center max-w-6xl text-xl md:text-3xl lg:text-5xl">{ABOUT}</p>
                </div>
            </section>
        </div>
    )
}

export default About
