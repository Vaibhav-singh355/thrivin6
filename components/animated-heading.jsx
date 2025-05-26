"use client"

import { useEffect, useState } from "react"
import AnimatedLetter from "./animated-letter"

export default function AnimatedHeading({ text, className = "", staggerDelay = 0.025, initialDelay = 0 }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <h2 className={className}>{text}</h2>
  }

  return (
    <h2 className={className}>
      {text.split("").map((letter, index) => (
        <AnimatedLetter key={index} delay={initialDelay + index * staggerDelay}>
          {letter === " " ? "\u00A0" : letter}
        </AnimatedLetter>
      ))}
    </h2>
  )
}
