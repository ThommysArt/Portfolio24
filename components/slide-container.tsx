"use client"

import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { slideAnimation } from './motion'

const SlideContainer = ({children, direction}: {children:ReactNode, direction:string}) => {
  return (
    <AnimatePresence>
        <motion.div {...slideAnimation(direction)}>
            {children}
        </motion.div>
    </AnimatePresence>
  )
}

export default SlideContainer