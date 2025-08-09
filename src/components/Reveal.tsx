import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${visible ? "animate-enter" : "opacity-0 translate-y-2"} ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
