import Layout from "@/components/Layout";
import { DollarSign } from "lucide-react";
import PagesHero from "@/components/hero/PagesHero";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import PricingSection2 from "@/components/PricingSection2";
import ServiceSidebar from "@/components/ServiceSidebar";

const Pricing = () => {

  return (
    <Layout>
      <PagesHero
        icon={DollarSign}
        badgeText="Pricing"
        heading="Simple pricing for any type of business"
        description="We provide very affordable prices for you. This will allow you to make good use of our services and grow your business. So that the business, or service you work for can earn more and make it accessible to many people."
      />
      <PricingSection2   />
      <Testimonials />
      <FAQSection />
    </Layout>
  );
};

export default Pricing;
