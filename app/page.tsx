import { Header } from "./sections/Header";
import { promises as fs } from "fs";
import { ProjectData } from "./types/types";
import { ProjectsGrid } from "./sections/ProjectsGrid";
import { Button } from "./components/Button";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

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
      <Footer />
    </main>
  );
}
