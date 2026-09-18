import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { heroImage } from '@/data/images';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

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
      className="relative isolate min-h-[88vh] lg:min-h-[92vh] overflow-hidden bg-spa-charcoal text-spa-ivory flex flex-col justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={heroImage}
          alt="Calm and luxurious spa treatment room"
          className="h-full w-full object-cover object-center"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* Cinematic Scrim */}
        <div className="absolute inset-0 bg-spa-charcoal/45" />

        {/* Left-to-right gradient for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-spa-charcoal/90 via-spa-charcoal/60 to-spa-charcoal/25" />

        {/* Bottom gradient transition */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-spa-charcoal/80 to-transparent" />
      </div>

      {/* Main Content */}
      <Container className="relative flex w-full flex-col justify-center pt-28 pb-16 lg:pt-32 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-spa-gold-light/70" />
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-spa-gold-light">
              Spa Day · Indore, Madhya Pradesh
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-light leading-[1.05] tracking-tight text-spa-ivory">
            <span className="block">Relax.</span>
            <span className="block">Rejuvenate.</span>
            <span className="mt-1 block font-serif text-[0.9em] font-light leading-[1.08] text-spa-gold-light">
              <em className="italic font-light">Feel Renewed.</em>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-sm sm:text-base font-light leading-relaxed text-spa-text-light-secondary">
            Thoughtfully designed wellness experiences for rest, renewal, and
            everyday balance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
            <Button
              variant="secondary"
              onClick={() => scrollTo('#booking')}
              className="sm:w-auto"
            >
              <span>Book Your Experience</span>
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Button>

            <button
              type="button"
              onClick={() => scrollTo('#treatments')}
              className="group inline-flex h-12 items-center justify-center gap-2.5 border border-white/35 bg-transparent px-6 text-[11px] font-medium uppercase tracking-[0.20em] text-spa-ivory transition-all duration-300 hover:border-white hover:bg-white hover:text-spa-charcoal"
            >
              <span>Explore Treatments</span>
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </motion.div>
      </Container>

      {/* Bottom Information Shelf */}
      <Container className="relative flex items-center justify-between pb-8 pt-4 border-t border-white/10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[11px] uppercase tracking-[0.22em] text-spa-text-light-muted font-medium hidden sm:block"
        >
          Personalised wellness rituals
        </motion.p>

        <motion.button
          type="button"
          onClick={() => scrollTo('#about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="group flex items-center gap-3 text-spa-text-light-muted transition-colors duration-300 hover:text-spa-gold-light ml-auto sm:ml-0"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] uppercase tracking-[0.24em] font-medium">
            Scroll to explore
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-spa-gold-light">
            <ArrowDown
              size={13}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </span>
        </motion.button>
      </Container>
    </section>
  );
}