import { Instagram, Facebook, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://instagram.com/smartdesignplanejados" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <p className="text-center text-sm opacity-90">
          © 2026 SMART DESIGN. TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
