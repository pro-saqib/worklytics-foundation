import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';


// Data for the FAQs based on the image
const faqData = [
  {
    question: 'What payment options do you offer?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'How to start course on Mobile?',
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'How to find missing course?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    question: 'How to download course certificate?',
    answer:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    question: 'How to gift course to friend?',
    answer:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container  px-4 mx-auto max-w-4xl px-0">
        
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-semibold text-primary text-center mb-12 md:mb-16 leading-tight">
          Got Questions? We’ve Got Answers.
        </h2>

        {/* Accordion Implementation */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={cn(
                "border border-border rounded-lg bg-card overflow-hidden",
                "group",
                "data-[state=open]:shadow-sm"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "flex justify-between items-center w-full p-6 text-left font-medium text-base md:text-lg hover:no-underline",
                  "[&>svg]:hidden"
                )}
              >
                {item.question}
                <span className="ml-4 flex-shrink-0">
                  <ArrowUpRight className="h-5 w-5 text-accent transition-transform duration-200 group-data-[state=open]:hidden" />
                  <X className="h-5 w-5 text-primary transition-transform duration-200 hidden group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent
                className="px-6 pb-6 pt-0 text-sm text-muted-foreground"
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;