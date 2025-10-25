import { Trophy } from "lucide-react";
import { Button } from '@/components/ui/button';
import productImage from '@/assets/worklytics-sc.jpg';
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductHero {
  icon: LucideIcon;
  badgeText: string;
  heading: string;
  description: string;
}

const ProductHero = ({ icon: Icon, badgeText, heading, description }: ProductHero) => {
  return (
    <section className="relative bg-[radial-gradient(at_top_center,_#101e8a_0%,_#010630_65%)] text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:py-56 py-48">
        <div className="grid gap-8 lg:mb-8 max-w-4xl mx-auto sm:text-center">

          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{badgeText}</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-semibold leading-[1.25em!important]">
              {heading}
            </h1>
            <p className="text-primary-foreground/70 max-w-4xl mx-auto mb-6">
              {description}
            </p>
            {/* Buttons */}
            <div className="flex sm:justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-3 h-auto text-base font-semibold"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="ghost" className="text-white border border-white/50 hover:bg-white/10 rounded-full px-6 py-3 h-auto text-base font-semibold flex items-center gap-2">Start Free Trial</Button>
            </div>
          </div>
        </div>

        {/* Solution Image */}
        <div className="relative z-10 mt-16">
          <img
            src={productImage}
            alt="HRSprout platform screenshot"
            className="block mx-auto rounded-lg shadow-xl w-auto" />
        </div>

      </div>

      {/* Tilted Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
    </section>
  );
};

export default ProductHero;
