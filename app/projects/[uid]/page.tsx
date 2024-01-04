import React from "react";
import data from "../../data/data.json";
import { ProjectDetails } from "@/app/components/ProjectDetails";
import { ProjectData } from "@/app/types/types";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getByUID("project", params.uid).catch(() => notFound());

  /*   const getNextId = (currentId: number) => {
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
 */
  /*   const filteredData: ProjectData[] = data.filter((item) => item.id === parsedId);
  const projectToShow = filteredData.length > 0 ? filteredData[0] : null;
 */

  return (
    <>
      <ProjectDetails {...page.data} />
    </>
  );
}
