
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const greetings = [
    "Hello! My Name is Naufal",
    "你好，我叫饶丰乐",
    "Hola! Mi nombre es Naufal",
    "Bonjour! Je m'appelle Naufal",
    "こんにちは！私の名前はナウファルです",
    "안녕하세요! 제 이름은 나우팔입니다"
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-navy"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span 
              key={currentGreeting}
              className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block animate-fade-in"
            >
              {greetings[currentGreeting]}
            </span>
            <span className="block mt-4">
              Developers Name
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-navy-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            I craft digital experiences that blend beautiful design with powerful functionality. 
            Let's bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-navy-300 text-navy-100 hover:bg-navy-800 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
        
        <div className="animate-bounce mt-16">
          <ArrowDown className="h-8 w-8 text-navy-300 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
