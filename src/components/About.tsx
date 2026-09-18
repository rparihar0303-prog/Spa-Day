import { motion, useScroll, useTransform, type Variants, } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { aboutImageMain, aboutImageDetail } from '@/data/images';

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle image movement while scrolling
  const mainImageY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const detailImageY = useTransform(scrollYProgress, [0, 1], [55, -25]);

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-ivory py-28 md:py-36 lg:py-44"
    >
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full border border-gold/10" />
      <div className="pointer-events-none absolute -right-24 top-36 h-72 w-72 rounded-full border border-gold/10" />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-20 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          {/* ========================================
              IMAGE COMPOSITION
          ======================================== */}
          <motion.div
            className="relative lg:col-span-7"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Top Decorative Label */}
            <div className="absolute -top-10 left-0 hidden items-center gap-3 md:flex">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/45">
                A space for stillness
              </span>
            </div>

            <div className="relative ml-0 md:ml-4 lg:ml-0">
              {/* Decorative Frame Behind Image */}
              <motion.div
                className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-gold/50 md:-left-7 md:-top-7 md:h-36 md:w-36"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {/* Main Image Wrapper */}
              <div className="group relative h-[390px] overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[650px]">
                <motion.img
                  src={aboutImageMain}
                  alt="Contemporary spa room with a massage bed and organic decor"
                  style={{ y: mainImageY }}
                  className="h-[115%] w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                  loading="lazy"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent opacity-70" />

                {/* Image Number */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 text-ivory/80">
                  <span className="text-[10px] tracking-[0.25em]">01</span>
                  <span className="h-px w-8 bg-ivory/50" />
                  <span className="text-[10px] uppercase tracking-[0.25em]">
                    The space
                  </span>
                </div>
              </div>

              {/* Floating Detail Image */}
              <motion.div
                style={{ y: detailImageY }}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -bottom-12 -right-3 z-20 h-48 w-40 sm:-right-6 sm:h-60 sm:w-48 md:-bottom-14 md:-right-10 md:h-72 md:w-60 lg:-right-12 lg:h-80 lg:w-64"
              >
                <div className="group relative h-full w-full overflow-hidden border-[5px] border-ivory bg-ivory shadow-[0_20px_60px_rgba(40,35,28,0.18)]">
                  <img
                    src={aboutImageDetail}
                    alt="Plush towels, a scented candle, and a floral vase for a calming ambience"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Detail Image Overlay */}
                  <div className="absolute inset-0 bg-charcoal/5 transition-colors duration-500 group-hover:bg-transparent" />
                </div>

                {/* Floating Caption */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-5 -left-7 hidden items-center gap-2 bg-[#f7f3ed] px-4 py-3 shadow-lg sm:flex"
                >
                  <Sparkles
                    size={13}
                    strokeWidth={1.3}
                    className="text-gold-dark"
                  />

                  <span className="text-[9px] uppercase tracking-[0.18em] text-charcoal/65">
                    Thoughtful details
                  </span>
                </motion.div>
              </motion.div>

              {/* Right Decorative Line */}
              <div className="absolute -right-5 top-16 hidden h-40 w-px bg-gold/25 lg:block" />
            </div>
          </motion.div>

          {/* ========================================
              TEXT CONTENT
          ======================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative lg:col-span-5"
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-gold/70" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-dark">
                The Spa Day Experience
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="max-w-xl font-serif text-[2.7rem] font-light leading-[1.04] tracking-[-0.04em] text-charcoal sm:text-5xl md:text-6xl lg:text-[3.7rem] xl:text-[4.1rem]"
            >
              A quieter way
              <br />
              <span className="italic text-charcoal/80">
                to care for yourself.
              </span>
            </motion.h2>

            {/* Small Divider */}
            <motion.div
              variants={itemVariants}
              className="my-8 h-px w-16 bg-gold/50"
            />

            {/* Body Content */}
            <motion.div
              variants={itemVariants}
              className="max-w-lg space-y-6"
            >
              <p className="text-[15px] font-light leading-[1.9] text-charcoal/65 md:text-base">
                SPA DAY is a place to slow down, take a breath, and set aside
                the rush of the day. Our space in Indore is designed to feel
                calm from the moment you walk in — soft light, natural
                textures, and a quietness that lets you settle.
              </p>

              <p className="text-[15px] font-light leading-[1.9] text-charcoal/65 md:text-base">
                Every detail, from the atmosphere to the treatment itself, is
                built around comfort and personal care. No rush, no pressure —
                just time set aside for you.
              </p>
            </motion.div>

            {/* Philosophy Link */}
            <motion.button
              variants={itemVariants}
              type="button"
              onClick={() => scrollTo('#treatments')}
              className="group mt-9 inline-flex items-center gap-4 border-b border-charcoal/25 pb-3 text-charcoal transition-colors duration-500 hover:border-gold-dark hover:text-gold-dark"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
                Discover Our Philosophy
              </span>

              <ArrowRight
                size={16}
                strokeWidth={1.2}
                className="transition-transform duration-500 group-hover:translate-x-2"
              />
            </motion.button>

            {/* Premium CTA */}
            <motion.div variants={itemVariants} className="mt-12">
              <button
                type="button"
                onClick={() => scrollTo('#booking')}
                className="group inline-flex items-center gap-5 bg-charcoal px-7 py-4 text-ivory transition-all duration-500 hover:bg-gold-dark"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.24em]">
                  Book or Enquire
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={1.2}
                  className="transition-transform duration-500 group-hover:translate-x-2"
                />
              </button>
            </motion.div>

            {/* Vertical Side Text */}
            <div className="absolute -right-5 top-0 hidden [writing-mode:vertical-rl] lg:block">
              <span className="text-[9px] uppercase tracking-[0.35em] text-charcoal/25">
                Wellness · Beauty · Balance
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}