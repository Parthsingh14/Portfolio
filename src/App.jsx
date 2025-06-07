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

function App() {
  return (
    <div className="relative">
      <FloatingIcons />
      <main className="relative font-light text-white antialiased selection:bg-lime-300 selection:text-black">
        <Navbar />
        <Hero />         {/* Name + Intro */}
        <About />        {/* Personal background */}
        <Skills />       {/* Interactive skills showcase */}
        <Projects />     {/* Portfolio work */}
        <Experience />   {/* Work history */}
        <Education />    {/* Academic background */}
        <Contact /> 
      </main>
    </div>
  )
}

export default App
