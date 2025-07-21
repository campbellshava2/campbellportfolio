"use client"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Server,
  Smartphone,
  Terminal,
  Cpu,
  Network,
  Users,
  Award,
  Calendar,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
  <div className="container flex h-16 items-center px-4 sm:px-6 md:px-12">
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Terminal className="h-6 w-6 text-green-400" />
        <span className="font-bold text-green-400">&lt;Chiurai /&gt;</span>
      </Link>
    </div>
    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      <Link href="#about" className="transition-colors hover:text-green-400">
        About
      </Link>
      <Link href="#experience" className="transition-colors hover:text-green-400">
        Experience
      </Link>
      <Link href="#skills" className="transition-colors hover:text-green-400">
        Skills
      </Link>
      <Link href="#projects" className="transition-colors hover:text-green-400">
        Projects
      </Link>
      <Link href="#contact" className="transition-colors hover:text-green-400">
        Contact
      </Link>
    </nav>
    {/* Hamburger menu button on mobile */}
    <button
      className="block md:hidden ml-auto p-2 rounded text-green-400 hover:bg-gray-800 focus:outline-none"
      aria-label="Open navigation menu"
      onClick={() => setMobileNavOpen((open) => !open)}
    >
      {mobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
    {/* Social icons always visible */}
    <div className="hidden sm:flex items-center space-x-2 ml-4">
      <Button variant="ghost" size="icon" className="hover:bg-gray-800 hover:text-green-400" asChild>
        <Link href="https://github.com" target="_blank">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" className="hover:bg-gray-800 hover:text-green-400" asChild>
        <Link href="https://www.linkedin.com/in/chiurai-campbell-shava-mgonie-530653228" target="_blank">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
    </div>
  </div>
  {/* Mobile nav menu overlay */}
  {mobileNavOpen && (
    <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-950 border-b border-gray-800 z-50 flex flex-col items-center py-4 gap-2 animate-in fade-in">
      <Link href="#about" className="w-full px-4 py-2 text-center hover:text-green-400" onClick={() => setMobileNavOpen(false)}>
        About
      </Link>
      <Link href="#experience" className="w-full px-4 py-2 text-center hover:text-green-400" onClick={() => setMobileNavOpen(false)}>
        Experience
      </Link>
      <Link href="#skills" className="w-full px-4 py-2 text-center hover:text-green-400" onClick={() => setMobileNavOpen(false)}>
        Skills
      </Link>
      <Link href="#projects" className="w-full px-4 py-2 text-center hover:text-green-400" onClick={() => setMobileNavOpen(false)}>
        Projects
      </Link>
      <Link href="#contact" className="w-full px-4 py-2 text-center hover:text-green-400" onClick={() => setMobileNavOpen(false)}>
        Contact
      </Link>
      <div className="flex items-center space-x-2 mt-2">
        <Button variant="ghost" size="icon" className="hover:bg-gray-800 hover:text-green-400" asChild>
          <Link href="https://github.com" target="_blank">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-gray-800 hover:text-green-400" asChild>
          <Link href="https://www.linkedin.com/in/chiurai-campbell-shava-mgonie-530653228" target="_blank">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </Button>
      </div>
    </nav>
  )}
</header>

      <div className="relative">
        {/* Hero Section */}
        <section className="container px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32">
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] gap-6">
    <div className="flex flex-col justify-center space-y-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-green-400 justify-center lg:justify-start">
          <Terminal className="h-5 w-5" />
          <span className="font-mono text-sm">~/portfolio/chiurai</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-center lg:text-left">
          <span className="text-green-400">Chiurai Campbell</span>
          <br />
          <span className="text-gray-300">Shava Mgonie</span>
        </h1>
        <div className="space-y-2 text-center lg:text-left">
                  <p className="text-xl text-green-400 font-mono">{"> CTO & Co-Founder Navjo Synk Solutions"}</p>
                  <p className="max-w-[600px] text-gray-400 md:text-lg">
                    Results-driven Computer Science graduate with expertise in Django development, system architecture,
                    and leading technical teams. Passionate about building scalable solutions that bridge technology
                    with business objectives.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black font-semibold" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
                  asChild
                >
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative flex justify-center lg:justify-end">
  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
  <Image
    src="/me.png?height=300&width=300"
    alt="Chiurai Campbell Shava Mgonie"
    width={180}
    height={180}
    className="relative rounded-full border-4 border-green-400/30 w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
    priority
  />
