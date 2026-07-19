import { notFound } from "next/navigation";
import { projectsData } from "@/data/portfolioData";
import ProjectDetailClient from "./ProjectDetailClient";

// Static export: every project page is generated at build time
export const dynamicParams = false;

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!projectsData.some((p) => p.id === id)) {
    notFound();
  }

  return <ProjectDetailClient id={id} />;
}
