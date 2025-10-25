import Layout from "@/components/Layout";
import ProductHero from "@/components/hero/ProductHero"
import FAQsection from "@/components/FAQSection";
import { Trophy } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import ProductInfo from "@/components/ProductInfo";
import PricingSection from "@/components/PricingSection";

const Product = () => {
    return (
        <Layout>
            <ProductHero
                icon={Trophy}
                badgeText="#1 Best HR Software"
                heading="WorkLytics: One Easy-to-Use Platform for Everything HR"
                description="Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
            accusantium doloremque laudantium elit.Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
            accusantium doloremque laudantium elit."
            />
            <TrustedBy />
            <Features />
            <ProductInfo />
            <PricingSection />
            <FAQsection />
        </Layout>
    )
}

export default Product