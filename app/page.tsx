import Image from "next/image";
import SectionTitle from "./components/SectionTitle";
import { Navbar } from "./components/Navbar";
import { fetchProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await fetchProjects();
  return (
    <main>
      <Navbar />
      {/*       <SectionTitle title="Open to work !" busy={false} svg={false} /> */}
      <div>
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </div>
    </main>
  );
}
