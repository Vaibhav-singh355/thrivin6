"use client"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { Facebook, Instagram, Twitter, ArrowRight } from "lucide-react"

import AnimatedSection from "@/components/animated-section"
import AnimatedHeading from "@/components/animated-heading"

import TextReveal from "@/components/text-reveal"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BackgroundDecoration from "@/components/background-decoration"
import ColorfulDivider from "@/components/colorful-divider"

export default function Home() {
  const featuredRef = useRef(null);

  const handleScrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const abt = () => {
    window.scrollTo({
      top: document.getElementById("about").offsetTop,
      behavior: "smooth",

    });

  }
  const service = () => {
    window.scrollTo({
      top: document.getElementById("service").offsetTop,
      behavior: "smooth",

    });

  }
  const blog = () => {
    window.scrollTo({
      top: document.getElementById("blog").offsetTop,
      behavior: "smooth",

    });

  }

  const recepi = () => {
    window.scrollTo({
      top: document.getElementById("rep").offsetTop,
      behavior: "smooth",

    });

  }



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
        <nav className="hidden md:flex space-x-8">
          <button onClick={abt} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-lg font-medium tracking-wide relative group py-2 block">
            About
          </button>
          <button onClick={service} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-lg font-medium tracking-wide relative group py-2 block">
            Featured Services
          </button>

          <button onClick={blog} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-lg font-medium tracking-wide relative group py-2 block">
            Blog
          </button>
          <button onClick={recepi} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-lg font-medium tracking-wide relative group py-2 block">
            E-book

          </button>
          <button onClick={recepi} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-lg font-medium tracking-wide relative group py-2 block">
            Recent research

          </button>
          <button onClick={recepi} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-lg font-medium tracking-wide relative group py-2 block">
            Nutrition Plans

          </button>
          <button onClick={recepi} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-500 to-amber-700  text-lg font-medium tracking-wide relative group py-2 block">
            Contact

          </button>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#" aria-label="Facebook" className="social-icon-link">
            <Facebook className="h-8 w-10 text-[#bfa14a] hover:text-yellow-700 transition-all duration-300 hover:scale-125" />
          </Link>
          <Link href="#" aria-label="Instagram" className="social-icon-link">
            <Instagram className="h-8 w-10 text-[#bfa14a] hover:text-yellow-700 transition-all duration-300 hover:scale-125" />
          </Link>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <section className="relative h-[85vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black-900/80 via-black-950/70 to-black-900/80 z-0"></div>
          <Image
            src="/fornt1.jpg?height=1200&width=2000"
            alt="Kara Lydon in kitchen"
            fill
            className="object-cover transform scale-105 animate-slow-zoom opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black-950/90"></div>
          <div className="absolute bottom-32 left-16 md:left-32 w-full z-10">
            <div className="overflow-hidden mb-2">
              <AnimatedHeading
                text="A Healthy outside"
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#bfa14a] via-[#968045] to-[#7a6938] text-5xl md:text-6xl font-extrabold tracking-wide leading-tight drop-shadow-sm"
                initialDelay={0.3}
              />
            </div>
            <div className="overflow-hidden">
              <AnimatedHeading
                text=" starts from the inside"
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#bfa14a] via-[#968045] to-[#7a6938] text-5xl md:text-6xl font-extrabold tracking-wide leading-tight drop-shadow-sm block"
                delay={1000}
                duration={2000}
              />
            </div>
            <div className="mt-8 overflow-hidden">
              <div className="animate-slide-up" style={{ animationDelay: "0.9s" }}>
                <Button className="bg-gradient-to-r from-[#bfa14a] to-[#968045] hover:from-[#968045] hover:to-[#7a6938] text-black-950 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group">
                  <span className="mr-2 group-hover:tracking-wider transition-all text-black duration-300">
                    Start Your Journey
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <button
              onClick={handleScrollToFeatured}
              className="bg-[#bfa14a] hover:bg-[#968045] text-black-950 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold"
              aria-label="Scroll to Featured Services"
            >
              ↓ Scroll Down
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black-950 to-transparent"></div>
        </section>
        <section id="about" className="relative">
          <AnimatedSection className="py-20 bg-black-950 relative" ref={featuredRef} >
            <div className="container mx-auto px-4" >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#bfa14a] via-[#968045] to-[#7a6938] mb-6">
                  <TextReveal>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-12 text-center">
                      Nourish Your Body, Mind, and Soul
                    </h2>
                  </TextReveal>
                </h2>
                <TextReveal className="text-amber-100 mb-8 leading-relaxed text-lg" delay={0.5}>
                  I&apos;m Ekta, a registered dietitian nutritionist, yoga teacher, and intuitive eating counselor helping
                  people find the peace and freedom in their relationship with food and their bodies through a non-diet,
                  whole-person approach to nutrition and wellness.
                </TextReveal>
                <div className="flex justify-center">
                  <Link
                    href="/about"
                    className="group inline-flex items-center px-8 py-3 border-2 border-[#bfa14a] hover:bg-[#bfa14a] hover:text-black-950 transition-all duration-300 rounded-full overflow-hidden relative"
                  >
                    <span className="relative z-10 group-hover:tracking-wider hover:text-black-950  transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#bfa14a] via-[#968045] to-[#7a6938]">
                      LEARN MORE
                    </span>
                    <span className="absolute inset-0 bg-[#bfa14a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                  </Link>
                </div>
              </div>
            </div>
            <ColorfulDivider position="bottom" />
          </AnimatedSection>
        </section>
        <section id="service" className="relative">
          <AnimatedSection className="py-20 bg-gradient-to-b from-black-950 via-black-900 to-black-950 relative">
            <div className="container mx-auto px-4" >
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-12 text-center">
                  Featured Services
                </h2>
              </TextReveal>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Nutrition Counseling",
                    description: "One-on-one support to help you heal your relationship with food and your body.",
                    link: "/work-with-us",
                    linkText: "Learn More",
                    image: "/n1.webp?height=400&width=600",
                    gradient: "from-[#968045] to-[#bfa14a]",
                    delay: 0.2,
                  },
                  {
                    title: "Fitness & Nutrition Tips",
                    description: "Guidance on Fitting nutrition into your busy daily  life.",
                    link: "/ebook",
                    linkText: "Learn More",
                    image: "/f.jpg?height=400&width=600",
                    gradient: "from-[#968045] to-[#bfa14a]",
                    delay: 0.4,
                  },
                  {
                    title: "Expertise Gut Health",
                    description: "Personalized nutrition plans to support your gut health.",
                    link: "/recipes",
                    linkText: "Browse Recipes",
                    image: "/gut.jpg?height=400&width=600",
                    gradient: "from-[#968045] to-[#bfa14a]",
                    delay: 0.6,
                  },
                ].map((service, index) => (
                  <TextReveal key={index} delay={service.delay}>
                    <div className="group">
                      <Card className="border border-[#bfa14a]/30 bg-black-900 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                          ></div>

                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-medium text-[#7a6938] mb-2 group-hover:text-[#bfa14a] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-[#968045] mb-4">{service.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TextReveal>
                ))}
              </div>
            </div>
            <ColorfulDivider position="bottom" />
          </AnimatedSection>
        </section>
        <section id="blog" className="relative">
          <AnimatedSection className="py-20 bg-black-950 relative">
            <div className="container mx-auto px-4">
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-12 text-center">
                  Latest from the Blog
                </h2>
              </TextReveal>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Nutrition and Gut health ",
                    date: "May 15, 2023",
                    link: "/b1",
                    excerpt:
                      " Heal Your Gut, Heal Your Life: A Beginner&apos;s Guide to Better Digestion.",
                    image: "/gut.png?height=500&width=800&text=Blog+Post+1",
                    color: "#bfa14a",
                    delay: 0.2,
                  },
                  {
                    title: "Women&apos;s health and hormones ",
                    date: "April 28, 2023",
                    link: "/b2",
                    excerpt:
                      "Discover if you&apos;re ready to leave dieting behind and embrace a more peaceful relationship with food.",
                    image: "/w.jpg?height=500&width=800&text=Blog+Post+2",
                    color: "#968045",
                    delay: 0.4,
                  },
                  {
                    title: "Fitness and health ",
                    date: "April 10, 2023",
                    link: "/b3",
                    excerpt:
                      "Start your day with these satisfying, delicious breakfast recipes that will keep you energized.",
                    image: "/fit.jpg?height=500&width=800&text=Blog+Post+3",
                    color: "#bfa14a",
                    delay: 0.6,
                  },

                ].map((post, index) => (
                  <TextReveal key={index} delay={post.delay}>
                    <div className="group">
                      <div className="mb-4 h-64 relative overflow-hidden rounded-lg shadow-md border border-[#bfa14a]/20">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-[#bfa14a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                      </div>
                      <h3
                        className="text-xl font-medium text-[#7a6938] mb-2 group-hover:text-[#bfa14a] transition-colors duration-300"
                      >
                        <Link href="/blog/post-1">{post.title}</Link>
                      </h3>
                      <Link
                        href={post.link}
                        className="text-[#bfa14a] hover:text-[#968045] font-medium inline-flex items-center group"
                      >
                        <span className="group-hover:tracking-wider transition-all duration-300">Read More</span>
                        <span className="ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </TextReveal>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link
                  href="/blog"
                  className="group inline-flex items-center px-8 py-3 border-2 border-[#bfa14a] text-[#bfa14a] hover:bg-[#bfa14a] hover:text-black transition-all duration-300 rounded-full overflow-hidden relative"
                >
                  <span className="relative z-10 group-hover:tracking-wider hover:text-black-950 bg-clip-text text-transparent bg-gradient-to-r from-[#bfa14a] via-[#968045] to-[#7a6938] transition-all duration-300">
                    VIEW ALL POSTS
                  </span>
                  <span className="absolute inset-0 bg-[#bfa14a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                </Link>
              </div>
            </div>
            <ColorfulDivider position="bottom" />
          </AnimatedSection>
        </section>
        <section id="service" className="relative">
          <AnimatedSection className="py-20 bg-gradient-to-b from-black-950 via-black-900 to-black-950 relative">
            <div className="container mx-auto px-4" >
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-12 text-center">
                  Contact Us
                </h2>
                <div className="max-w-2xl mx-auto text-center mb-8">
                  <p className="text-amber-100 mb-4 text-lg">
                    Have questions or want to learn more about our services? We&apos;re here to help!
                  </p>
                  <p className="text-amber-100 mb-6 text-lg">
                    Reach out to us via email or follow us on social media for the latest updates and tips.
                  </p>
                  <Link
                    href="mailto: ">
                    <Button className="bg-gradient-to-r from-[#bfa14a] to-[#968045] hover:from-[#968045] hover:to-[#7a6938] text-black-950 rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group">
                      <span className="mr-2 group-hover:tracking-wider transition-all text-black duration-300">
                        Email Us
                      </span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <Link
                    href="mailto: ">
                    <Button className="bg-gradient-to-r from-[#bfa14a] to-[#968045] hover:from-[#968045] hover:to-[#7a6938] text-black-950 rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group">
                      <span className="mr-2 group-hover:tracking-wider transition-all text-black duration-300">
                        Call Us
                      </span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>



                </div>
              </TextReveal>


            </div>
            <ColorfulDivider position="bottom" />
          </AnimatedSection>
        </section>
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
                  { title: "Nutrition and Gut health", href: "/b1", color: "#bfa14a", image: "/gut.png?height=100&width=100" },
                  { title: "Women's Health", href: "/b2", color: "#968045", image: "/w.jpg?height=100&width=100" },
                  { title: "Fitness and Health", href: "/b3", color: "#bfa14a", image: "/fit.jpg?height=100&width=100" },
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