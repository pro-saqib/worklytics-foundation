import React, { useState, useEffect } from 'react';
import { ThumbsUp, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

// Define the structure for testimonial data
interface Testimonial {
  rating: number;
  text: string;
  name: string;
  handle: string;
  imageUrl: string;
}

// Data for testimonials based on the image
const testimonialsData: Testimonial[] = [
  {
    rating: 4.9,
    text: "The quality of service is top notch and exceeded my expectations. The customer service team was very helpful and made sure all my questions were answered.",
    name: "Andy James",
    handle: "@andyjames",
    imageUrl: "https://via.placeholder.com/40x40/e0e0e0/666?text=AJ",
  },
  {
    rating: 4.9,
    text: "They listened to my needs and provided valuable insights that helped bring my vision to life. I highly recommend Procorp for anyone needing their services. Their attention to detail & commitment to customer satisfaction is unmatched. Thank you for a job well done!",
    name: "Shana Matthews",
    handle: "@shana.mtw",
    imageUrl: "https://via.placeholder.com/40x40/e0e0e0/666?text=SM",
  },
  {
    rating: 5.0,
    text: "I enjoyed working with Procorp and I must say, they really exceeded all my expectations.",
    name: "Warwick Blake",
    handle: "@wrtblake",
    imageUrl: "https://via.placeholder.com/40x40/e0e0e0/666?text=WB",
  },
  {
    rating: 4.8, 
    text: "Another great testimonial highlighting the amazing service and dedication of the team.",
    name: "Jane Doe",
    handle: "@janedoe",
    imageUrl: "https://via.placeholder.com/40x40/e0e0e0/666?text=JD",
  },
    {
    rating: 5.0,
    text: "Absolutely fantastic experience from start to finish. Highly recommend their professional approach.",
    name: "John Smith",
    handle: "@johnsmith",
    imageUrl: "https://via.placeholder.com/40x40/e0e0e0/666?text=JS",
  },
];

const Testimonials: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Set initial slide state
    setCurrentSlide(api.selectedScrollSnap());

    // Listener for slide changes
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    // Cleanup listener on unmount
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        {/* Header Content */}
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-4xl lg:text-5xl font-semibold text-primary">
            See what our customer's saying
          </h2>
        </div>

        {/* Carousel Implementation */}
        <Carousel
          setApi={setApi}
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card
                    className={cn(
                      "bg-card flex flex-col h-full p-10 shadow-sm transition-transform duration-500 ease-in-out",
                      index === currentSlide ? 'scale-105 bg-card' : 'scale-90 opacity-70 bg-card/80' // Conditional scaling and opacity
                    )}
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      <span className="font-semibold text-foreground">{testimonial.rating.toFixed(1)}</span>
                      <span className="text-muted-foreground">Rated</span>
                      <div className="flex ml-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-4 h-4",
                              i < Math.round(testimonial.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            )}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground text-sm flex-grow mb-8">
                      {testimonial.text}
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center gap-3 mt-auto pt-6 border-t border-border">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Optional Navigation Buttons */}
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:inline-flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials; // Ensure the component name matches the file name if needed, or rename the file