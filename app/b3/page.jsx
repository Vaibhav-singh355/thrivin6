import Image from "next/image"
import Link from "next/link"

import {
  Facebook,
  Instagram,
  Twitter,
 
  ArrowRight,
  Calendar,
  Clock,
  User,
 
} from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import TextReveal from "@/components/text-reveal"

import BackgroundDecoration from "@/components/background-decoration"
import ColorfulDivider from "@/components/colorful-divider"
import { Card, CardContent } from "@/components/ui/card"


// This would typically come from a database or CMS
const blogPost = {
  id: 1,
  title: "Fitness and Health",
  excerpt: "Strong Over Skinny: Why Muscle Mass Matters More Than You Think.",
  content: `
     Fitness is a key component of overall health, contributing to physical strength, mental well-being, and disease prevention. Regular physical activity helps maintain a healthy weight, strengthens the heart and muscles, improves flexibility and balance, and boosts energy levels. It also supports mental health by reducing stress, anxiety, and depression through the release of mood-enhancing endorphins. Combined with a balanced diet, adequate sleep, and healthy lifestyle choices, consistent exercise promotes long-term wellness and reduces the risk of chronic conditions such as heart disease, diabetes, and obesity. Embracing fitness as a daily habit can significantly enhance both the quality and longevity of life. `,
  date: "May 15, 2023",
  readTime: "8 min read",
  author: "Kara Lydon",
  category: "Mindful Eating",
  image: "/fit.jpg?height=600&width=1200&text=Mindful+Eating+Hero",
  tags: ["mindfulness", "eating habits", "wellness", "nutrition", "self-care"],
  likes: 127,
  comments: 23,
}


export default function BlogPostPage3() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-black-950 text-amber-50">
      <BackgroundDecoration />

      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <div className="w-64 transition-transform duration-300 hover:scale-105">
          <Link href="/">
            <Image
              src="/logo.jpg?height=100&width=260"
              alt="Kara Lydon Nutrition"
              width={100}
              height={40}
              className="object-cover rounded-full"
              priority
            />
          </Link>
        </div>
<nav className="hidden md:flex space-x-6">
          <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700 text-xl font-bold transition-colors duration-300"> 
            Home
          </Link>
          <Link href="/about" className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-xl font-bold transition-colors duration-300"> 
            About
          </Link>
          <Link href="/blog" className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-xl font-bold transition-colors duration-300">
            Blog
          </Link>
          </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="#" aria-label="Facebook" className="social-icon-link">
            <Facebook className="h-8 w-8 text-gold-500 hover:text-amber-500 transition-all duration-300 hover:scale-125" />
          </Link>
          <Link href="#" aria-label="Instagram" className="social-icon-link">
            <Instagram className="h-8 w-8 text-gold-500 hover:text-amber-500 transition-all duration-300 hover:scale-125" />
          </Link>
         
          
          
        </div>
      </header>
      <main className="flex-1 relative z-10">
        {/* Breadcrumb */}
        <section className="py-6 bg-black-900 border-b border-gold-500/20">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gold-500 hover:text-gold-400 transition-colors duration-300">
                Home
              </Link>
              <span className="text-amber-400">/</span>
              <Link href="/blog" className="text-gold-500 hover:text-gold-400 transition-colors duration-300">
                Blog
              </Link>
              <span className="text-amber-400">/</span>
              <span className="text-amber-100">{blogPost.title}</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black-900/90 via-black-950/80 to-black-900/90 z-10"></div>
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-transparent to-transparent z-20"></div>
          <div className="absolute bottom-0 left-0 right-0 z-30 p-8 md:p-16">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <span className="inline-block px-3 py-1 bg-gold-500 text-black-950 text-sm font-medium rounded-full mb-4">
                  {blogPost.category}
                </span>
                <TextReveal>
                                 <h1 className="animate-gold-shine text-3xl md:text-5xl font-bold mb-4 block">
                                   {blogPost.title}
                                 </h1>
                               </TextReveal>
                                <p className="text-amber-100 text-lg mb-6 max-w-2xl">{blogPost.excerpt}</p>
                <div className="flex items-center space-x-6 text-amber-300">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {blogPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {blogPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <AnimatedSection className="py-20 bg-black-950 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <TextReveal>
                    <div
                      className="prose prose-lg prose-invert prose-gold max-w-none">
                        
                        <div className="text-amber-300 mb-8 text-lg">
                            <span className="flex items-center space-x-2">
                                {blogPost.content}
                                </span>
                                </div>
                                </div>

                  </TextReveal>

                  {/* Tags */}
                  <TextReveal delay={0.3}>
                    <div className="mt-12 pt-8 border-t border-gold-500/20">
                      <h3 className="text-lg font-medium text-gradient-gold mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {blogPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gold-500/10 text-gold-400 text-sm rounded-full border border-gold-500/20 hover:bg-gold-500/20 transition-colors duration-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TextReveal>

                  {/* Social Share */}
                  
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-8">
                    {/* Author Bio */}
                    <TextReveal delay={0.2}>
                      <Card className="border border-gold-500/30 bg-black-900">
                        <CardContent className="p-6">
                          <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 relative overflow-hidden rounded-full border-2 border-gold-500">
                              <Image
                                src="/placeholder.svg?height=80&width=80&text=Kara"
                                alt="Kara Lydon"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h3 className="text-lg font-medium text-gradient-gold mb-2">Ekta Singh</h3>
                            <p className="text-amber-100 text-sm mb-4">
                              Registered Dietitian Nutritionist and Intuitive Eating Counselor
                            </p>
                            <Link
                              href="/about"
                              className="inline-flex items-center px-4 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black-950 transition-all duration-300 rounded-full text-sm group"
                            >
                              <span className="group-hover:tracking-wider transition-all duration-300">Learn More</span>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </TextReveal>

                    {/* Table of Contents */}
                      </div>
                </div>
              </div>
            </div>
          </div>
          <ColorfulDivider position="bottom" />
        </AnimatedSection>

        {/* Related Posts */}
        <AnimatedSection className="py-20 bg-gradient-to-b from-black-950 via-black-900 to-black-950 relative">
          <div className="container mx-auto px-4">


            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-gold-500/20">
             
              <Link
                href="/blog"
                className="px-6 py-3 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-black-950 transition-all duration-300 rounded-full group"
              >
                <span className="group-hover:tracking-wider transition-all duration-300">Back to Blog</span>
              </Link>
             
            </div>
          </div>
        </AnimatedSection>
      </main>

       <footer className="bg-black-900 py-16 relative z-10 border-t border-[#bfa14a]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-44">
            <div>
              <h3 className="text-xl font-medium" style={{ color: "#bfa14a" }}>About</h3>
              <p className="text-amber-100 mb-4 text-xl">
                Ekta Singh Nutrition is dedicated to helping you find peace with food and your body through intuitive
                eating and a non-diet approach.
              </p>
              <div className="flex space-x-3">
                <Link href="#" aria-label="Facebook" className="social-icon-link">
                  <Facebook className="h-5 w-5 text-[#bfa14a] hover:text-yellow-700 transition-all duration-300 hover:scale-125" />
                </Link>
                <Link href="#" aria-label="Instagram" className="social-icon-link">
                  <Instagram className="h-5 w-5 text-[#bfa14a] hover:text-yellow-700 transition-all duration-300 hover:scale-125" />
                </Link>
                <Link href="#" aria-label="Twitter" className="social-icon-link">
                  <Twitter className="h-5 w-5 text-[#bfa14a] hover:text-yellow-700 transition-all duration-300 hover:scale-125" />
                </Link>
                <Link href="#" aria-label="Pinterest" className="social-icon-link">
                  <span className="text-[#bfa14a] hover:text-yellow-700 transition-all duration-300 hover:scale-125">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M21 12c0 4.418 -4.03 8 -9 8a9.863 9.863 0 0 1 -4.255 -.949l-3.745 .949v-3.586a8.955 8.955 0 0 1 -2 -5.414c0 -4.418 4.03 -8 9 -8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
           
            <div>
              <h3 className="text-lg font-medium" style={{ color: "#7a6938" }}>Popular Posts</h3>
              <ul className="space-y-4">
                {[
                  { title: "Nutrition and Gut health", href: "/b1", color: "#bfa14a",image: "/gut.png?height=100&width=100" },
                  { title: "Women's Health", href: "/b2", color: "#968045", image: "/w.jpg?height=100&width=100" },
                  { title: "Fitness and Health", href: "/b3", color: "#bfa14a",image: "/fit.jpg?height=100&width=100" },
                ].map((post, index) => (
                  <li key={index}>
                    <Link
                      href={post.href}
                      className="transition-colors duration-300 flex items-start group"
                      style={{ color: post.color }}
                    >
                      <div className="w-16 h-16 relative flex-shrink-0 mr-3 overflow-hidden rounded-md border border-[#bfa14a]/20">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt="Blog post thumbnail"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-[#bfa14a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                      </div>
                      <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 group-hover:tracking-wider">
                        {post.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="text-lg font-medium text-gradient-gold mb-4">Contact</h3>
              <p className="text-amber-100 mb-2">Email: hello@karalydon.com</p>
              <p className="text-amber-100 mb-4">Boston, MA</p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2 border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black-950 transition-all duration-300 rounded-full group"
              >
                <span className="group-hover:tracking-wider transition-all duration-300">GET IN TOUCH</span>
                <span className="ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
            
          </div>
          <div className="mt-12 pt-8 border-t border-[#bfa14a]/20 text-center">
            <p className="animate-gold-shine text-lg font-bold" style={{ color: "#bfa14a" }}>
              &copy; {new Date().getFullYear()} Thrivin Nutrition. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
