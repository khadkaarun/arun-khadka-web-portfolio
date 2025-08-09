import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(y > 50);
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Highlights", href: "#highlights" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md border-b" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-bold text-lg md:text-xl tracking-tight">
            Arun Khadka
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors story-link"
              >
                {item.label}
              </a>
            ))}
            <div className="ml-4 hidden md:flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="/Arun_Khadka_SoftwareEngineer_Resume.pdf" download>
                  Resume
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 bg-primary/70" style={{ width: `${progress}%` }} />
    </nav>
  );
};

export default Navigation;