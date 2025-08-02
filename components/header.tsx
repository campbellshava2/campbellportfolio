"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-primary/10" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#home" className="text-2xl font-bold text-primary flex items-center">
          <Code className="mr-2" />
          <span className="font-mono">Campbell</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors font-mono"
            >
              <span className="text-primary">&gt;</span> {link.name}
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary/80 group">
            <a href="#contact" className="flex items-center">
              <Terminal className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Get In Touch
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-primary/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="text-primary" /> : <Menu className="text-primary" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors py-2 font-mono"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-primary">&gt;</span> {link.name}
              </Link>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/80" onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#contact" className="flex items-center justify-center">
                <Terminal className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

