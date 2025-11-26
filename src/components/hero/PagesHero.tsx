import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import CtaButtons from "../CtaButtons";

interface HeroSectionProps {
  icon: LucideIcon;
  badgeText: string;
  heading: string;
  description: string;
}

const PagesHero = ({ icon: Icon, badgeText, heading, description }: HeroSectionProps) => {
  return (
    <section className="relative bg-[radial-gradient(at_top_center,_#101e8a_0%,_#010630_65%)] text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:pt-56 lg:pb-80 py-48">
        <div className="grid lg:grid-cols-2 lg:gap-32 gap-12 items-center">

          {/* Left: Heading */}
          <div>
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{badgeText}</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.25em!important]">
                {heading}
              </h1>
            </div>
          </div>

          {/* Right: Description */}
          <div className="relative lg:top-[125px]">
            <div className="md:space-y-8 space-y-14 animate-fade-in">
              <p className="text-base md:text-lg text-primary-foreground/80">{description}</p>

              <CtaButtons />
            </div>
          </div>
        </div>
      </div>

      {/* Tilted Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}></div>
    </section>
  );
};

export default PagesHero;
