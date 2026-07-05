import type { GuideFaq } from '@/data/rolltodefend/types';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export function FaqSection({
  title = 'FAQ',
  items,
  className,
}: {
  title?: string;
  items: GuideFaq[];
  className?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-[#3A4F2D] bg-[#182215] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#FFF2C5]">
        {title}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mt-6 w-full rounded-lg border border-[#3A4F2D] bg-[#10140F] px-5"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className="border-[#3A4F2D]"
          >
            <AccordionTrigger className="cursor-pointer py-4 text-left text-base font-semibold text-[#F9FFF1] hover:text-[#B7F44A] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[#DCE9D2] text-sm leading-7">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
