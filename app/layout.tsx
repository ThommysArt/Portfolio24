import type { Metadata } from "next";
import { Ubuntu as FontSans } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/nav-bar";

const fontSans = FontSans({
  subsets: ["cyrillic"],
  variable: "--font-sans",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Keabou Thomson",
  description: "A Dedicated and Skilled Computer Science Practitioner experienced in web design, SaaS development, and full stack application development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/main.jpg" />
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans overflow-none overscroll-none antialiased",
          fontSans.variable
        )}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div className="h-[40rem] w-screen rounded-md relative flex flex-col items-center justify-center antialiased">
            <Navbar className="top-5 bg-transparent backdrop-blur-sm" />
            {children}
            <BackgroundBeams />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
