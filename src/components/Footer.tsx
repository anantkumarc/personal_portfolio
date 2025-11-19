import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-10 mt-auto border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <Phone size={20} />
              </div>
              <span className="text-sm font-medium">Phone</span>
            </a>
            <a
              href="mailto:email@example.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <Mail size={20} />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <Linkedin size={20} />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <Github size={20} />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <Twitter size={20} />
              </div>
              <span className="text-sm font-medium">Twitter</span>
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
