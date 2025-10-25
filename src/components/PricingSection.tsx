import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Reusable component for feature list items
const FeatureItem = ({
  children,
  iconColorClass = 'text-blue-500',
}) => (
  <li className="flex items-center gap-4">
    <Check className={cn('size-5 flex-shrink-0', iconColorClass)} />
    <span className="text-sm">{children}</span>
  </li>
);

const PricingSection = () => {
  const numberedFeatures = [
    { number: '01', text: 'Build fastest way possible.', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    { number: '02', text: 'Ease of transaction.', bgColor: 'bg-orange-100', textColor: 'text-orange-600' },
    { number: '03', text: 'Build customer relationships.', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
  ];

  const standardFeatures = [
    'Basic reporting and analytics',
    'Free of charge for any consultation',
    'Basic reporting and analytics',
    'Audit log and data history',
    'Lifetime guarantee and cash back',
  ];

  const premiumFeatures = [
    'Premium+ reporting and analytics',
    'Free of charge for any consultation',
    'Priority chat and email support',
    'Audit log and data history',
    'Lifetime guarantee and cash back',
  ];

  return (
    <section className="sm:py-20 pt-20 pb-10 bg-background">
      <div className="container px-4  mx-auto">
        <div className="grid lg:grid-cols-[1fr,1.5fr] lg:grid-cols-2 gap-12 lg:gap-32 items-center">

          {/* Left Column (Description & Features) */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-primary mb-8 leading-tight">
              Choose a plan fits to your needs
            </h2>
            <p className="text-muted-foreground mb-10">
              Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem accusantium doloremque laudantium elit.
            </p>
            {/* Numbered Features List */}
            <div className="space-y-6">
              {numberedFeatures.map((feature) => (
                <div key={feature.number} className="flex items-center gap-4">
                  <span className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0',
                    feature.bgColor,
                    feature.textColor
                  )}>
                    {feature.number}
                  </span>
                  <span className="font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Pricing Cards) */}
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-stretch justify-center lg:justify-start">

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

            {/* Premium+ Card */}
            <div className="bg-[radial-gradient(at_top_center,_#101e8a_0%,_#010630_77%)] text-primary-foreground rounded-lg shadow-sm p-10 w-full flex flex-col relative lg:scale-105">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;