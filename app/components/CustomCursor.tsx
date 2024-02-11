"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let initCursor = false;
    const cursor = cursorRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (!initCursor && cursor) {
        gsap.to(cursor, {
          duration: 0.3,
          opacity: 1,
          scale: 1,
        });
        initCursor = true;
      }

      if (cursor) {
        gsap.to(cursor, {
          duration: 0.5,
          top: mouseY + "px",
          left: mouseX + "px",
        });
      }
    };

    const handleMouseOut = () => {
      if (cursor) {
        gsap.to(cursor, {
          duration: 0.3,
          opacity: 0,
        });
        initCursor = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className="custom-cursor mix-blend-difference pointer-events-none rounded-full fixed top-0 left-0 bg-[#BCF604] z-50 opacity-1 w-[15px] h-[15px]"
      ref={cursorRef}
      id="custom-cursor"
    ></div>
  );
};
