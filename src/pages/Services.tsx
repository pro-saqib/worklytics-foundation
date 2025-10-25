import Layout from "@/components/Layout";
import OurProcess from "@/components/OurProcess";
import Services2 from "@/components/services/Services2";
import FAQsection from "@/components/FAQSection";
import PagesHero from "@/components/hero/PagesHero";
import { Sparkle } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      <PagesHero
        icon={Sparkle}
        badgeText="Our Services"
        heading="Transforming Your Business Through Technology"
        description="WorkLtyics delivers IT consultancy solutions that help businesses innovate, optimize, and grow. From software development to data analytics and cloud services, we provide tailored strategies that drive real results."
      />

      <Services2 />
      <OurProcess />
      <FAQsection />
    </Layout>
  );
};

export default Services;
