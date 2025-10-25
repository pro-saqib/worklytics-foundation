import {
  Users,
  ClipboardList,
  Clock,
  BarChart3,
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  UserCircle2,
} from "lucide-react";

// Data for the HR SaaS features
const featureData = [
  {
    icon: Users,
    title: 'Smart Recruitment & Onboarding',
    description:
      'Streamline hiring with AI-powered candidate screening, digital onboarding, and automated document management — all in one place.',
    iconBgColor: 'bg-blue-100',
    iconTextColor: 'text-blue-600',
  },
  {
    icon: ClipboardList,
    title: 'Employee Management',
    description:
      'Easily manage employee data, roles, attendance, and time-off requests through a unified, user-friendly dashboard.',
    iconBgColor: 'bg-orange-100',
    iconTextColor: 'text-orange-600',
  },
  {
    icon: Clock,
    title: 'Time Tracking & Payroll Automation',
    description:
      'Track work hours, overtime, and leaves automatically — seamlessly integrated with payroll for accurate, timely payments.',
    iconBgColor: 'bg-green-100',
    iconTextColor: 'text-green-600',
  },
  {
    icon: BarChart3,
    title: 'Performance & Analytics',
    description:
      'Gain deep insights into employee performance, engagement, and retention with AI-driven analytics and reports.',
    iconBgColor: 'bg-red-100',
    iconTextColor: 'text-red-600',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Data Security',
    description:
      'Ensure HR processes meet global compliance standards while keeping sensitive employee data encrypted and secure.',
    iconBgColor: 'bg-purple-100',
    iconTextColor: 'text-purple-600',
  },
  {
    icon: HeartHandshake,
    title: 'Employee Engagement Tools',
    description:
      'Boost workplace culture with recognition programs, surveys, and real-time feedback to keep teams motivated and connected.',
    iconBgColor: 'bg-cyan-100',
    iconTextColor: 'text-cyan-600',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description:
      'Empower employees with personalized learning paths, training modules, and certification tracking to foster growth and career development.',
    iconBgColor: 'bg-yellow-100',
    iconTextColor: 'text-yellow-600',
  },
  {
    icon: UserCircle2,
    title: 'Self-Service Portal',
    description:
      'Give employees control over their profiles, pay slips, leave requests, and benefits — reducing HR workload and improving transparency.',
    iconBgColor: 'bg-teal-100',
    iconTextColor: 'text-teal-600',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Area */}
        <div className="grid md:grid-cols-2 md:gap-32 gap-8 mb-16 items-center">

          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-[1.25em!important]">
            Work smart not hard, with WorkLytics.
          </h2>

          <p className="text-muted-foreground">
            At WorkLtyics, we combine technology expertise with strategic insight to deliver solutions that drive real business impact. Our features — from advanced analytics to scalable IT infrastructure — are designed to help organizations innovate, optimize processes, and achieve measurable growth.
          </p>

        </div>

        {/* features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Map through feature data to render standard cards */}
          {featureData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-10 pb-14 border border-border relative overflow-hidden group transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-blue-500 hover:shadow-sm"
              >
                {/* Icon Container (Top Icon) */}
                <div
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${feature.iconBgColor} group-hover:translate-y-[-100px] group-hover:opacity-0`}
                >
                  <Icon
                    className={`size-6 transition-all duration-500 ease-in-out ${feature.iconTextColor}`}
                  />
                </div>

                {/* Title and Description (Grouped) */}
                <div className="transition-all duration-500 ease-in-out group-hover:opacity-100 translate-y-6 group-hover:translate-y-[-50px]">
                  {/* Title */}
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Features;
