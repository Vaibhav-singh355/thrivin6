"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function TypingEffect({
  text,
  className = "",
  typingSpeed = 50,
  startDelay = 0,
  cursorClassName = "text-purple-500",
}) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (currentIndex === 0) {
      const startTimeout = setTimeout(() => {
        const interval = setInterval(() => {
          if (currentIndex < text.length) {
            setDisplayedText((prev) => prev + text[currentIndex])
            setCurrentIndex((prev) => prev + 1)
          } else {
            clearInterval(interval)
            setIsTypingComplete(true)
          }
        }, typingSpeed)

        return () => clearInterval(interval)
      }, startDelay)

      return () => clearTimeout(startTimeout)
    }
  }, [currentIndex, text, typingSpeed, startDelay])

  return (
    <div className={`inline-flex ${className}`}>
      <span>{displayedText}</span>
      <motion.span
        className={`inline-block ${cursorClassName} ml-0.5`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isTypingComplete ? [0, 1] : 1 }}
        transition={{
          repeat: isTypingComplete ? Number.POSITIVE_INFINITY : 0,
          duration: 0.8,
          repeatType: "reverse",
        }}
      >
        |
      </motion.span>
    </div>
  )
}
