import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge"; // Assuming Badge exists or create a simple styled div
import { Check, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from '@/components/ui/separator';
import businesswoman from "@/assets/business-woman.png";
import { Link } from "react-router-dom";

// Placeholder image URLs - replace with actual paths or imports
const womanImageUrl = "https://placehold.co/600x750/e0e0e0/grey?text=Businesswoman";
const avatarImageUrl = "https://placehold.co/40x40/cccccc/grey?text=SA";
const avatarFallback = "SC";

const WhyUS = () => {
    const features = [
        "Business Consultation",
        "Salary Scheduling",
        "Earning Reports",
        "Archive Management",
        "Digital Solutions",
        "World-class support",
    ];

    const summaryItems = [
        { label: "Invoice Sent", value: "34%", color: "bg-blue-500" },
        { label: "Paid Invoice", value: "70%", color: "bg-orange-500" },
    ];

    return (
        <section className="relative sm:py-20 py-4 pb-20 bg-background overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                    {/* Left Column (Image and Overlays) */}
                    <div className="relative order-last lg:order-first">
                        <img
                            src={businesswoman}
                            alt="Businesswoman working"
                            className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[750px]"
                        />

                        {/* Sale Report Card Overlay */}
                        <div className="absolute top-2/4 -left-8 sm:-left-12 bg-card p-4 rounded-lg shadow-xl w-48 sm:w-60 border animate-fade-in animation-delay-200">
                            <div className="flex items-center gap-2 mb-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src={avatarImageUrl} alt="Stephan Chen" />
                                    <AvatarFallback className="text-xs">{avatarFallback}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-xs font-semibold text-foreground">Stephan Chen</p>
                                    <p className="text-xs text-muted-foreground">Insight</p>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground mb-3">You have made $325.862 this week!</p>
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-xs font-semibold text-foreground">Sale Report</p>
                                <p className="text-xs text-muted-foreground">Mar 21-Apr 22</p>
                            </div>
                            {/* Placeholder Bar Chart */}
                            <div className="flex h-10 items-end gap-1">
                                {[...Array(7)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-1/6 bg-blue-200 rounded-sm"
                                        style={{ height: `${Math.random() * 80 + 20}%` }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Summary Card Overlay */}
                        <div className="sm:block hidden absolute bottom-4 sm:bottom-8 right-0 sm:-right-8 bg-card p-4 rounded-lg shadow-xl w-48 sm:w-56 border animate-fade-in animation-delay-400">
                            <p className="text-sm font-semibold text-foreground mb-3">Summary</p>
                            <div className="flex items-center gap-4">
                                {/* Placeholder Pie Chart */}
                                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 via-orange-500 to-yellow-500 flex-shrink-0"></div>
                                <div className="space-y-1">
                                    {summaryItems.map((item) => (
                                        <div key={item.label} className="flex items-center gap-1.5 text-xs">
                                            <span className={cn("w-2 h-2 rounded-full", item.color)}></span>
                                            <span className="text-muted-foreground">{item.label}</span>
                                            <span className="font-medium text-foreground ml-auto">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Simple decorative circle */}
                        <div className="absolute top-8 -right-4 w-10 h-10 rounded-full bg-green-900 text-white flex items-center justify-center shadow-lg">
                            <Check size={20} />
                        </div>
                    </div>

                    {/* Right Column (Text Content) */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <Badge variant="outline" className="bg-red-200 text-red-700 border-ted-200 text-xs">New</Badge>
                            <span className="text-sm text-muted-foreground">Monitoring is now available in Beta for Enterprise.</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
                            Driving success through expertise and passion
                        </h2>
                        <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        {/* Bullet Points */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-blue-700" />
                                    </span>
                                    <span className="text-sm font-medium text-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Separator */}
                        <Separator className="my-8" />

                        {/* CTA Section */}
                        <div className="flex flex-wrap items-center gap-6">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-3 h-auto text-base font-semibold"
                >
                  <Link to="/about">About Us</Link>
                </Button>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10 border-2 border-muted">
                                    <AvatarImage src={avatarImageUrl} alt="Support Agent" />
                                    <AvatarFallback>{avatarFallback.substring(0, 1)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-xs text-muted-foreground">Or Call Us</p>
                                    <p className="text-sm font-semibold text-foreground">+62 111-444-90</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUS;