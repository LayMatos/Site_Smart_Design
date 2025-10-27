import { Instagram, Facebook, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Share">
            <Share2 className="h-6 w-6" />
          </a>
        </div>
        <p className="text-center text-sm opacity-90">
          © 2024 SMART DESIGN. TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
