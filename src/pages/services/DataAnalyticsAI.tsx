import Layout from "@/components/Layout";
import PagesHero from "@/components/hero/PagesHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import { BrainCircuit, Check } from 'lucide-react'; // Using BrainCircuit icon for AI/Analytics
import { cn } from "@/lib/utils";
import dataAnalyticsImage from "@/assets/services/data-analytics-ai.jpg"; // Placeholder image path - MAKE SURE THIS IMAGE EXISTS

const DataAnalyticsAI = () => {
    const serviceTitle = "Data Analytics & AI";

    // Text content from Data Analytics AI.txt
    const heroDescription = "We empower businesses with advanced data analytics and AI solutions to unlock hidden insights, automate workflows, and drive strategic growth. At Worklytics, we integrate machine learning, predictive modeling, and ethical AI to deliver scalable, data-driven intelligence that enhances decision-making, boosts efficiency, and ensures sustainable innovation in competitive markets.";
    const section1Paragraph = "Data analytics and AI transform raw data into powerful assets for business success. Worklytics guides you to harness big data, implement AI algorithms, and achieve measurable outcomes like improved ROI and customer satisfaction. Our approach emphasizes ethical practices, real-time analytics, and customized AI strategies for long-term competitive advantage.";
    const gainList = [
        "Insight-Led Decision Making",
        "Boosted Operational Efficiency",
        "Customer-Centric Automation",
        "Predictive Business Growth",
        "Ethical and Sustainable AI Frameworks",
    ];
    // Note: The structure in the .txt file under H3 is different (Assess, Ideate, etc.).
    // Adapting the template means using a standard paragraph here instead of that specific list format.
    const section2Paragraph = "We provide a structured, collaborative process to integrate data analytics and AI, ensuring alignment with your objectives and delivering value at every stage. From assessing data sources and identifying AI opportunities to developing custom models (including NLP and computer vision), validating solutions for ethics and performance, and deploying accelerators on platforms like AWS or Azure for scalable innovation.";
    // CTA paragraph is excluded as requested

    return (
        <Layout>
            <PagesHero
                icon={BrainCircuit} // Updated Icon
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
                                src={dataAnalyticsImage} // Updated image source
                                alt={serviceTitle}
                                className="w-full h-auto max-h-[550px] object-cover rounded-lg mb-8 shadow-md"
                            />

                            {/* Section 1 */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                                    Unlock Insights Today, Innovate Tomorrow with Data-Driven AI
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
                                    What Our Data Analytics AI Enables
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
                                    Our Guided Data Analytics AI Journey
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

export default DataAnalyticsAI;