"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectData } from "@/app/types/types";
import { Button } from "../components/Button";

interface ProjectsGridProps {
  data: ProjectData[];
}

const cardGridPositions = (index: number, isMobile: boolean): string => {
  if (isMobile) {
    return "col-span-5";
  }
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
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const limitedData = data.slice(0, 4);

  return (
    <section className="w-full min-h-screen relative md:px-6" data-scroll-section>
      <div className="grid grid-cols-5 grid-rows-2 gap-4 mb-5">
        {limitedData.map((item, index) => (
          <div key={index} className={cardGridPositions(index, isMobile)}>
            <ProjectCard key={index} data={item} />
          </div>
        ))}
      </div>
      <Button link="/projects/1" linkText="Learn more ->" />
    </section>
  );
};
