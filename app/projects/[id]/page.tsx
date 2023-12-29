"use client";
import React from "react";
import data from "../../data/data.json";
import { useParams } from "next/navigation";
import { ProjectDetails } from "@/app/components/ProjectDetails";
import { ProjectData } from "@/app/types/types";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const parsedId = parseInt(id);
  const maxItems = data.length;

  const getNextId = (currentId: number) => {
    if (currentId === maxItems) {
      return 1;
    }
    return currentId + 1;
  };

  const getPrevId = (currentId: number) => {
    if (currentId === 1) {
      return maxItems;
    }
    return currentId - 1;
  };

  const filteredData: ProjectData[] = data.filter((item) => item.id === parsedId);
  const projectToShow = filteredData.length > 0 ? filteredData[0] : null;

  return (
    <>
      {projectToShow && (
        <ProjectDetails project={projectToShow} maxItems={maxItems} getNextId={getNextId} getPrevId={getPrevId} />
      )}
    </>
  );
};

export default ProjectPage;
