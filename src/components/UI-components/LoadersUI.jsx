"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Code2, Eye } from "lucide-react";

// LoaderCard — same as ButtonCard
function LoaderCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="relative h-52 sm:h-60 lg:h-72 [perspective:1200px]">
      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front — Preview */}
        <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-sm [backface-visibility:hidden] flex flex-col justify-between">
          <div className="flex items-center justify-center flex-1">
            {item.preview}
          </div>

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
        <div className="absolute inset-0 bg-neutral-900 text-neutral-100 border border-neutral-800 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-wide opacity-70">
              {item.title || "Loader Code"}
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

// LoadersUI — like ButtonsUI
export default function LoadersUI() {
  const dots = Array.from({ length: 6 });

  const loadersData = [
    {
      id: 1,
      title: "Spinner Loader",
      preview: (
        <motion.div
          className="w-10 h-10 border-4 border-lime-400 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      ),
      code: `
import { motion } from "framer-motion";

export default function SpinnerLoader() {
  return (
    <motion.div
      className="w-10 h-10 border-4 border-lime-400 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  );
}
      `,
    },
    {
      id: 2,
      title: "Dots Loader",
      preview: (
        <div className="relative flex items-center justify-center w-20 h-20">
          {dots.map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full shadow-lg"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "center",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              initial={{
                x: Math.cos((i / dots.length) * 2 * Math.PI) * 30,
                y: Math.sin((i / dots.length) * 2 * Math.PI) * 30,
              }}
            />
          ))}
        </div>
      ),
      code: `
// Spiral Dots Loader
import { motion } from "framer-motion";

export default function SpiralLoader() {
  const dots = Array.from({ length: 6 });

  return (
    <div className="relative flex items-center justify-center w-20 h-20">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full shadow-lg"
          style={{
            top: "50%",
            left: "50%",
            transformOrigin: "center",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
          initial={{
            x: Math.cos((i / dots.length) * 2 * Math.PI) * 30,
            y: Math.sin((i / dots.length) * 2 * Math.PI) * 30,
          }}
        />
      ))}
      <motion.span
        className="absolute w-5 h-5 bg-lime-300 rounded-full opacity-60"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
      `,
    },
    {
      id: 3,
      title: "Rectangular Loader",
      preview: (
        <div className="flex items-center justify-center w-20 h-20 relative">
          {/* Outer Rectangle */}
          <motion.div
            className="absolute w-16 h-16 border-2 border-lime-400 rounded-lg"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
          />

          {/* Inner Rectangle */}
          <motion.div
            className="absolute w-10 h-10 border-4 border-emerald-500 rounded-lg"
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          />
        </div>
      ),
      code: `
import { motion } from "framer-motion";

export default function DualRectLoader() {
  return (
    <div className="flex items-center justify-center w-20 h-20 relative">
      <motion.div
        className="absolute w-16 h-16 border-4 border-lime-400 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      <motion.div
        className="absolute w-10 h-10 border-4 border-emerald-500 rounded-lg"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}
      `,
    },
    {
      id: 4,
      title: "Music Equalizer Loader",
      preview: (
        <div className="flex space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-6 bg-lime-400 rounded"
              animate={{ scaleY: [1, 2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      ),
      code: `
import { motion } from "framer-motion";

export default function BarPulseLoader() {
  return (
    <div className="flex space-x-2">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-6 bg-lime-400 rounded"
          animate={{ scaleY: [1, 2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
      `,
    },
    {
      id: 5,
      title: "Multi-Shape Flip Loader",
      preview: (
        <div className="flex items-center justify-center w-24 h-24 perspective-[1000px]">
          <motion.div
            className="w-14 h-14 bg-gradient-to-tr from-lime-400 via-emerald-500 to-lime-400 shadow-[0_0_20px_rgba(16,185,129,0.6)]"
            animate={{
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
              scale: [1, 1.1, 1],
              borderRadius: ["0.25rem", "50%", "0.25rem", "2rem", "0.25rem"],
              rotateZ: [0, 45, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      ),
      code: `
import { motion } from "framer-motion";

export default function MultiShapeFlipLoader() {
  return (
    <div className="flex items-center justify-center w-24 h-24 perspective-[1000px]">
      <motion.div
        className="w-14 h-14 bg-gradient-to-tr from-lime-400 via-emerald-500 to-lime-400 shadow-[0_0_20px_rgba(16,185,129,0.6)]"
        animate={{
          rotateX: [0, 180, 360],
          rotateY: [0, 180, 360],
          scale: [1, 1.1, 1],
          borderRadius: [
            "0.25rem",
            "50%",
            "0.25rem",
            "2rem",
            "0.25rem"
          ],
          rotateZ: [0, 45, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
      `,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loadersData.map((item) => (
        <LoaderCard key={item.id} item={item} />
      ))}
    </div>
  );
}
