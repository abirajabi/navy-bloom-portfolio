
import { Code, Palette, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Development",
      description: "Full-stack development with modern technologies and best practices"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design",
      description: "Creating beautiful, user-centered interfaces that delight users"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimized solutions that load fast and perform seamlessly"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Working closely with teams to deliver exceptional results"
    }
  ];

  return (
    <section className="py-20 bg-navy-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that make a difference. I believe in the power of clean code, beautiful design, 
            and meaningful user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">
                {skill.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
