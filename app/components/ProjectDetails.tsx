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
    <section className="md:mt-0 project-details flex flex-col md:flex-row justify-center md:items-center w-full min-h-screen px-6 md:px-12">
      <div className="w-full md:w-1/2 flex flex-col gap-4 mt-24 md:mt-0">
        <div className="flex justify-between">
          <h1 className="font-bold uppercase text-5xl">{project.name}</h1>
          <div className="flex gap-2 items-center opacity-80">
            <Link href={`/projects/${getPrevId(project.id)}/`}>-</Link>
            <span>{`${project.id}/${maxItems}`}</span>
            <Link href={`/projects/${getNextId(project.id)}/`}>+</Link>
          </div>
        </div>

        <div className="flex gap-2 opacity-80 text-sm">
          {project.stack.map((stackItem, index) => (
            <p key={index} className="border border-gray-200 rounded-full py-1 px-3">
              {stackItem}
            </p>
          ))}
        </div>
        <p className="my-6 font-light">{project.description}</p>
        <p className="font-semibold my-6">
          Year : <span className="font-light">{project.date}</span>
        </p>
        <a href={project.link} className="links font-semibold">
          Click here to see the deployed project &rarr;
        </a>
      </div>

      <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-end gap-4 mt-6 md:mt-0 overflow-hidden">
        <Image
          src={project.img}
          alt={project.name}
          height={200}
          width={400}
          className="hover:scale-95 transition-all"
        />
        <Image
          src={project.img}
          alt={project.name}
          height={200}
          width={400}
          className="hover:scale-95 transition-all"
        />
      </div>
    </section>
  );
};
