import { motion } from 'framer-motion';
import {
  Sparkles,
  Wind,
  HandHeart,
  Droplets,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';

interface Benefit {
  icon: typeof Sparkles;
  number: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Sparkles,
    number: '01',
    title: 'Personalised Care',
    description:
      'Every visit is thoughtfully shaped around your comfort, needs, and wellness goals.',
  },
  {
    icon: Wind,
    number: '02',
    title: 'Calm Atmosphere',
    description:
      'A peaceful space with soft lighting, natural textures, and a quiet sense of ease.',
  },
  {
    icon: HandHeart,
    number: '03',
    title: 'Professional Therapists',
    description:
      'Experienced hands and thoughtful attention to make every treatment meaningful.',
  },
  {
    icon: Droplets,
    number: '04',
    title: 'Wellness Rituals',
    description:
      'From warm towels to soothing details, every element is designed for relaxation.',
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-spa-cream py-16 md:py-20 lg:py-24"
    >
      <Container>
        {/* Section Heading */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="mb-4">
              <SectionLabel label="Why Spa Day" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] tracking-tight text-spa-charcoal">
              Care that begins <br />
              with <em className="font-light italic text-spa-gold-dark">quiet.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="max-w-md lg:pb-2"
          >
            <p className="text-sm sm:text-base leading-relaxed text-spa-text-secondary">
              From the atmosphere to the smallest details, everything is designed 
              to make your treatment a moment of calm and care.
            </p>
          </motion.div>
        </div>

        {/* Thin Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mt-10 sm:mt-12 h-px origin-left bg-spa-sand"
        />

        {/* 4-Pillar Arcade */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease,
                }}
                className={`group relative flex flex-col justify-between border border-spa-sand/70 bg-white/70 p-6 sm:p-7 transition-all duration-400 hover:bg-white hover:shadow-[0_12px_32px_rgba(27,25,23,0.06)] lg:border-y-0 lg:border-l-0 lg:bg-transparent lg:p-7 xl:p-8 ${
                  index === benefits.length - 1
                    ? 'lg:border-r-0'
                    : 'lg:border-r lg:border-spa-sand'
                }`}
              >
                <div>
                  {/* Top Row */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-spa-gold/40 bg-spa-cream/60 transition-colors duration-400 group-hover:border-spa-gold group-hover:bg-spa-gold">
                      <Icon
                        size={18}
                        strokeWidth={1.3}
                        className="text-spa-gold-dark transition-colors duration-400 group-hover:text-spa-ivory"
                      />
                    </div>

                    <span className="font-serif text-base text-spa-gold-dark/80 font-normal">
                      {benefit.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug text-spa-charcoal">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm font-light leading-relaxed text-spa-text-secondary">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Gold Line Indicator */}
                <span className="mt-6 block h-[1.5px] w-0 bg-spa-gold transition-all duration-500 ease-out group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mt-10 flex flex-col gap-3 border-t border-spa-sand pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-serif text-lg sm:text-xl italic text-spa-charcoal/80">
            A space to slow down, breathe, and be you.
          </p>

          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-spa-gold-dark">
            More than a spa
          </span>
        </motion.div>
      </Container>
    </section>
  );
}