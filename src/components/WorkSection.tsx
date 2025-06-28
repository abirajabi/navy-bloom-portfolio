
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const WorkSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Dashboard",
      description: "Analytics dashboard for healthcare providers with real-time data visualization",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Firebase", "Redux", "Biometrics"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool for marketers and writers",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            A selection of projects that showcase my skills and passion for creating 
            exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-navy-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-navy-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="default"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-navy-300 text-navy-700 hover:bg-navy-100">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
