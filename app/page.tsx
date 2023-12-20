import { Header } from "./components/header/Header";
import { promises as fs } from "fs";
import { ProjectData } from "../types/types";
import { ProjectsGrid } from "./components/projects/ProjectsGrid";
import { Contact } from "./components/contact/Contact";
import { Button } from "./components/Button";
import { TextScrollingBanner } from "./components/TextScrollingBanner";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf-8");
  const data: ProjectData[] = JSON.parse(file);

  return (
    <main className="px-6">
      <Header />
      <ProjectsGrid data={data} />
      <Button link="/projects/1" linkText="Learn more ->" />
      <Contact />
    </main>
  );
}
