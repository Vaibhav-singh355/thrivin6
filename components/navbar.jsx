"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "ABOUT", href: "/about", color: "gold" },
  { name: "WORK WITH US", href: "/work-with-us", color: "amber" },
  { name: "EBOOK", href: "/ebook", color: "gold" },
  { name: "RECIPES", href: "/recipes", color: "amber" },
  { name: "BLOG", href: "/blog", color: "gold" },
  { name: "FOR CLINICIANS", href: "/for-clinicians", color: "amber" },
  { name: "CONTACT", href: "/contact", color: "gold" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className={`hidden md:block transition-all duration-300 ${scrolled ? "py-2" : "py-0"}`}>
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li key={item.name} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
              <Link
                href={item.href}
                className={`bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-sm font-medium tracking-wide relative group py-2 block`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-${item.color}-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="md:hidden text-gold-500 z-50 relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 transition-transform duration-300 transform rotate-90" />
        ) : (
          <Menu className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
        )}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black-950 z-40 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col h-full justify-center">
              <nav className="p-6">
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`text-${item.color}-500 hover:text-${item.color}-400 text-2xl font-medium tracking-wide block transition-colors duration-300`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
