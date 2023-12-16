import React from "react";
import { SectionTitle } from "../SectionTitle";
import { ProjectsList } from "./ProjectsList";
import { ProjectData } from "@/types/types";

interface DiscoverMoreSectionProps {
  data: ProjectData[];
}

const DiscoverMoreSection: React.FC<DiscoverMoreSectionProps> = ({ data }) => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center relative px-6">
      <SectionTitle title="discover more" busy={true} svg={true} className="absolute top-24 left-[5%]" />
      <div>
        <ProjectsList /* data={data}  */ />
      </div>
    </section>
  );
};

export default DiscoverMoreSection;
