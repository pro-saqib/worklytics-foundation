import Layout from "@/components/Layout";
import PagesHero from "@/components/hero/PagesHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import { RefreshCw, Check } from 'lucide-react'; // Using RefreshCw icon for this service
import { cn } from "@/lib/utils";
import cloudTransformationsImage from "@/assets/services/cloud-transformations.jpg"; // Placeholder image path - MAKE SURE THIS IMAGE EXISTS

const CloudTransformations = () => {
    const serviceTitle = "Cloud Transformations";

    // Text content from Cloud Transformations.txt
    const heroDescription = "We transform your business through strategic cloud adoption, optimisation, and innovation. Worklytics enables you to scale smarter, enhance security, and accelerate digital growth with a cloud-first approach that prepares your organisation for the future."; // 
    const section1Paragraph = "Cloud transformation is not just a migration—it’s a shift in how your business operates, scales, and delivers value. At Worklytics, we help you redesign infrastructure, modernise applications, optimise performance, and unlock new possibilities powered by agility, automation, and AI-ready cloud ecosystems."; // 
    const gainList = [
        "Strategic Cloud Adoption", // 
        "Modernised Infrastructure Evolution", // 
        "Optimised Cost Efficiency", // 
        "AI-Driven Cloud Enablement", // 
        "Future-Ready Business Agility", // 
    ];
    const section2Paragraph = "We guide your entire transformation journey—from assessment and migration to continuous optimisation—ensuring you gain full value from the cloud with improved scalability, faster go-to-market capability, and resilient digital operations.";
    // CTA paragraph is excluded as requested

    return (
        <Layout>
            <PagesHero
                icon={RefreshCw} // Updated Icon
                badgeText="Services"
                heading={serviceTitle}
                description={heroDescription} // Updated hero description
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
                                src={cloudTransformationsImage} // Updated image source
                                alt={serviceTitle}
                                className="w-full h-auto max-h-[550px] object-cover rounded-lg mb-8 shadow-md"
                            />

                            {/* Section 1 */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                                    Transform Your Business with a Cloud-First Strategy
                                </h2> {/* [cite: 3] */}
                                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                                    <p>
                                        {section1Paragraph}
                                    </p>
                                </div>
                            </div>

                            {/* What You Gain Section */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                                    What Our Cloud Transformation Delivers
                                </h2> {/*  */}
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
                                    From Vision to Execution, Built for Competitive Advantage
                                </h3>
                                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                                    <p>
                                        {section2Paragraph}
                                    </p>
                                </div>
                            </div>

                            {/* CTA Section Removed */}

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CloudTransformations;