import Layout from "@/components/Layout";
import { MessageCircleQuestion } from "lucide-react";
import PagesHero2 from "@/components/hero/PagesHero2";
import FAQSection from "@/components/FAQSection";

const FAQ = () => {

    return (
        <Layout>
            <PagesHero2
                icon={MessageCircleQuestion}
                badgeText="FAQ"
                heading="Frequently Asked Questions"
                description="Find quick answers to the most common questions about our services, features, and policies. If you can’t find what you’re looking for, feel free to reach out to our support team."
            />

            <FAQSection />

        </Layout>
    );
};

export default FAQ;