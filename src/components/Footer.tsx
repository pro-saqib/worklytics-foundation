import { Link } from "react-router-dom";
import {
  Clock,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[radial-gradient(at_bottom_center,_#101e8a_0%,_#010630_65%)] text-white pt-48">
      {/* Tilted Top Shape */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-background"
        style={{
          clipPath: "polygon(0 0, 100% 100%, 100% 0, 0 0)",
        }}
      ></div>

      {/* Top Section */}
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
          <Clock size={16} className="text-white" />
          <span className="text-sm">We Ready 24 Hours</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.25em!important]">
          Have a project in mind? Let's Talk
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Every great project starts with a conversation. Connect with us today — we’re ready to help you plan, build, and succeed.
        </p>

        <a
          href="tel:+12111-444-90"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          <Phone size={20} />
          <span className="font-semibold">+12 111-444-90</span>
        </a>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr,1fr,1fr] gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl text-primary-foreground font-bold">
              <span className="font-bold text-accent">W</span>
              <span className="font-semibold">orklytics</span>
            </Link>
            <p className="text-lg text-primary-foreground/80 max-w-xs mx-auto md:mx-0">
              WorkLytics is a trusted partner helping businesses worldwide achieve sustainable growth.            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {["About", "Services", "Product", "Pricing"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-lg text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {[
                ["Privacy Policy", "privacy"],
                ["Terms & Condition", "terms"],
                ["FAQ", "faq"],
                ["Contact", "contact"],
              ].map(([text, path]) => (
                <li key={path}>
                  <Link
                    to={`/${path}`}
                    className="text-lg text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us */}
          <div className="space-y-3 text-primary-foreground/80">
            <h4 className="font-semibold mb-6 text-primary-foreground">Find Us</h4>
            <p>Mon - Sat: 8am - 9pm</p>
            <p className="font-semibold">
              Jl. Merdeka Raya No.73B,
              <br />
              London, UK
            </p>
            <p>Project offers</p>
            <p className="font-semibold break-words">worklytics@support.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700 mt-12 text-center md:text-left">
          <p className="text-gray-300 text-sm mb-6 md:mb-0">
            © Copyright {currentYear} Powered by{" "}
            <span className="font-semibold text-accent">WorkLytics</span>. All rights reserved.
          </p>

          <div className="flex justify-center md:justify-end gap-3">
            {[Facebook, Twitter, Linkedin, Youtube, MessageCircle].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center justify-center bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
