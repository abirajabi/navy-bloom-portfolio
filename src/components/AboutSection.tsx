
import { Code, Palette, Zap, Users, Icon } from "lucide-react";

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

  const techStack = [
    {
      name: "Flutter",
      icon: (
        <img
          src="https://docs.flutter.dev/assets/images/flutter-logo-sharing.png"
          alt="Node.js Icon"
          className="h-12"
        />
      ),
      description: "Cross-platform mobile app development with Flutter"
    },
    {
      name: "Kotlin",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png"
          alt="Node.js Icon"
          className="h-12"
        />
      ),
      description: "Native Android development with Kotlin & cross-platform with KMM"
    },
    {
      name: "Node.js",
      icon: (
        <img
          src="https://nodejs.org/static/logos/nodejsStackedDark.svg"
          alt="Node.js Icon"
          className="h-12"
        />
      ),
      description: "JavaScript & Typescript APIs with Express"
    },
    {
      name: "PostgreSQL",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
          alt="PostgreSQL Icon"
          className="h-12"
        />
      ),
      description: "PostgreSQL database implementation"
    },
  ];

  return (
    <section className="py-20 bg-navy-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 3+ years of experience creating digital solutions
            that make a difference. I believe in the power of clean code, beautiful design,
            and meaningful user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 justify-center">
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

        {/* Tech Stack Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8">
            Tech Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
            {techStack.map((tech, index) => {

              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center
                    }`}
                >
                  <div className="text-primary mb-4 group-hover:text-accent transition-colors duration-300 flex justify-center">
                    {tech.icon}
                  </div>
                  <h4 className="text-2xl font-semibold text-navy-800 mb-3">
                    {tech.name}
                  </h4>
                  <p className="text-navy-600 leading-relaxed">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
