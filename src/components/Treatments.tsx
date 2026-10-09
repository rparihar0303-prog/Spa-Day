import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  ArrowUpRight,
  X,
  CalendarDays,
} from 'lucide-react';
import { treatments, type Treatment } from '@/data/images';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Treatments() {
  const [selected, setSelected] = useState<Treatment | null>(null);

  const scrollToBooking = () => {
    setSelected(null);

    setTimeout(() => {
      document.querySelector('#booking')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 300);
  };

  return (
    <section
      id="treatments"
      className="relative overflow-hidden bg-spa-ivory py-16 md:py-20 lg:py-24"
    >
      <Container>
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="mb-4">
              <SectionLabel label="Our Treatments" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] tracking-tight text-spa-charcoal">
              Your moment of <br />
              <em className="font-light italic text-spa-gold-dark">renewal.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="flex max-w-lg flex-col gap-4 lg:pb-2"
          >
            <p className="text-sm sm:text-base leading-relaxed text-spa-text-secondary">
              Discover carefully considered treatments designed to restore
              balance, release tension, and leave you feeling refreshed.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mt-10 sm:mt-12 h-px origin-left bg-spa-sand"
        />

        {/* Treatments List */}
        <div className="mt-2 divide-y divide-spa-sand/80 border-b border-spa-sand/80">
          {treatments.map((treatment, index) => (
            <motion.article
              key={treatment.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease,
              }}
              className="group relative"
            >
              <button
                type="button"
                onClick={() => setSelected(treatment)}
                className="relative flex w-full items-center gap-4 py-5 text-left sm:gap-6 sm:py-6 lg:py-7 transition-colors"
                aria-label={`View details for ${treatment.name}`}
              >
                {/* Number */}
                <span className="w-7 shrink-0 font-serif text-base sm:text-lg text-spa-gold-dark/80">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Image Preview */}
                <div className="relative hidden h-16 w-24 shrink-0 overflow-hidden border border-spa-sand/80 sm:block lg:h-20 lg:w-32">
                  <motion.img
                    src={treatment.image}
                    alt={treatment.name}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-spa-charcoal/10 transition-colors duration-300 group-hover:bg-transparent" />
                </div>

                {/* Treatment Name and Description */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] font-normal leading-tight text-spa-charcoal transition-colors duration-300 group-hover:text-spa-gold-dark">
                    {treatment.name}
                  </h3>

                  <p className="mt-1.5 max-w-xl truncate text-xs sm:text-sm font-light leading-relaxed text-spa-text-secondary">
                    {treatment.description}
                  </p>
                </div>

                {/* Details (Desktop) */}
                <div className="hidden shrink-0 items-center gap-6 md:flex">
                  <div className="flex flex-col items-end gap-1">
                    <span className="flex items-center gap-1.5 text-xs text-spa-text-secondary">
                      <Clock
                        size={13}
                        strokeWidth={1.3}
                        className="text-spa-gold"
                      />
                      {treatment.duration}
                    </span>

                    <span className="text-xs font-medium text-spa-text-muted">
                      {treatment.price}
                    </span>
                  </div>
                </div>

                {/* Arrow Circle */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-spa-charcoal/15 transition-all duration-300 group-hover:border-spa-gold group-hover:bg-spa-gold sm:h-10 sm:w-10">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.3}
                    className="text-spa-charcoal transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-spa-ivory"
                  />
                </div>

                {/* Bottom Gold Line */}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-spa-gold transition-all duration-500 ease-out group-hover:w-full" />
              </button>

              {/* Mobile Meta Information */}
              <div className="flex items-center gap-4 pb-4 pl-11 md:hidden">
                <span className="flex items-center gap-1 text-[11px] text-spa-text-secondary">
                  <Clock
                    size={12}
                    strokeWidth={1.3}
                    className="text-spa-gold"
                  />
                  {treatment.duration}
                </span>

                <span className="text-[11px] text-spa-text-muted">
                  {treatment.price}
                </span>

                <span className="text-[10px] uppercase tracking-[0.18em] text-spa-gold-dark font-medium ml-auto">
                  View details
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-serif text-lg sm:text-xl italic text-spa-charcoal/80">
            Take time for yourself.
          </p>

          <Button
            variant="text"
            onClick={scrollToBooking}
          >
            <span>Book an appointment</span>
            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Button>
        </motion.div>
      </Container>

      {/* Treatment Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-spa-charcoal/75 p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} treatment details`}
          >
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-spa-ivory border border-spa-sand shadow-2xl"
            >
              {/* Modal Image */}
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <motion.img
                  src={selected.image}
                  alt={selected.name}
                  className="h-full w-full object-contain object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-spa-charcoal/60 via-transparent to-spa-charcoal/20" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close treatment details"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-spa-charcoal"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>

                {/* Image Label */}
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-white/90 font-medium">
                    Spa Day Treatment
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.24em] text-spa-gold-dark font-medium">
                      A moment for you
                    </span>

                    <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-light text-spa-charcoal">
                      {selected.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-spa-text-secondary font-light">
                    {selected.description}
                  </p>

                  {/* Treatment Information */}
                  <div className="grid grid-cols-2 gap-4 border-y border-spa-sand py-4">
                    <div>
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.20em] text-spa-text-muted">
                        Duration
                      </span>

                      <div className="flex items-center gap-1.5 text-sm font-medium text-spa-text-primary">
                        <Clock
                          size={14}
                          strokeWidth={1.3}
                          className="text-spa-gold"
                        />
                        {selected.duration}
                      </div>
                    </div>

                    <div>
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.20em] text-spa-text-muted">
                        Price
                      </span>

                      <p className="text-sm font-medium text-spa-text-primary">
                        {selected.price}
                      </p>
                    </div>
                  </div>

                  {/* Modal CTA */}
                  <a
                    href={`https://wa.me/918889456484?text=${encodeURIComponent(
                      `Hello SPA DAY, I would like to enquire about the ${selected.name}. Please share the availability and booking details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2.5 border border-spa-charcoal bg-spa-charcoal px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.20em] text-spa-ivory shadow-sm transition-all duration-400 ease-[0.16,1,0.3,1] hover:border-spa-gold hover:bg-spa-gold hover:text-spa-ivory mt-2"
                  >
                    <CalendarDays size={14} strokeWidth={1.3} />
                    <span>Book This Treatment</span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.3}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}