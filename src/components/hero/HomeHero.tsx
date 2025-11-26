import { Button } from "@/components/ui/button";
import { Hand, TrendingUp, Star } from "lucide-react";
import heroImage from "@/assets/hero-businessman.jpg";
import Stats from "@/components/Stats";
import { Link } from "react-router-dom";
import FloatingCards from "../FloatingCards";
import PhoneButton from "../PhoneButton";
import CtaButtons from "../CtaButtons";

const HomeHero = () => {

  return (
    <section className="relative bg-[radial-gradient(at_top_center,_#101e8a_0%,_#010630_65%)] text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:py-56 py-48">
        <div className="grid lg:grid-cols-2 lg:gap-32 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Hand className="w-5 h-5" />
              <span className="text-sm font-medium">Hi, Welcome!</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.25em!important] ">
              Innovate for a better business future
            </h1>

            {/* Description */}
            <p className="text-lg text-primary-foreground/80 max-w-xl">
              Empowering your business to track productivity, enhance collaboration, and achieve measurable results with smarter workforce management.            </p>

           <CtaButtons containerClass = "pb-14 border-b border-white/10" />

            {/* Stats */}
            <Stats titleColor="text-forground" />

          </div>

          {/* Right Hero Image */}
          <div className="relative">
            <div className="relative flex justify-end">
              <img src={heroImage} alt="Professional businessman" className="rounded-3xl md:w-auto xs:w-full h-auto shadow-2xl" />
              {/* <FloatingCards /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Tilted Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
    </section>
  );
};

export default HomeHero;
