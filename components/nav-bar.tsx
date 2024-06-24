"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle"
import { Project } from "@/actions/json-parse";



export default function Navbar({ className, projects }: { className?: string, projects: Project[] }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 items-center", className)}
      >
        <Menu setActive={setActive}>
          <a className="group text-blue-900 dark:text-blue-200 hover:text-blue-500 transition duration-300" href="/">Home<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span></a>
          <a className="group text-blue-900 dark:text-blue-200 hover:text-blue-500 transition duration-300" href="/projects">Projects<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span></a>
          <a className="group text-blue-900 dark:text-blue-200 hover:text-blue-500 transition duration-300" href="/contact">Contact<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span></a>
          <ModeToggle />
        </Menu>
      </div>
    );
  }

