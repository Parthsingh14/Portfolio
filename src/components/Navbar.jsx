import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { LINKS } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isUIPlayground = location.pathname === "/ui-playground"; // ✅ direct route check

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
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <>
      <FloatingIcons />
      <nav
        className={`fixed w-full pl-0 top-0 z-50 flex justify-between p-4 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-sm bg-black/50" : ""
        }`}
      >
        {/* Left Button - Portfolio / UI-Playground */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="relative inline-flex items-center justify-center lg:px-6 lg:py-3 md:px-5 md:py-2.5 sm:px-4 sm:py-2 bg-gradient-to-r from-green-400 to-lime-500 text-black font-bold rounded-r-2xl text-sm sm:text-base md:text-lg lg:text-xl shadow-lg shadow-lime-500/30 hover:shadow-lime-500/50 hover:-translate-y-0.5 transform transition duration-300 ease-in-out overflow-hidden"
        >
          <Link to={isUIPlayground ? "/" : "/ui-playground"}>
            <span className="relative z-10 px-2 lg:px-0 hover:text-white transition duration-300 ease-in-out">
              {isUIPlayground ? "<Portfolio />" : "< UI-Playground />"}
            </span>
          </Link>
        </motion.div>

        {/* Right Menu (Hide when on UI-Playground) */}
        {!isUIPlayground && (
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
        )}

        {/* Menu Overlay */}
        <AnimatePresence>
          {!isUIPlayground && isOpen && (
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
                    whileHover={{ scale: 1.05, color: "rgb(163, 230, 53)" }}
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
