"use client"

import { useState, useEffect, useRef } from "react"

// Characters to use for scrambling effect
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:<>?|"

export default function ScrambleText({ text, className = "", duration = 1500, delay = 0, scrambleSpeed = 50 }) {
  const [displayText, setDisplayText] = useState("")
  const intervalRef = useRef(null)
  const finalTextRef = useRef(text)
  const iterationsRef = useRef(0)
  const startTimeRef = useRef(null)

  useEffect(() => {
    finalTextRef.current = text

    const timeout = setTimeout(() => {
      startTimeRef.current = Date.now()

      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current
        const progress = Math.min(elapsed / duration, 1)

        // Determine how many characters should be finalized
        const finalizedLength = Math.floor(text.length * progress)

        // Create the new display text
        let newText = ""
        for (let i = 0; i < text.length; i++) {
          // If this position should be finalized, use the actual character
          if (i < finalizedLength) {
            newText += text[i]
          }
          // Otherwise use a random character, but preserve spaces
          else if (text[i] === " ") {
            newText += " "
          } else {
            newText += chars[Math.floor(Math.random() * chars.length)]
          }
        }

        setDisplayText(newText)
        iterationsRef.current += 1

        // If we've reached the end, clear the interval
        if (progress >= 1) {
          clearInterval(intervalRef.current)
          setDisplayText(text)
        }
      }, scrambleSpeed)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [text, duration, delay, scrambleSpeed])

  return <span className={className}>{displayText || text}</span>
}
