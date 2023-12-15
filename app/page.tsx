import { Header } from "./components/header/Header";
import ProjectCard from "./components/ProjectCard";
import { promises as fs } from "fs";
import { ProjectData } from "./types";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf-8");
  const data: ProjectData[] = JSON.parse(file);
  const limitedData = data.slice(0, 2);
  return (
    <main>
      <Header />
      <div className="flex w-full gap-6 px-6">
        {limitedData.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </main>
  );
}
