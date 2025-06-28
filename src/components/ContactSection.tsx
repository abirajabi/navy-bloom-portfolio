
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-navy-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Ready to bring your project to life? I'd love to hear about your ideas 
            and discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-800 mb-6">
                Get In Touch
              </h3>
              <p className="text-navy-600 leading-relaxed mb-8">
                I'm always excited to take on new challenges and collaborate with 
                passionate people. Whether you have a project in mind or just want 
                to say hello, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-navy-800">Email</p>
                  <p className="text-navy-600">hello@yourname.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-navy-800">Phone</p>
                  <p className="text-navy-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-navy-800">Location</p>
                  <p className="text-navy-600">New York, NY</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Name
                  </label>
                  <Input 
                    placeholder="Your name"
                    className="border-navy-200 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="border-navy-200 focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">
                  Subject
                </label>
                <Input 
                  placeholder="Project inquiry"
                  className="border-navy-200 focus:border-primary focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="border-navy-200 focus:border-primary focus:ring-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
