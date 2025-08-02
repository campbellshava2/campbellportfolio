import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Github, Linkedin, Twitter, Code, Server, Layers, Cpu } from "lucide-react"
import { Terminal } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/10 relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-primary/20"></div>
          ))}
        </div>
      </div>

      {/* Dark mode specific glowing elements */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Code className="mr-2 text-primary" />
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <Image
              src="/me.jpg"
              alt="Chiurai Campbell Shava Mgonie"
              width={300}
              height={300}
              style={{ borderRadius: "50%", border: "0px solidrgb(204, 211, 220)" }}
              priority
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Terminal className="mr-2 h-6 w-6 text-primary" />
              <span className="text-primary">&gt;</span> whoami
            </h3>
            <p className="text-foreground/80 mb-6 font-mono">
              I'm a passionate software developer and entrepreneur currently serving as CTO & Co-Founder at Navjo Synk Solutions. With a First Class Honours degree in Computer Science from NUST, I specialize in Django web development and system architecture.
My journey spans from teaching Computer Science to leading technical teams, always focused on creating innovative solutions that make a real impact. I believe in the power of technology to transform businesses and improve lives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Cpu className="h-5 w-5 text-primary mr-2" />
                    <h4 className="font-bold mb-2">Experience</h4>
                  </div>
                  <p className="text-foreground/70 font-mono">2+ Years</p>
                </CardContent>
              </Card>
              <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Layers className="h-5 w-5 text-primary mr-2" />
                    <h4 className="font-bold mb-2">Projects</h4>
                  </div>
                  <p className="text-foreground/70 font-mono">7 Completed</p>
                </CardContent>
              </Card>
              <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-primary mr-2" />
                    <h4 className="font-bold mb-2">Education</h4>
                  </div>
                  <p className="text-foreground/70 font-mono">First Class Honours in Computer Science from NUST</p>
                </CardContent>
              </Card>
              <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Server className="h-5 w-5 text-primary mr-2" />
                    <h4 className="font-bold mb-2">Location</h4>
                  </div>
                  <p className="text-foreground/70 font-mono">Bulawayo</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4">
               <Button className="gap-2 bg-primary hover:bg-primary/80" asChild>
               <a href="/Campbell Resume.pdf" download rel="noopener noreferrer">
               <Download className="h-4 w-4" />
               Download CV
              </a>
             </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/50 hover:border-primary text-foreground"
                  aria-label="GitHub"
                  asChild
                >
                  <a href="https://github.com/campbellshava2" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/50 hover:border-primary text-foreground"
                  aria-label="LinkedIn"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/chiurai-campbell-shava-mgonie-530653228" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

