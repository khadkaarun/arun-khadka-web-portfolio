import ProjectCard from "./ProjectCard";
import Reveal from "@/components/Reveal";

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
      github: "https://github.com/khadkaarun/Restaurant-Website",
      link: "https://restaurant.arunkhadka.com"
    },
    {
      title: "📈 Nittha Siam Kitchen",
      type: "Responsive restaurant website (HTML/CSS/Bootstrap)",
      tech: ["HTML5", "CSS3", "Bootstrap", "SEO", "Accessibility"],
      summary: "Mobile‑first site that increased discoverability and conversions — 1,000+ MAU and 21k+ pageviews in year one.",
      features: [
        "Built a responsive website using HTML, CSS, and Bootstrap for a clean, mobile‑friendly interface",
        "Designed interactive UI components that reduced order placement time, contributing to an estimated $1,000/day pickup increase",
        "Enhanced accessibility and SEO, resulting in 1,000+ monthly active users and 21,000+ pageviews",
        "Restored full site functionality during a critical outage in under one hour"
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
    <section id="projects" className="section-grid py-20 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Real client projects with measurable outcomes
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto">
            A mix of full‑stack systems, mobile surfaces, and pragmatic engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Reveal delay={0}><ProjectCard {...projects[0]} className="lg:min-h-[560px] card-spotlight" /></Reveal>
          <Reveal delay={120}><ProjectCard {...projects[1]} className="lg:min-h-[560px] card-spotlight" /></Reveal>
        </div>

        <div className="max-w-3xl mx-auto">
          <Reveal delay={180}><ProjectCard {...projects[2]} className="card-spotlight" /></Reveal>
        </div>

        {/* Side Projects - brief, non-distracting */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Side Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal delay={0}>
              <ProjectCard
                title="🤖 Raspberry Pi Robotics Control System"
                type="Simulation & Control (C++, ROS 2, Gazebo)"
                tech={["REST API", "C++", "ROS 2", "Gazebo", "LiDAR", "IMU"]}
                summary="Simulated control software for a wheeled robot in Gazebo with ROS 2 Humble, virtual LiDAR/IMU sensors, and a lightweight REST API for real-time command and telemetry."
                features={[
                  "ROS 2 nodes for motion control and sensor fusion",
                  "REST API to send commands and monitor status in real time"
                ]}
              />
            </Reveal>
            <Reveal delay={120}>
              <ProjectCard
                title="⚙️ Multi‑Threaded C++ Data Processing Engine"
                type="Systems & Messaging (C++, ZeroMQ)"
                tech={["Multithreading", "Parallel Processing", "C++", "ZeroMQ"]}
                summary="Parallel processing engine for multiple simulated robotics data streams using ZeroMQ for inter‑module messaging and modern C++ for modularity."
                features={[
                  "Thread‑safe pipelines and work queues",
                  "ZeroMQ pub/sub for decoupled modules"
                ]}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
