import Layout from "@/components/Layout";
import PagesHero from "@/components/hero/PagesHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import { Cloud, Check } from 'lucide-react'; // Using Cloud icon for this service
import { cn } from "@/lib/utils";
import cloudServicesImage from "@/assets/services/cloud-services.jpg"; // Placeholder image path - MAKE SURE THIS IMAGE EXISTS

const CloudServices = () => {
    const serviceTitle = "Cloud Services (Azure, AWS, GCP)";

    // Text content from Cloud Services.txt
    const heroDescription = "We help businesses transition to secure, scalable, and high-performing cloud environments that drive agility and innovation. With Worklytics Cloud Services, you gain faster deployment, improved efficiency, and a future-proof infrastructure designed for growth.";
    const section1Paragraph = "Cloud adoption is more than migration — it’s a strategic shift that enables flexibility, cost efficiency, and digital acceleration. Worklytics delivers tailored cloud strategies, seamless migrations, and managed cloud operations that empower businesses to scale faster, optimise resources, and respond rapidly to changing demands.";
    const gainList = [
        "Scalable Cloud Infrastructure",
        "Secure Data Management",
        "Optimised Cost Efficiency",
        "Accelerated Deployment Speed",
        "Continuous Performance Monitoring",
    ];
    const section2Paragraph = "Whether you’re moving to the cloud, optimising existing workloads, or building cloud-native applications, Worklytics ensures a seamless transition supported by best-in-class reliability, security, and ongoing optimisation.";
    // CTA paragraph is excluded as requested

    return (
        <Layout>
            <PagesHero
                icon={Cloud} // Updated Icon
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
                                src={cloudServicesImage} // Updated image source
                                alt={serviceTitle}
                                className="w-full h-auto max-h-[550px] object-cover rounded-lg mb-8 shadow-md"
                            />

                            {/* Section 1 */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                                    Unlock Agility and Innovation with Cloud Solutions
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
                                    What Our Cloud Services Deliver
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
                                    Designed for Performance, Powered by Reliability
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

export default CloudServices;