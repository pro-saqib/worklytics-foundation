import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      subLinks: [
        { name: "Application Modernisation", path: "/services/application-modernisation" },
        { name: "Cloud Services", path: "/services/cloud-services" },
        { name: "Cloud Transformations", path: "/services/cloud-transformations" },
        { name: "Custom Software Development", path: "/services/custom-software-development" },
        { name: "Managed IT Services", path: "/services/managed-it-services" },
        { name: "Digital Transformation", path: "/services/digital-transformation" },
        { name: "Data Analytics / AI", path: "/services/data-analytics-ai" },
      ],
    },
    { name: "Product", path: "/product" },
    { name: "Pricing", path: "/pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => window.scrollTo(0, 0), [location]);

  // helper to delay hiding dropdown
  let hideTimeout: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
    setShowServices(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => setShowServices(false), 150);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-primary" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 border-b border-white/10">
        <nav className="flex items-center justify-between py-5">
          {/* Logo */}
          <div className="flex items-center gap-8 pr-8 border-r border-white/10">
            <Link to="/" className="text-2xl text-primary-foreground font-bold">
              <span className="font-bold text-accent">W</span>
              <span className="font-semibold">orklytics</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 pl-8">
            <div className="flex items-center gap-12">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
                  onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
                >
                  {!link.hasDropdown ? (
                    <Link
                      to={link.path}
                      className={cn(
                        "text-lg font-medium transition-colors flex items-center gap-1",
                        isActive(link.path)
                          ? "text-primary-foreground"
                          : "text-primary-foreground/80 hover:text-primary-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <>
                      <div className="flex items-center gap-1">
                        <Link
                          to={link.path}
                          className={cn(
                            "text-lg font-medium transition-colors",
                            isActive(link.path)
                              ? "text-primary-foreground"
                              : "text-primary-foreground/80 hover:text-primary-foreground"
                          )}
                        >
                          {link.name}
                        </Link>
                        <button
                          onClick={() => setShowServices((prev) => !prev)}
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                          aria-label="Toggle services menu"
                        >
                          <ChevronDown size={16} className={cn("mt-0.5 transition-transform", showServices ? "rotate-180" : "")} />
                        </button>
                      </div>


                      {/* Dropdown */}
                      {showServices && (
                        <div
                          className="absolute top-full -left-8 mt-3 w-72 bg-white rounded-lg shadow-lg py-3 flex flex-col z-50"
                        >
                          {link.subLinks?.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-6 py-3 h-auto flex items-center gap-3 w-fit">
                Let's Talk
                <Mail className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground ml-auto"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </div>

      {/* Mobile Flyout */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-3/4 max-w-xs bg-primary shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-primary-foreground font-bold"
            >
              <span className="font-bold text-accent">W</span>
              <span className="font-semibold">orklytics</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-primary-foreground">
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <div key={link.path}>
                {!link.hasDropdown ? (
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "text-base font-medium transition-colors block",
                      isActive(link.path)
                        ? "text-primary-foreground"
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setShowMobileServices((prev) => !prev)}
                      className="flex items-center justify-between w-full text-base font-medium text-primary-foreground/80 hover:text-primary-foreground"
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform",
                          showMobileServices ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {showMobileServices && (
                      <div className="pl-4 mt-4 space-y-3">
                        {link.subLinks?.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-sm text-primary-foreground/80 hover:text-primary-foreground"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-auto pt-8">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-6 py-3 h-auto flex items-center gap-2 w-fit">
                Let's Talk
                <Mail className="w-5 h-5" />
              </Button>
            </Link>
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
