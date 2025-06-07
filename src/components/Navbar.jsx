import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { LINKS } from "../constants";
import { AnimatePresence, motion } from "framer-motion"; // Changed from "motion/react"
import FloatingIcons from "./FloatingIcons";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = "auto"; // Cleanup
        };
    }, [isOpen]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    };

    return (
        <>
            <FloatingIcons />
            <nav className={`fixed w-full top-0 z-50 flex justify-end p-4 transition-all duration-300 ${isScrolled ? "backdrop-blur-sm bg-black/50" : ""}`}>
                <motion.button
                    onClick={toggleMenu}
                    className="p-2 rounded-md focus:outline-none z-50"
                    whileTap={{ scale: 0.9 }}
                    aria-label="Menu"
                >
                    {isOpen ? (
                        <FaTimes className="h-6 w-6 text-lime-300" />
                    ) : (
                        <FaBars className="h-6 w-6 text-white hover:text-lime-300 transition-colors" />
                    )}
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="menu"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                            className="fixed inset-0 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm z-40"
                        >
                            <ul className="space-y-8 text-center">
                                {LINKS.map((link) => (
                                    <motion.li
                                        key={link.id}
                                        variants={linkVariants}
                                        whileHover={{ 
                                            scale: 1.05,
                                            color: "rgb(163, 230, 53)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <a
                                            href={`#${link.id}`}
                                            onClick={toggleMenu}
                                            className="block text-4xl md:text-5xl font-medium uppercase tracking-wide text-white hover:text-lime-300 px-4 py-2 transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}

export default Navbar;