import { Button } from "@/components/ui/button";
import { Play, Hand, TrendingUp, Star } from "lucide-react";
import heroImage from "@/assets/hero-businessman.jpg";
import Stats from "@/components/Stats";
import { Link } from "react-router-dom";

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
              <span className="text-sm font-medium">Hi, Let's work together</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-semibold leading-[1.25em!important] ">
              Innovate for a better business future
            </h1>

            {/* Description */}
            <p className="text-lg text-primary-foreground/70 max-w-xl">
              Helping you build brand awareness, build credibility and connect with customers, stakeholders and potential employees.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pb-14 border-b border-white/20">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-3 h-auto text-base font-semibold"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full px-6 py-3 h-auto text-base font-semibold flex items-center gap-2">
                <Play className="w-5 h-5 fill-white" />
                Watch Video
              </Button>
            </div>

          {/* Stats */}
          <Stats valueColor="text-forground" />
             
          </div>

          {/* Right Hero Image */}
          <div className="relative">
            <div className="relative flex justify-end">
              <img src={heroImage} alt="Professional businessman" className="rounded-3xl md:w-auto xs:w-full h-auto shadow-2xl" />

              {/* Floating Cards */}
              <div className="absolute top-8 md:-left-12 -left-8 bg-white rounded-2xl p-4 shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-foreground">Sale Report</span>
                </div>
                <div className="text-xs text-muted-foreground mb-2">Mar 21-Apr 22</div>
                <div className="h-12 w-32 bg-gradient-to-r from-accent/20 to-accent/5 rounded-lg"></div>
              </div>

              <div className="absolute top-1/3 -right-8 bg-white rounded-2xl p-4 shadow-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-xs text-muted-foreground mb-1">Total Visitor</div>
                <div className="text-2xl font-bold text-foreground mb-1">$23,987</div>
                <div className="flex items-center gap-1 text-green-600 text-xs">
                  <TrendingUp className="w-3 h-3" />
                  <span>10%</span>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-2">Group Members</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-accent"></div>
                      <div className="text-xs text-foreground">+$90.00</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-highlight"></div>
                      <div className="text-xs text-foreground">+$90.00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 md:-left-12 left-[-40px] bg-white rounded-2xl px-5 py-3 shadow-xl animate-fade-in flex items-center gap-3" style={{ animationDelay: '0.6s' }}>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-accent border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-highlight border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-accent/60 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-muted border-2 border-white"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">2195+ Ratings</div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-highlight text-highlight" />)}
                  </div>
                </div>
              </div>
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
