import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Instagram, Code } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/10 py-12 relative overflow-hidden">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-[200px] font-mono opacity-10 text-primary">&lt;/&gt;</div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold text-primary flex items-center">
              <Code className="mr-2" />
              Campbell Shava
            </Link>
            <p className="text-foreground/70 mt-2 max-w-md font-mono">
              <span className="text-primary">&gt;</span> Software Engineer | Full Stack Developer | UI Designer
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10" asChild>
                <a href="https://github.com/campbellshava2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10" asChild>
                <a href="https://www.linkedin.com/in/chiurai-campbell-shava-mgonie-530653228?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk93Iw%2BJuS228EGQuobn32Q%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10" asChild>
                <a href="https://www.instagram.com/_campbell.ms?igsh=MXFxamd2bGJoeTBwYQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10" asChild>
                <a href="mailto:shavachiurai@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="text-foreground/60 text-sm font-mono flex items-center">
              <span className="text-primary mr-1">&lt;</span>© {currentYear} Campbell Shava. All rights reserved.
              <span className="text-primary ml-1">/&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

