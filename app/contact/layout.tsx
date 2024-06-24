import type { Metadata } from "next";
import { get_projects } from "@/actions/json-parse";


export const metadata: Metadata = {
  title: "Keabou Thomson | Contact",
  description: "Need a great Full Stack developer, Software Engineer, SaaS developer, You've got one!",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
