
import { Star } from "lucide-react";

const ClientSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Exceptional work! The attention to detail and technical expertise exceeded our expectations. Our platform's performance improved by 40% after the optimization.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Michael Chen",
      company: "Digital Ventures",
      role: "CTO",
      content: "A true professional who delivered on time and within budget. The mobile app they developed has received fantastic user feedback and high app store ratings.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency Co.",
      role: "Design Director",
      content: "Brilliant collaboration! They perfectly translated our design vision into a functional, beautiful website. Communication was clear throughout the entire process.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const clients = [
    { name: "TechStart Inc.", logo: "TS" },
    { name: "Digital Ventures", logo: "DV" },
    { name: "Creative Agency", logo: "CA" },
    { name: "InnovateLab", logo: "IL" },
    { name: "FutureWorks", logo: "FW" },
    { name: "NextGen Solutions", logo: "NS" }
  ];

  return (
    <section className="py-20 gradient-navy">
      <div className="container mx-auto px-6">
        {/* Client Logos */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-semibold text-navy-200 mb-12">
            Trusted by Amazing Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="flex items-center justify-center h-20 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-white font-bold text-xl">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-navy-200 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-navy-100 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-navy-300 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
