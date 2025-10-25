import { cn } from "@/lib/utils";

const statsData = [
  {
    value: "97,2",
    suffix: "%",
    label: "Successful Project",
    suffixGradient: "linear-gradient(117deg, #498eff 15%, #49ff97 100%)",
  },
  {
    value: "342",
    suffix: "K",
    label: "Joining Companies",
    suffixGradient: "linear-gradient(117deg, #ff4949 15%, #fff949 100%)",
  },
  {
    value: "1,386",
    suffix: "+",
    label: "Registered Customers",
    suffixGradient: "linear-gradient(117deg, #ff71e4 15%, #ec1616 100%)",
  },
];

const Stats = ({ valueColor = "text-foreground", labelColor = "text-primary-foreground/70", borderColor = "border-white/20",
}) => {
  return (
    <div className="grid grid-cols-3 md:gap-14 gap-6 text-left">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={cn(
            index < 2 && `border-r ${borderColor} md:pr-6 pr-4`
          )}
        >
          <div className="flex items-baseline gap-2 mb-2">
            <span className={cn("text-2xl md:text-5xl font-semibold", valueColor)}>
              {stat.value}
            </span>
            <span
              style={{ backgroundImage: stat.suffixGradient }}
              className="bg-clip-text text-transparent font-bold text-xl md:text-3xl"
            >
              {stat.suffix}
            </span>
          </div>
          <p className={cn("md:text-md text-xs mt-1", labelColor)}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
