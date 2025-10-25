import Layout from "@/components/Layout";
import OurProcess from "@/components/OurProcess";
import Services2 from "@/components/services/Services2";
import FAQsection from "@/components/FAQSection";
import PagesHero from "@/components/hero/PagesHero";
import { Star } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      <PagesHero
        icon={Star}
        badgeText="Our Services"
        heading="We offer a wide range of services"
        description="We provide detailed information about what services are, how they work, and how they can meet the needs or solve problems of target customers. We have provided various types of services specifically to help your business."
      />      
      <Services2 />
      <OurProcess />
      <FAQsection />
    </Layout>
  );
};

export default Services;
