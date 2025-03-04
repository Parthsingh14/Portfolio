import { LuImport } from "react-icons/lu"
//import benson from "../assets/benson.webp"
import parth from "../assets/Parthpic8.jpg"
import { AnimatePresence,motion } from "motion/react";
import FloatingIcons from "./FloatingIcons";


function Hero() {
    return (
        <div className="relative">
            <FloatingIcons/>
            <section className="relative" id="home">
                <div className="flex flex-col items-center justify-center">
                    <motion.h1
                     initial={{ opacity: 0, x:-150 }}
                     animate={{ opacity: 1, x:0 }}
                     transition={{ duration: 2, ease:"anticipate" , delay: 0.15 }}
                     drag
                     dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                     className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
                        Parth
                    </motion.h1>
                    <motion.h1
                     initial={{ opacity: 0, x:150 }}
                     animate={{ opacity: 1, x:0 }}
                     transition={{ duration: 2, ease:"anticipate" , delay: 0.15 }}
                     drag
                     dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                     className="overflow-hidden text-[12vw] font-semibold uppercase leading-none">
                        Singh
                    </motion.h1>


                    <motion.div 
                    initial={{opacity: 0, y:-10}}
                    animate={{ opacity: 1, y:0}}
                    transition={{duration:0.5, delay: 1.5}}
                    className="mt-8">
                        <a href="/Parth_Singh_Resume.pdf" target="blank" rel="noopener noreferrer" download className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400">
                            <span>Resume.pdf</span>
                            <LuImport className="ml-2"/>
                        </a>
                    </motion.div>


                    <motion.div 
                    initial={{opacity: 0, y:20}}
                    animate={{ opacity: 1, y:0}}
                    transition={{duration:0.5, delay:2}}
                    className="w-full">
                        <img src={parth} alt="Parth Singh" className="mt-8 h-96 sm:h-screen w-full object-cover lg:object-[0px_-8em]"/>
                    </motion.div>
                </div>
            </section>
            
        </div>
    )
}

export default Hero
