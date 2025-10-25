import Layout from "@/components/Layout";
import { ShieldCheck } from "lucide-react";
import PagesHero2 from "@/components/hero/PagesHero2";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {

    return (
        <Layout>
            <PagesHero2
                icon={ShieldCheck}
                badgeText="Privacy Policy"
                heading="General Privacy Notice"
                description="Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services."
            />

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-[1.25em!important]">
                            Privacy Policy Overview
                        </h2>
                        <p className="text-muted-foreground">
                            This Privacy Policy outlines how WorkLytics Holdings Limited and its affiliates (“WorkLytics”, “we”) protect and manage the personal data we process in relation to you, as well as the rights you hold regarding the processing of that data.
                            <br /><br />
                            This policy explains our practices regarding the collection, use, and protection of information that we gather through our services, communications, and platforms, such as our websites, applications, and social media pages. By submitting personal information to us, you consent to the terms outlined in this Privacy Policy.
                        </p>
                        <h3 className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                            Personal Data
                        </h3>
                        <p className="text-muted-foreground">
                            We collect personal data from employees, potential employees, clients, suppliers, business contacts, shareholders, and users of our website. If we collect any data not mentioned in this policy, we will notify individuals (as required by law) about what additional data we collect and how it will be used.
                            <br /><br />
                            Except for data required by law or necessary for the services we provide, sharing personal data with us is voluntary. You will not face negative consequences for choosing not to provide certain information. However, please note that if you do not share specific data, some features or services we offer may not be accessible to you.
                            <br /><br />
                            If you share the personal data of someone else (for example, a job referral), you are responsible for informing them about this Privacy Policy and obtaining their consent to share their information with WorkLytics.
                            <br /><br />
                            The personal data we collect may come directly from you (e.g., when you sign up for a newsletter or apply for a position) or indirectly from third parties (e.g., through our website's technology). These third parties may include affiliates, public authorities, public websites, social media platforms, vendors, and suppliers.
                        </p>
                        <h3 className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                            General Statement
                        </h3>
                        <p className="text-muted-foreground">
                            At WorkLytics, we take your privacy seriously and are committed to safeguarding your personal data. We want you to feel confident that your information is handled securely when you engage with us.
                            <br /><br />
                            We adhere to all applicable privacy laws and regulations, implementing appropriate technical and organizational measures to protect your personal data. These measures are designed to prevent unauthorized or unlawful processing, as well as to safeguard against accidental loss, alteration, disclosure, or destruction of your data.
                        </p>
                        <h3 className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                            Last Updated
                        </h3>
                        <p className="text-muted-foreground">
                            This Privacy Policy was last updated on September 8, 2025.
                        </p>

                        <p className="text-xl font-md text-primary">
                            If you have any questions or concerns about this Privacy Policy, please {" "}
                            <Link to="/contact">
                                <span className="font-semibold text-accent">Contact Us</span>
                            </Link>.
                        </p>

                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default PrivacyPolicy;