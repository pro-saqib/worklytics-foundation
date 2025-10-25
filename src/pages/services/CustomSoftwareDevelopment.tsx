import Layout from "@/components/Layout";
import { Sparkle } from "lucide-react";
import PagesHero from "@/components/hero/PagesHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import team from "@/assets/happy-team.jpg";

const CustomSoftwareDevelopment = () => {

    return (
        <Layout>
            <PagesHero
                icon={Sparkle}
                badgeText="Custom Software Development"
                heading="Custom Software Development"
                description="We provide very affordable prices for you. This will allow you to make good use of our services and grow your business. So that the business, or service you work for can earn more and make it accessible to many people."
            />
            {/* Main Content Section with Sidebar */}
            <section className="py-20 bg-background">
                <div className="container  px-4 mx-auto">
                    <div className="grid md:grid-cols-[1fr,1fr,1fr,1fr] gap-12 lg:gap-16 items-start">

                        {/* Left Column (Sidebar) */}
                        <div className="order-last lg:order-first lg:sticky lg:top-[calc(5rem+1.5rem)]">
                            <ServiceSidebar />
                        </div>

                        {/* Right Column (Main Content) */}
                        <div className="lg:col-span-3 order-first lg:order-last">

                            <img
                                src={team}
                                alt="WorkLytics Team"
                                className="w-full h-auto object-cover aspect-[3/2] rounded-lg overflow-hidden mb-12"
                            />

                            {/* Placeholder Content */}
                            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default CustomSoftwareDevelopment