import type { Metadata } from "next";
import { get_projects } from "@/actions/json-parse";


export const metadata: Metadata = {
  title: "Keabou Thomson | Projects",
  description: "A Dedicated and Skilled Computer Science Practitioner experienced in web design, SaaS development, and full stack application development.",
};

export default async function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = await get_projects()
  return (
    <>{children}</>
  );
}
