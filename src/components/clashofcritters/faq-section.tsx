import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection({
  title = 'FAQ',
  items,
  className,
}: {
  title?: string;
  items: FaqItem[];
  className?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <Accordion
        type="single"
        collapsible
        className="mt-6 w-full rounded-lg border border-[#E7C980] bg-[#FFF4DC]/70 px-5"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className="border-[#E7C980]"
          >
            <AccordionTrigger className="cursor-pointer py-4 text-left text-base font-semibold text-[#1F241D] hover:text-[#E76825] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-7 text-[#4E4A38]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
