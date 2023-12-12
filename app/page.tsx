import Image from "next/image";
import { fetchProjects } from "@/sanity/sanity-utils";
import { Header } from "./components/Header";

export default async function Home() {
  const projects = await fetchProjects();
  return (
    <main>
      <Header />
      <div>
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </div>
    </main>
  );
}
