import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { cn } from "@/lib/utils";
import PagesHero2 from "@/components/hero/PagesHero2";
import DetailsCard from "@/components/DetailsCard";

const Contact = () => {

  const contactDetails = [
    {
      Icon: MapPin,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Office",
      text: "Jl. Merdeka Raya No.73B",
    },
    {
      Icon: Phone,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      title: "Phone",
      text: "(021) 111 444 90",
    },
    {
      Icon: Clock,
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      title: "Work Hours",
      text: "Everyday 09 am - 07 pm",
    },
    {
      Icon: Mail,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: "Email",
      text: "worklytics@support.com",
    },
  ];

  const socialLinks = [
    { label: "Facebook", Icon: Facebook, bgColor: "bg-blue-600", href: "#" },
    { label: "Twitter", Icon: Twitter, bgColor: "bg-sky-500", href: "#" },
    { label: "LinkedIn", Icon: Linkedin, bgColor: "bg-blue-700", href: "#" },
    { label: "Instagram", Icon: Instagram, bgColor: "bg-pink-600", href: "#" },
  ];

  const mapAddress = "Jl. Merdeka Raya No.73B";
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <Layout>
      <PagesHero2
        icon={Mail}
        badgeText="Contact Us"
        heading="Feel free to get in touch"
        description="Reach out to our team for personalized assistance, inquiries about our services, or to schedule a demo. We're committed to providing the support you need to leverage data-driven insights for your organization's success."
      />

      {/* Contact Form & Details Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-28 items-start ">

            {/* Left Column (Form Card) */}
            <div className="bg-card rounded-lg p-8 md:p-10 shadow-sm relative lg:-mt-64 -mt-56 z-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Leave your message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name Field with Label */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                    <Input id="name" placeholder="Your Name" className="bg-background h-12" /> {/* Added bg-background and h-12 */}
                  </div>
                  {/* Email Field with Label */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" className="bg-background h-12" /> {/* Added bg-background and h-12 */}
                  </div>
                </div>
                {/* Subject Field with Label */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                  <Input id="subject" placeholder="Subject" className="bg-background h-12" /> {/* Added bg-background and h-12 */}
                </div>
                {/* Message Field with Label */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea id="message" placeholder="Message" rows={10} className="bg-background" /> {/* Added bg-background */}
                </div>
                {/* Checkbox and Button Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the privacy policy
                    </Label>
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-3 h-auto text-base font-semibold">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Right Column (Contact Details) */}
            <div className="pt-10 lg:pt-0">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6 leading-tight">
                Don't hesitate to contact us
              </h2>
              <p className="text-muted-foreground mb-10">
                Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
                accusantium doloremque laudantium elit.
              </p>

              {/* Contact Info Grid */}
                <DetailsCard details={contactDetails} gridClassName="gap-6 mb-10 sm:grid-cols-2" spacing="p-4" />

              {/* Social Media */}
              <div className="flex flex-wrap items-center gap-4">
                <h4 className="font-semibold text-foreground whitespace-nowrap">Social Media :</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity", link.bgColor)}
                    >
                      <link.Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Map Section */}
      <section className="pt-4 pb-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="w-full h-100 bg-muted rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing location for ${mapAddress}`}
            ></iframe>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
