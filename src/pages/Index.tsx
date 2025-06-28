
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ClientSection from "@/components/ClientSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ClientSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 gradient-navy text-center">
        <div className="container mx-auto px-6">
          <p className="text-navy-200">
            © 2024 Your Name. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
