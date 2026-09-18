import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { heroImage } from '@/data/images';

export default function Hero() {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#24211d] text-ivory"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={heroImage}
          alt="Calm and luxurious spa treatment room"
          className="h-full w-full object-cover object-center"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-[#171511]/35" />

        {/* Left-to-right gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171511]/80 via-[#171511]/45 to-[#171511]/30" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#171511]/70 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] items-center px-6 pb-28 pt-32 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-7 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-gold-light/80" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-light/90 sm:text-[11px]">
              Spa Day · Indore, Madhya Pradesh
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="max-w-3xl text-[3.25rem] font-light leading-[0.98] tracking-[-0.045em] text-ivory text-shadow-soft sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            <span className="block">Relax.</span>
            <span className="block">Rejuvenate.</span>

            <em className="mt-2 block font-serif text-[0.86em] font-light leading-[1.05] tracking-[-0.035em] text-gold-light">
              Feel Renewed.
            </em>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-md text-sm font-light leading-7 text-ivory/75 sm:text-base">
            Thoughtfully designed wellness experiences for rest, renewal, and
            everyday balance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => scrollTo('#booking')}
              className="group inline-flex h-[54px] w-full items-center justify-center gap-4 bg-gold px-7 text-[10px] font-medium uppercase tracking-[0.22em] text-ivory transition-all duration-500 hover:bg-gold-dark sm:w-auto"
            >
              <span>Book Your Experience</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('#treatments')}
              className="group inline-flex h-[54px] w-full items-center justify-center gap-3 border-b border-ivory/45 px-1 text-[10px] font-medium uppercase tracking-[0.22em] text-ivory/90 transition-all duration-500 hover:border-gold-light hover:text-gold-light sm:w-auto"
            >
              <span>Explore Treatments</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Left Information */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute bottom-9 left-6 z-10 hidden sm:left-10 sm:block lg:left-16"
      >
        <p className="text-[9px] uppercase tracking-[0.25em] text-ivory/45">
          Personalised wellness rituals
        </p>
      </motion.div>

      {/* Bottom Right Scroll Indicator */}
      <motion.button
        type="button"
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.7,
          duration: 1,
        }}
        className="group absolute bottom-8 right-6 z-10 flex items-center gap-4 text-ivory/55 transition-colors duration-300 hover:text-gold-light sm:right-10 lg:right-16"
      >
        <span className="text-[9px] uppercase tracking-[0.28em]">
          Scroll to explore
        </span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 transition-all duration-500 group-hover:border-gold-light/70">
          <ArrowDown
            size={14}
            strokeWidth={1.3}
            className="transition-transform duration-500 group-hover:translate-y-1"
          />
        </span>
      </motion.button>

      {/* Subtle Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-ivory/10" />
    </section>
  );
}