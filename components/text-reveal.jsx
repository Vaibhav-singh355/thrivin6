"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function TextReveal({ children, className = "", threshold = 0.5, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
