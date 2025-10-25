import Layout from "@/components/Layout";
import PagesHero from "@/components/hero/PagesHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import { Layers, Check } from "lucide-react";
import appModernisationImage from "@/assets/services/application-modernisation.jpg";

const ApplicationModernisation = () => {
  const serviceTitle = "Application Modernisation and Integration";
  const heroDescription =
    "We modernise and integrate outdated applications to boost speed, scalability, and business agility. With Worklytics, legacy systems are transformed into cloud-ready, performance-driven platforms that fuel innovation, enhance user experience, and support long-term growth.";
  const section1Paragraph =
    "Application modernisation is more than a technical upgrade — it’s a strategic move toward efficiency, flexibility, and innovation. At Worklytics, we simplify complex legacy environments, integrate digital platforms, and build AI-ready ecosystems that empower your business to evolve with confidence.";

  const gainList = [
    "Faster Performance Enablement",
    "Seamless System Integration",
    "Scalable Cloud Adoption",
    "AI-Ready Infrastructure",
    "Lower Operational Risk",
  ];

  const section2Paragraph =
    "Our end-to-end approach ensures your applications adapt to changing business needs, enabling continuous improvement, improved agility, and future-proof innovation.";

  return (
    <Layout>
      <PagesHero
        icon={Layers}
        badgeText="Services"
        heading={serviceTitle}
        description={heroDescription}
      />

      {/* Main Content Section with Sidebar */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-[1fr,1fr,1fr,1fr] gap-12 lg:gap-16 items-start">
            {/* Left Column (Sidebar) */}
            <div className="order-last lg:order-first lg:sticky lg:top-[calc(5rem+2rem)]">
              <ServiceSidebar />
            </div>

            {/* Right Column (Main Content) */}
            <div className="lg:col-span-3 order-first lg:order-last space-y-10">
              {/* Optional Image */}
              <img
                src={appModernisationImage}
                alt={serviceTitle}
                className="w-full h-auto max-h-[550px] object-cover rounded-lg mb-8 shadow-md"
              />

              {/* Section 1 */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                  Drive Transformation with Modern, Scalable Applications
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>{section1Paragraph}</p>
                </div>
              </div>

              {/* What You Gain Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                  What You Gain with Our Modernisation
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
                  Built for Growth, Engineered for the Future
                </h3>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>{section2Paragraph}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplicationModernisation;