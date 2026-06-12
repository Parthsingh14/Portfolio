import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [isDesktop, setIsDesktop] =
    useState(false);

  const mousePos = useRef({
    x: 0,
    y: 0,
  });

  const dotPos = useRef({
    x: 0,
    y: 0,
  });

  const diamondPos = useRef({
    x: 0,
    y: 0,
  });

  const dotRef = useRef(null);
  const diamondRef =
    useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(
        window.innerWidth > 768
      );
    };

    checkDevice();

    window.addEventListener(
      "resize",
      checkDevice
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkDevice
      );
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (
      e
    ) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    let animationFrameId;

    const animate = () => {
      // Fast center dot
      dotPos.current.x +=
        (mousePos.current.x -
          dotPos.current.x) *
        0.35;

      dotPos.current.y +=
        (mousePos.current.y -
          dotPos.current.y) *
        0.35;

      // Smooth delayed shape
      diamondPos.current.x +=
        (mousePos.current.x -
          diamondPos.current.x) *
        0.12;

      diamondPos.current.y +=
        (mousePos.current.y -
          diamondPos.current.y) *
        0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(
          ${dotPos.current.x}px,
          ${dotPos.current.y}px,
          0
        )`;
      }

      if (diamondRef.current) {
        diamondRef.current.style.transform = `
          translate3d(
            ${
              diamondPos.current.x -
              16
            }px,
            ${
              diamondPos.current.y -
              16
            }px,
            0
          )
          rotate(${
            Date.now() / 18
          }deg)
        `;
      }

      animationFrameId =
        requestAnimationFrame(
          animate
        );
    };

    animationFrameId =
      requestAnimationFrame(
        animate
      );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(
        animationFrameId
      );
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Main Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-[var(--primary)]"
      />

      {/* Rotating Diamond */}
      <div
        ref={diamondRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 border border-[var(--secondary)]"
        style={{
          transform:
            "rotate(45deg)",
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(59,130,246,0.08))",
        }}
      />
    </>
  );
};

export default CustomCursor;