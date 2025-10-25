import { LucideIcon } from "lucide-react";

interface HeroSectionProps {
    icon: LucideIcon;
    badgeText: string;
    heading: string;
    description: string;
}

const PagesHero2 = ({ icon: Icon, badgeText, heading, description }: HeroSectionProps) => {
    return (
        <section className="relative bg-[radial-gradient(at_top_center,_#101e8a_0%,_#010630_65%)] text-primary-foreground overflow-hidden">
            <div className="container mx-auto px-4 lg:py-56 py-48">
                <div className="grid gap-8 lg:mb-8 items-center max-w-4xl mx-auto sm:text-center">

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
                        <p className="text-base md:text-lg text-primary-foreground/80">{description}</p>
                    </div>
                </div>
            </div>

            {/* Tilted Bottom Shape */}
            <div
                className="absolute bottom-0 left-0 right-0 h-24 bg-background"
                style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
            ></div>
        </section>
    );
};

export default PagesHero2;
