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
import { AnimatePresence,motion } from "motion/react";
import UIPlayground from "./components/UIPlayground"; // new import
import { useState } from "react";

function App() {

  const [isUIPlayground, setisUIPlayground] = useState(false)


  return (
    <BrowserRouter>
      <div className="relative">
        <FloatingIcons />
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
            
            <Route path="/ui-playground" element={<UIPlayground />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
