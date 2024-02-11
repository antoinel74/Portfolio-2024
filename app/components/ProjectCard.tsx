"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

gsap.registerPlugin(ScrollTrigger);

export interface ProjectCardProps {
  year: string;
  title: string;
  img: any;
  uid: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ year, title, img, uid }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reveal animation
    gsap.fromTo(
      el,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <div className="w-full overflow-hidden relative group">
      <div className="pointer-events-none opacity-0 text-lg z-50 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-light w-32 h-32 flex justify-center items-center group-hover:opacity-100 scale-50 group-hover:scale-110 duration-300">
        <span>See Project</span>
      </div>
      <PrismicNextLink href={`/projects/${uid}`}>
        <figure className={`relative w-full h-full min-h-[55vh] rounded-md overflow-hidden opacity-0`} ref={ref}>
          <PrismicNextImage field={img} fill className="absolute rounded-md w-full h-full object-cover" />
          <figcaption className="absolute top-2 left-2 bg-black rounded-xl px-2 opacity-50 text-white">
            {title}
          </figcaption>
          <span className="absolute top-2 right-2 bg-black rounded-xl px-2 opacity-50 text-white">{year}</span>
        </figure>
      </PrismicNextLink>
    </div>
  );
};

export default ProjectCard;
