import React from "react";
import { BadgeCheck, Headset, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const GradientDefs = ({ gradients = [] }) => {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute", left: -9999 }}>
      <defs>
        {gradients.map((g, i) => (
          <linearGradient id={`g${i}`} key={i} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={g.color1} />
            <stop offset="100%" stopColor={g.color2} />
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
};

const featuresData = [
  {
    icon: BadgeCheck,
    title: "Expert Guidance",
    colors: ["#498eff", "#49ff97"],
  },
  {
    icon: Layers,
    title: "Tailored Solutions",
    colors: ["#ff4949", "#fff949"],
  },
  {
    icon: Headset,
    title: "24/7 Support",
    colors: ["#ff71e4", "#ec1616"],
  },
];

const Features = ({
  titleColor = "text-white",
  borderColor = "border-white/10",
}) => {
  const gradients = featuresData.map((f) => ({
    color1: f.colors[0],
    color2: f.colors[1],
  }));

  return (
    <div className="relative">
      <GradientDefs gradients={gradients} />

      <div className="grid grid-cols-3 md:gap-14 gap-6 text-left">
        {featuresData.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className={cn(index < 2 && `border-r ${borderColor} md:pr-6 pr-4`)}
            >
              <div className="flex flex-col items-start gap-4 items-center text-center">
                <Icon
                  className="w-8 h-8"
                  stroke={`url(#g${index})`}
                  strokeWidth={1.8}
                />

                {/* Slightly larger title for balance */}
                <span className={cn("text-sm md:font-semibold", titleColor)}>
                  {feature.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
