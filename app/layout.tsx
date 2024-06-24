import type { Metadata } from "next";
import { Ubuntu as FontSans } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/nav-bar";
import { get_projects } from "@/actions/json-parse";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["cyrillic"],
  variable: "--font-sans",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Keabou Thomson",
  description: "A Dedicated and Skilled Computer Science Practitioner experienced in web design, SaaS development, and full stack application development.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = await get_projects()
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/main.ico" />
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans overflow-none antialiased",
          fontSans.variable
        )}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div className="h-[40rem] w-screen rounded-md relative flex flex-col items-center justify-center antialiased">
            <Navbar className="top-5 bg-transparent backdrop-blur-sm" projects={projects} />
            {children}
            <BackgroundBeams />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
