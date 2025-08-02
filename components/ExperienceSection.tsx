import { Code } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Code className="mr-2 text-primary" />
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </div>
        <div className="space-y-10">
          {/* CTO Experience */}
          <div className="bg-background/80 border border-primary/20 rounded-lg p-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h3 className="text-2xl font-bold text-primary">Chief Technology Officer / Co-Founder</h3>
                <div className="text-foreground/70 font-mono">Navjo Synk Solutions • 2025 - Present <span className="ml-2 bg-green-900 text-green-300 px-2 py-0.5 rounded-full text-xs">Current</span></div>
              </div>
            </div>
            <p className="text-foreground/80 mt-2 mb-2">Leading technical direction and innovation strategy for a tech startup focused on digital solutions. Overseeing product development, managing technical teams, and supporting strategic business decisions from inception.</p>
          </div>

          {/* ICT Attaché Experience */}
          <div className="bg-background/80 border border-primary/20 rounded-lg p-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h3 className="text-2xl font-bold text-primary">ICT Attaché</h3>
                <div className="text-foreground/70 font-mono">First Mutual Holdings LTD • 2023 - 2024</div>
              </div>
            </div>
            <ul className="list-disc list-inside text-foreground/80 mt-2 space-y-1">
              <li>Developed a lunch ordering web application to streamline staff meal coordination</li>
              <li>Provided business applications support and network troubleshooting</li>
              <li>Delivered technical support across multiple departments</li>
            </ul>
          </div>

          {/* Teacher Experience */}
          <div className="bg-background/80 border border-primary/20 rounded-lg p-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h3 className="text-2xl font-bold text-primary">Computer Science Teacher</h3>
                <div className="text-foreground/70 font-mono">Mbuyanehanda Highschool • 2022 - 2023</div>
              </div>
            </div>
            <p className="text-foreground/80 mt-2">Tutored O-Level and A-Level students in Computer Science during school holidays, focusing on programming fundamentals, theory, and exam preparation with consistent student performance improvement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
