import {
  Layers,
  Cloud,
  RefreshCw,
  Settings,
  ServerCog,
  Cpu,
  BarChart4,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const servicesData = [
  {
    icon: Layers,
    title: "Application Modernisation and Integration",
    slug: "application-modernisation",
    description:
      "Upgrade legacy systems with modern architectures and seamless integrations to boost agility and performance.",
    iconBgColor: "bg-blue-100",
    iconTextColor: "text-blue-600",
  },
  {
    icon: Cloud,
    title: "Cloud Services (Azure, AWS, GCP)",
    slug: "cloud-services",
    description:
      "Deliver secure, scalable, and cost-effective cloud solutions tailored to your business needs.",
    iconBgColor: "bg-purple-100",
    iconTextColor: "text-purple-600",
  },
  {
    icon: RefreshCw,
    title: "Cloud Transformations",
    slug: "cloud-transformations",
    description:
      "Migrate, optimize, and innovate with end-to-end cloud transformation strategies.",
    iconBgColor: "bg-orange-100",
    iconTextColor: "text-orange-600",
  },
  {
    icon: Settings,
    title: "Custom Software Development",
    slug: "custom-software-development",
    description:
      "Design and develop tailor-made software that aligns perfectly with your goals and workflows.",
    iconBgColor: "bg-green-100",
    iconTextColor: "text-green-600",
  },
  {
    icon: ServerCog,
    title: "Managed IT Services",
    slug: "managed-it-services",
    description:
      "Ensure smooth operations with 24/7 managed IT support and proactive infrastructure management.",
    iconBgColor: "bg-teal-100",
    iconTextColor: "text-teal-600",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    slug: "digital-transformation",
    description:
      "Transform your business processes with intelligent digital solutions and automation tools.",
    iconBgColor: "bg-pink-100",
    iconTextColor: "text-pink-600",
  },
  {
    icon: BarChart4,
    title: "Data Analytics and AI",
    slug: "data-analytics-ai",
    description:
      "Leverage data-driven insights and AI-powered analytics to accelerate decision-making and growth.",
    iconBgColor: "bg-yellow-100",
    iconTextColor: "text-yellow-600",
  },
];

const Services2 = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Area */}
        <div className="grid md:grid-cols-2 md:gap-32 gap-8 mb-16 items-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-[1.25em!important]">
            Discover the power of our superior services
          </h2>
          <p className="text-muted-foreground">
            Explore our diverse range of IT services designed to modernize your
            business operations, enhance scalability, and deliver measurable
            impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={`/services/${service.slug}`}
                className="bg-card rounded-lg p-10 pb-14 border border-border relative overflow-hidden group transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-blue-500 hover:shadow-sm block"
              >
                {/* Icon Container */}
                <div
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${service.iconBgColor} group-hover:translate-y-[-100px] group-hover:opacity-0`}
                >
                  <Icon
                    className={`size-6 transition-all duration-500 ease-in-out ${service.iconTextColor}`}
                  />
                </div>

                {/* Title & Description */}
                <div className="transition-all duration-500 ease-in-out group-hover:opacity-100 translate-y-6 group-hover:translate-y-[-50px]">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <ArrowRight className="absolute bottom-6 right-6 size-10 p-2 rotate-[-45deg] text-blue-500 border border-[#e3e5ef] rounded-full bg-card opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 ease-in-out" />
              </Link>
            );
          })}

          {/* "Find out more" Card */}
          <div className="text-primary-foreground rounded-lg p-10 pb-14 flex-start flex-col bg-[radial-gradient(at_top_right,_#101e8a_0%,_#010630_77%)]">
            <h3 className="text-lg font-semibold mb-3">
              Can't find what you're looking for?
            </h3>
            <p className="text-sm opacity-80 mb-8 flex-grow">
              Want to learn how our expertise can elevate your business? Get in
              touch and consult for free today.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-3 h-auto text-base font-semibold"
            >
              <Link to="/contact">Request Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2
