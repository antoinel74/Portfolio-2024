"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { Button } from "../components/Button";

export interface IProjectGrid {
  projects: any[];
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

export const ProjectsGrid: React.FC<IProjectGrid> = ({ projects }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const limitedProjects = projects.slice(0, 4);

  return (
    <section className="w-full min-h-screen relative md:px-8" id="works">
      {limitedProjects && (
        <ul className="grid grid-cols-5 grid-rows-2 gap-4 mb-8">
          {limitedProjects.map((item, index) => (
            <li key={index} className={cardGridPositions(index, isMobile)}>
              <ProjectCard key={index} uid={item.uid} {...item.data} />
            </li>
          ))}
        </ul>
      )}
      <Button link={`/projects/${projects[1].uid}`} linkText="Discover works ->" />
    </section>
  );
};
