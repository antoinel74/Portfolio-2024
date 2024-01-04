import { Header } from "./sections/Header";
import { DescriptionProps } from "./components/DescriptionBlock";
import { promises as fs } from "fs";
import { ProjectData } from "./types/types";
import { ProjectsGrid } from "./sections/ProjectsGrid";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("homepage");
  const projects = await client.getAllByType("project", {
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
  });

  return (
    <main data-scroll-container id="main-container">
      <CustomCursor />
      <Header {...page?.data} />
      <ProjectsGrid projects={projects.slice(0, 4)} />
      <Contact />
      <Footer />
    </main>
  );
}
