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
  const isUIPlayground = location.pathname === "/ui-playground";

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
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
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
        className={`fixed top-0 z-50 flex w-full items-center justify-between border-b border-[var(--border)] px-4 py-3 transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(11,17,32,0.75)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Left Button */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
          className="relative inline-flex items-center justify-center overflow-hidden rounded-r-2xl border border-white/10 bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(124,58,237,0.35)] sm:px-6 sm:py-3 sm:text-lg lg:text-xl"
        >
          <Link to={isUIPlayground ? "/" : "/ui-playground"}>
            <span className="relative z-10 transition duration-300 ease-in-out">
              {isUIPlayground
                ? "<Portfolio />"
                : "<UI-Playground />"}
            </span>
          </Link>
        </motion.div>

        {/* Right Menu Toggle */}
        {!isUIPlayground && (
          <motion.button
            onClick={toggleMenu}
            className="z-50 rounded-md p-2 focus:outline-none"
            whileTap={{ scale: 0.9 }}
            aria-label="Menu"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-[var(--primary)]" />
            ) : (
              <FaBars className="h-6 w-6 text-[var(--text-primary)] transition-colors hover:text-[var(--primary)]" />
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
              className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[rgba(11,17,32,0.95)] backdrop-blur-md"
            >
              <ul className="space-y-6 text-center sm:space-y-8">
                {LINKS.map((link) => (
                  <motion.li
                    key={link.id}
                    variants={linkVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={toggleMenu}
                      className="group relative block px-4 py-2 text-2xl font-medium uppercase tracking-wider text-[var(--text-primary)] transition-all hover:text-[var(--secondary)] sm:text-4xl md:text-5xl"
                    >
                      <span className="pr-2 text-[var(--primary)]">
                        •
                      </span>

                      {link.name}

                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--secondary)] transition-all duration-300 group-hover:w-full"></span>
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