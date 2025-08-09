import { Shield, Smartphone, Zap, Boxes, GitBranch, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    title: "Real‑time systems",
    desc: "Websockets and live updates for fast, reliable UX.",
    Icon: Zap,
  },
  {
    title: "Payments & security",
    desc: "Stripe integrations, refunds, and robust auth.",
    Icon: Shield,
  },
  {
    title: "Multi‑surface apps",
    desc: "Web + native (Capacitor/Android) when it adds value.",
    Icon: Smartphone,
  },
  {
    title: "Pragmatic backends",
    desc: "Postgres, Supabase, edge functions, and clean APIs.",
    Icon: Boxes,
  },
  {
    title: "CI/CD & quality",
    desc: "Automated deploys and developer‑friendly tooling.",
    Icon: GitBranch,
  },
  {
    title: "Performance first",
    desc: "Accessible, responsive, and measured improvements.",
    Icon: Rocket,
  },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-20 px-4 diagonal-stripes animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Bring</h2>
          <p className="text-xl text-muted-foreground">
            A product mindset with solid engineering foundations
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, Icon }, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="project-card rounded-xl p-6 tilt-card card-spotlight hover-scale"
                   onMouseMove={(e) => {
                     const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                     const x = e.clientX - rect.left;
                     const y = e.clientY - rect.top;
                     (e.currentTarget as HTMLElement).style.setProperty('--x', x + 'px');
                     (e.currentTarget as HTMLElement).style.setProperty('--y', y + 'px');
                   }}
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* impact stats bar (non-redundant with Experience) */}
        <div className="mt-12 brand-bar">
          {["22k+ users served", "40% cost reduction", "CI/CD & monitoring", "Realtime systems", "Microservices & REST APIs", "Docker & AWS"].map((stat) => (
            <div key={stat} className="brand-pill">{stat}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
