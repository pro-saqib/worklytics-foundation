import Layout from "@/components/Layout";
import PagesHero from "@/components/hero/PagesHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import { Zap, Check } from 'lucide-react'; 
import digitalTransformationImage from "@/assets/services/digital-transformation.jpg"; 

const DigitalTransformation = () => {
    const serviceTitle = "Digital Transformation";

    // Text content from Digital Transformation.txt
    const heroDescription = "We drive digital transformation that reshapes how your business operates, delivers value, and competes. At Worklytics, we combine strategy, technology, and innovation to build connected, intelligent, and scalable ecosystems that fuel long-term digital growth.";
    const section1Paragraph = "Digital transformation is not just about adopting new technologies—it’s about unlocking smarter ways of working. Worklytics helps you reimagine processes, enhance customer experiences, and implement digital-first solutions that generate measurable business value. Our approach focuses on strategic alignment, innovation, and continuous evolution guided by real outcomes.";
    const gainList = [
        "Insight-Led Business Evolution",
        "Enhanced Operational Efficiency",
        "Customer-Centric Innovation",
        "Data-Driven Decision Making",
        "Future-Ready Digital Frameworks",
    ];
    const section2Paragraph = "We follow a structured, collaborative journey to ensure every phase drives value and aligns with your business objectives. Assess – Understand current challenges, opportunities, and digital readiness. Ideate – Co-create innovative solutions with measurable impact. Validate – Test, refine, and align technology with business outcomes. Accelerate – Execute with agility and scale transformation with confidence.";

    return (
        <Layout>
            <PagesHero
                icon={Zap} 
                badgeText="Services"
                heading={serviceTitle}
                description={heroDescription} 
            />

            {/* Main Content Section with Sidebar */}
            <section className="py-16 bg-background">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-[1fr,1fr,1fr,1fr] gap-12 lg:gap-16 items-start">

                        {/* Left Column (Sidebar) */}
                        <div className="order-last lg:order-first lg:sticky lg:top-[calc(5rem+2rem)]"> {/* Adjust top value as needed */}
                            <ServiceSidebar />
                        </div>

                        {/* Right Column (Main Content) */}
                        <div className="lg:col-span-3 order-first lg:order-last space-y-10">

                            {/* Optional Image */}
                            <img
                                src={digitalTransformationImage}
                                alt={serviceTitle}
                                className="w-full h-auto max-h-[550px] object-cover rounded-lg mb-8 shadow-md"
                            />

                            {/* Section 1 */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                                    Transform Today, Lead Tomorrow with a Value-Driven Approach
                                </h2>
                                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                                    <p>
                                        {section1Paragraph}
                                    </p>
                                </div>
                            </div>

                            {/* What You Gain Section */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                                    What Our Digital Transformation Enables
                                </h2>
                                <ul className="list-none space-y-3 mt-4 mb-8">
                                    {gainList.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                                                <Check className="w-4 h-4 text-primary" />
                                            </span>
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                                    Our Guided Transformation Journey
                                </h3>
                                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                                    <p>
                                        {section2Paragraph}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default DigitalTransformation;