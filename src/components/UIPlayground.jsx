import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Palette,
} from "lucide-react";
import ButtonsUI from "./UI-components/ButtonsUI";
import LoadersUI from "./UI-components/LoadersUI";
import CardsUI from "./UI-components/CardsUI";
import FormsUI from "./UI-components/FormsUI";
import NavbarUI from "./UI-components/NavbarUI";
import HoverUI from "./UI-components/HoverUI";
import BadgesUI from "./UI-components/BadgesUI";
import AvatarsUI from "./UI-components/AvatarUI";
import AlertsUI from "./UI-components/AlertUI";

function UIPlayground() {
  const uiTabs = [
    { name: "Buttons", component: <ButtonsUI />, icon: <Zap size={16} /> },
    { name: "Loaders", component: <LoadersUI />, icon: <Sparkles size={16} /> },
    { name: "Cards", component: <CardsUI />, icon: <Palette size={16} /> },
    { name: "Forms", component: <FormsUI />, icon: "📝" },
    { name: "Navbar", component: <NavbarUI />, icon: "🧭" },
    { name: "Hover Effects", component: <HoverUI />, icon: "✨" },
    { name: "Badges", component: <BadgesUI />, icon: "🏷️" },
    { name: "Avatars", component: <AvatarsUI />, icon: "👤" },
    { name: "Alerts", component: <AlertsUI />, icon: "⚡" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const activeTab = uiTabs[activeIndex].name;
  const scrollRef = useRef(null);
  const tabRefs = useRef([]);

  // Scroll + Change Tab
  const handleArrowClick = (direction) => {
    if (scrollRef.current) {
      setIsScrolling(true);
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });

      // Reset scrolling state after animation completes
      setTimeout(() => setIsScrolling(false), 500);
    }

    setActiveIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex > 0 ? prevIndex - 1 : prevIndex;
      } else {
        return prevIndex < uiTabs.length - 1 ? prevIndex + 1 : prevIndex;
      }
    });
  };

  // Handle scroll to update active index
  const handleScroll = () => {
    if (scrollRef.current && !isScrolling) {
      const scrollPos = scrollRef.current.scrollLeft;
      const tabWidth = 150; // Approximate tab width
      const newIndex = Math.round(scrollPos / tabWidth);

      if (
        newIndex >= 0 &&
        newIndex < uiTabs.length &&
        newIndex !== activeIndex
      ) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen mt-10 lg:mt-15 px-4 py-8">
      {/* Header with decorative elements */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
          UI Playground
        </h1>
        <p className="text-gray-400 mt-2">Explore interactive UI components</p>

        {/* Note Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-4 p-3 rounded-xl border border-yellow-400 bg-yellow-100/20 text-yellow-300 text-sm md:text-base inline-block"
        >
          ⚠️ <span className="font-semibold">Note:</span>
          These UIs are built only with{" "}
          <span className="text-emerald-400 font-medium">
            TailwindCSS
          </span> +{" "}
          <span className="text-lime-400 font-medium">Framer Motion</span>.
          Please install them first.
        </motion.div>
      </motion.div>

      {/* Tab Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative bg-neutral-900 w-full max-w-5xl h-auto min-h-12 lg:min-h-14 border border-neutral-800 rounded-2xl flex items-center shadow-xl shadow-black/30 mb-8"
      >
        {/* Left Arrow with improved styling */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleArrowClick("left")}
          disabled={activeIndex === 0}
          className="absolute left-0 z-10 h-full px-3 bg-gradient-to-r from-neutral-900 via-neutral-900 to-transparent flex items-center"
        >
          <ChevronLeft
            className={`${
              activeIndex === 0 ? "text-neutral-600" : "text-white"
            }`}
          />
        </motion.button>

        {/* Scrollable Tabs */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide w-full px-10 space-x-2"
        >
          {uiTabs.map((tab, index) => (
            <motion.div
              key={tab.name + index}
              ref={(el) => (tabRefs.current[index] = el)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActiveIndex(index);
                setIsScrolling(true);
                setTimeout(() => setIsScrolling(false), 500);
              }}
              className={`flex items-center text-sm lg:text-base font-medium px-4 lg:px-5 py-2 lg:py-3 rounded-full cursor-pointer transition-all duration-300 whitespace-nowrap ${
                activeIndex === index
                  ? "bg-gradient-to-r from-lime-400 to-emerald-400 text-black shadow-lg shadow-lime-400/20"
                  : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </motion.div>
          ))}
        </div>

        {/* Right Arrow with improved styling */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleArrowClick("right")}
          disabled={activeIndex === uiTabs.length - 1}
          className="absolute right-0 z-10 h-full px-3 bg-gradient-to-l from-neutral-900 via-neutral-900 to-transparent flex items-center"
        >
          <ChevronRight
            className={`${
              activeIndex === uiTabs.length - 1
                ? "text-neutral-600"
                : "text-white"
            }`}
          />
        </motion.button>
      </motion.div>

      {/* Tab Content */}
      <div className="w-full max-w-[100%] rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl shadow-black/30"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {uiTabs[activeIndex].component}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator dots for mobile */}
      <div className="flex mt-6 space-x-2 md:hidden">
        {uiTabs.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              activeIndex === index ? "bg-lime-400" : "bg-neutral-700"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}

export default UIPlayground;
