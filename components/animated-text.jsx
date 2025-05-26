"use client"

import { motion } from "framer-motion"

export default function AnimatedText({ text, className = "", delay = 0 }) {
  return (
    <div className="overflow-hidden">
      <motion.h1
        className={className}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
      >
        {text}
      </motion.h1>
    </div>
  )
}
