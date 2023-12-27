"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ProjectData } from "../types/types";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  data: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cursor = cursorRef.current;

    // "See Project" hover
    el.addEventListener("mouseenter", () => {
      if (cursor) {
        gsap.to(cursor, {
          duration: 0.5,
          opacity: 1,
          scale: 1.2,
          ease: "elastic",
        });
      }
    });

    el.addEventListener("mouseleave", () => {
      if (cursor) {
        gsap.to(cursor, {
          duration: 0.5,
          opacity: 0,
          scale: 1,
          ease: "elastic",
        });
      }
    });

    // Reveal animation
    gsap.fromTo(
      el,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <div className="w-full overflow-hidden relative ">
      <div
        className="pointer-events-none opacity-0 z-50 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-light w-28 h-28 flex justify-center items-center"
        ref={cursorRef}
      >
        <span>See Project</span>
      </div>
      <Link href={`/projects/${data.id}`}>
        <figure className="relative w-full min-h-[50vh] rounded-md opacity-0" ref={ref}>
          <Image
            src={data.img}
            alt={data.name}
            fill
            className="aspect-[3/4] absolute rounded-md w-full h-full object-cover"
          />
          <figcaption className="absolute top-2 left-2 bg-black rounded-xl px-2 opacity-50">{data.name}</figcaption>
          <span className="absolute top-2 right-2 bg-black rounded-xl px-2 opacity-50">{data.date}</span>
        </figure>
      </Link>
    </div>
  );
};

export default ProjectCard;
