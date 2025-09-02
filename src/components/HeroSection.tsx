import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";
import heroPortrait from "@/assets/swapna-profile.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 fade-up animate">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Swapna Sarita Kar
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
                Cloud & DevOps Engineer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Cloud & DevOps Engineer focused on building secure, scalable, and automated 
              cloud-native systems. Skilled in AWS, Kubernetes, Docker, Terraform, and CI/CD, 
              with hands-on experience in monitoring and observability. Driven by a passion 
              for solving complex infrastructure challenges and enabling reliable, 
              high-performance systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                <Download className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="btn-ghost group"
                onClick={scrollToContact}
              >
                <Mail className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative fade-up animate" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <img 
                  src={heroPortrait} 
                  alt="Swapna Sarita Kar - Cloud & DevOps Engineer"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-3xl"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;