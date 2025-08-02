"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Code, Monitor } from "lucide-react"

export function ProjectsSection() {
  const categories = ["All", "Web Apps", "Mobile", "WebSites"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      title: "IoT based BMX Management System",
      description: "Final year Research project for improving IoT in amateur sports (Distinction)",
      image: "/Computer.png?height=600&width=800",
      category: "Web Apps",
      technologies: ["Python Django", "MySQL", "CSS", "HTML", "JavaScript" , "Web Sockets" , "Raspberry Pi", "IoT sensors"],
      githubLink: "https://github.com/campbellshava2/BMX-management-system",
      demoLink: "/copyright",
    },
    {
      title: "Staff Lunch Ordering System- First Mutual Holdings Limited",
      description: "Web application for streamlining staff meal coordination",
      image: "/online-food-ordering-system.jpg?height=600&width=800",
      category: "Web Apps",
      technologies: ["Python Django", "MySQL", "CSS", "HTML", "JavaScript"],
      demoLink: "/copyright",
      githubLink: "/copyright",
    },
    {
      title: "Navjo Synk Solutions Website ",
      description: "Company Website for Navjo Synk Solutions ",
      image: "/Web Image.png?height=600&width=800",
      category: "WebSites",
      technologies: ["Next.js", "Tailwind CSS", "React", "Lucide"],
      demoLink: "https://www.navjosynk.com",
      githubLink: "/copyright",
    },
    {
      title: "Creative arts Portfolios",
      description: "Web based portfolios for Content creators, Architects, Artists etc.",
      image: "/portfolio.png?height=600&width=800",
      category: "WebSites",
      technologies: ["Next.js", "Tailwind CSS", "React", "Lucide"],
      demoLink: "https://campbellportfolio.netlify.app",
      githubLink: "https://github.com/campbellshava2/campbellportfolio",
    },
    {
      title: "Company Dashboard",
      description: "A social networking platform with real-time messaging and content sharing.",
      image: "/dashboard.png?height=600&width=800",
      category: "Web Apps",
      technologies: ["Python Django", "Html", "CSS", "JavaScript" , "MongoDB"],
      demoLink: "/copyright",
      githubLink: "/copyright",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-muted/10 relative overflow-hidden">
      {/* Circuit board pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
            <path d="M50,50 L80,50" stroke="currentColor" strokeWidth="1" />
            <path d="M50,50 L50,80" stroke="currentColor" strokeWidth="1" />
            <path d="M50,50 L20,50" stroke="currentColor" strokeWidth="1" />
            <path d="M50,50 L50,20" stroke="currentColor" strokeWidth="1" />
            <circle cx="80" cy="50" r="2" fill="currentColor" />
            <circle cx="50" cy="80" r="2" fill="currentColor" />
            <circle cx="20" cy="50" r="2" fill="currentColor" />
            <circle cx="50" cy="20" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Dark mode specific glowing elements */}
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Monitor className="mr-2 text-primary" />
            My Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8 font-mono">
            <span className="text-primary">&gt;</span> A showcase of my technical projects and creative solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`min-w-[100px] ${
                  activeCategory === category ? "bg-primary" : "border-primary/50 hover:border-primary text-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden group border border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-background/20 backdrop-blur-sm border-primary/50 hover:border-primary text-foreground"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-background/20 backdrop-blur-sm border-primary/50 hover:border-primary text-foreground"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-mono">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Code className="h-4 w-4 mr-2 text-primary" />
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-foreground/80 text-xs px-2 py-1 rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

