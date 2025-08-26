import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import ButtonsUI from "./UI-components/ButtonsUI"
import LoadersUI from "./UI-components/LoadersUI"
import CardsUI from "./UI-components/CardsUI"
import FormsUI from "./UI-components/FormsUI"
import NavbarUI from "./UI-components/NavbarUI"
import HoverUI from "./UI-components/HoverUI"

function UIPlayground() {
  const uiTabs = [
    { name: "Buttons", component: <ButtonsUI /> },
    { name: "Loaders", component: <LoadersUI /> },
    { name: "Cards", component: <CardsUI /> },
    { name: "Forms", component: <FormsUI /> },
    { name: "Navbar", component: <NavbarUI /> },
    { name: "Hover Effects", component: <HoverUI /> },
  ];

  const [activeTab, setActiveTab] = useState(uiTabs[0].name);

  return (
    <div className="flex flex-col items-center min-h-screen mt-20 lg:mt-15 px-4">
      {/* Tab Container - Made responsive */}
      <div className="bg-neutral-900 w-full max-w-4xl h-auto min-h-10 lg:h-14 border-0 rounded-4xl overflow-x-auto">
        <div className="flex w-max min-w-full">
          {uiTabs.map((tab) => (
            <div
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`text-sm lg:text-lg font-semibold px-3 lg:px-6 py-2 lg:py-3 rounded-4xl cursor-pointer transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.name
                  ? "bg-lime-400 text-black"
                  : "text-white hover:bg-neutral-800"}`}
            >
              {tab.name}
            </div>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-4xl mt-6 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {uiTabs.find((tab) => tab.name === activeTab)?.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default UIPlayground;