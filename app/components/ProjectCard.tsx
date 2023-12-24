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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Link href={`/projects/${data.id}`}>
        <figure className="relative aspect-w-3 aspect-h-4 w-full min-h-[400px] rounded-md" ref={ref}>
          <Image src={data.img} alt={data.name} fill className="rounded-md w-full h-full object-cover" />
          <figcaption className="absolute top-2 left-2 bg-black rounded-xl px-2 opacity-50">{data.name}</figcaption>
          <span className="absolute top-2 right-2 bg-black rounded-xl px-2 opacity-50">{data.date}</span>
        </figure>
      </Link>
    </div>
  );
};

export default ProjectCard;
