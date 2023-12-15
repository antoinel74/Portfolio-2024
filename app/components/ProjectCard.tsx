import React from "react";
import Image from "next/image";
import { ProjectData } from "../../types/types";

interface ProjectCardProps {
  data: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const stackKeywords = data.stack.join(" / ");

  return (
    <div className="w-1/2">
      <Image src={data.img} alt={data.name} height={200} width={200} />
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <h2>{data.name}</h2>
        <span className="ml-auto">{stackKeywords}</span>
        <p>{data.description}</p>
        <span className="ml-auto">{data.date}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
