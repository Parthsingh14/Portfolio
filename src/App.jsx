import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import FloatingIcons from "./components/FloatingIcons";
import Practise from "./components/Practise";
import { AnimatePresence } from "framer-motion";
import UIPlayground from "./components/UIPlayground";
import { useState } from "react";
import IntroLoader from "./components/IntroLoader"; // ✅ loader import

function App() {
  const [isUIPlayground, setisUIPlayground] = useState(false);
  const [showLoader, setShowLoader] = useState(true); // ✅ always show on reload

  return (
    <BrowserRouter>
      <div className="relative">
        <FloatingIcons className="pointer-events-none" />

        <AnimatePresence>
          {showLoader ? (
            <IntroLoader onFinish={() => setShowLoader(false)} />
          ) : (
            <main className="relative font-light text-white antialiased selection:bg-lime-300 selection:text-black">
              <Navbar
                isUIPlayground={isUIPlayground}
                setisUIPlayground={setisUIPlayground}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <About />
                      <Skills />
                      <Projects />
                      <Experience />
                      <Education />
                      <Contact />
                    </>
                  }
                />
                <Route
                  path="/ui-playground"
                  element={
                    <div className="relative z-50">
                      <UIPlayground />
                    </div>
                  }
                />
                <Route
                  path="/practise"
                  element={
                    <div className="relative z-50">
                      <Practise />
                    </div>
                  }
                />
              </Routes>
            </main>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
