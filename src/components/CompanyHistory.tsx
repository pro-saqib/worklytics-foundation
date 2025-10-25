const timelineData = [
    {
        year: 1998,
        title: 'We Founded',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi explicabo.',
    },
    {
        year: 2005,
        title: 'Add Banking Channels',
        description:
            'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
    },
    {
        year: 2012,
        title: 'Expand Team 11000+',
        description:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    },
    {
        year: 2018,
        title: 'Certified With AdWords',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        year: 2022,
        title: '342K Joining Company',
        description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
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
                            Sed ut perspiciatis unde omnis iste natus error sit amet libero tempore
                            voluptatem accusantium doloremque.Sed ut perspiciatis unde omnis iste natus error sit amet libero tempore
                            voluptatem accusantium doloremque.Sed ut perspiciatis unde omnis iste natus error sit amet libero tempore
                            voluptatem accusantium doloremque.
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
