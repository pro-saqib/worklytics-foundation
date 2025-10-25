const TrustedBy = () => {
  const companies = [
    { name: "TechCorp", icon: "🔷" },
    { name: "DataFlow", icon: "⚡" },
    { name: "CloudSync", icon: "☁️" },
    { name: "InnovateLab", icon: "🔬" },
    { name: "GlobalTech", icon: "🌐" }
  ];

  return (
    <section className="sm:pt-20 sm:pb-10 pt-20 pb-6 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-4xl lg:text-3xl font-semibold text-center text-primary max-w-4xl mx-auto mb-16 leading-tight">
          Over <span className="text-accent">16,000+</span> companies trust our services and they are optimistic that they will be the best in the world.
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 opacity-75 hover:opacity-100 grayscale hover:grayscale-0 transition-smooth">
              <span className="text-4xl">{company.icon}</span>
              <span className="text-xl font-semibold text-muted-foreground">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
