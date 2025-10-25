import React from 'react';
import { ThumbsUp, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

// Data for testimonials based on the image
const testimonialsData = [
    {
        rating: 4.9,
        text: 'The quality of service is top notch and exceeded my expectations. The customer service team was very helpful and made sure all my questions were answered.',
        name: 'Andy James',
        handle: '@andyjames',
        imageUrl: '[https://via.placeholder.com/40x40/e0e0e0/666?text=AJ](https://via.placeholder.com/40x40/e0e0e0/666?text=AJ)',
    },
    {
        rating: 5.0,
        text: 'I have been a WorkLytics customer for many years now and I can honestly say their level of service is unmatched.\n\nTheir commitment to customer satisfaction is evident in every interaction I have had with them.',
        name: 'Grace Osborne',
        handle: '@graceob',
        imageUrl: '[https://via.placeholder.com/40x40/e0e0e0/666?text=GO](https://via.placeholder.com/40x40/e0e0e0/666?text=GO)',
    },
    {
        rating: 5.0,
        text: 'I enjoyed working with WorkLytics and I must say, they really exceeded all my expectations.',
        name: 'Warwick Blake',
        handle: '@wrtblake',
        imageUrl: '[https://via.placeholder.com/40x40/e0e0e0/666?text=WB](https://via.placeholder.com/40x40/e0e0e0/666?text=WB)',
    },
        {
        rating: 5.0,
        text: 'From the initial consultation to the final result, an exceptional level of business professionalism.',
        name: 'Ned Barnett',
        handle: '@nedbarne',
        imageUrl: '[https://via.placeholder.com/40x40/e0e0e0/666?text=NB](https://via.placeholder.com/40x40/e0e0e0/666?text=NB)',
    },
    
    {
        rating: 4.8,
        text: 'They complete projects on time and on budget, and their attention to detail is outstanding. I appreciate their open lines of Communication.',
        name: 'Malcolm Miller',
        handle: '@mc.miller',
        imageUrl: '[https://via.placeholder.com/40x40/e0e0e0/666?text=MM](https://via.placeholder.com/40x40/e0e0e0/666?text=MM)',
    },
        {
        rating: 4.9,
        text: 'They listened to my needs and provided valuable insights that helped bring my vision to life.\n\n I highly recommend WorkLytics for anyone needing their services. Their attention to detail & commitment to customer satisfaction is unmatched.',
        name: 'Shana Matthews',
        handle: '@shana.mtw',
        imageUrl: '[https://via.placeholder.com/40x40/e0e0e0/666?text=SM](https://via.placeholder.com/40x40/e0e0e0/666?text=SM)',
    },
    
    {
        rating: 4.9,
        text: 'I recently used the Services from WorkLytics and am very pleased with my experience.',
        name: 'Tara Dean',
        handle: '@tara.dean',
        imageUrl: '[https://via.placeholder.com/40x40/e0e0e0/666?text=TD](https://via.placeholder.com/40x40/e0e0e0/666?text=TD)',
    },
    {
        rating: 4.8,
        text: 'I appreciate their attention to detail and the effort they put into making sure I was satisfied with my purchase.\nI highly recommend WorkLytics to anyone in the market for their services. Thank you for a great experience!',
        name: 'Henry Ballard',
        handle: '@henryballard',
        imageUrl: '[https://via.placeholder.com/40x40/e0e0e0/666?text=HB](https://via.placeholder.com/40x40/e0e0e0/666?text=HB)',
    },
    {
        rating: 5.0,
        text: 'I had the opportunity to work with WorkLytics on a project recently and I was very impressed with their level of professionalism and expertise.\nThe team was knowledgeable and responsive.',
        name: 'Lincoln Smith',
        handle: '@smlincoln',
        imageUrl: '[https://via.placeholder.com/40x40/e0e0e0/666?text=LS](https://via.placeholder.com/40x40/e0e0e0/666?text=LS)',
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                {/* Header Content */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl lg:text-5xl font-semibold text-primary relative">
                        See what our customer's saying
                    </h2>
                </div>

                {/* Masonry Grid Implementation */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                    {testimonialsData.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="p-10 shadow-sm break-inside-avoid-column bg-card" // Added bg-card for explicit white background
                        >
                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-foreground">{testimonial.rating.toFixed(1)}</span>
                                <span className="text-muted-foreground">Rated</span>
                                <div className="flex ml-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={cn(
                                                'w-4 h-4',
                                                i < Math.round(testimonial.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300',
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-muted-foreground text-lg my-8 whitespace-pre-line">
                                {/* whitespace-pre-line to respect newlines in text */}
                                {testimonial.text}
                            </p>

                            {/* Customer Info */}
                            <div className="flex items-center gap-4">
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                                    <AvatarFallback>{testimonial.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                                    <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;