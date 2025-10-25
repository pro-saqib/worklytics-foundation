import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers, Cloud, RefreshCw, Settings, Cpu, BarChart4, ServerCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card'; // Import Card

const servicesData = [
  {
    name: 'Application Modernisation and Integration',
    path: '/services/application-modernisation',
    Icon: Layers,
    iconBgColor: 'bg-blue-100',
    iconTextColor: 'text-blue-600',
  },
  {
    name: 'Cloud Services (Azure, AWS, GCP)',
    path: '/services/cloud-services',
    Icon: Cloud,
    iconBgColor: 'bg-purple-100',
    iconTextColor: 'text-purple-600',
  },
  {
    name: 'Cloud Transformations',
    path: '/services/cloud-transformations',
    Icon: RefreshCw,
    iconBgColor: 'bg-orange-100',
    iconTextColor: 'text-orange-600',
  },
  {
    name: 'Custom Software Development',
    path: '/services/custom-software-development',
    Icon: Settings,
    iconBgColor: 'bg-green-100',
    iconTextColor: 'text-green-600',
  },
  {
    name: 'Managed IT Services',
    path: '/services/managed-it-services',
    Icon: ServerCog,
    iconBgColor: 'bg-teal-100',
    iconTextColor: 'text-teal-600',
  },
  {
    name: 'Digital Transformation',
    path: '/services/digital-transformation',
    Icon: Cpu,
    iconBgColor: 'bg-pink-100',
    iconTextColor: 'text-pink-600',
  },
  {
    name: 'Data Analytics and AI',
    path: '/services/data-analytics-ai',
    Icon: BarChart4,
    iconBgColor: 'bg-yellow-100',
    iconTextColor: 'text-yellow-600',
  },
];


const ServiceSidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="space-y-8 ">
      {/* Services Card */}
      <Card className="p-8 shadow-sm border">
        <h4 className="font-semibold text-lg text-foreground mb-4">Our Services</h4>
        <div className="space-y-4 mt-4">
          {servicesData.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className={cn(
                'flex items-center gap-3 group transition-colors',
                isActive(service.path)
                  ? 'text-primary font-medium'
                  : 'text-foreground/80 hover:text-primary',
              )}
            >
              <span
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors',
                  service.iconBgColor,
                  isActive(service.path) ? 'ring-1 ring-accent ring-offset-1 bg-accent/500' : 'group-hover:bg-primary/10', // Active/hover background adjustment
                )}
              >
                <service.Icon
                  className={cn('size-4', service.iconTextColor, isActive(service.path) ? 'text-primary' : '')}
                />
              </span>
              <span className="text-sm font-medium">{service.name}</span>
            </Link>
          ))}
        </div>
      </Card>

      {/* "Find out more" Card */}
      <div className="text-primary-foreground rounded-lg p-8 flex-start flex-col bg-[radial-gradient(at_top_right,_#101e8a_0%,_#010630_77%)]">
        <h3 className="text-lg font-semibold mb-3">
          Can't find what you're looking for?            </h3>
        <p className="text-sm opacity-80 mb-8 flex-grow">
          You can consult
          for free or ask for any service from us.
        </p>
        <Button
          asChild
          className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-3 h-auto text-base font-semibold"
        >
          <Link to="/contact">Request Service</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceSidebar;