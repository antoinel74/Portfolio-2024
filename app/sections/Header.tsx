"use client";
import React, { useRef, useEffect } from "react";
import { TitleBlock } from "../components/TitleBlock";
import { DescriptionBlock } from "../components/DescriptionBlock";
import { ScrollDown } from "../components/ScrollDown";
import { gsap } from "gsap";

export const Header = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const scrollDownRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "power3.out" } });
    tl.set(titleRef.current, { opacity: 0, x: 100 })
      .set(descriptionRef.current, { opacity: 0, y: 50 })
      .set(scrollDownRef.current, { opacity: 0, y: 20 });

    tl.to([titleRef.current, descriptionRef.current, scrollDownRef.current], {
      opacity: 1,
      stagger: { each: 0.06 },
      y: 0,
      x: 0,
    });
  }, []);

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden">
      <div className="absolute top-1/4 md:top-1/2 w-full flex flex-col md:flex-row-reverse gap-6 md:gap-0 flex-wrap">
        <TitleBlock ref={titleRef} />
        <DescriptionBlock ref={descriptionRef} />
      </div>
      <ScrollDown ref={scrollDownRef} />
    </section>
  );
};
