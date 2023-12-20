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
        <figure className="relative w-full min-h-[400px] bg-red-200 rounded-md">
          <Image src={data.img} alt={data.name} fill />
          <span className="absolute top-2 left-2 bg-black rounded-xl px-2 opacity-50">{data.name}</span>
          <span className="absolute top-2 right-2 bg-black rounded-xl px-2 opacity-50">{data.date}</span>
        </figure>
      </Link>
    </div>
  );
};

export default ProjectCard;
