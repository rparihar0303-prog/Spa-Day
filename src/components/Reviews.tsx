import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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

  // Automatic testimonial change
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
      className="relative min-h-[620px] overflow-hidden bg-[#1d1c1a] text-[#f4f0e9] md:min-h-[650px]"
    >
      {/* Top line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-white/[0.08]" />

      {/* Huge background number */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          className="pointer-events-none absolute -bottom-16 left-[-20px] select-none font-serif text-[18rem] font-light leading-none text-white/[0.025] md:text-[25rem]"
        >
          0{active + 1}
        </motion.div>
      </AnimatePresence>

      {/* Decorative circle */}
      <div className="pointer-events-none absolute -right-[180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#b89463]/10 md:h-[650px] md:w-[650px]" />

      <div className="relative mx-auto flex min-h-[620px] max-w-[1500px] flex-col px-6 py-20 md:min-h-[650px] md:px-10 md:py-24 lg:px-16">
        
        {/* Header */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#b89463]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#c7a878]">
              Guest Reviews
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.3em] text-white/25 md:block">
            Voices from SPA DAY
          </span>
        </motion.div>

        {/* Main content */}
        <div className="my-auto grid items-center gap-12 py-14 lg:grid-cols-12 lg:gap-20">

          {/* Left navigation */}
          <div className="flex gap-5 lg:col-span-2 lg:flex-col lg:gap-4">
            {testimonials.map((item, index) => {
              const isActive = active === index;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className="group flex items-center gap-3 text-left"
                  aria-label={`Show review ${index + 1}`}
                >
                  <span
                    className={`h-px transition-all duration-500 ${
                      isActive
                        ? 'w-9 bg-[#b89463]'
                        : 'w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/40'
                    }`}
                  />

                  <span
                    className={`font-serif text-sm transition-colors duration-300 ${
                      isActive
                        ? 'text-[#c7a878]'
                        : 'text-white/25 group-hover:text-white/50'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quote */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Quote mark */}
                <div className="mb-5 font-serif text-6xl font-light leading-none text-[#b89463]/60 md:text-7xl">
                  “
                </div>

                <blockquote className="max-w-[900px] font-serif text-[2rem] font-light italic leading-[1.25] tracking-[-0.035em] text-[#f4f0e9] sm:text-4xl md:text-5xl lg:text-[3.8rem]">
                  {testimonial.quote}
                </blockquote>

                {/* Author */}
                <div className="mt-10 flex items-center gap-5">
                  <div className="h-px w-10 bg-[#b89463]/60" />

                  <div>
                    <p className="text-sm font-light tracking-wide text-white/90">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-[#b89463]">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right index */}
          <div className="hidden justify-end lg:col-span-2 lg:flex">
            <div className="flex flex-col items-end">
              <span className="font-serif text-5xl font-light text-white/80">
                0{active + 1}
              </span>

              <span className="mt-2 text-[9px] uppercase tracking-[0.3em] text-white/25">
                of 03
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          className="flex items-center justify-between border-t border-white/10 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-4">
            {/* Progress */}
            <div className="h-px w-24 overflow-hidden bg-white/10">
              <motion.div
                key={active}
                initial={{ width: 0 }}
                animate={{
                  width: `${((active + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.6 }}
                className="h-full bg-[#b89463]"
              />
            </div>

            <span className="text-[9px] uppercase tracking-[0.28em] text-white/25">
              Guest stories
            </span>
          </div>

          <a
            href="#contact"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/65 transition-colors duration-300 hover:text-[#c7a878]"
          >
            Book your experience

            <ArrowUpRight
              size={14}
              strokeWidth={1}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.08]" />
    </section>
  );
}