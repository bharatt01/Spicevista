import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Homee", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Quality", path: "/quality" },
    { label: "Global Reach", path: "/global" },
    { label: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-warm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <NavLink to="/" className="flex items-center space-x-2">
              <span className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                SpiceVista
              </span>
              <span className="hidden md:block text-sm text-muted-foreground">
                Exports
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? "text-primary underline underline-offset-4"
                      : "text-foreground hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              variant="default"
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block w-full text-left py-3 px-4 transition-colors ${
                    isActive
                      ? "text-primary font-semibold bg-muted"
                      : "text-foreground hover:bg-muted"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="px-4 pt-4">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90"
                onClick={closeMenu}
              >
                <NavLink to="/contact">Get Started</NavLink>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
