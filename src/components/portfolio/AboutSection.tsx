import Reveal from "@/components/Reveal";

const AboutSection = () => {
  const roles = [
    {
      period: "Jun 2025 – Jul 2025",
      title: "Software Engineer (Freelance)",
      org: "Cha Bar Bistro & Maki Express Ramen House",
      bullets: [
        "Architected and developed a comprehensive business management platform with real-time synchronization across multiple interfaces",
        "Engineered a native Android app with live push notifications for staff coordination",
        "Implemented secure, role-based authentication for different staff levels",
        "Reduced payment processing fees from 5% to 2.9% via a custom payment solution",
        "Built inventory tracking and substitution algorithms for dynamic, cross-surface updates",
      ],
    },
    {
      period: "Aug 2024 – Sep 2024",
      title: "AI Developer (Fellowship)",
      org: "Headstarter AI",
      bullets: [
        "Shipped a domain‑specific chatbot UI powered by retrieval and OpenAI APIs",
        "Collaborated on AWS EC2 infrastructure and deployment",
      ],
    },
    {
      period: "Apr 2024 – May 2024",
      title: "Web Developer (Freelance)",
      org: "Pintoh Asian Restaurant",
      bullets: [
        "Created a custom CMS‑driven WordPress platform with a mobile‑first responsive design",
        "Integrated modular plugin architecture for easy feature expansion and optimized site SEO for increased discoverability",
        "Streamlined pickup ordering UX to improve conversions",
      ],
    },
    {
      period: "Feb 2024 – Mar 2024",
      title: "Web Developer (Freelance)",
      org: "Nittha Siam Kitchen",
      bullets: [
        "Built a responsive website using HTML, CSS, and Bootstrap, delivering a clean, modern, and mobile‑friendly interface",
        "Designed interactive UI components that improved navigation and reduced order placement time, contributing to an estimated $1,000/day increase in pickup order value",
        "Enhanced accessibility and SEO, resulting in 1,000+ monthly active users and 21,000+ pageviews",
        "Restored full site functionality during a critical outage in under one hour, minimizing downtime",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 section-grid animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Experience</h2>
        <ol className="relative border-l pl-6 md:pl-8 border-border">
          {roles.map((role, idx) => (
            <li key={idx} className="mb-10">
              <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-primary" />
              <Reveal delay={idx * 90}>
                <div className="project-card rounded-xl p-6 tilt-card card-spotlight hover-scale"
                     onMouseMove={(e) => {
                       const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                       const x = e.clientX - rect.left;
                       const y = e.clientY - rect.top;
                       (e.currentTarget as HTMLElement).style.setProperty('--x', x + 'px');
                       (e.currentTarget as HTMLElement).style.setProperty('--y', y + 'px');
                     }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg font-semibold">{role.title} — <span className="text-primary/80">{role.org}</span></h3>
                    <span className="text-sm text-muted-foreground">{role.period}</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-muted-foreground">
                    {role.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2"><span className="text-primary">•</span><span>{b}</span></li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AboutSection;