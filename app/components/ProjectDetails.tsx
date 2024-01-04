import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

export interface ProjectDetailsProps {
  title: any;
  description: any;
  year: any;
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
  console.log(link);
  return (
    <section className="project-details relative w-full min-h-screen flex flex-col justify-center md:flex-row md:mt-0 md:items-center">
      <Link href="/" className="fixed top-6 left-6 text-4xl p-6 font-thin hidden md:inline">
        <Image
          src="/arrow-left.svg"
          width={60}
          height={60}
          alt="back_home"
          className="dark:invert hover:opacity-90 hover:scale-95 transition-all"
        />
      </Link>
      <div className="w-full md:w-1/2 flex flex-col gap-4 mt-24 md:mt-0 px-6 md:px-12">
        <div className="flex justify-between">
          <h1 className="font-bold uppercase text-5xl">{title}</h1>
          <div className="flex gap-2 items-center opacity-80">
            <Link href={`/projects/${prevUID}`}>&lt;</Link>
            <span>{`${currentIndex}/${maxItems}`}</span>
            <Link href={`/projects/${nextUID}`}>&gt;</Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 opacity-80 text-sm">
          {stacks.map((item, index) => (
            <span key={index} className="border border-gray-400 rounded-full py-1 px-3">
              {item.tech}
            </span>
          ))}
        </div>

        {description && <p className="my-6 font-light md:min-h-[180px]">{description}</p>}

        {year && (
          <p className="font-semibold my-6">
            Year : <span className="font-light">{year}</span>
          </p>
        )}

        {link && (
          <a href={link.url} className="links font-semibold">
            See the deployed project &rarr;
          </a>
        )}
      </div>

      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col justify-center md:items-end gap-4 mt-6 md:mt-0">
        <a href={link.url}>
          <PrismicNextImage field={img} fill className="object-cover hover:scale-[99%] transition-all" />
        </a>
      </div>
    </section>
  );
};
