import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { LINKS } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();
  const isUIPlayground = location.pathname === "/ui-playground";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
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

      {/* Scroll Progress Bar */}
      <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent">
        <motion.div
          className="h-full bg-[image:var(--gradient-primary)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="fixed top-0 z-50 flex w-full items-center justify-center px-4 py-4 sm:px-6">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            isScrolled
              ? "border-white/10 bg-[rgba(11,17,32,0.75)] shadow-lg shadow-black/20 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          {/* Logo / Route Toggle */}
          <Link to={isUIPlayground ? "/" : "/ui-playground"}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)] sm:px-5 sm:py-2.5 sm:text-base"
            >
              <span className="relative z-10">
                {isUIPlayground ? "<Portfolio />" : "<UI-Playground />"}
              </span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 ease-out group-hover:translate-x-full" />
            </motion.div>
          </Link>

          {/* Desktop Links */}
          {!isUIPlayground && (
            <ul className="hidden items-center gap-1 md:flex">
              {LINKS.map((link) => (
                <li key={link.id}>
                  
                    <a href={`#${link.id}`}
                    className="group relative block rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {link.name}
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 scale-x-0 bg-[image:var(--gradient-primary)] transition-transform duration-300 origin-left group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Mobile Menu Toggle */}
          {!isUIPlayground && (
            <motion.button
              onClick={toggleMenu}
              className="z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 focus:outline-none md:hidden"
              whileTap={{ scale: 0.9 }}
              aria-label="Menu"
            >
              {isOpen ? (
                <FaTimes className="h-5 w-5 text-[var(--primary)]" />
              ) : (
                <FaBars className="h-5 w-5 text-[var(--text-primary)]" />
              )}
            </motion.button>
          )}
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {!isUIPlayground && isOpen && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[rgba(11,17,32,0.97)] backdrop-blur-md md:hidden"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--primary)] opacity-10 blur-3xl" />

            <ul className="relative space-y-5 text-center sm:space-y-7">
              {LINKS.map((link, index) => (
                <motion.li key={link.id} variants={linkVariants}>
                  
                    <a href={`#${link.id}`}
                    onClick={toggleMenu}
                    className="group relative flex items-center justify-center gap-3 px-4 py-1 text-3xl font-semibold uppercase tracking-wider text-[var(--text-primary)] transition-all hover:text-[var(--secondary)] sm:text-4xl"
                  >
                    <span className="font-mono text-base text-[var(--primary)] opacity-70">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {link.name}

                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[image:var(--gradient-primary)] transition-all duration-300 group-hover:w-2/3"></span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={linkVariants}
              className="absolute bottom-10 text-xs uppercase tracking-[0.3em] text-[var(--text-secondary)]"
            >
              Scroll to explore
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;