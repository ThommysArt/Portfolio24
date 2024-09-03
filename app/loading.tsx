"use client"

import React, { useEffect, useState } from 'react'
import { FlipWords } from '@/components/ui/flip-words'

const Loading = () => {
  const words = [ "Creative Designs", "Structured Projects", "Modern Layouts", "impactful solutions"]

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 3 seconds

    // Cleanup the timer if the component unmounts before the timer is done
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col gap-8 md:gap-12 py-40 px-4 justify-center items-center'>
      <div className="text-2xl md:text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Enjoy my
        <FlipWords words={words} /> <br />
        as Software Developer
      </div>
    </div>
  )
}

export default Loading
