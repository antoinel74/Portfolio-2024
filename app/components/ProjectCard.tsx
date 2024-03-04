"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCardProps } from "@/customtypes/type";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard: React.FC<ProjectCardProps> = ({ year, title, img, uid }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reveal animation
    gsap.fromTo(
      el,
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <div className="w-full overflow-hidden relative group opacity-0" ref={ref}>
      <div className="pointer-events-none opacity-0 text-lg z-50 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-light w-32 h-32 flex justify-center items-center group-hover:opacity-100 scale-50 group-hover:scale-110 duration-300">
        <span>See Project</span>
      </div>
      {img && (
        <PrismicNextLink href={`/projects/${uid}`}>
          <figure
            className={`relative w-full h-full min-h-[50vh] rounded-md overflow-hidden font-ibm uppercase text-xs`}
          >
            <PrismicNextImage field={img} fill className="absolute rounded-md w-full h-full object-cover" />
            <figcaption className="absolute top-2 left-2 bg-black rounded-xl px-2 opacity-50 text-white">
              {title}
            </figcaption>
            <div className="absolute flex items-center gap-1 top-2 right-2 bg-black rounded-xl px-2 opacity-50 text-white">
              {year}
              <span className="block h-1 w-1 bg-white rounded-full" />
            </div>
          </figure>
        </PrismicNextLink>
      )}
    </div>
  );
};

export default ProjectCard;
