import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
     { name: "Product", path: "/product" },
     { name: "Pricing", path: "/pricing" },
    ];

  const isActive = (path: string) => location.pathname === path;
  // Effect to handle scroll detection 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-colors duration-300", isScrolled ? "bg-primary" : "bg-transparent")}>
      <div className="container mx-auto px-4 border-b border-white/10">
        <nav className="flex items-center justify-between py-5">
          {/* Logo */}
          <div className="flex items-center gap-8 pr-8 border-r border-white/10">
            <Link to="/" className="text-2xl text-primary-foreground font-bold">
              <span className="font-bold text-accent">W</span>
              <span className="font-semibold">orklytics</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-between flex-1 pl-8">
            <div className="flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg font-medium transition-colors flex items-center gap-1",
                    isActive(link.path)
                      ? "text-primary-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={16} className="mt-0.5" />}
                </Link>
              ))}
            </div>

            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-6 py-3 h-auto flex items-center gap-2 w-fit">
                Let's Talk
                <Mail className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary-foreground ml-auto"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </div>

      {/* Flyout Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-3/4 max-w-xs bg-primary shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header Row with Logo + Close */}
          <div className="flex items-center justify-between mb-8">

            <Link to="/" onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-primary-foreground whitespace-nowrap font-bold">
              <span className="font-bold text-accent">W</span>
              <span className="font-semibold">orklytics</span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="text-primary-foreground"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors flex items-center gap-1",
                  isActive(link.path)
                    ? "text-primary-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} className="mt-0.5" />}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-auto pt-8">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-6 py-3 h-auto flex items-center gap-2 w-fit">
              Let's Talk
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
