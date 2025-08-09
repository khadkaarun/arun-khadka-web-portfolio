import React, { useEffect } from "react";

const Spotlight: React.FC = () => {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--spotlight-x", `${x}%`);
      document.documentElement.style.setProperty("--spotlight-y", `${y}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div aria-hidden className="pointer-events-none absolute inset-0 spotlight" />;
};

export default Spotlight;
