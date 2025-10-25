import { PlayCircle, CheckCircle, Target } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Stats from '@/components/Stats';
import team from "@/assets/happy-team.jpg";

const AboutCompany = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-start">
                    {/* Left Column */}
                    <div>
                        {/* Image Container */}
                        <div className="relative rounded-lg overflow-hidden mb-12 group">
                            <img
                                src={team}
                                alt="WorkLytics Team"
                                className="w-full h-auto object-cover aspect-[3/2]"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                                <PlayCircle
                                    className="w-16 h-16 text-white cursor-pointer hover:scale-110 transition-transform"
                                    fill="hsl(var(--accent))"
                                    strokeWidth={1}
                                />
                            </div>
                        </div>

                        {/* Stats */}
                        <Stats valueColor="text-blue-foreground" labelColor="text-muted-primary" borderColor="border-primary/10" />

                    </div>

                    {/* Right Column */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
                            Get closer with <span className="text-accent">WorkLytics</span>
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            WorkLytics is a company that helps businesses grow worldwide. It also
                            serves as a central hub for information about the business, including its
                            products and services, mission and vision, history, and culture. The company
                            is designed to present a professional and trustworthy corporate image and to
                            communicate important information to stakeholders, including customers,
                            employees, investors and partners.
                        </p>

                        {/* Vision/Mission Grid */}
                        <div className="grid sm:grid-cols-2 gap-8 lg:gap-16 mt-8">
                            {/* Vision */}
                            <div className="flex flex-col items-start gap-4">
                                <div className="flex items-center gap-3">

                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="text-purple-600" size={20} />
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-2">Our Vision</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Create a world where everyone has access to business & the
                                    same opportunity to succeed.
                                </p>
                            </div>
                            {/* Mission */}
                            <div className="flex flex-col items-start gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Target className="text-orange-600" size={20} />
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Provide innovative and inclusive tools to all individuals, regardless
                                    of their background.
                                </p>
                            </div>
                        </div>

                        {/* Separator */}
                        <Separator className="my-8" />

                        {/* Founder Info */}
                        <div>
                            <p className="font-semibold text-foreground">Cedric Matthews</p>
                            <p className="text-sm text-muted-foreground">CEO & Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;