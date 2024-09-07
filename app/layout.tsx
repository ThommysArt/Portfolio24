import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/nav-bar";
import { get_projects } from "@/actions/json-parse";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./_components/footer";
import { Suspense } from "react";
import Loading from "./loading";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/main.ico" />
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans overflow-none antialiased p-0 m-0",
          fontSans.variable
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          > 
          <Suspense fallback={<Loading />} >
            <div className="overscroll-x-none p-0 m-0">
              <Navbar />
              {children}
              <Footer />
              <BackgroundBeams />
            </div>
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
