
import { promises as fs } from "fs";
import { ProjectData } from "./types/types";
import { Header , ProjectsGrid, Contact } from "./sections"
import { Button, Footer, CustomCursor }from "./components"

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf-8");
  const data: ProjectData[] = JSON.parse(file);

  return (
    <main className="px-6" data-scroll-container id="main-container">
      <CustomCursor />
      <Header />
      <ProjectsGrid data={data} />
      <Button link="/projects/1" linkText="Learn more ->" />
      <Contact />
    </main>
  );
}
