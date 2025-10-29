import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              SpiceVista Exports
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Bringing 30 years of Indian spice heritage to kitchens worldwide.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <span className="text-lg">🇮🇳</span>
              <span className="text-sm font-medium">Made in India</span>
              <span className="mx-2">•</span>
              <span className="text-lg">🌍</span>
              <span className="text-sm font-medium">Exporting Globally</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-accent transition-colors">
                  Quality Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>142/17 Faridabad, Haryana (121002)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:spicevistaexports@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  spicevistaexports@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919899809777"
                  className="hover:text-accent transition-colors"
                >
                  +91-9899809777
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/70 text-sm">
          <p>
            © {new Date().getFullYear()} SpiceVista Exports. All rights
            reserved. Exporting the essence of India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
