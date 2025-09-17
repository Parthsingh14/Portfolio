"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Code2, Eye } from "lucide-react";

// NavbarCard — flip style same as cards/loaders
function NavbarCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="relative h-56 sm:h-64 lg:h-72 [perspective:1200px]">
      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front — Preview */}
        <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md [backface-visibility:hidden] flex flex-col justify-between">
          <div className="flex items-center justify-center flex-1">{item.preview}</div>

          <div className="mt-2 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            <button
              onClick={handleCopy}
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm bg-neutral-800 hover:bg-neutral-700 transition flex items-center gap-1"
            >
              <Copy size={14} />
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              onClick={() => setFlipped(true)}
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm bg-lime-400 hover:bg-lime-300 text-black font-medium transition flex items-center gap-1"
            >
              <Code2 size={14} /> Code
            </button>
          </div>
        </div>

        {/* Back — Code */}
        <div className="absolute inset-0 bg-neutral-900 text-neutral-100 border border-neutral-800 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-wide opacity-70">
              {item.title || "Navbar Code"}
            </span>
            <button
              onClick={() => setFlipped(false)}
              className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs bg-lime-400 hover:bg-lime-300 text-black font-medium transition flex items-center gap-1"
            >
              <Eye size={12} /> Preview
            </button>
          </div>

          <pre className="text-[10px] sm:text-xs leading-4 overflow-auto whitespace-pre-wrap flex-1 rounded-md bg-neutral-950/60 p-2 sm:p-3">
            {item.code.trim()}
          </pre>
        </div>
      </motion.div>
    </div>
  );
}

// NavbarUI — professional designs
export default function NavbarUI() {
  const navbarsData = [
    {
      id: 1,
      title: "Minimal Navbar",
      preview: (
        <nav className="w-full flex justify-between items-center px-4 py-2 bg-neutral-800 rounded-lg text-neutral-100">
          <span className="font-bold text-lg">Logo</span>
          <ul className="flex gap-4 text-sm">
            <li className="hover:text-lime-400 cursor-pointer">Home</li>
            <li className="hover:text-lime-400 cursor-pointer">About</li>
            <li className="hover:text-lime-400 cursor-pointer">Contact</li>
          </ul>
        </nav>
      ),
      code: `
export default function MinimalNavbar() {
  return (
    <nav className="w-full flex justify-between items-center px-4 py-2 bg-neutral-800 rounded-lg text-neutral-100">
      <span className="font-bold text-lg">Logo</span>
      <ul className="flex gap-4 text-sm">
        <li className="hover:text-lime-400 cursor-pointer">Home</li>
        <li className="hover:text-lime-400 cursor-pointer">About</li>
        <li className="hover:text-lime-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
      `,
    },
    {
      id: 2,
      title: "Center Logo Navbar",
      preview: (
        <nav className="w-full flex items-center justify-between px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100">
          <ul className="flex gap-4 text-sm">
            <li className="hover:text-lime-400 cursor-pointer">Services</li>
            <li className="hover:text-lime-400 cursor-pointer">Projects</li>
          </ul>
          <span className="font-bold text-xl text-lime-400">Brand</span>
          <ul className="flex gap-4 text-sm">
            <li className="hover:text-lime-400 cursor-pointer">Blog</li>
            <li className="hover:text-lime-400 cursor-pointer">Contact</li>
          </ul>
        </nav>
      ),
      code: `
export default function CenterLogoNavbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100">
      <ul className="flex gap-4 text-sm">
        <li className="hover:text-lime-400 cursor-pointer">Services</li>
        <li className="hover:text-lime-400 cursor-pointer">Projects</li>
      </ul>
      <span className="font-bold text-xl text-lime-400">Brand</span>
      <ul className="flex gap-4 text-sm">
        <li className="hover:text-lime-400 cursor-pointer">Blog</li>
        <li className="hover:text-lime-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
      `,
    },
    {
      id: 3,
      title: "Glassmorphism Navbar",
      preview: (
        <nav className="w-full flex justify-between items-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
          <span className="font-bold">GlassNav</span>
          <ul className="flex gap-5 text-sm">
            <li className="hover:text-lime-300 cursor-pointer">Dashboard</li>
            <li className="hover:text-lime-300 cursor-pointer">Team</li>
            <li className="hover:text-lime-300 cursor-pointer">Settings</li>
          </ul>
        </nav>
      ),
      code: `
export default function GlassmorphismNavbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
      <span className="font-bold">GlassNav</span>
      <ul className="flex gap-5 text-sm">
        <li className="hover:text-lime-300 cursor-pointer">Dashboard</li>
        <li className="hover:text-lime-300 cursor-pointer">Team</li>
        <li className="hover:text-lime-300 cursor-pointer">Settings</li>
      </ul>
    </nav>
  );
}
      `,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {navbarsData.map((item) => (
        <NavbarCard key={item.id} item={item} />
      ))}
    </div>
  );
}
