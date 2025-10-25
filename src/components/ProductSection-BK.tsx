import { Trophy } from "lucide-react";
import { Button } from '@/components/ui/button';
import productImage from '@/assets/worklytics-sc.jpg';

const ProductSection = () => {
    return (
        <section className="relative py-48 bg-[radial-gradient(at_top_center,_#101e8a_0%,_#010630_65%)] text-primary-foreground overflow-visible">
            {/* Tilted Top */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(100% 0, 100% 0, 0 0, 0 100%)' }}></div>

            <div className="container px-4 mx-auto sm:text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 mb-8 rounded-full border border-white/20">
                    <Trophy className="w-5 h-5" />
                    <span className="text-sm font-medium">#1 Best HR Software</span>
                </div>
                {/* Content */}
                <div className="grid gap-8 mb-20 items-center max-w-4xl mx-auto md:text-center text-left">

                    <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
                        One Easy-to-Use Platform for Everything HR
                    </h2>
                    <p className="text-primary-foreground/70 max-w-4xl mx-auto mb-6">
                        Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
                        accusantium doloremque laudantium elit.Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
                        accusantium doloremque laudantium elit.
                    </p>
                    {/* Buttons */}
                    <div className="flex sm:justify-center gap-4">
                        <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-3 h-auto text-base font-semibold">Get a Demo</Button>
                        <Button variant="ghost" className="text-white border border-white/50 hover:bg-white/10 rounded-full px-6 py-3 h-auto text-base font-semibold flex items-center gap-2">Start Free Trial</Button>
                    </div>
                </div>

                {/* Solution Image */}
                <div className="relative z-10">
                    <img
                        src={productImage}
                        alt="HRSprout platform screenshot"
                        className="block mx-auto rounded-lg shadow-xl w-auto" />
                </div>

            </div>

            {/* Tilted Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>

        </section>
    )
}

export default ProductSection