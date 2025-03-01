const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"]
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "jQuery"]
    },
    {
      title: "Backend & Database",
      skills: ["Supabase", "PostgreSQL", "SQL", "Edge Functions", "Stripe API", "Resend API"]
    },
    {
      title: "Tools",
      skills: ["Git/GitHub", "WordPress", "Capacitor", "Bluehost"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">
            Tools and technologies I use to build modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="tech-tag text-center block mx-auto w-fit"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;