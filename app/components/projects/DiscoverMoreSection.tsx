import React from "react";
import { ProjectsList } from "./ProjectsList";
import { ProjectData } from "@/types/types";

interface DiscoverMoreSectionProps {
  data: ProjectData[];
}

const DiscoverMoreSection: React.FC<DiscoverMoreSectionProps> = ({ data }) => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center relative px-6">
      {/*     <div>
        <ProjectsList />
      </div> */}
    </section>
  );
};

export default DiscoverMoreSection;
