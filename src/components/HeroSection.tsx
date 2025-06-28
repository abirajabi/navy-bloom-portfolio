
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const greetings = [
    "Hello! My Name is Naufal",
    "Halo! Nama saya Naufal",
    "مرحبا! اسمي نوفل",
    "你好！我叫诺法尔",
    "こんにちは！私の名前はナウファルです"
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = greetings[currentGreeting];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next greeting
          setIsDeleting(false);
          setCurrentGreeting((prev) => (prev + 1) % greetings.length);
          setCharIndex(0);
        }
      }
    }, isDeleting ? 50 : 100); // Faster when deleting

    return () => clearTimeout(timeout);
  }, [currentGreeting, charIndex, isDeleting, greetings]);

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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block min-h-[1.2em]">
              {displayedText}
              <span className="animate-pulse">|</span>
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
