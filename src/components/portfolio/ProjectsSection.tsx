import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "🔥 Advanced Restaurant Ordering System",
      type: "Live production system for Cincinnati restaurants",
      tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Resend", "Edge Functions", "Capacitor"],
      summary: "Complete restaurant ecosystem currently being deployed to Cha Bar (Main St) and Maki Express Ramen House (Clifton). Features web ordering, Android staff app, intelligent inventory management, and automated payment handling.",
      features: [
        "📱 Android staff app with real-time order notifications",
        "⚡ Live order tracking: mark ready, cancel, or modify orders",
        "🔄 Smart item swapping with automatic refund/payment logic",
        "💳 Stripe integration: auto-refunds for downgrades, payment links for upgrades",
        "👥 Customer accounts: order history, sign in/up, password reset, account deletion",
        "🏪 Admin panel: upload menu photos, manage pricing & categories",
        "📊 4 stock status types with real-time availability checks",
        "📧 Complete email automation via Resend API",
        "🔐 Role-based access (customer, staff, admin) with secure Edge Functions",
        "📈 PWA + Capacitor for native mobile experience"
      ],
      github: "https://github.com/khadkaarun/Full-Stack-Restaurant-Website"
    },
    {
      title: "📈 Nittha Siam Kitchen",
      type: "Static restaurant website (HTML/CSS/jQuery)",
      tech: ["HTML", "CSS", "jQuery", "Tailwind CSS"],
      summary: "First freelance client project with custom responsive design, achieving significant user engagement and traffic growth.",
      features: [
        "Custom responsive design from scratch",
        "Integrated Google Analytics",
        "Attracted ~1,000 monthly users",
        "Received 21,000+ views over one year",
        "Average view time of 2 minutes 24 seconds",
        "Hosted on Bluehost with optimized performance"
      ],
      link: "https://nitthasiamkitchen.com"
    },
    {
      title: "🛠️ Pintoh Asian Restaurant",
      type: "CMS-based restaurant site with pickup ordering",
      tech: ["WordPress", "Custom CSS", "Elementor"],
      summary: "Customized WordPress theme with focus on pickup ordering system and user experience optimization.",
      features: [
        "Customized theme, layout, and content",
        "Pickup ordering system with good UI design",
        "SEO optimization and plugin setup",
        "Fully responsive design",
        "Client-focused content management",
        "Streamlined delivery process"
      ],
      link: "https://pintohasianrestaurant.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Real client projects for Cincinnati-area restaurants
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto">
            Showcasing 3 actual business clients in order of technical complexity and real-world impact
          </p>
        </div>

        {/* First two projects side by side on desktop */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <ProjectCard {...projects[0]} className="lg:min-h-[600px]" />
          <ProjectCard {...projects[1]} className="lg:min-h-[600px]" />
        </div>

        {/* Third project full width */}
        <div className="max-w-3xl mx-auto">
          <ProjectCard {...projects[2]} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;