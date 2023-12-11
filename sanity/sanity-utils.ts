import { createClient, groq } from "next-sanity";

export async function fetchProjects() {
  const client = createClient({
    projectId: "40fjtj47",
    dataset: "production",
    apiVersion: "2023-12-11",
  });

  const projects = await client.fetch(
    groq`*[_type == "project"]{
      ...,  
    }`
  );

  return projects;
}
