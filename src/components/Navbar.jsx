import { useEffect } from "react";
import { useState } from "react"
import { FaTimes, FaBars } from "react-icons/fa";
import { LINKS } from "../constants/index"
import { AnimatePresence,motion } from "motion/react";
function Navbar() {


    const [isOpen,setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    },[isOpen])

    const containerVarients = {
        hidden: {opacity:0, y: "-100%"},
        visible: {opacity:1, y:0,
            transition:{
                staggerChildren: 0.1
            }
        }
    }

    const linkVarients = {
        hidden: {opacity:0, y: "-50"},
        visible: {opacity:1, y:0}
    }



    return (
        <>
          <nav className="fixed right-0 top-0 z-30 p-4">
            <button onClick={toggleMenu} className="rounded-md p-2" >
                {isOpen ? (
                    <FaTimes className="h-6 w-6"></FaTimes> 
                ) : (
                    <FaBars className="h-6 w-6"></FaBars>
                )}
            </button>
          </nav>

          <AnimatePresence>

          {isOpen && (
            <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVarients}
            className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white">
                <ul className="space-y-6 text-3xl">
                    {LINKS.map((link)=> (
                        <motion.li 
                        variants={linkVarients}
                        key={link.id}>
                            <a href={`#${link.id}`} onClick={toggleMenu} className="text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text9xl">
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
          )}

          </AnimatePresence>
            
        </>
    )
}

export default Navbar
