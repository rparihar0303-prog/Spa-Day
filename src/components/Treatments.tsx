import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  ArrowUpRight,
  X,
  Sparkles,
  CalendarDays,
} from 'lucide-react';
import { treatments, type Treatment } from '@/data/images';

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
      className="relative overflow-hidden bg-[#f8f5f0] py-20 sm:py-24 lg:py-32"
    >
      {/* Subtle Background Detail */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#b5946b]/10" />
      <div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full border border-[#b5946b]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b5946b]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9a754c]">
                Our Treatments
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-[3rem] font-light leading-[0.98] tracking-[-0.04em] text-[#24211e] sm:text-6xl lg:text-[5rem]">
              Your moment of
              <br />
              <em className="text-[#a77c4c]">renewal.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="flex max-w-lg flex-col gap-5 lg:pb-2"
          >
            <p className="text-sm leading-[1.9] text-[#24211e]/60 sm:text-base">
              Discover carefully considered treatments designed to restore
              balance, release tension, and leave you feeling refreshed.
            </p>

            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#a77c4c]">
              <Sparkles size={14} strokeWidth={1.2} />
              <span>Designed around your wellbeing</span>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="mt-12 h-px origin-left bg-[#24211e]/15 sm:mt-16"
        />

        {/* Treatments List */}
        <div className="mt-3">
          {treatments.map((treatment, index) => (
            <motion.article
              key={treatment.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease,
              }}
              className="group relative border-b border-[#24211e]/10"
            >
              <button
                type="button"
                onClick={() => setSelected(treatment)}
                className="relative flex w-full items-center gap-4 py-6 text-left sm:gap-7 sm:py-8 lg:py-9"
              >
                {/* Number */}
                <span className="w-7 shrink-0 font-serif text-lg text-[#a77c4c]/70 sm:w-10 sm:text-xl">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Image Preview */}
                <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden sm:block lg:h-24 lg:w-36">
                  <motion.img
                    src={treatment.image}
                    alt={treatment.name}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease }}
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-[#24211e]/10 transition-colors duration-500 group-hover:bg-transparent" />
                </div>

                {/* Treatment Name and Description */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-[1.65rem] font-light leading-tight text-[#24211e] transition-colors duration-400 group-hover:text-[#a77c4c] sm:text-3xl lg:text-[2.2rem]">
                    {treatment.name}
                  </h3>

                  <p className="mt-2 max-w-lg truncate text-xs font-light leading-relaxed text-[#24211e]/50 sm:text-sm">
                    {treatment.description}
                  </p>
                </div>

                {/* Details */}
                <div className="hidden shrink-0 items-center gap-8 md:flex">
                  <div className="flex flex-col items-end gap-1">
                    <span className="flex items-center gap-2 text-xs text-[#24211e]/50">
                      <Clock
                        size={14}
                        strokeWidth={1.2}
                        className="text-[#a77c4c]"
                      />
                      {treatment.duration}
                    </span>

                    <span className="text-sm text-[#24211e]/65">
                      {treatment.price}
                    </span>
                  </div>
                </div>

                {/* Arrow Circle */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#24211e]/15 transition-all duration-500 group-hover:border-[#a77c4c] group-hover:bg-[#a77c4c] sm:h-12 sm:w-12">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.2}
                    className="text-[#24211e]/60 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>

                {/* Hover Gold Line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#b5946b] transition-all duration-700 group-hover:w-full" />
              </button>

              {/* Mobile Meta Information */}
              <div className="flex items-center gap-5 pb-5 pl-11 md:hidden">
                <span className="flex items-center gap-1.5 text-[11px] text-[#24211e]/50">
                  <Clock
                    size={13}
                    strokeWidth={1.2}
                    className="text-[#a77c4c]"
                  />
                  {treatment.duration}
                </span>

                <span className="text-[11px] text-[#24211e]/50">
                  {treatment.price}
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#a77c4c]">
                  View details
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-serif text-xl italic text-[#24211e]/65 sm:text-2xl">
            Take time for yourself.
          </p>

          <button
            type="button"
            onClick={scrollToBooking}
            className="group inline-flex w-fit items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#24211e] transition-colors duration-300 hover:text-[#a77c4c]"
          >
            <span>Book an appointment</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </motion.div>
      </div>

      {/* Treatment Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#24211e]/75 p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} treatment details`}
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              transition={{ duration: 0.5, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-[#f8f5f0] shadow-2xl"
            >
              {/* Modal Image */}
              <div className="relative h-56 overflow-hidden sm:h-72 md:h-80">
                <motion.img
                  src={selected.image}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#24211e]/55 via-transparent to-[#24211e]/10" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close treatment details"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#24211e] sm:right-6 sm:top-6"
                >
                  <X size={18} strokeWidth={1.3} />
                </button>

                {/* Image Label */}
                <div className="absolute bottom-5 left-6 sm:bottom-7 sm:left-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/75">
                    Spa Day Treatment
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-9 md:p-11">
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#a77c4c]">
                      A moment for you
                    </span>

                    <h3 className="mt-3 font-serif text-4xl font-light leading-none text-[#24211e] sm:text-5xl">
                      {selected.name}
                    </h3>
                  </div>

                  <p className="max-w-2xl text-sm leading-[1.9] text-[#24211e]/60 sm:text-base">
                    {selected.description}
                  </p>

                  {/* Treatment Information */}
                  <div className="grid grid-cols-2 gap-4 border-y border-[#24211e]/10 py-5 sm:flex sm:items-center sm:gap-12">
                    <div>
                      <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#24211e]/40">
                        Duration
                      </span>

                      <div className="flex items-center gap-2 text-sm text-[#24211e]/70">
                        <Clock
                          size={15}
                          strokeWidth={1.2}
                          className="text-[#a77c4c]"
                        />
                        {selected.duration}
                      </div>
                    </div>

                    <div>
                      <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#24211e]/40">
                        Price
                      </span>

                      <p className="text-sm text-[#24211e]/70">
                        {selected.price}
                      </p>
                    </div>
                  </div>

                  {/* Modal CTA */}
                  <button
                    type="button"
                    onClick={scrollToBooking}
                    className="group flex w-full items-center justify-center gap-3 bg-[#24211e] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white transition-all duration-400 hover:bg-[#a77c4c]"
                  >
                    <CalendarDays size={15} strokeWidth={1.2} />
                    <span>Book This Treatment</span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.2}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}