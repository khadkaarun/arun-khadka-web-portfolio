const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            My journey began with building static websites and has evolved into creating 
            scalable full-stack systems that solve real-world problems. I'm passionate about 
            clean code, user experience, and turning complex challenges into elegant solutions. 
            Every project teaches me something new, and I love building applications that make 
            a meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;