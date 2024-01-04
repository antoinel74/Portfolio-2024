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
    <section className="relative min-h-[95vh] w-full overflow-hidden px-4 md:px-6">
      <div className="absolute top-1/4 md:top-1/2 w-full flex flex-col md:flex-row-reverse gap-6 md:gap-0 flex-wrap">
        <h1
          className="opacity-0 text-[clamp(1.9rem,3vw,3rem)] leading-tight flex flex-col w-full md:w-1/2 flex-wrap"
          ref={titleRef}
          id="main-title"
        >
          <span className="flex gap-1 items-center">
            Creative mind{" "}
            <Image
              src="/svg/and.svg"
              height={18}
              width={16}
              className="invert dark:invert-0 md:h-7 md:w-18 h-5 w-16"
              alt="and"
            />
          </span>
          <span>Front-end developer</span>
          <span>currently based in Belgium</span>
        </h1>
        <div className="flex flex-col gap-6 w-full md:w-1/2 md:pl-12 opacity-0 y-0" ref={descriptionRef}>
          {data.description && <p className="w-2/3 max-w-[500px]">{data.description}</p>}
          <BusyStatus title="open to work" busy={false} className="" />
        </div>
      </div>
      <ScrollDown ref={scrollDownRef} />
    </section>
  );
};
