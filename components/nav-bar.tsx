"use client";
import React, { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link";
import { Card, CardContent } from "./ui/card";


const Navbar = () => {
  return (
    <div className="h-36 w-full flex justify-center items-center p-0 m-0">
      <Card className="fixed top-5 z-50 rounded-full backdrop-blur-sm bg-transparent p-0 m-0">
        <CardContent className="flex space-x-4 md:space-x-8 px-12 py-4 justify-center items-center">
          <Link className="group text-blue-900 dark:text-blue-200 hover:text-blue-500 transition duration-300 uppercase font-bold text-sm md:text-md" href="/">Home<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span></Link>
          <Link className="group text-blue-900 dark:text-blue-200 hover:text-blue-500 transition duration-300 uppercase font-bold text-sm md:text-md" href="/projects">Projects<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span></Link>
          <Link className="group text-blue-900 dark:text-blue-200 hover:text-blue-500 transition duration-300 uppercase font-bold text-sm md:text-md" href="/contact">Contact<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span></Link>
          <ModeToggle />
        </CardContent>
      </Card>
    </div>
  )
}

export default Navbar