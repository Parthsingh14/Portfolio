import { PROJECTS } from "../constants"
import {motion} from "motion/react"

function Projects() {
    return (
        <div>
            <section className="p-8" id="projects">
                <motion.h2
                  transition={{ duration: 0.5, }}
                  whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
                  className="my-10 text-center font-medium text-3xl lg:text-8xl">
                    My Work
                </motion.h2>

                <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
                    {PROJECTS.map((project=>(
                        <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                            <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg">
                                <img src={project.imgSrc} alt={project.title} className="h-auto w-full object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 m-8 text-white backdrop-blur-md">
                                    <h3 className="text-3xl">{project.title}</h3>
                                    <p className="max-w-xs text-lg">{project.description}</p>
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
