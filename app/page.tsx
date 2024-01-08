import { Header } from "./sections/Header";
import { ProjectsGrid } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";
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
  console.log(projects);

  return (
    <main data-scroll-container id="main-container">
      <Header {...page?.data} />
      <ProjectsGrid projects={projects} />
      <Contact {...page?.data} />
      <Footer />
    </main>
  );
}
