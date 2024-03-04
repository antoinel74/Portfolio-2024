"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { KeyTextField } from "@prismicio/client";

export interface ProjectDetailsProps {
  title: KeyTextField;
  description: any;
  year: KeyTextField;
  img: any;
  link: any;
  stacks: any[];
  prevUID: string;
  nextUID: string;
  maxItems: number;
  currentIndex: number;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  year,
  stacks,
  img,
  link,
  nextUID,
  prevUID,
  maxItems,
  currentIndex,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "power3.out" } });
    tl.set(divRef.current, { opacity: 0, y: 50 }).set(descRef.current, { opacity: 0, y: 50 });

    tl.to([divRef.current, descRef.current], {
      opacity: 1,
      y: 0,
      x: 0,
    });
  }, []);

  return (
    <section className="project-details relative w-full min-h-screen flex flex-col justify-center md:flex-row md:mt-0 md:items-center">
      <PrismicNextLink href="/" className="fixed top-0 left-6 z-20 p-4 hidden md:inline">
        <Image
          src="/arrow-left.svg"
          width={60}
          height={60}
          alt="back_home"
          className="dark:invert hover:scale-95 transition-all"
        />
      </PrismicNextLink>
      <div className="opacity-0 w-full md:w-1/2 flex flex-col gap-4 mt-24 md:mt-12 px-6 md:px-12" ref={divRef}>
        <h2 className="font-bold uppercase text-5xl">{title}</h2>

        {stacks && (
          <div className="flex flex-wrap gap-2 opacity-80 text-sm">
            {stacks.map((item, index) => (
              <span key={index} className="border border-gray-400 rounded-full py-1 px-3 uppercase font-ibm text-xs">
                {item.tech}
              </span>
            ))}
          </div>
        )}

        {description && (
          <p className="my-6 md:h-[250px] text-lg md:overflow-scroll" ref={descRef}>
            {description}
          </p>
        )}

        {year && (
          <p className="font-semibold py-2">
            Year: <span className="font-light">{year}</span>
          </p>
        )}
        {link && (
          <Link href={link.url} className="links py-2 font-semibold">
            See the Github repository &rarr;
          </Link>
        )}
      </div>

      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col justify-center md:items-end gap-4 mt-6 md:mt-0 font-ibm text-sm">
        <PrismicNextImage field={img} fill className="object-cover transition-all" />
        <div className="absolute top-4 left-4 flex items-center bg-black rounded-full py-1 px-2 opacity-75 z-20">
          <PrismicNextLink href={`/projects/${prevUID}`} className="hover:scale-105">
            PREV
          </PrismicNextLink>
          <span className="mx-1 flex inline-block">&#124; {`${currentIndex}/${maxItems}`} &#124;</span>
          <PrismicNextLink href={`/projects/${nextUID}`} className="hover:scale-105">
            NEXT
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};
