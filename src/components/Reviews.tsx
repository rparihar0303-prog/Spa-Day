import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';

interface Testimonial {
  quote: string;
  name: string;
  treatment: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'The whole experience felt calm from start to finish. I left feeling lighter than I had in weeks.',
    name: 'Ananya R.',
    treatment: 'Swedish Massage',
  },
  {
    quote:
      'A beautiful, quiet space and a really thoughtful session. The aromatherapy massage was exactly what I needed.',
    name: 'Karan M.',
    treatment: 'Aromatherapy',
  },
  {
    quote:
      'We came for the couple spa and it was such a peaceful, unhurried experience. Highly recommend for a quiet afternoon.',
    name: 'Priya & Rohan',
    treatment: 'Couple Spa',
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);

  // Automatic testimonial change every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-spa-charcoal text-spa-ivory border-y border-white/[0.08] py-16 md:py-20 lg:py-24"
    >
      <Container>
        {/* Section Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <SectionLabel label="Guest Reflections" light />
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-light text-spa-ivory tracking-tight">
              Voices of <em className="italic font-light text-spa-gold-light">Stillness</em>
            </h2>
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-spa-text-light-muted">
            0{active + 1} &mdash; 0{testimonials.length}
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid items-center gap-10 py-12 lg:grid-cols-12 lg:gap-16">
          {/* Left navigation tabs */}
          <div className="flex gap-6 lg:col-span-2 lg:flex-col lg:gap-5">
            {testimonials.map((item, index) => {
              const isActive = active === index;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className="group flex items-center gap-3 text-left focus-visible:ring-1 focus-visible:ring-spa-gold rounded-sm outline-none"
                  aria-label={`Show review ${index + 1}`}
                >
                  <span
                    className={`h-px transition-all duration-500 ${
                      isActive
                        ? 'w-10 bg-spa-gold'
                        : 'w-4 bg-white/20 group-hover:w-7 group-hover:bg-white/40'
                    }`}
                  />
                  <span
                    className={`font-serif text-sm transition-colors duration-300 ${
                      isActive
                        ? 'text-spa-gold-light font-medium'
                        : 'text-spa-text-light-muted group-hover:text-spa-ivory'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Center Quote */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-light leading-[1.3] text-spa-ivory tracking-tight">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-8 bg-spa-gold" />
                  <div>
                    <p className="text-sm sm:text-base font-normal tracking-wide text-spa-ivory">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.22em] text-spa-gold-light">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right index indicator */}
          <div className="hidden justify-end lg:col-span-2 lg:flex">
            <div className="flex flex-col items-end">
              <span className="font-serif text-5xl font-light text-spa-ivory/80">
                0{active + 1}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-spa-text-light-muted">
                of 0{testimonials.length}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row: Progress & CTA */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-24 overflow-hidden bg-white/10 rounded-full">
              <motion.div
                key={active}
                initial={{ width: 0 }}
                animate={{
                  width: `${((active + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.6 }}
                className="h-full bg-spa-gold"
              />
            </div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-spa-text-light-muted">
              Guest Reflections
            </span>
          </div>

          <a
            href="#booking"
            className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-spa-text-light-secondary transition-colors duration-300 hover:text-spa-gold-light"
          >
            <span>Reserve your session</span>
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-spa-gold"
            />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}