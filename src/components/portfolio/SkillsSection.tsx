import Reveal from "@/components/Reveal";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "SASS", "Bootstrap", "Redux"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js", "Express.js", "Python", "Java", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "JWT", "Microservices"
      ]
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        "Linux", "Docker", "Git", "GitHub Actions", "CI/CD", "AWS", "Nginx", "Bash", "SSH", "SSL/TLS", "System Administration", "Load Balancing", "Cloud Infrastructure", "Monitoring & Logging"
      ]
    },
    {
      title: "Testing & Methodologies",
      skills: [
        "Jest", "Postman", "Unit Testing", "Integration Testing", "Agile", "Scrum", "TDD", "Version Control"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 diagonal-stripes animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
          <p className="text-xl text-muted-foreground">
            A pragmatic toolbox for building reliable products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Reveal key={index} delay={index * 60}>
              <div className="project-card rounded-xl p-6 tilt-card card-spotlight hover-scale"
                   onMouseMove={(e) => {
                     const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                     const x = e.clientX - rect.left;
                     const y = e.clientY - rect.top;
                     (e.currentTarget as HTMLElement).style.setProperty('--x', x + 'px');
                     (e.currentTarget as HTMLElement).style.setProperty('--y', y + 'px');
                   }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="tech-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;