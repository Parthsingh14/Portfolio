import { EXPERIENCES } from "../constants"
import {motion} from "motion/react"
import FloatingIcons from "./FloatingIcons"

function Work() {
    return (
        <div className="relative">
            <FloatingIcons />
            <section id="experience" className="relative">
                <motion.h2 
                  transition={{ duration: 0.5, }}
                  whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
                  className="my-10 text-center text-white font-extrabold text-3xl lg:text-8xl">Work Experience</motion.h2>
                <div className="mx-auto max-w-6xl">
                    {EXPERIENCES.map((experience,id)=>(
                        <div key={id} className="mx-4 mb-20">
                            <h2 className="font-medium lg:text-2xl">{experience.company}</h2>
                            <div className="flex justify-between">
                                <p className="py-4 tracking-wide lg:text-xl">{experience.role}</p>
                                <p className="py-4 lg:text-xl">{experience.year}</p>
                            </div>
                            <p className="font-sans text-gray-400">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Work
