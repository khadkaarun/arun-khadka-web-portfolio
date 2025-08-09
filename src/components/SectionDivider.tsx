import React from "react";

const SectionDivider: React.FC = () => {
  return (
    <div aria-hidden className="relative py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;
