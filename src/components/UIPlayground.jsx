import React, { useState, useRef, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Palette,
  LayoutGrid,
  Navigation,
  MousePointer2,
  BadgeCheck,
  UserCircle2,
  AlertTriangle,
  FileText,
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
    { name: "Forms", component: <FormsUI />, icon: <FileText size={16} /> },
    { name: "Navbar", component: <NavbarUI />, icon: <Navigation size={16} /> },
    { name: "Hover Effects", component: <HoverUI />, icon: <MousePointer2 size={16} /> },
    { name: "Badges", component: <BadgesUI />, icon: <BadgeCheck size={16} /> },
    { name: "Avatars", component: <AvatarsUI />, icon: <UserCircle2 size={16} /> },
    { name: "Alerts", component: <AlertsUI />, icon: <AlertTriangle size={16} /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = uiTabs[activeIndex].name;

  const scrollRef = useRef(null);
  const tabRefs = useRef([]);

  // Auto scroll active tab into view
  useEffect(() => {
    tabRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  const handleArrowClick = (direction) => {
    setActiveIndex((prev) => {
      if (direction === "left") return Math.max(prev - 1, 0);
      return Math.min(prev + 1, uiTabs.length - 1);
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handleArrowClick("left");
      if (e.key === "ArrowRight") handleArrowClick("right");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const paddedIndex = String(activeIndex + 1).padStart(2, "0");
  const paddedTotal = String(uiTabs.length).padStart(2, "0");

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 py-28">
      {/* Ambient Glow */}
      <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-[var(--primary)] opacity-[0.08] blur-3xl" />
      <div className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-[var(--secondary)] opacity-[0.08] blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-10 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-[0.2em] text-[var(--text-secondary)]">
          <LayoutGrid size={12} className="text-[var(--primary)]" />
          MODULE {paddedIndex} / {paddedTotal}
        </span>

        <h1
          className="mt-5 text-4xl font-bold md:text-5xl"
          style={{
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          UI Playground
        </h1>

        <p className="mt-3 text-sm text-[var(--text-secondary)] md:text-base">
          Reusable Tailwind + Framer Motion Components
        </p>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 inline-flex max-w-2xl items-center gap-2 rounded-2xl border border-[var(--secondary)]/25 bg-[var(--secondary)]/10 px-5 py-3 text-sm text-[var(--text-primary)] backdrop-blur-md"
        >
          <AlertTriangle size={16} className="shrink-0 text-[var(--secondary)]" />
          <span>
            These components are built using{" "}
            <span className="font-medium text-[var(--secondary)]">TailwindCSS</span>{" "}
            and{" "}
            <span className="font-medium text-[var(--primary)]">Framer Motion</span>.
          </span>
        </motion.div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 mb-8 flex w-full max-w-6xl items-center rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-xl"
      >
        {/* Left Arrow */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleArrowClick("left")}
          disabled={activeIndex === 0}
          className="mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--text-primary)] transition-colors hover:border-[var(--primary)]/40 disabled:opacity-30"
        >
          <ChevronLeft />
        </motion.button>

        {/* Scrollable Tabs */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex flex-1 gap-2 overflow-x-auto"
        >
          {uiTabs.map((tab, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.button
                key={tab.name}
                ref={(el) => (tabRefs.current[index] = el)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveIndex(index)}
                className={`relative flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-tab-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] shadow-[0_10px_30px_var(--card-shadow)]"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.name}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Right Arrow */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleArrowClick("right")}
          disabled={activeIndex === uiTabs.length - 1}
          className="ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--text-primary)] transition-colors hover:border-[var(--primary)]/40 disabled:opacity-30"
        >
          <ChevronRight />
        </motion.button>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            {/* Panel eyebrow */}
            <div className="mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-white">
                {uiTabs[activeIndex].icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {activeTab}
                </p>
                <p className="font-mono text-[11px] tracking-wide text-[var(--text-muted)]">
                  module_{paddedIndex}.tsx
                </p>
              </div>
            </div>

            {uiTabs[activeIndex].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile indicators */}
      <div className="mt-6 flex gap-2 md:hidden">
        {uiTabs.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-8 bg-[var(--primary)]"
                : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default UIPlayground;