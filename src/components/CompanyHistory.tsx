const timelineData = [
    {
        year: 1998,
        title: 'Company Founded',
        description:
            'WorkLtyics was founded with a vision to help businesses harness the power of technology through data-driven insights and custom software solutions. What started as a small consultancy quickly became a trusted name in IT innovation.',
    },
    {
        year: 2005,
        title: 'Expanded IT Consulting Services',
        description:
            'We broadened our expertise to include enterprise IT consulting, cloud infrastructure, and digital transformation strategies — helping clients adapt to rapidly changing technological demands.',
    },
    {
        year: 2012,
        title: 'Team Grows Beyond 100 Experts',
        description:
            'Our continued success attracted top engineering and data talent from around the world. WorkLtyics grew to a global network of IT professionals focused on delivering scalable, secure, and intelligent business solutions.',
    },
    {
        year: 2018,
        title: 'Achieved Industry Certifications',
        description:
            'WorkLtyics became recognized for its excellence in cloud computing, analytics, and cybersecurity, achieving multiple certifications that strengthened our credibility and expanded client partnerships.',
    },
    {
        year: 2022,
        title: 'Serving 342+ Businesses Worldwide',
        description:
            'By 2022, we reached a milestone of empowering over 342,000 businesses with technology-driven insights and digital solutions that optimize operations and accelerate growth.',
    },
];


const CompanyHistory = () => {
    return (
        <section className="pt-6 pb-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                    {/* Left Column (Sticky Heading) */}
                    <div className="lg:sticky lg:top-[calc(5rem+1.5rem)]">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
                            The story behind how our company was founded
                        </h2>
                        <p className="text-muted-foreground">
                            Since our founding, WorkLtyics has been driven by a single goal — to empower organizations with smarter technology and meaningful data insights.
                            From humble beginnings to a global IT consultancy, our journey reflects a commitment to innovation, collaboration, and measurable business impact.

                        </p>
                    </div>

                    {/* Right Column (Timeline) */}
                    <div className="relative space-y-10">
                        {timelineData.map((item, index) => (
                            <div key={index} className="relative pl-14">
                                {/* Marker */}
                                <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-[1.5px] border-blue-500 bg-background hover:bg-accent z-10"></div>

                                {/* Vertical Line (connect markers) */}
                                {index < timelineData.length - 1 && (
                                    <div className="absolute left-[9.5px] top-[1.25rem] bottom-[-2.75rem] w-[1.5px] bg-primary/10"></div>
                                )}

                                {/* Content */}
                                <h4 className="font-semibold text-foreground mb-2 text-lg">
                                    {item.title} <span className="text-primary">({item.year})</span>
                                </h4>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompanyHistory;
