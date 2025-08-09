import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import HighlightsSection from "@/components/portfolio/HighlightsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="space-y-0">
        <HeroSection />
        <SectionDivider />
        <HighlightsSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <EducationSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Arun Khadka. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
