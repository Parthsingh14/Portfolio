import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TRAIL_LAGS = [0.35, 0.22, 0.14, 0.09];
const TRAIL_SIZES = [5, 4, 3, 2];
const ORBIT_RADIUS = 16;
const ORBIT_SPEED = 0.0028;

const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState([]);

  const mousePos = useRef({ x: 0, y: 0 });
  const corePos = useRef({ x: 0, y: 0 });
  const trailPos = useRef(TRAIL_LAGS.map(() => ({ x: 0, y: 0 })));
  const angleRef = useRef(0);
  const isHoveringRef = useRef(false);

  const coreRef = useRef(null);
  const satelliteRef = useRef(null);
  const linkRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    const checkDevice = () => setIsDesktop(window.innerWidth > 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = (e) => {
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
    };

    const handleOver = (e) => {
      const target = e.target.closest(
        'a, button, [role="button"], input, textarea'
      );
      setIsHovering(Boolean(target));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleOver);

    let animationFrameId;

    const animate = () => {
      // Core dot — fast follow
      corePos.current.x += (mousePos.current.x - corePos.current.x) * 0.35;
      corePos.current.y += (mousePos.current.y - corePos.current.y) * 0.35;

      // Comet trail — chained lag
      let prevX = corePos.current.x;
      let prevY = corePos.current.y;
      trailPos.current.forEach((p, i) => {
        p.x += (prevX - p.x) * TRAIL_LAGS[i];
        p.y += (prevY - p.y) * TRAIL_LAGS[i];
        prevX = p.x;
        prevY = p.y;

        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
        }
      });

      // Orbiting satellite
      angleRef.current += ORBIT_SPEED * 16;
      const hover = isHoveringRef.current;
      const radius = hover ? ORBIT_RADIUS * 1.8 : ORBIT_RADIUS;
      const satX = corePos.current.x + Math.cos(angleRef.current) * radius;
      const satY = corePos.current.y + Math.sin(angleRef.current) * radius;

      if (coreRef.current) {
        const scale = hover ? 1.6 : 1;
        coreRef.current.style.transform = `translate3d(${corePos.current.x}px, ${corePos.current.y}px, 0) scale(${scale})`;
      }

      if (satelliteRef.current) {
        satelliteRef.current.style.transform = `translate3d(${satX}px, ${satY}px, 0)`;
      }

      if (linkRef.current) {
        const dx = satX - corePos.current.x;
        const dy = satY - corePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const rot = (Math.atan2(dy, dx) * 180) / Math.PI;
        linkRef.current.style.width = `${dist}px`;
        linkRef.current.style.transform = `translate3d(${corePos.current.x}px, ${corePos.current.y}px, 0) rotate(${rot}deg)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Comet trail */}
      {TRAIL_LAGS.map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full bg-[var(--secondary)]"
          style={{
            width: TRAIL_SIZES[i],
            height: TRAIL_SIZES[i],
            marginLeft: -TRAIL_SIZES[i] / 2,
            marginTop: -TRAIL_SIZES[i] / 2,
            opacity: 0.35 - i * 0.07,
          }}
        />
      ))}

      {/* Orbit connector line */}
      <div
        ref={linkRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-px origin-left bg-[var(--secondary)] opacity-40"
      />

      {/* Orbiting satellite particle */}
      <div
        ref={satelliteRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--secondary)] shadow-[0_0_8px_var(--secondary)]"
      />

      {/* Core dot */}
      <div
        ref={coreRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)] transition-[width,height] duration-200"
        style={{ width: 10, height: 10 }}
      />

      {/* Hover ring — appears only over clickable elements */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9996] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--primary)] transition-all duration-200"
        style={{
          width: isHovering ? 44 : 0,
          height: isHovering ? 44 : 0,
          opacity: isHovering ? 0.4 : 0,
          transform: `translate3d(${corePos.current.x}px, ${corePos.current.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Click ripples */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onAnimationComplete={() =>
              setRipples((prev) => prev.filter((p) => p.id !== r.id))
            }
            className="pointer-events-none fixed left-0 top-0 z-[9995] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--primary)]"
            style={{ left: r.x, top: r.y }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;