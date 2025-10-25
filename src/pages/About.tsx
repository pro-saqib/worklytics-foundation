import Layout from "@/components/Layout";
import { User } from "lucide-react";
import PagesHero from "@/components/hero/PagesHero";
import AboutCompany from "@/components/AboutCompany";
import CompanyHistory from "@/components/CompanyHistory";
import galleryDesktop from "@/assets/gallerydesktop.png";
import galleryMobile from "@/assets/gallerymobile.png";
import CompanyValues from "@/components/CompanyValues";
import Team from "@/components/Team";

const About = () => {

  return (
    <Layout>
      <PagesHero
        icon={User}
        badgeText="About us"
        heading="The future of your business starts here"
        description="Innovated to empower businesses worldwide, our solutions are designed to drive growth, enhance efficiency, and unlock new opportunities. Join us on a journey to transform your business and achieve unparalleled success."
      />

      <AboutCompany />

      {/* Image Section */}
      <section className="pt-0 pb-20">
        <div className="container px-0 mx-auto">
          {/* Desktop Image */}
          <img
            src={galleryDesktop}
            alt="WorkLytics Team Desktop"
            className="hidden md:block w-full h-auto object-contain"
          />

          {/* Mobile Image */}
          <img
            src={galleryMobile}
            alt="WorkLytics Team Mobile"
            className="block md:hidden w-full h-auto object-contain"
          />
        </div>
      </section>

      <CompanyHistory />
      <CompanyValues />
      <Team/>
      
    </Layout>
  );
};

export default About;
