import Image from "next/image"
import Link from "next/link"

import { Facebook, Instagram, Twitter, ArrowRight, Calendar, Clock } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import TextReveal from "@/components/text-reveal"

import BackgroundDecoration from "@/components/background-decoration"
import ColorfulDivider from "@/components/colorful-divider"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    li:'/b1',
    title: " Nutrition and Gut Health",
    excerpt:
      "Heal Your Gut, Heal Your Life: A Beginner's Guide to Better Digestion",
    content: "Mindful eating is about being present with your food and paying attention to the experience of eating...",
    date: "May 15, 2023",
    readTime: "8 min read",
    author: "Ekta Singh",
    category: "Gut Health",
    image: "/gut.png?height=400&width=600&text=Mindful+Eating",
    featured: true,
    tags: ["mindfulness", "eating habits", "wellness"],
  },
  {
    id: 2,
    li:'/b2',
    title: "Women&apos;s health and hormones",
    excerpt:
      "More Muscle, Less Menopause Mess: Why Strength Training Is Your Best Ally.",
    content:
      "Intuitive eating is a revolutionary approach to food and eating that honors your body's natural wisdom...",
    date: "April 28, 2023",
    readTime: "6 min read",
author: "Ekta Singh",
    category: "Women's Health",
    image: "/w.jpg?height=400&width=600&text=Intuitive+Eating",
    featured: true,
    tags: ["intuitive eating", "diet culture", "body positivity"],
  },
  {
    id: 3,
    li:'/b3',
    title: "Fitness and Health",
    excerpt:
      "Strong Over Skinny: Why Muscle Mass Matters More Than You Think.",
    content:
      "Breakfast doesn't have to be complicated or follow strict rules. These nourishing ideas will fuel your morning...",
    date: "April 10, 2023",
    readTime: "5 min read",
    author: "Ekta Singh",
    category: "Fitness",
    image: "/fit.jpg?height=400&width=600&text=Breakfast+Ideas",
    featured: false,
    tags: ["recipes", "breakfast", "nutrition"],
  },
  {
    id: 4,
    li:'/b4',
    title: " Mind-Body Connection",
    excerpt:
      "Cravings, Cortisol & Comfort Food: Understanding Emotional Eating.",
    content: "Diet culture is pervasive in our society, influencing how we think about food, bodies, and health...",
    date: "March 22, 2023",
    readTime: "10 min read",
    author: "Ekta Singh",
    category: "Connection",
    image: "/mind.png?height=400&width=600&text=Diet+Culture",
    featured: false,
    tags: ["diet culture", "body image", "mental health"],
  },
  {
    id: 5,
    li:'/b5',
    title: " Sustainable Fat Loss and Lifestyle",
    excerpt:
      "The Truth About Fat Loss After 40: Why It's Not Just About Calories.",
    content:
      "Our bodies have sophisticated systems for regulating hunger and satiety. Understanding these mechanisms...",
    date: "March 8, 2023",
    readTime: "7 min read",
author: "Ekta Singh",
    category: "Fat Loss",
    image: "/fat.avif?height=400&width=600&text=Hunger+Cues",
    featured: false,
    tags: ["nutrition science", "hunger cues", "biology"],
  },
  
]



export default function BlogPage() {
 

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
        {/* Hero Section */}
        <section className="py-10 bg-gradient-to-b from-black-950 via-black-900 to-black-950 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              
                <TextReveal>
                    <h1 className="animate-gold-shine text-5xl md:text-6xl font-bold mb-7 inline-block">
                        The Blogs
                    </h1>
                </TextReveal>
              <TextReveal className="text-amber-100 text-lg max-w-2xl mx-auto" delay={0.5}>
                Discover evidence-based insights on intuitive eating, mindful nutrition, and cultivating a peaceful
                relationship with food and your body.
              </TextReveal>
            </div>
          </div>
          <ColorfulDivider position="bottom" />
        </section>

        {/* Featured Posts */}
        <AnimatedSection className="py-20 bg-black-950 relative">
          <div className="container mx-auto px-4">
            <TextReveal>
              <h2 className="text-3xl md:text-4xl font-light text-gradient-gold mb-12 text-center">
                Featured Articles
              </h2>
            </TextReveal>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {blogPosts.map((post, index) => (
                <TextReveal key={post.id} delay={index * 0.2}>
                  <Card className="border border-gold-500/30 bg-black-900 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
                    <div className="relative h-64 overflow-hidden rounded-2xl">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold-500 text-black-950 text-xs font-medium rounded-full">
                          FEATURED
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full mb-2">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-amber-400 text-sm mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-gradient-gold mb-3 group-hover:text-gradient-gold-amber transition-colors duration-300">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-amber-100 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-amber-300 text-sm">
                          
                          {post.author}
                        </div>
                        <Link
                          href={`${post.li}`}
                          className="text-gold-500 hover:text-gold-400 font-medium inline-flex items-center group"
                        >
                          <span className="group-hover:tracking-wider transition-all duration-300">Read More</span>
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TextReveal>
              ))}
            </div>
          </div>
          <ColorfulDivider position="bottom" />
        </AnimatedSection>

        {/* Categories Filter */}
        
        
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
