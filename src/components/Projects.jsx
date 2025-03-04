import { PROJECTS } from "../constants"
import {motion} from "motion/react"
import FloatingIcons from "./FloatingIcons"

function Projects() {
    return (
        <div className="relative">
            <FloatingIcons />
            <section className="p-8 relative" id="projects">
                <motion.h2
                  transition={{ duration: 0.5, }}
                  whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
                  className="my-10 text-center font-medium text-3xl lg:text-8xl">
                    My Work
                </motion.h2>

                <div className="columns-2 gap-4 md:columns-2 lg:columns-3">
                    {PROJECTS.map((project=>(
                        <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                            <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg">
                                <img src={project.imgSrc} alt={project.title} className="h-auto w-full object-cover" />
                                <div className="h-auto md:h-auto lg:h-auto w-full  absolute  bottom-2 left-2 right-1 text-white backdrop-blur-md">
                                    <h3 className="text-[12px] md:text-3xl lg:text-3xl mb-1 underline">{project.title}</h3>
                                    <p className="text-[10px] md:text-lg lg:text-lg">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    )))}
                </div>
            </section>
            
        </div>
    )
}

export default Projects
