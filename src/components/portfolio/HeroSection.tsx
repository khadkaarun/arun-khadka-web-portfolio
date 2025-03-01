import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code, Database, Globe, Sparkles, Zap, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center px-4 relative overflow-hidden">
      {/* Cosmic animated background with floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cosmic background layers */}
        <div className="absolute inset-0 cosmic-bg"></div>
        
        {/* Floating holographic orbs */}
        <div className="floating-orb w-96 h-96 top-10 left-10 animate-float opacity-30" style={{animationDelay: '0s'}}></div>
        <div className="floating-orb w-64 h-64 bottom-20 right-20 animate-float opacity-25" style={{animationDelay: '2s'}}></div>
        <div className="floating-orb w-48 h-48 top-1/2 left-1/4 animate-float opacity-20" style={{animationDelay: '4s'}}></div>
        <div className="floating-orb w-32 h-32 bottom-1/3 left-1/3 animate-float opacity-35" style={{animationDelay: '1s'}}></div>
        
        {/* Geometric particles */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-neon-cyan/40 rotate-45 animate-glow-pulse"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-neon-pink/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-3 h-12 bg-neon-purple/30 animate-holographic"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 border-2 border-neon-yellow/40 rotate-45 animate-cosmic-drift"></div>
        <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-neon-green/40 animate-glow-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating tech icons with enhanced holographic effects */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-16 left-16 w-8 h-8 text-neon-cyan/60 animate-float" style={{animationDuration: '3s', animationDelay: '0.5s'}} />
        <Database className="absolute top-24 right-24 w-6 h-6 text-neon-pink/50 animate-float" style={{animationDuration: '2.5s', animationDelay: '1s'}} />
        <Globe className="absolute bottom-24 left-24 w-7 h-7 text-neon-purple/55 animate-float" style={{animationDuration: '3.5s', animationDelay: '0.2s'}} />
        <Zap className="absolute top-1/2 left-12 w-5 h-5 text-neon-yellow/45 animate-glow-pulse" style={{animationDelay: '1.5s'}} />
        <Rocket className="absolute bottom-1/3 right-16 w-6 h-6 text-neon-green/50 animate-float" style={{animationDuration: '3.2s', animationDelay: '0.8s'}} />
        <Sparkles className="absolute top-1/4 right-1/2 w-4 h-4 text-neon-cyan/55 animate-glow-pulse" style={{animationDelay: '2.2s'}} />
      </div>

      <div className="max-w-6xl mx-auto text-center text-white relative z-10">
        <div className="mb-12 animate-fade-in">
          {/* Holographic availability badge */}
          <div className="rainbow-border inline-block mb-8">
            <div className="flex items-center gap-3 px-8 py-4 bg-black/20 backdrop-blur-md text-sm font-bold">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-glow-pulse"></div>
              <Sparkles className="w-5 h-5 text-neon-cyan animate-holographic" />
              <span className="text-holographic">Available for Internships & Full-Time Opportunities</span>
            </div>
          </div>
          
          {/* Ultra-creative holographic name */}
          <h1 className="text-7xl md:text-9xl font-black mb-10 leading-tight tracking-wider">
            <span className="text-holographic drop-shadow-2xl animate-holographic">
              Arun Khadka
            </span>
          </h1>
          
          {/* Enhanced creative titles with neon accents */}
          <div className="space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white/95 flex items-center justify-center gap-4">
              <Code className="w-8 h-8 text-neon-cyan animate-glow-pulse" />
              <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-purple bg-clip-text text-transparent">
                Senior CS Major | Full-Stack Developer
              </span>
              <Rocket className="w-8 h-8 text-neon-pink animate-glow-pulse" />
            </h2>
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-neon-cyan font-semibold flex items-center justify-center gap-3">
                🎓 Graduating May 2026 • Northern Kentucky University
              </p>
            </div>
          </div>
          
          {/* Ultra-creative tagline with multiple effects */}
          <div className="relative mb-12">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl leading-relaxed font-bold">
                Crafting <span className="text-holographic animate-holographic">innovative digital experiences</span> and 
                <span className="text-neon-pink animate-glow-pulse"> scalable solutions</span> for real Cincinnati businesses
              </p>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-full opacity-80 animate-holographic"></div>
          </div>
        </div>
        
        {/* Ultra-creative holographic buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
          <div className="rainbow-border">
            <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-pink hover:to-neon-yellow text-black font-bold py-6 px-10 rounded-xl shadow-2xl transition-all duration-500 transform hover:scale-110 neon-glow animate-glow-pulse">
              <Download className="mr-3 h-6 w-6" />
              Download Resume
            </Button>
          </div>
          <div className="glass-card">
            <Button size="lg" variant="outline" className="bg-black/30 text-neon-cyan border-2 border-neon-cyan/60 hover:bg-neon-cyan/20 backdrop-blur-md font-bold py-6 px-10 rounded-xl transition-all duration-500 transform hover:scale-110 hover:neon-glow">
              <Mail className="mr-3 h-6 w-6" />
              <a href="mailto:khadkaarun366@gmail.com">Let's Connect</a>
            </Button>
          </div>
        </div>

        {/* Ultra-creative holographic social icons */}
        <div className="flex justify-center gap-10 mb-16">
          <a 
            href="https://github.com/khadkaarun/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group"
          >
            <div className="rainbow-border">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-black/40 backdrop-blur-md text-neon-cyan rounded-2xl hover:bg-black/60 hover:scale-125 transition-all duration-300 cursor-pointer neon-glow animate-glow-pulse">
                <Github className="w-10 h-10 group-hover:animate-holographic" />
              </div>
            </div>
          </a>
          <a 
            href="https://www.linkedin.com/in/arun-khadka/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group"
          >
            <div className="rainbow-border">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-black/40 backdrop-blur-md text-neon-pink rounded-2xl hover:bg-black/60 hover:scale-125 transition-all duration-300 cursor-pointer neon-glow animate-glow-pulse">
                <Linkedin className="w-10 h-10 group-hover:animate-holographic" />
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Cosmic scroll indicator positioned much lower */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="glass-card p-4 rounded-full">
          <div className="flex flex-col items-center gap-3 animate-float">
            <span className="text-neon-cyan text-sm font-bold animate-holographic">Explore My Universe</span>
            <div className="w-8 h-12 border-2 border-neon-purple/60 rounded-full flex justify-center relative overflow-hidden neon-glow">
              <div className="w-2 h-4 bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full mt-2 animate-glow-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;