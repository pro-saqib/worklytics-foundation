import { Button } from '@/components/ui/button';
import DetailsCard from "./DetailsCard";
import {
    Handshake,
    Globe,
    Gem,
    HandHeart,
} from "lucide-react";
import { Link } from 'react-router-dom';

const CompanyValues = () => {

    const valuesData = [
        {
            Icon: Handshake,
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600",
            title: "Commitment",
            text: "We are always committed to improving the quality that can bring success and satisfaction to your business.",
        },
        {
            Icon: Globe,
            bgColor: "bg-orange-100",
            iconColor: "text-orange-600",
            title: "Accessibility",
            text: "Always provide business-specific accessibility that can be used by people with various abilities and disabilities.",
        },
        {
            Icon: Gem,
            bgColor: "bg-green-100",
            iconColor: "text-green-600",
            title: "Openness",
            text: "Openness will drive growth, innovation, collaboration, strong relationships in personal and professional contexts.",
        },
    ];


    return (
        <section className="relative py-48 bg-[radial-gradient(at_top_center,_#101e8a_0%,_#010630_65%)] text-primary-foreground overflow-hidden">
            {/* Tilted Top */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(100% 0, 100% 0, 0 0, 0 100%)' }}></div>
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                    {/* Left Column (Description) */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 mb-8 rounded-full border border-white/20">
                            <HandHeart className="w-5 h-5" />
                            <span className="text-sm font-medium">Core values</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-semibold mb-8 leading-tight">
                            The values that shape everything better
                        </h2>
                        <h4 className="font-semibold mb-2 text-lg">
                            Unlock your business potential?
                        </h4>
                        <p className="text-muted-foreground  mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua utenim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua utenim ad minim veniam.
                        </p>

                        <Button
                            asChild
                            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-3 h-auto text-base font-semibold"
                        >
                            <Link to="/contact">Contact Us</Link>
                        </Button>
                    </div>

                    {/* Right Column (Core Values) */}
                    <div>
                        <DetailsCard details={valuesData} gridClassName="gap-8" spacing="p-8" />
                    </div>
                </div>
            </div>

            {/* Tilted Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>

        </section>)
}

export default CompanyValues