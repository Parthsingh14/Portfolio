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
import { useState, useEffect } from "react";
import IntroLoader from "./components/IntroLoader";
import CustomCursor from "./components/CustomCursor";
import Lenis from "lenis";

function App() {
  const [isUIPlayground, setisUIPlayground] = useState(false);
  const [showLoader, setShowLoader] = useState(true); // ✅ always show on reload

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6, // smoothness speed
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative">
        <FloatingIcons className="pointer-events-none" />

        <AnimatePresence>
          {showLoader ? (
            <IntroLoader onFinish={() => setShowLoader(false)} />
          ) : (
            <main className="relative font-light antialiased text-[var(--text-primary)] bg-[var(--background)] selection:bg-[var(--primary)] selection:text-white">
              <Navbar
                isUIPlayground={isUIPlayground}
                setisUIPlayground={setisUIPlayground}
              />
              <CustomCursor />

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
                      {/* <Education /> */}
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
