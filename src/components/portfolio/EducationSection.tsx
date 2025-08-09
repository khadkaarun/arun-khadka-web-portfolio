import Reveal from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EducationSection = () => {
  return (
    <section id="education" className="section-grid py-20 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">Senior CS major with a strong math foundation</p>
        </div>

        <Reveal>
          <Card
            className="project-card tilt-card card-spotlight hover-scale"
            onMouseMove={(e) => {
              const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              (e.currentTarget as HTMLElement).style.setProperty('--x', x + 'px');
              (e.currentTarget as HTMLElement).style.setProperty('--y', y + 'px');
            }}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Northern Kentucky University</CardTitle>
              <div className="text-primary/80 font-medium">Aug 2022 — May 2026 (Expected)</div>
            </CardHeader>
            <CardContent>
              <article className="space-y-3">
                <p className="text-foreground font-semibold">Bachelor of Science in Computer Science</p>
                <p className="text-muted-foreground">Minor in Mathematics</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="tech-tag">Senior CS Major</span>
                  <span className="tech-tag">B.S. Computer Science</span>
                  <span className="tech-tag">Mathematics Minor</span>
                </div>
              </article>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};

export default EducationSection;
