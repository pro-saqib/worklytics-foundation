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
            title: "Partnership",
            text: "We believe in building long-term partnerships based on trust, transparency, and shared success. Every client relationship is a collaboration aimed at creating measurable business impact.",
        },
        {
            Icon: Globe,
            bgColor: "bg-orange-100",
            iconColor: "text-orange-600",
            title: "Innovation",
            text: "We embrace technology as a force for progress, constantly exploring new ideas and solutions that help businesses stay ahead in an ever-evolving digital landscape.",
        },
        {
            Icon: Gem,
            bgColor: "bg-green-100",
            iconColor: "text-green-600",
            title: "Integrity",
            text: "Integrity defines how we work — from the way we communicate to the solutions we deliver. We hold ourselves accountable to the highest ethical and professional standards.",
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
                            The values that define who we are
                        </h2>
                        <h4 className="font-semibold mb-2 text-lg">
                            Empowering businesses through technology and trust
                        </h4>
                        <p className="text-muted-foreground mb-8">
                            At WorkLtyics, our values guide every decision we make and every solution we build.
                            We combine innovation, integrity, and collaboration to deliver IT consultancy services that truly make a difference — helping businesses grow smarter, faster, and stronger.
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