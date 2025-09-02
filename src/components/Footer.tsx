import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Swapna Sarita Kar</h3>
              <p className="text-primary-foreground/80">
                Cloud & DevOps Engineer passionate about building scalable, 
                secure infrastructure solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Let's Connect</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>swapnasaritakar@gmail.com</p>
                <p>+91 8763386944</p>
                <div className="flex space-x-4 pt-2">
                  <a 
                    href="https://linkedin.com/in/swapna-sarita" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/SwapnaSarita01" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 mb-4 md:mb-0">
              © 2024 Swapna Sarita Kar. Built with{" "}
              <Heart className="w-4 h-4 inline text-red-400" fill="currentColor" />{" "}
              using React & TypeScript
            </p>
            
            <Button 
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;