import team1 from '@/assets/team/team1.png';
import team2 from '@/assets/team/team2.png';
import team3 from '@/assets/team/team3.png';
import team4 from '@/assets/team/team4.png';
import team5 from '@/assets/team/team5.png';
import team6 from '@/assets/team/team6.png';
import team7 from '@/assets/team/team7.png';
import team8 from '@/assets/team/team8.png';

// Data for the team members based on the image
const teamData = [
    {
        imageUrl: team1,  
        name: 'Cedric Matthews',
        title: 'CEO & Founder',
    },
    {
        imageUrl: team2,  
        name: 'Carmen Reyes',
        title: 'CTO & Co-Founder',
    },
    {
        imageUrl: team3,  
        name: 'Angela Briggs',
        title: 'Chief Financia3 Officer',
    },
    {
        imageUrl: team4, 
        name: 'Wilmot Elledge',
        title: 'Chief Revenue Officer',
    },
    {
        imageUrl: team5,  
        name: 'Gary Hart',
        title: 'Chief Product Officer',
    },
    {
        imageUrl: team6, 
        name: 'Lane Mcgee',
        title: 'General Counsel',
    },
    {
        imageUrl: team7,  
        name: 'Alvin Eiland',
        title: 'Head Of Business',
    },
    {
        imageUrl: team8,  
        name: 'Eda Barlow',
        title: 'Chief of Staff',
    },
];

const Team = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl lg:text-5xl font-semibold mb-8 text-primary leading-tight">
                        Meet with our executive team
                    </h2>
                    <p className="text-muted-foreground max-w-4xl mx-auto">
                        Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
                        accusantium doloremque laudantium elit.Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
                        accusantium doloremque laudantium elit.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {teamData.map((member, index) => (
                        <div
                            key={index}
                            className="bg-card overflow-hidden border border-border rounded-lg group transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-sm">
                            <img
                                src={member.imageUrl}
                                alt={`Headshot of ${member.name}`}
                                className="w-full h-auto object-fill aspect-square"
                            />
                            <div className="sm:p-6 p-4 text-center">
                                <h4 className="font-semibold text-lg text-foreground mb-1 leading-tight">
                                    {member.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    {member.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team