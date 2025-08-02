"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Code, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "CTO & Co-Founder Navjo Synk Solutions| Software Enginer |Web Developer | Business Applications Support | Strategic Planning & Project Management"

  // Fix hydration error: generate random matrix only on client
  const [matrix, setMatrix] = useState<string[][]>([])
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)

    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    // Matrix effect (client only)
    const rows = 20
    const cols = 30
    const generated: string[][] = []
    for (let i = 0; i < rows; i++) {
      const row: string[] = []
      for (let j = 0; j < cols; j++) {
        row.push(Math.random() > 0.5 ? "1" : "0")
      }
      generated.push(row)
    }
    setMatrix(generated)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/95 overflow-hidden"
    >
      {/* Tech-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 text-primary text-opacity-20 animate-matrix-effect">
          {mounted && matrix.map((row, i) => (
            <div key={i} className="text-xs md:text-sm font-mono">
              {row.map((cell, j) => (
                <span key={j}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
        <div
          className="absolute top-0 left-2/4 text-primary text-opacity-20 animate-matrix-effect"
          style={{ animationDelay: "2s" }}
        >
          {mounted && Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="text-xs md:text-sm font-mono">
              {Array.from({ length: 30 }).map((_, j) => (
                <span key={j}>{Math.random() > 0.5 ? "1" : "0"}</span>
              ))}
            </div>
          ))}

        </div>

        {/* Dark mode specific glowing elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Header />
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center z-10">
        <div className="flex items-center justify-center mb-6">
          <Terminal className="h-8 w-8 text-primary mr-2" />
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello, I'm <span className="text-primary">Chiurai Campbell Shava Mgonie</span>
          </h1>
        </div>
        <div className="bg-background/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-2xl md:text-3xl text-foreground/80 font-mono">
            <span className="text-primary">&gt;</span> {typedText}
            <span className="animate-pulse text-primary">|</span>
          </h2>
        </div>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 bg-background/20 backdrop-blur-sm p-4 rounded-lg border border-primary/10">
          I build exceptional digital experiences with clean code and innovative design. Transforming ideas into
          powerful, user-friendly applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="group bg-primary hover:bg-primary/80" asChild>
            <a href="#projects">
              <Code className="mr-2 h-5 w-5 group-hover:animate-spin" />
              View My Work
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:border-primary text-foreground"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </a>
      </div>
    </section>
  )
}

