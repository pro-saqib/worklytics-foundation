import Layout from "@/components/Layout";
import HomeHero from "@/components/hero/HomeHero";
import TrustedBy from "@/components/TrustedBy";
import Services1 from "@/components/services/Services1";
import WhyUS from "@/components/WhyUs";
import ProductSection from "@/components/ProductSection";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <Layout>
      <HomeHero />
      <TrustedBy />
      <Services1 />
      <WhyUS />
      <ProductSection />
      <Testimonials /> 
    </Layout>
  );
};

export default Index;
