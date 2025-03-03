import { CONTACT,SOCIAL_MEDIA_LINKS } from "../constants"
import { AnimatePresence,motion } from "motion/react";
import FloatingIcons from "./FloatingIcons"


function Contact() {
    return (
        <div className="relative">
            <FloatingIcons />
            <section id="contact" className="lg:h-screen ralative">
                <div className="mx-auto max-w-6xl">
                    <motion.p 
                      transition={{ duration: 0.5, }}
                      whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
                      className="mt-10 mb-2 text-center text-2xl md:text-4xl lg:text-7xl text-lime-300 font-extrabold ">
                        Intrested In Working Together ?
                    </motion.p>

                    <motion.p 
                      transition={{ duration: 0.5, }}
                      whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
                      className="mb-10  text-center text-xl md:text-3xl lg:text-6xl text-lime-100 font-extrabold ">
                        Contact Now !!!
                    </motion.p>

                    <p className="p-4 text-center text-3xl md:text-4xl lg:text-5xl">{CONTACT.text}</p>

                    <motion.p
                      transition={{ duration: 0.5, }}
                      whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
                      className="my-4 text-center text-2xl font-medium text-lime-200 lg:pt-6 lg:text-4xl">
                        {CONTACT.email}
                    </motion.p>
                    
                    <motion.p 
                      transition={{ duration: 0.5, }}
                      whileHover={{ textShadow: "0px 0px 15px rgba(163,230,53,1)" }}
                      className="my-4 text-center text-2xl font-medium text-lime-100 lg:pt-6 lg:text-3xl">
                        {CONTACT.phone}
                    </motion.p>
                </div>
                <div className="mt-20 flex items-center justify-center gap-8 lg:mt-1">
                    {SOCIAL_MEDIA_LINKS.map((link,index)=>(
                        <a id={index} href={link.href} target="_blank" rel="noopener noreferrer">{link.icon}</a>
                    ))}
                </div>
                <p className="my-8 text-center text-gray-400">&copy; parthSingh. All rights reserved.</p>
            </section>
        </div>
    )
}

export default Contact
