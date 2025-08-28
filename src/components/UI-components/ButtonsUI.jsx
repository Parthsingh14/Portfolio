import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Code2, Eye } from "lucide-react";

function ButtonCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="relative h-72 [perspective:1200px]">
      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front — Preview */}
        <div className="absolute inset-0 bg-gray-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-sm [backface-visibility:hidden] flex flex-col justify-between">
          <div className="flex items-center justify-center flex-1">
            {item.preview}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-md text-sm bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition flex items-center gap-1"
              aria-label="Copy code"
            >
              <Copy size={16} />
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              onClick={() => setFlipped(true)}
              className="px-3 py-1.5 rounded-md text-sm bg-lime-400 hover:bg-lime-300 text-black font-medium transition flex items-center gap-1"
              aria-label="Show code"
            >
              <Code2 size={16} /> Code
            </button>
          </div>
        </div>

        {/* Back — Code */}
        <div className="absolute inset-0 bg-neutral-900 text-neutral-100 border border-neutral-800 rounded-2xl p-4 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wide opacity-70">
              {item.title || "Component Code"}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 rounded-md text-xs bg-neutral-800 hover:bg-neutral-700 transition flex items-center gap-1"
              >
                <Copy size={14} /> {copied ? "Copied!" : "Copy"}
              </button>
              <button
                onClick={() => setFlipped(false)}
                className="px-2.5 py-1 rounded-md text-xs bg-lime-400 hover:bg-lime-300 text-black font-medium transition flex items-center gap-1"
              >
                <Eye size={14} /> Preview
              </button>
            </div>
          </div>

          <pre className="text-xs leading-5 overflow-auto whitespace-pre-wrap flex-1 rounded-md bg-neutral-950/60 p-3">
            {item.code.trim()}
          </pre>
        </div>
      </motion.div>
    </div>
  );
}

function ButtonsUI() {
  const buttonsData = [
    {
      id: 1,
      title: "Primary / Pulse",
      preview: (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(34,197,94,0.0)",
              "0 0 18px rgba(34,197,94,0.35)",
              "0 0 0px rgba(34,197,94,0.0)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-lime-400 text-black shadow-lg"
        >
          Launch 🚀
        </motion.button>
      ),
      code: `
import { motion } from "framer-motion";

export default function PrimaryPulseButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(34,197,94,0.0)",
          "0 0 18px rgba(34,197,94,0.35)",
          "0 0 0px rgba(34,197,94,0.0)"
        ]
      }}
      transition={{ repeat: Infinity, duration: 2.2 }}
      className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-lime-400 text-black shadow-lg"
    >
      Launch 🚀
    </motion.button>
  );
}
      `,
    },
    {
      id: 2,
      title: "Glass / Tilt",
      preview: (
        <motion.button
          whileHover={{ rotate: -2, scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl font-semibold bg-white/10 backdrop-blur border border-white/20 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
        >
          Glassy ✨
        </motion.button>
      ),
      code: `
import { motion } from "framer-motion";

export default function GlassTiltButton() {
  return (
    <motion.button
      whileHover={{ rotate: -2, scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-xl font-semibold bg-white/10 backdrop-blur border border-white/20 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
    >
      Glassy ✨
    </motion.button>
  );
}
      `,
    },
    {
      id: 3,
      title: "Outline / Ripple",
      preview: (
        <motion.div className="relative">
          <motion.span
            initial={{ scale: 0.9, opacity: 0.4 }}
            animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 -z-10 rounded-2xl border border-lime-400/60"
          />
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-2xl font-semibold border border-lime-400 text-lime-300"
          >
            Outline Wave 🌊
          </motion.button>
        </motion.div>
      ),
      code: `
import { motion } from "framer-motion";

export default function OutlineRippleButton() {
  return (
    <motion.div className="relative">
      <motion.span
        initial={{ scale: 0.9, opacity: 0.4 }}
        animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 rounded-2xl border border-lime-400/60"
      />
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 rounded-2xl font-semibold border border-lime-400 text-lime-300"
      >
        Outline Wave 🌊
      </motion.button>
    </motion.div>
  );
}
      `,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
      {buttonsData.map((item) => (
        <ButtonCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ButtonsUI;