</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-24 bg-gray-900/50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              <span className="text-green-400">&lt;</span>About Me<span className="text-green-400">&gt;</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate software developer and entrepreneur currently serving as CTO & Co-Founder at Navjo
                  Synk Solutions. With a First Class Honours degree in Computer Science from NUST, I specialize in
                  Django web development and system architecture.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My journey spans from teaching Computer Science to leading technical teams, always focused on creating
                  innovative solutions that make a real impact. I believe in the power of technology to transform
                  businesses and improve lives.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span>Bulawayo, Zimbabwe</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="h-5 w-5 text-green-400" />
                  <span>Born April 12, 2003</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Award className="h-5 w-5 text-green-400" />
                  <span>First Class Honours Graduate</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Users className="h-5 w-5 text-green-400" />
                  <span>English & Shona Speaker</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              <span className="text-green-400">&lt;</span>Experience<span className="text-green-400">&gt;</span>
            </h2>
            <div className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-green-400">Chief Technology Officer / Co-Founder</CardTitle>
                      <CardDescription className="text-gray-400">Navjo Synk Solutions • 2025 - Present</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      Current
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Leading technical direction and innovation strategy for a tech startup focused on digital solutions.
                    Overseeing product development, managing technical teams, and supporting strategic business
                    decisions from inception.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400">ICT Attaché</CardTitle>
                  <CardDescription className="text-gray-400">First Mutual Holdings LTD • 2023 - 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Developed a lunch ordering web application to streamline staff meal coordination</li>
                    <li>• Provided business applications support and network troubleshooting</li>
                    <li>• Delivered technical support across multiple departments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400">Computer Science Teacher</CardTitle>
                  <CardDescription className="text-gray-400">Mbuyanehanda Highschool • 2022 - 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Tutored O-Level and A-Level students in Computer Science during school holidays, focusing on
                    programming fundamentals, theory, and exam preparation with consistent student performance
                    improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-24 bg-gray-900/50">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              <span className="text-green-400">&lt;</span>Technical Skills<span className="text-green-400">&gt;</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-400/50 transition-colors">
                <CardHeader>
                  <Server className="h-8 w-8 mb-2 text-green-400" />
                  <CardTitle className="text-green-400">Backend Development</CardTitle>
                  <CardDescription className="text-gray-400">Server-side development and APIs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      Django
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      REST APIs
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      WebSockets
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-400/50 transition-colors">
                <CardHeader>
                  <Database className="h-8 w-8 mb-2 text-green-400" />
                  <CardTitle className="text-green-400">Database Administration</CardTitle>
                  <CardDescription className="text-gray-400">Data management and optimization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      MySQL
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      PostgreSQL
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      MongoDB
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-400/50 transition-colors">
                <CardHeader>
                  <Smartphone className="h-8 w-8 mb-2 text-green-400" />
                  <CardTitle className="text-green-400">Frontend Development</CardTitle>
                  <CardDescription className="text-gray-400">User interface development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      HTML/CSS
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      JavaScript
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      React
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-400/50 transition-colors">
                <CardHeader>
                  <Network className="h-8 w-8 mb-2 text-green-400" />
                  <CardTitle className="text-green-400">Networking</CardTitle>
                  <CardDescription className="text-gray-400">Network infrastructure and protocols</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      Network Security
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      Troubleshooting
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-400/50 transition-colors">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-green-400" />
                  <CardTitle className="text-green-400">Project Management</CardTitle>
                  <CardDescription className="text-gray-400">Team leadership and methodology</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      Agile
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      Team Leadership
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-400/50 transition-colors">
                <CardHeader>
                  <Cpu className="h-8 w-8 mb-2 text-green-400" />
                  <CardTitle className="text-green-400">System Architecture</CardTitle>
                  <CardDescription className="text-gray-400">Scalable system design</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      IoT Systems
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-green-400">
                      Microservices
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              <span className="text-green-400">&lt;</span>Featured Projects<span className="text-green-400">&gt;</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
                <CardHeader>
                  <Image
                    src="/online-food-ordering-system.jpg?height=200&width=400"
                    alt="Lunch Ordering System"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <CardTitle className="text-green-400">Staff Lunch Ordering System- First Mutual Holdings Limited</CardTitle>
                  <CardDescription className="text-gray-400">
                    Web application for streamlining staff meal coordination
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      Html
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      css
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      Python-Django
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      MySQL
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
                      asChild
                    >
                     
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
                <CardHeader>
                  <Image
                    src="/bmx-background.jpg?height=200&width=400"
                    alt="IoT Sports Management"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <CardTitle className="text-green-400">IoT BMX Races Management System</CardTitle>
                  <CardDescription className="text-gray-400">
                    Final year Research project for improving IoT in amateur sports (Distinction)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-green-400 text-green-400">
                      Html
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      css
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      raspberry-pi 
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      Python-Django
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      Solo Scrum
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      Websockets 
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
                      asChild
                    >
                      <Link href="#" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
                <CardHeader>
                  <Image
                    src="/navjo synk logo.png?height=200&width=200"
                    alt="Navjo Synk Solutions"
                    width={200}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <CardTitle className="text-green-400">Navjo Synk Solutions Website</CardTitle>
                  <CardDescription className="text-gray-400">
                    Company website for Navjo Synk Solutions 
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      Django
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      PostgreSQL
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-black" asChild>
                      <Link href="https://www.navjosynk.com" target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Site
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-24 bg-gray-900/50">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              <span className="text-green-400">&lt;</span>Let's Connect<span className="text-green-400">&gt;</span>
            </h2>
            <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
              Ready to discuss your next project or explore collaboration opportunities? I'm always excited to work on
              innovative solutions that make a difference.
            </p>
            <div className="grid gap-4 md:grid-cols-3 mb-8">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <Mail className="h-6 w-6 text-green-400" />
                <span className="text-sm text-gray-400">Email</span>
                <span className="text-green-400 font-mono">shavachiurai@gmail.com</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <Phone className="h-6 w-6 text-green-400" />
                <span className="text-sm text-gray-400">Phone</span>
                <span className="text-green-400 font-mono">+263713376255</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <MapPin className="h-6 w-6 text-green-400" />
                <span className="text-sm text-gray-400">Location</span>
                <span className="text-green-400 font-mono">Bulawayo, ZW</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mt-4">
  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black font-semibold w-full sm:w-auto text-center" asChild>
    <Link href="mailto:shavachiurai@gmail.com">
      <Mail className="h-4 w-4 mr-2" />
      Send Email
    </Link>
  </Button>
  <Button
    variant="outline"
    size="lg"
    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent w-full sm:w-auto text-center"
    asChild
  >
    <Link href="https://www.linkedin.com/in/chiurai-campbell-shava-mgonie-530653228" target="_blank">
      <Linkedin className="h-4 w-4 mr-2" />
      Connect on LinkedIn
    </Link>
  </Button>
</div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-6 md:py-0 bg-gray-950">
  <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 sm:px-6 md:px-12">
    <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
      <Terminal className="h-6 w-6 text-green-400" />
      <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
        <span className="font-mono">&lt;&gt;</span> Navjo Synk Solutions ©{" "}
        {new Date().getFullYear()}
      </p>
    </div>
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="icon" className="hover:bg-gray-800 hover:text-green-400" asChild>
        <Link href="https://github.com" target="_blank">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" className="hover:bg-gray-800 hover:text-green-400" asChild>
        <Link href="https://www.linkedin.com/in/chiurai-campbell-shava-mgonie-530653228" target="_blank">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" className="hover:bg-gray-800 hover:text-green-400" asChild>
        <Link href="mailto:shavachiurai@gmail.com">
          <Mail className="h-4 w-4" />
          <span className="sr-only">Email</span>
        </Link>
      </Button>
    </div>
  </div>
</footer>
      </div>
    </div>
  )
}
