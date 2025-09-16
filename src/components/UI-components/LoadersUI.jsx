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
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 bg-lime-400 rounded-full"
              animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      ),
      code: `
import { motion } from "framer-motion";

export default function DotsLoader() {
  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-3 h-3 bg-lime-400 rounded-full"
          animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
      `,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loadersData.map((item) => (
        <LoaderCard key={item.id} item={item} />
      ))}
    </div>
  );
}
