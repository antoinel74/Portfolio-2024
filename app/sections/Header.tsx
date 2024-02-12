"use client";
import React, { useRef, useEffect } from "react";
import { ScrollDown } from "../components/ScrollDown";
import { BusyStatus } from "../components/BusyStatus";
import { gsap } from "gsap";
import Image from "next/image";

interface IHeader {
  description?: any;
}

export const Header: React.FC<IHeader> = (data) => {
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
      stagger: 0.1,
      y: 0,
      x: 0,
    });
  }, []);

  return (
    <header className="relative min-h-[95vh] w-full overflow-hidden px-4 md:px-6">
      <div className="absolute top-1/4 md:top-[45%] w-full flex flex-col md:flex-row-reverse gap-6 md:gap-0 flex-wrap">
        <h1
          className="opacity-0 text-[clamp(2rem,3vw,3.5rem)] leading-tight flex flex-col w-full md:w-1/2 flex-wrap"
          ref={titleRef}
          id="main-title"
        >
          <p className="flex gap-1 items-center">
            <span>Creative mind</span>
            <Image
              src="/svg/and.svg"
              height={18}
              width={16}
              className="invert dark:invert-0 md:h-7 md:w-18 h-5 w-16"
              alt="and"
            />
          </p>
          <span className="pr-4">Front-end developer</span>
          <p className="pr-4">currently based in Belgium</p>
        </h1>
        <div className="flex flex-col gap-6 w-full md:w-1/2 md:items-center opacity-0 y-0" ref={descriptionRef}>
          <div className="w-2/3">
            {data.description && <p className="max-w-[500px] md:text-lg font-light">{data.description}</p>}
            <BusyStatus title="open to work" busy={false} className="my-6" />
          </div>
        </div>
      </div>
      <ScrollDown ref={scrollDownRef} />
    </header>
  );
};
