import Layout from "@/components/Layout";
import { FileCheck } from "lucide-react";
import PagesHero2 from "@/components/hero/PagesHero2";

const Terms = () => {
    return (
        <Layout>
            <PagesHero2
                icon={FileCheck}
                badgeText="Terms"
                heading="Terms & Conditions"
                description="By accessing or using any part of the site, you agree to be bound by these terms, which govern your relationship with WorkLytics."
            />

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-[1.25em!important]">
                            Overview of Terms & Conditions
                        </h2>
                        <p className="text-muted-foreground">
                            Access to this website is conditional upon your acceptance of and compliance with the terms, conditions, notices, and disclaimers outlined in this document ("Terms and Conditions"). By using or accessing the site, you agree to be bound by these Terms and Conditions.
                            <br /><br />
                            WorkLytics reserves the right to modify these Terms at any time. As a user, it's your responsibility to review this document and the site periodically to stay informed of any changes.
                        </p>

                        <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-[1.25em!important]">
                            Copyright & Trademarks
                        </h2>

                        <h3 className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                            Intellectual Property & Content Usage Restrictions
                        </h3>
                        <p className="text-muted-foreground">
                            Unless otherwise stated, all text, images, materials, graphics, and advertisements on this site ("Content") are © WorkLytics, its suppliers, and/or licensors.
                            <br /><br />
                            You may not alter, copy, reproduce, republish, frame, upload, post, transmit, or distribute any content in any way unless explicitly permitted on the site or in writing by WorkLytics.
                            <br /><br />
                            Provided you keep the content intact, including all copyright, trademark, and proprietary notices, you may:
                            <br /><br />
                            a. Download and view the content using a standard web browser for personal, non-commercial use.
                            <br />
                            b. If you’re an internet service or access provider, deliver the content to your subscribers.
                            <br /><br />
                            Any use of this site for unlawful purposes, or in a way that infringes upon the rights of WorkLytics or breaches these Terms, is strictly prohibited.
                        </p>

                        <h3 className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                            WorkLytics Trademarks
                        </h3>
                        <p className="text-muted-foreground">
                            All trademarks shown on the site are the property of WorkLytics or their respective owners. Nothing on this site should be interpreted as granting any license or right to use any trademark without prior written consent from WorkLytics or the rightful owner.
                        </p>

                        <h3 className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                            Limitation of Liability
                        </h3>
                        <p className="text-muted-foreground">
                            WorkLytics shall not be held liable for any indirect, incidental, special, or consequential damages — including but not limited to loss of profits — resulting from the use of or inability to use this site or its content.
                            <br /><br />
                            You acknowledge that WorkLytics does not control users of this site, including any individuals referred to as guests or experts. As such, WorkLytics is not responsible for their opinions, advice, or behavior, including any defamatory or offensive content.
                        </p>

                        <h3 className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                            Site Availability
                        </h3>
                        <p className="text-muted-foreground">
                            We strive to keep the website accessible 24/7. However, due to the nature of digital services, interruptions or technical issues may occur. As such, the site is provided on an "as-is" and "as-available" basis.
                        </p>

                        <h3 className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                            Legal Jurisdiction
                        </h3>
                        <p className="text-muted-foreground">
                            These Terms are governed by the laws of Ireland. If any part of this agreement is found invalid or unenforceable by a court, the remainder of the agreement will remain in full effect.
                            <br /><br />
                            All rights not explicitly granted in this document are reserved.
                        </p>

                        <h3 className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                            Acceptance of Terms
                        </h3>
                        <p className="text-muted-foreground">
                            By continuing to use this website, you confirm that you accept and agree to be bound by these Terms and Conditions.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Terms;
