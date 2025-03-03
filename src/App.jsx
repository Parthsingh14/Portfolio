import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import FloatingIcons from "./components/FloatingIcons";
import { AnimatePresence,motion } from "motion/react";

function App() {
  return (
    <div className="relative">
      <FloatingIcons />
      <main className="relative font-light text-white antialiased selection:bg-lime-300 selection:text-black">
        <Navbar/>
        <Hero/>
        <Marquee/>
        <Projects/>
        <About/>
        {/* <Work/> */}
        <Contact/>
      </main>
    </div>
  )
}

export default App
