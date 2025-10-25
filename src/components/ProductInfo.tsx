import { Button } from '@/components/ui/button';
import { HandHeart } from "lucide-react";
import team from "@/assets/happy-team.jpg";
import { Link } from 'react-router-dom';

const ProductInfo = () => {

    return (
        <section className="relative py-48 bg-[radial-gradient(at_top_center,_#101e8a_0%,_#010630_65%)] text-primary-foreground overflow-hidden">
            {/* Tilted Top */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(100% 0, 100% 0, 0 0, 0 100%)' }}></div>

            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    {/* Right Column (Description) */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 mb-8 rounded-full border border-white/20">
                            <HandHeart className="w-5 h-5" />
                            <span className="text-sm font-medium">Why WorkLytics</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-semibold mb-8 leading-tight">
                            Smarter Workforce Management with WorkLtyics
                        </h2>
                        <h4 className="font-semibold mb-2 text-lg">
                            Streamline your operations, boost productivity
                        </h4>
                        <p className="text-muted-foreground  mb-8">
                            WorkLtyics software is designed to help organizations optimize workforce performance through advanced analytics, real-time insights, and automation.
                            Track productivity, improve collaboration, and make data-driven decisions — all from a single, easy-to-use platform built to scale with your business.
                        </p>

                        <Button
                            asChild
                            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-3 h-auto text-base font-semibold"
                        >
                            <Link to="/contact">Request a Demo</Link>
                        </Button>
                    </div>

                    {/* Left Column (Image) */}
                    <div>
                        <div className="relative rounded-lg overflow-hidden group">
                            <img
                                src={team}
                                alt="WorkLytics Team"
                                className="w-full h-auto object-cover aspect-[3/2]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tilted Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>

        </section>)
}

export default ProductInfo