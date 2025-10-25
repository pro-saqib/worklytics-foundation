import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Reusable component for feature list items
const FeatureItem = ({
  children,
  iconColorClass = 'text-blue-500', // Default blue icon
}) => (
  <li className="flex items-center gap-4">
    <Check className={cn('size-5 flex-shrink-0', iconColorClass)} />
    <span className="text-sm">{children}</span>
  </li>
);

// Define standard features
const standardFeatures = [
  'Basic reporting and analytics',
  'Free of charge for any consultation',
  'Basic reporting and analytics',
  'Audit log and data history',
  'Lifetime guarantee and cash back',
];

// Define premium features
const premiumFeatures = [
  'Premium+ reporting and analytics',
  'Free of charge for any consultation',
  'Priority chat and email support',
  'Audit log and data history',
  'Lifetime guarantee and cash back',
];

// Define enterprise features (based on the third card in the image)
const enterpriseFeatures = [
  'Enterprise+ reporting and analytics',
  'Free of charge for any consultation',
  'Basic chat and email support', // Note: Image shows 'Basic' for Enterprise
  'Audit log and data history',
  'Lifetime guarantee and cash back',
];

const PricingSection2 = () => {
  return (
    <section className="sm:py-20 pt-20 pb-10 bg-background">
      <div className="container px-4 mx-auto">
        {/* Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
            Choose a plan fits to your needs
          </h2>
          <p className="text-muted-foreground">
            Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem accusantium doloremque laudantium elit.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch justify-center">

          {/* Standard Card */}
          <div className="bg-card rounded-lg border border-border shadow-sm p-10 w-full flex flex-col relative">
            <h3 className="font-semibold text-lg text-foreground mb-3">Standard</h3>
            <p className="text-4xl font-semibold text-foreground mb-1">$42.00</p>
            <p className="text-sm text-muted-foreground mb-6">per service</p>
            <ul className="space-y-4 mb-8 flex-grow">
              {standardFeatures.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </ul>
            <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full py-3 h-auto text-base font-semibold">
              Select Plan
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              * Tax & other services included.
            </p>
          </div>

          {/* Premium+ Card (Popular) */}
          <div className="bg-[radial-gradient(at_top_center,_#101e8a_0%,_#010630_77%)] text-primary-foreground rounded-lg shadow-xl p-10 w-full flex flex-col relative lg:scale-105 z-10"> {/* Added z-10 */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-primary font-bold text-xs px-3 py-1 rounded-full">
              POPULAR
            </div>
            <h3 className="font-semibold text-lg mb-3">Premium+</h3>
            <p className="text-4xl font-semibold mb-2">$64.00</p>
            <p className="text-sm opacity-80 mb-6">per service</p>
            <ul className="space-y-4 mb-8 flex-grow">
              {premiumFeatures.map((feature, index) => (
                <FeatureItem key={index} iconColorClass="text-white">{feature}</FeatureItem>
              ))}
            </ul>
            <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full py-3 h-auto text-base font-semibold">
              Select Plan
            </Button>
            <p className="text-xs opacity-80 text-center mt-4">
              * Tax & other services included.
            </p>
          </div>

          {/* Enterprise+ Card */}
          <div className="bg-card rounded-lg border border-border shadow-sm p-10 w-full flex flex-col relative">
            <h3 className="font-semibold text-lg text-foreground mb-3">Enterprise+</h3>
            <p className="text-4xl font-semibold text-foreground mb-1">$92.00</p>
            <p className="text-sm text-muted-foreground mb-6">per service</p>
            <ul className="space-y-4 mb-8 flex-grow">
              {enterpriseFeatures.map((feature, index) => (
                // Assuming Enterprise uses orange checkmarks based on the image
                <FeatureItem key={index} iconColorClass="text-orange-500">{feature}</FeatureItem>
              ))}
            </ul>
            <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full py-3 h-auto text-base font-semibold">
              Select Plan
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              * Tax & other services included.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection2;