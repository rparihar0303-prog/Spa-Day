import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'How can I book an appointment?',
    answer:
      'Please contact SPA DAY using our booking enquiry form above, or connect directly via telephone or WhatsApp concierge. We will confirm your preferred timing promptly.',
  },
  {
    question: 'Where is SPA DAY located?',
    answer:
      'SPA DAY is situated at Shop Office No. 101, N.M. Tower, 6/1/3, 209, Racecourse Road, Opposite Om Namkeen, 56 Shop, Indore, Madhya Pradesh, India.',
  },
  {
    question: 'What treatments are available?',
    answer:
      'Our menu features full-body Swedish massage, targeted Deep Tissue therapy, organic Aromatherapy, Head & Shoulder tension release, revitalizing Body Polish, and dedicated Couple Spa journeys.',
  },
  {
    question: 'What are the operating hours?',
    answer:
      'Our operating hours will be confirmed upon reservation. Flexible morning, afternoon, and evening slots are available across all days.',
  },
  {
    question: 'How can I ask about prices and packages?',
    answer:
      'Individual treatment pricing starts from ₹1200. You can view prices in our Treatments directory above or contact our concierge for bespoke multi-session packages.',
  },
  {
    question: 'Can I request a preferred appointment time?',
    answer:
      'Yes, you can specify your preferred date and time slot (Morning, Afternoon, Evening, or Night) directly in the reservation console. Our team will verify and hold the time for you.',
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
    <div className="border-b border-spa-sand/80 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left group focus-visible:ring-1 focus-visible:ring-spa-gold rounded-sm outline-none"
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-serif text-base sm:text-lg lg:text-xl font-light text-spa-charcoal transition-colors duration-300 group-hover:text-spa-gold-dark">
          {item.question}
        </span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-spa-sand bg-white/70 text-spa-gold transition-colors duration-300 group-hover:border-spa-gold">
          {isOpen ? (
            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
          ) : (
            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="pb-5 pr-8 text-sm sm:text-[15px] font-light leading-relaxed text-spa-text-secondary">
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
    <section
      id="faq"
      className="relative overflow-hidden bg-spa-cream py-16 md:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Reassurance */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel label="Inquiries & Details" />
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-spa-charcoal">
              Frequently Asked{' '}
              <em className="italic font-light text-spa-gold-dark">
                Questions
              </em>
            </h2>

            <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-spa-text-secondary">
              Helpful answers to guide your visit, reservations, and treatment
              preferences at our Indore retreat.
            </p>

            <div className="mt-8 border-t border-spa-sand/80 pt-6">
              <p className="text-xs font-light text-spa-text-muted">
                Need more information?
              </p>
              <a
                href="#booking"
                className="mt-2 group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-spa-charcoal hover:text-spa-gold transition-colors"
              >
                <span>Ask our concierge</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-spa-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Accordion Rows */}
          <motion.div
            className="border-t border-spa-sand/80 lg:col-span-7 lg:border-t-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {faqItems.map((item, i) => (
              <FaqRow
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
