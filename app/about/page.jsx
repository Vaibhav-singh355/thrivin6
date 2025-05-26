import Image from "next/image"
import Link from "next/link"

import { Facebook, Instagram, Twitter,  ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import TextReveal from "@/components/text-reveal"
import ScrambleText from "@/components/scramble-text"

import BackgroundDecoration from "@/components/background-decoration"


export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-black-950 text-amber-50">
      <BackgroundDecoration />

      <header className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
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
        <section className="py-12 md:py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <TextReveal>
                  <h2 className="text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#968045] via-[#bfa14a] to-[#7a6938] mb-12 text-center">
                    About Ekta
                  </h2>
                </TextReveal>

              </div>

              <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative overflow-hidden rounded-lg shadow-xl border border-gold-500/20">
                  <Image
                    src="/abt.jpg?height=600&width=600"
                    alt="Kara Lydon"
                    width={600}
                    height={600}
                    className="rounded-lg transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-900/30 via-amber-900/20 to-gold-900/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.3}>

                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.4}>
                    Hi there! I&apos;m Ekta Singh, a registered dietitian nutritionist, yoga teacher, and intuitive eating
                    counselor.

                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.5}>
                    I had paricipated in many ramp shows and
                    beauty contests and hence this kept me conscious of my way my
                    body looked

                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.6}>
                    A
                    healthy addictioin made me passionate about fitness and I
                    participated in a fitness compe on in 2013 at FITNBESS FIRST
                    where I won prizes worth 1 lakh and recogni on of being the
                    STRONGEST GIRL OF THE GYM. Learning and studying has always
                    been my passion
                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.6}>
                    My approach combines intuitive eating principles, mindfulness practices, and evidence-based
                    nutrition to support sustainable health and wellbeing.
                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.6}>
                    I did the ACE approved nutrition course and became a
                    sports and clinical nutritionist with expertise in gut health .
                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.6}>
                    Did many fitness certificate on to enhance my skills
                    like STRONG BY ZUMBA certification , yoga courses and  REEBOK
                    fitness course.
                  </TextReveal>
                </div>
              </AnimatedSection>

              <AnimatedSection className="mb-16">
                <TextReveal delay={0.2}>
                  <h2 className="text-gradient-gold-amber text-3xl font-light mb-6">
                    <ScrambleText text="My Philosophy" duration={1500} />
                  </h2>
                </TextReveal>
                <div className="bg-black-900 border border-gold-500/20 p-8 rounded-lg shadow-inner">
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.3}>
                    I believe that true health encompasses physical, mental, and emotional wellbeing. My approach to
                    nutrition is rooted in the principles of intuitive eating, which encourages tuning into your body&apos;s
  natural hunger and fullness cues, making peace with all foods, and finding joy in eating.
</TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.4}>
                    I reject diet culture and weight-centric approaches to health. Instead, I focus on helping clients
                    develop sustainable habits that support their overall wellbeing without restriction or rules.
                  </TextReveal>
                  <TextReveal className="text-amber-100 mb-6 leading-relaxed" delay={0.5}>
                    My goal is to help you cultivate a peaceful relationship with food and your body so you can live a
                    full, nourished life free from food worry and body preoccupation.
                  </TextReveal>
                </div>
              </AnimatedSection>

              <AnimatedSection className="mb-16">
                <TextReveal delay={0.2}>
                  <h2 className="text-gradient-amber-gold text-3xl font-light mb-6">
                    <ScrambleText text="Credentials" duration={1500} />
                  </h2>
                </TextReveal>
                <ul className="space-y-4 text-amber-100">
                  {[
                    { text: "Registered Dietitian Nutritionist (RDN)", color: "gold" },
                    { text: "Licensed Dietitian Nutritionist (LDN)", color: "amber" },
                    { text: "Certified Intuitive Eating Counselor", color: "gold" },
                    { text: "200-Hour Registered Yoga Teacher (RYT-200)", color: "amber" },
                    { text: "Master of Science in Nutrition", color: "gold" },
                  ].map((credential, index) => (
                    <TextReveal key={index} delay={0.3 + index * 0.1}>
                      <li className="flex items-start">
                        <span
                          className={`text-${credential.color}-500 mr-2 transform transition-transform duration-300 hover:scale-110`}
                        >
                          •
                        </span>
                        <span className="group-hover:tracking-wider transition-all duration-300">
                          {credential.text}
                        </span>
                      </li>
                    </TextReveal>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection className="text-center">
                <Link
                  href="/work-with-us"
                  className="group inline-flex items-center px-8 py-3 border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black-950 transition-all duration-300 rounded-full overflow-hidden relative"
                >
                  <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                    WORK WITH ME
                  </span>
                  <span className="absolute inset-0 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                </Link>
              </AnimatedSection>
            </div>
          </div>
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
