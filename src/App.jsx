import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Work from "./components/Work";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import FloatingIcons from "./components/FloatingIcons";
import { AnimatePresence,motion } from "framer-motion";
import UIPlayground from "./components/UIPlayground"; // new import
import { useState } from "react";

function App() {

  const [isUIPlayground, setisUIPlayground] = useState(false)


  return (
    <BrowserRouter>
      <div className="relative">
        <FloatingIcons className="pointer-events-none" />
        <main className="relative font-light text-white antialiased selection:bg-lime-300 selection:text-black">
          <Navbar isUIPlayground={isUIPlayground} setisUIPlayground={setisUIPlayground} />
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
            
            <Route path="/ui-playground"  element={
                <div className="relative z-50">
                  <UIPlayground />
                </div>
              }  />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
