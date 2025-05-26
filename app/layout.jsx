import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata = {
  title: "Thrivin Nutrition - Intuitive Eating Dietitian",
  description:
    "Ekta Singh is a registered dietitian nutritionist, yoga teacher, and intuitive eating counselor helping people find peace with food and their bodies.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        
          {children}
        
      </body>
    </html>
  )
}
