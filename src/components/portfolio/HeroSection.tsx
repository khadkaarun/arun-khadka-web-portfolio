import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Sparkles, TerminalSquare } from "lucide-react";
import Spotlight from "@/components/Spotlight";

const HeroSection = () => {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-24 md:pt-32">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="mesh-bg" />
        <div className="grid-lines opacity-40" />
        <Spotlight />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
          {/* Left: Narrative & CTAs */}
          <article className="text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur px-3 py-1 text-xs sm:text-sm text-foreground/90">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="whitespace-normal leading-snug">Open to Software Engineer Internships & Entry‑Level Roles</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
              <span className="text-holographic">Shipping reliable products for the modern web</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-foreground/90 mb-2">
              Arun Khadka — Full‑Stack Software Engineer
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Senior Computer Science major, Northern Kentucky University (’26)
            </p>

            <p className="hero-prose text-lg md:text-xl max-w-2xl mb-8">
              Full‑Stack Software Engineer delivering production‑ready web and mobile apps with React, TypeScript, Node.js, PostgreSQL, and AWS—shipped to 22k+ users with CI/CD, microservices, realtime systems, and automated testing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
              <Button
                size="lg"
                variant="hero"
                className="font-bold py-6 px-8"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Arun_Khadka_SoftwareEngineer_Resume.pdf";
                  link.download = "Arun_Khadka_SoftwareEngineer_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="h-5 w-5" /> Download Resume
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects" className="font-semibold">
                  <TerminalSquare className="h-5 w-5" /> View Work
                </a>
              </Button>
            </div>

            {/* Social */}
            <div className="flex items-center gap-6">
              <a href="https://github.com/khadkaarun/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="rainbow-border">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-background/60 backdrop-blur-md text-foreground rounded-xl transition-transform duration-300 group-hover:scale-110">
                    <Github className="w-6 h-6 text-foreground group-hover:text-primary" />
                  </div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/arun-khadka/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="rainbow-border">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-background/60 backdrop-blur-md text-foreground rounded-xl transition-transform duration-300 group-hover:scale-110">
                    <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary" />
                  </div>
                </div>
              </a>
            </div>
          </article>

          {/* Right: Code Preview Panel */}
          <aside className="relative animate-enter">
            <div className="tilt-card glass-card rounded-2xl p-4 md:p-6 border w-full max-w-xl ml-auto">
              <div className="flex items-center gap-2 pb-4 border-b">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="w-3 h-3 rounded-full bg-primary" />
                <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
                  <TerminalSquare className="w-4 h-4" /> resume.json
                </div>
              </div>
              <div className="font-mono text-sm leading-relaxed pt-4 text-foreground">
                <pre className="whitespace-pre-wrap">
{`{
  "candidate": "Arun Khadka",
  "title": "Full‑Stack Software Engineer",
  "openTo": ["Internships", "Entry‑Level"],
  "location": "Cincinnati, OH • Remote OK",
  "tech": ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind", "AWS"],
  "highlights": ["22k+ users served", "Stripe payments", "Realtime systems", "CI/CD"],
  "projects": [
    { "name": "Restaurant Ordering System", "impact": "live in production" },
    { "name": "Nittha Siam Kitchen", "impact": "1k+ MAU, 21k+ pageviews" }
  ],
  "strengths": ["Product thinking", "Reliable delivery", "Clean APIs"],
  "keywords": ["Full‑Stack", "React", "TypeScript", "Postgres", "AWS", "Stripe", "Realtime", "CI/CD"],
  "contact": "linkedin.com/in/arun-khadka"
}`}
                </pre>
              </div>
            </div>

            {/* Accent halo */}
            <div className="absolute -z-10 -bottom-8 -right-10 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ backgroundImage: "var(--aurora-gradient)" }} />
          </aside>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;