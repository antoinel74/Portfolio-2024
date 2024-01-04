import React from "react";
import { ProjectDetails } from "@/app/components/ProjectDetails";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getByUID("project", params.uid).catch(() => notFound());
  const projects = await client.getAllByType("project");

  const currentIndex = projects.findIndex((project) => project.id === page.id);
  const nextUID = currentIndex < projects.length - 1 ? projects[currentIndex + 1].uid : projects[0].uid;
  const prevUID = currentIndex > 0 ? projects[currentIndex - 1].uid : projects[projects.length - 1].uid;

  const displayedIndex = currentIndex + 1;
  const maxItems = projects.length;

  return (
    <>
      <ProjectDetails
        {...page.data}
        maxItems={maxItems}
        currentIndex={displayedIndex}
        nextUID={nextUID}
        prevUID={prevUID}
      />
    </>
  );
}
