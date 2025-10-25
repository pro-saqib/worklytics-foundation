import { cn } from '@/lib/utils';

// Data for the process steps based on the image
const processSteps = [
    {
        number: '01',
        title: 'Select Your Solution',
        description: 'Explore our range of IT consultancy services and choose the one that best fits your business goals and technology needs.',
        borderColorClass: 'border-blue-500',
        bgColorClass: 'bg-blue-100/15',
    },
    {
        number: '02',
        title: 'Schedule Consultation',
        description: 'Book a meeting with our experts to discuss your requirements, objectives, and the best approach to achieve them.',
        borderColorClass: 'border-orange-500',
        bgColorClass: 'bg-orange-100/15',
    },
    {
        number: '03',
        title: 'Plan & Execute',
        description: 'We design a tailored strategy and implement solutions efficiently, ensuring minimal disruption and maximum impact for your business.',
        borderColorClass: 'border-purple-500',
        bgColorClass: 'bg-purple-100/15',
    },
    {
        number: '04',
        title: 'Achieve Results',
        description: 'Measure the outcomes, optimize processes, and enjoy the tangible benefits of smarter, technology-driven business solutions.',
        borderColorClass: 'border-green-500',
        bgColorClass: 'bg-green-100/15',
    },
];


const OurProcess = () => {
    return (
        <section className="relative py-48 bg-[radial-gradient(at_top_center,_#101e8a_0%,_#010630_65%)] text-primary-foreground overflow-hidden">
            {/* Tilted Top */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(100% 0, 100% 0, 0 0, 0 100%)' }}></div>

            <div className="container mx-auto px-4">
                {/* Header Content */}
                <div className="grid gap-8 mb-20 items-center max-w-4xl mx-auto md:text-center text-left">
                    <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
                        Our simple 4 step process
                    </h2>
                    <p className="text-primary-foreground/70 max-w-4xl mx-auto">
                        At WorkLtyics, we follow a streamlined process to ensure every project delivers measurable impact. From understanding your unique business needs to implementing tailored IT solutions, our approach combines strategy, technology, and expertise to drive results efficiently and effectively. Here’s how we make it happen:
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12">
                    {processSteps.map((step) => (
                        <div key={step.number}>
                            {/* Number and Line */}
                            <div className="flex items-center gap-10 mb-6">
                                <div
                                    className={cn(
                                        'w-14 h-14 rounded-full flex items-center justify-center border font-semibold flex-shrink-0',
                                        step.borderColorClass,
                                        step.bgColorClass,
                                    )}
                                >
                                    {step.number}
                                </div>
                                <div className="h-px flex-grow bg-primary-foreground/30"></div>
                            </div>

                            {/* Title */}
                            <h4 className="text-xl font-semibold mb-2 text-primary-foreground">
                                {step.title}
                            </h4>

                            {/* Description */}
                            <p className="text-base text-primary-foreground/70">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tilted Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>

        </section>
    );
};

export default OurProcess;