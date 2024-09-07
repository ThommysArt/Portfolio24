"use client"

import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { fadeAnimation, SlideUpAnimation } from './motion'

const SlideContainer = ({children}: {children:ReactNode}) => {
  return (
    <AnimatePresence>
        <motion.div 
          initial={{ y: 100, opacity: 0}}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5}}}
        >
            {children}
        </motion.div>
    </AnimatePresence>
  )
}

export default SlideContainer