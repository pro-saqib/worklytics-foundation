import Layout from "@/components/Layout";
import PagesHero from "@/components/hero/PagesHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import { BriefcaseBusiness, Check } from 'lucide-react';
import managedITServicesImage from "@/assets/services/managed-it-services.jpg"; 

const ManagedITServices = () => {
    const serviceTitle = "Managed IT Services";

    // Text content from Managed IT Services.txt
    const heroDescription = "We manage and optimise your IT infrastructure for performance, security, and reliability. With Worklytics Managed IT Services, you get 24/7 support, proactive monitoring, and scalable solutions that keep your business running smoothly and efficiently.";
    const section1Paragraph = "Managing IT shouldn’t slow your business down. Worklytics provides end-to-end managed IT services that ensure your systems stay secure, available, and future-ready. We handle maintenance, monitoring, troubleshooting, and optimisation—so you can focus on strategy, innovation, and growth.";
    const gainList = [
        "24/7 Infrastructure Monitoring",
        "Proactive Risk Prevention",
        "Optimised System Performance",
        "Secure IT Governance",
        "Scalable Support Operations",
    ];
    const section2Paragraph = "Our expert team ensures seamless IT operations, reduces downtime, improves response times, and keeps your technology aligned with evolving business needs. With Worklytics, you gain a trusted partner for long-term IT reliability.";
    // CTA paragraph is excluded as requested

    return (
        <Layout>
            <PagesHero
                icon={BriefcaseBusiness} 
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
                                src={managedITServicesImage} 
                                alt={serviceTitle}
                                className="w-full h-auto max-h-[550px] object-cover rounded-lg mb-8 shadow-md"
                            />

                            {/* Section 1 */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                                    Reliable IT Management That Drives Business Continuity
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
                                    What Our Managed IT Services Deliver
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
                                    Future-Ready IT, Backed by Expert Support
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

export default ManagedITServices;