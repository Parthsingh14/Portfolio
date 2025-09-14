import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const squarePos = useRef({ x: 0, y: 0 });

  const dotRef = useRef(null);
  const squareRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Fast dot follow
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.4;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.4;

      // Slower square follow (increased delay effect)
      squarePos.current.x += (mousePos.current.x - squarePos.current.x) * 0.08;
      squarePos.current.y += (mousePos.current.y - squarePos.current.y) * 0.08;

      // Apply transforms
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }
      if (squareRef.current) {
        squareRef.current.style.transform = `translate3d(${squarePos.current.x - 12}px, ${squarePos.current.y - 12}px, 0) rotate(${Date.now() / 20}deg)`;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* main dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-lime-300 pointer-events-none z-[9999]"
      />
      {/* rotating square */}
      <div
        ref={squareRef}
        className="fixed top-0 left-0 w-6 h-6 border-2 border-lime-300 pointer-events-none z-[9998]"
      />
    </>
  );
};

export default CustomCursor;
