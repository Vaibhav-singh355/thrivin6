"use client"

import { motion } from "framer-motion"

export default function AnimatedLetter({ children, delay = 0,  className = "" }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
    >
      {children}
    </motion.span>
  )
}
