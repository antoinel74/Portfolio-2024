import React from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectData } from "@/app/types/types";

interface ProjectsGridProps {
  data: ProjectData[];
}

const cardGridPositions = (index: number): string => {
  switch (index) {
    case 0:
      return "col-span-3";
    case 1:
      return "col-span-2 col-start-4";
    case 2:
      return "col-span-2 row-start-2";
    case 3:
      return "col-span-3 col-start-3 row-start-2";
    default:
      return "";
  }
};

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ data }) => {
  const limitedData = data.slice(0, 4);

  return (
    <section className="w-full min-h-screen flex flex-col relative">
      <div className="grid grid-cols-5 grid-rows-2 gap-4 mb-4">
        {limitedData.map((item, index) => (
          <div key={index} className={cardGridPositions(index)}>
            <ProjectCard key={index} data={item} />
          </div>
        ))}
      </div>
    </section>
  );
};
