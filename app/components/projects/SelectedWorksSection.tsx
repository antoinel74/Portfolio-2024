import React from "react";
import { SectionTitle } from "../SectionTitle";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "@/types/types";

interface SelectedWorksSectionProps {
  data: ProjectData[];
  limit: number;
}

const SelectedWorksSection: React.FC<SelectedWorksSectionProps> = ({ data, limit }) => {
  const limitedData = data.slice(0, limit);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center relative px-6 lg:px-36 ">
      <SectionTitle title="selected works" busy={true} svg={true} className="absolute top-24 left-[5%]" />
      <div className="flex flex-col md:flex-row w-full gap-6 ">
        {limitedData.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWorksSection;
