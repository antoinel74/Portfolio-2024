import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "@/types/types";

interface SelectedWorksSectionProps {
  data: ProjectData[];
  limit: number;
}

export const ProjectsGrid: React.FC<SelectedWorksSectionProps> = ({ data, limit }) => {
  const limitedData = data.slice(0, limit);

  return (
    <section className="w-full min-h-screen flex flex-col relative px-6 lg:px-24 ">
      <div className="flex flex-col md:flex-row w-full gap-6 lg:gap-12 ">
        {limitedData.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};
