import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Server, Monitor, Cpu, Smartphone, Cloud } from "lucide-react"

export function SkillsSection() {
  const skills = [
    {
      title: "Backend Development",
      description: "Server-side development and APIs",
      icon: <Server className="h-10 w-10 text-primary" />, 
      technologies: ["Python", "Django", "REST APIs", "WebSockets"],
    },
    {
      title: "Database Administration",
      description: "Data management and optimization",
      icon: <Cloud className="h-10 w-10 text-primary" />, 
      technologies: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Frontend Development",
      description: "User interface development",
      icon: <Monitor className="h-10 w-10 text-primary" />, 
      technologies: ["HTML/CSS", "JavaScript", "React"],
    },
    {
      title: "Networking",
      description: "Network infrastructure and protocols",
      icon: <Cpu className="h-10 w-10 text-primary" />, 
      technologies: ["Network Security", "Troubleshooting"],
    },
    {
      title: "Project Management",
      description: "Team leadership and methodology",
      icon: <Palette className="h-10 w-10 text-primary" />, 
      technologies: ["Agile", "Team Leadership"],
    },
    {
      title: "System Architecture",
      description: "Scalable system design",
      icon: <Code className="h-10 w-10 text-primary" />, 
      technologies: ["IoT Systems", "Microservices"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-xs md:text-sm font-mono"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5,
              }}
            >
              {Math.random() > 0.5 ? "</" : "<"}
              {["div", "span", "code", "h1", "p"][Math.floor(Math.random() * 5)]}
              {">"}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Code className="mr-2 text-primary" />
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto font-mono">
            <span className="text-primary">&gt;</span> I've mastered a diverse range of technologies across the full
            development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-primary/20 bg-background/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-foreground/70 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-mono"
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

