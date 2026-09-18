import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'How can I book an appointment?',
    answer:
      'Please contact SPA DAY using the confirmed phone number, WhatsApp number, or booking form once these details are available.',
  },
  {
    question: 'Where is SPA DAY located?',
    answer:
      'SPA DAY is located at Shop Office No. 101, N.M. Tower, 6/1/3, 209, Racecourse Road, Opposite Om Namkeen, 56 Shop, Indore, Madhya Pradesh, India.',
  },
  {
    question: 'What treatments are available?',
    answer:
      'Our menu includes Swedish massage, deep tissue massage, aromatherapy, head and shoulder therapy, body polish, and couple spa sessions. Full treatment details will be added once the final service list is confirmed.',
  },
  {
    question: 'What are the opening hours?',
    answer:
      'Our opening hours will be updated once confirmed by SPA DAY.',
  },
  {
    question: 'How can I ask about prices?',
    answer:
      'Please contact SPA DAY for the latest treatment details and prices.',
  },
  {
    question: 'Can I request a preferred appointment time?',
    answer:
      'You can share your preferred date and time through the enquiry form. Availability will need to be confirmed by SPA DAY.',
  },
];

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-taupe/15">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-serif font-light text-charcoal pr-4 group-hover:text-gold-dark transition-colors duration-400">
          {item.question}
        </span>
        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 text-gold">
          {isOpen ? (
            <Minus className="h-4 w-4" strokeWidth={1} />
          ) : (
            <Plus className="h-4 w-4" strokeWidth={1} />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="pb-6 pr-12 text-sm md:text-base font-light text-charcoal/50 leading-[1.8]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 md:py-36 bg-cream">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <SectionHeading
          label="FAQ"
          title="Questions you may have"
          align="center"
        />

        <div className="mt-12 border-t border-taupe/15">
          {faqItems.map((item, i) => (
            <FaqRow
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
