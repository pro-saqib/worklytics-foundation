import Layout from "@/components/Layout";
import ProductHero from "@/components/hero/ProductHero"
import FAQsection from "@/components/FAQSection";
import { Trophy } from "lucide-react";
import Testimonials from "@/components/Testimonials-BK";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import ProductInfo from "@/components/ProductInfo";
import PricingSection from "@/components/PricingSection";

const Product = () => {
    return (
        <Layout>
            <ProductHero
                icon={Trophy}
                badgeText="WorkLtyics"
                heading="#1 Best HR Software"
                description="Manage your entire workforce with ease. WorkLytics brings together the tools you need to hire, manage, and empower employees — helping your HR team work smarter, not harder."
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