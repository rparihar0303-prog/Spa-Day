import { motion } from 'framer-motion';
import {
  Sparkles,
  Wind,
  HandHeart,
  Droplets,
  ArrowUpRight,
} from 'lucide-react';

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
      className="relative overflow-hidden bg-[#f3eee7] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#ad895b]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9b754c]">
                Why Spa Day
              </span>
            </div>

            <h2 className="max-w-2xl font-serif text-[2.8rem] font-light leading-[0.98] tracking-[-0.04em] text-[#24211e] sm:text-6xl lg:text-[5rem]">
              Care that begins
              <br />
              with{' '}
              <em className="text-[#a77c4c]">
                quiet.
              </em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="max-w-md lg:pb-2"
          >
            <p className="text-sm leading-[1.9] text-[#24211e]/60 sm:text-base">
              We focus on the atmosphere, personal attention, and thoughtful
              details that turn every treatment into a moment of calm.
            </p>
          </motion.div>
        </div>

        {/* Thin Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="mt-12 h-px origin-left bg-[#24211e]/15 sm:mt-16"
        />

        {/* Benefit Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease,
                }}
                whileHover={{ y: -6 }}
                className={`group relative min-h-[255px] border border-[#24211e]/10 bg-[#f8f5f0] p-6 transition-all duration-500 hover:border-[#ad895b]/50 hover:bg-[#fcfaf7] hover:shadow-[0_18px_45px_rgba(60,45,30,0.08)] sm:p-7 lg:min-h-[285px] lg:border-y-0 lg:border-l-0 lg:p-8 ${
                  index === benefits.length - 1
                    ? 'lg:border-r-0'
                    : 'lg:border-r'
                }`}
              >
                {/* Top Row */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ad895b]/40 bg-[#f3eee7] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#ad895b]">
                    <Icon
                      size={20}
                      strokeWidth={1.2}
                      className="text-[#a77c4c] transition-colors duration-500 group-hover:text-white"
                    />
                  </div>

                  <span className="font-serif text-xl text-[#a77c4c]/70">
                    {benefit.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="max-w-[210px] font-serif text-[1.5rem] leading-[1.1] text-[#24211e]">
                  {benefit.title}
                </h3>

                <p className="mt-4 max-w-[240px] text-sm leading-[1.75] text-[#24211e]/55">
                  {benefit.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#24211e]/10 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.2}
                    className="text-[#a77c4c]"
                  />
                </div>

                {/* Bottom Gold Line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ad895b] transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Small Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-10 flex flex-col gap-3 border-t border-[#24211e]/15 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-serif text-xl italic text-[#24211e]/70 sm:text-2xl">
            A space to slow down, breathe, and be you.
          </p>

          <span className="text-[10px] uppercase tracking-[0.25em] text-[#9b754c]">
            More than a spa
          </span>
        </motion.div>
      </div>
    </section>
  );
}