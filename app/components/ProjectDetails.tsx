import React from "react";
import { ProjectData } from "../types/types";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailsProps {
  project: ProjectData;
  maxItems: number;
  getNextId: (currentId: number) => number;
  getPrevId: (currentId: number) => number;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, maxItems, getNextId, getPrevId }) => {
  return (
    <section className="project-details relative w-full min-h-screen flex flex-col justify-center md:flex-row md:mt-0 md:items-center">
      <Link href="/" className="absolute top-6 left-6 text-4xl p-6 font-thin">
        <Image
          src="/arrow-left.svg"
          width={60}
          height={60}
          alt="back_home"
          className="invert hover:opacity-90 hover:scale-95 transition-all"
        />
      </Link>
      <div className="w-full md:w-1/2 flex flex-col gap-4 mt-24 md:mt-0 px-6 md:px-12">
        <div className="flex justify-between">
          <h1 className="font-bold uppercase text-5xl">{project.name}</h1>
          <div className="flex gap-2 items-center opacity-80">
            <Link href={`/projects/${getPrevId(project.id)}/`}>&lt;</Link>
            <span>{`${project.id}/${maxItems}`}</span>
            <Link href={`/projects/${getNextId(project.id)}/`}>&gt;</Link>
          </div>
        </div>

        <div className="flex gap-2 opacity-80 text-sm">
          {project.stack.map((stackItem, index) => (
            <span key={index} className="border border-gray-200 rounded-full py-1 px-3">
              {stackItem}
            </span>
          ))}
        </div>
        <p className="my-6 font-light">{project.description}</p>
        <p className="font-semibold my-6">
          Year : <span className="font-light">{project.date}</span>
        </p>
        <a href={project.link} className="links font-semibold">
          See the deployed project &rarr;
        </a>
      </div>

      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col justify-center md:items-end gap-4 mt-6 md:mt-0">
        <a href={project.link}>
          <Image src={project.img} alt={project.name} fill className="object-cover hover:scale-[99%] transition-all" />
        </a>
      </div>
    </section>
  );
};
