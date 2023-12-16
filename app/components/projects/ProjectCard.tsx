import React from "react";
import Image from "next/image";
import { ProjectData } from "../../../types/types";
import Link from "next/link";

interface ProjectCardProps {
  data: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const stackKeywords = data.stack.join(" / ");

  return (
    <div className="w-full md:w-1/2">
      <Link href={`/projects/${data.id}`}>
        <figure className="relative w-full min-h-[300px] rounded bg-red-200">
          <Image src={data.img} alt={data.name} fill />
        </figure>
        <div className="grid grid-cols-2 grid-rows-2 gap-1 font-light">
          <h2>{data.name}</h2>
          <span className="ml-auto">{stackKeywords}</span>
          <p>{data.description}</p>
          <span className="ml-auto">{data.date}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
