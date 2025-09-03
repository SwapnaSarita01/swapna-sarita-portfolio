import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_q1d3kwm',
        'template_ubva06r',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Swapna Sarita Kar'
        },
        'sm1bE1kxwIj2lR-ob'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "swapnasaritakar@gmail.com",
      href: "mailto:swapnasaritakar@gmail.com",
      color: "text-red-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8763386944",
      href: "tel:+918763386944",
      color: "text-green-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/swapna-sarita",
      href: "https://linkedin.com/in/swapna-sarita",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SwapnaSarita01",
      href: "https://github.com/SwapnaSarita01",
      color: "text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent to-accent-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-up animate">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-accent-foreground">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-xl text-accent-foreground/80">
              Ready to discuss cloud infrastructure solutions and collaboration opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 fade-up animate" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-accent-foreground">Get in Touch</h3>
                <p className="text-accent-foreground/70 mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to contribute to cutting-edge cloud infrastructure solutions. 
                  Let's connect and explore how we can work together!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a 
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                      >
                        <div className={`p-3 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors ${contact.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-medium text-accent-foreground">{contact.label}</div>
                          <div className="text-sm text-accent-foreground/70">{contact.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="space-y-6 fade-up animate" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-accent-foreground">Quick Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-accent-foreground mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-accent-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-accent-foreground mb-2">Message</label>
                    <textarea 
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full btn-hero group">
                    <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Location */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 text-accent-foreground">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-medium">Based in India</div>
                    <div className="text-sm text-accent-foreground/70">Open to remote opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;