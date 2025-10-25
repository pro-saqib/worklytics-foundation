import { Button } from '@/components/ui/button';
import productImage from '@/assets/worklytics-sc.jpg';
import { Trophy } from "lucide-react";
import { Link } from 'react-router-dom';


const ProductSection = () => {

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
                            <Trophy className="w-5 h-5" />
                            <span className="text-sm font-medium">#1 Best HR Software</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-semibold mb-8 leading-[1.25em!important]">
                            One Easy-to-Use Platform for Everything HR
                        </h2>
                        <p className="text-muted-foreground mb-12">
                            Manage your entire workforce with ease. WorkLytics brings together the tools you need to hire, manage, and empower employees — helping your HR team work smarter, not harder.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <Button
                                asChild
                                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-3 h-auto text-base font-semibold"
                            >
                                <Link to="/contact">Contact Us</Link>
                            </Button>
                            <Button variant="ghost" className="text-white border border-white/50 hover:bg-white/10 rounded-full px-6 py-3 h-auto text-base font-semibold flex items-center gap-2">Start Free Trial</Button>
                        </div>
                    </div>

                    {/* Right Column (Core Values) */}
                    <div>
                        <img
                            src={productImage}
                            alt="HRSprout platform screenshot"
                            className="block mx-auto rounded-lg shadow-xl w-auto" />
                    </div>
                </div>
            </div>

            {/* Tilted Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>

        </section>)
}

export default ProductSection;