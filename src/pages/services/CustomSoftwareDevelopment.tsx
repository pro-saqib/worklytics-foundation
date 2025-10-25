import Layout from "@/components/Layout";
import PagesHero from "@/components/hero/PagesHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import { Scale, Check } from 'lucide-react'; // Using Scale icon for this service
import { cn } from "@/lib/utils";
import customSoftwareImage from "@/assets/services/custom-software-development.jpg"; // Placeholder image path - MAKE SURE THIS IMAGE EXISTS

const CustomSoftwareDevelopment = () => {
    const serviceTitle = "Custom Software Development";

    // Text content from Custom Software Development.txt
    const heroDescription = "We design and develop custom software solutions tailored to your business goals. With Worklytics, you get scalable, secure, and high-performing applications that streamline operations, enhance customer experience, and accelerate digital success."; // 
    const section1Paragraph = "Every business is unique—and your software should be too. Worklytics creates tailored digital solutions that align with your workflows, solve real challenges, and unlock long-term efficiency. From concept to deployment, we deliver intuitive, future-ready applications built for performance, growth, and user satisfaction."; // 
    const gainList = [
        "Business-Aligned Architecture", // 
        "Scalable Application Design", // 
        "Secure Development Standards", // 
        "Seamless System Integration", // 
        "User-Centric Experience", // 
    ];
    const section2Paragraph = "We follow a strategic development lifecycle that ensures rapid delivery, continuous optimisation, and measurable impact. Whether you need a web app, enterprise platform, or SaaS product, Worklytics delivers software built to grow with your business."; // 
    // CTA paragraph is excluded as requested

    return (
        <Layout>
            <PagesHero
                icon={Scale} // Updated Icon
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
                                src={customSoftwareImage} // Updated image source
                                alt={serviceTitle}
                                className="w-full h-auto max-h-[550px] object-cover rounded-lg mb-8 shadow-md"
                            />

                            {/* Section 1 */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                                    Build Software That Works the Way Your Business Does
                                </h2> {/* [cite: 35] */}
                                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                                    <p>
                                        {section1Paragraph}
                                    </p>
                                </div>
                            </div>

                            {/* What You Gain Section */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                                    What Our Software Development Delivers
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
                                    From Idea to Impact, Built for Real Results
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

export default CustomSoftwareDevelopment;