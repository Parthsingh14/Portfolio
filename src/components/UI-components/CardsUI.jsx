"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Code2, Eye } from "lucide-react";

// CardCard — same system as LoaderCard / ButtonCard
function CardCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="relative h-60 sm:h-72 lg:h-80 [perspective:1200px]">
      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front — Preview */}
        <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md [backface-visibility:hidden] flex flex-col justify-between">
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
        <div className="absolute inset-0 bg-neutral-900 text-neutral-100 border border-neutral-800 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-wide opacity-70">
              {item.title || "Card Code"}
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

// CardsUI — gallery of different cards
export default function CardsUI() {
  const cardsData = [
    {
      id: 1,
      title: "Simple Card",
      preview: (
        <div className="p-4 bg-neutral-800 rounded-lg text-center text-neutral-200 w-40">
          <h3 className="font-semibold">Basic Card</h3>
          <p className="text-xs opacity-75 mt-1">This is a simple card.</p>
        </div>
      ),
      code: `
export default function SimpleCard() {
  return (
    <div className="p-4 bg-neutral-800 rounded-lg text-center text-neutral-200 w-40">
      <h3 className="font-semibold">Basic Card</h3>
      <p className="text-xs opacity-75 mt-1">This is a simple card.</p>
    </div>
  );
}
      `,
    },
    {
      id: 2,
      title: "Image Card",
      preview: (
        <div className="w-44 bg-neutral-800 rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/300x180"
            alt="card"
            className="w-full h-24 object-cover"
          />
          <div className="p-3 text-neutral-200">
            <h3 className="font-medium">Image Card</h3>
            <p className="text-xs opacity-70">With image + text.</p>
          </div>
        </div>
      ),
      code: `
export default function ImageCard() {
  return (
    <div className="w-44 bg-neutral-800 rounded-lg overflow-hidden">
      <img
        src="https://placehold.co/300x180"
        alt="card"
        className="w-full h-24 object-cover"
      />
      <div className="p-3 text-neutral-200">
        <h3 className="font-medium">Image Card</h3>
        <p className="text-xs opacity-70">With image + text.</p>
      </div>
    </div>
  );
}
      `,
    },
    {
      id: 3,
      title: "Flip Card (Demo)",
      preview: (
        <div className="relative w-40 h-24 [perspective:1000px]">
          <motion.div
            className="absolute inset-0 [transform-style:preserve-3d]"
            animate={{ rotateY: [0, 180, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-lime-400 text-black font-bold rounded-lg [backface-visibility:hidden]">
              Front
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 text-white font-bold rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
              Back
            </div>
          </motion.div>
        </div>
      ),
      code: `
import { motion } from "framer-motion";

export default function FlipCard() {
  return (
    <div className="relative w-40 h-24 [perspective:1000px]">
      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        animate={{ rotateY: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-lime-400 text-black font-bold rounded-lg [backface-visibility:hidden]">
          Front
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 text-white font-bold rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          Back
        </div>
      </motion.div>
    </div>
  );
}
      `,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((item) => (
        <CardCard key={item.id} item={item} />
      ))}
    </div>
  );
}
