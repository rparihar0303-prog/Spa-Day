import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { aboutImageMain, aboutImageDetail } from '@/data/images';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle image movement while scrolling
  const mainImageY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const detailImageY = useTransform(scrollYProgress, [0, 1], [40, -20]);

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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-spa-ivory py-16 md:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ========================================
              IMAGE COMPOSITION (Left 6-7 cols)
          ======================================== */}
          <motion.div
            className="relative lg:col-span-6 xl:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="relative pb-10 sm:pb-12">
              {/* Main Image Wrapper */}
              <div className="group relative h-[360px] sm:h-[420px] md:h-[480px] overflow-hidden border border-spa-sand/80 shadow-[0_12px_36px_rgba(27,25,23,0.06)]">
                <motion.img
                  src={aboutImageMain}
                  alt="Contemporary spa room with a massage bed and organic decor"
                  style={{ y: mainImageY }}
                  className="h-[115%] w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Image Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-spa-charcoal/30 via-transparent to-transparent opacity-60" />

                {/* Image Number Tag */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2.5 text-spa-ivory/90">
                  <span className="text-[10px] tracking-[0.20em] font-medium">01</span>
                  <span className="h-px w-6 bg-spa-ivory/60" />
                  <span className="text-[10px] uppercase tracking-[0.22em] font-light">
                    The Space
                  </span>
                </div>
              </div>

              {/* Floating Detail Inset Image */}
              <motion.div
                style={{ y: detailImageY }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -bottom-2 right-2 sm:-bottom-4 sm:right-4 z-20 h-40 w-36 sm:h-52 sm:w-44 md:h-60 md:w-52"
              >
                <div className="group relative h-full w-full overflow-hidden border-4 border-spa-ivory bg-spa-ivory shadow-[0_16px_40px_rgba(27,25,23,0.12)]">
                  <img
                    src={aboutImageDetail}
                    alt="Plush towels, a scented candle, and a floral vase for a calming ambience"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-spa-charcoal/5 transition-colors duration-300 group-hover:bg-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ========================================
              TEXT CONTENT (Right 5-6 cols)
          ======================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative lg:col-span-6 xl:col-span-5"
          >
            {/* Eyebrow Kicker */}
            <motion.div variants={itemVariants} className="mb-4">
              <SectionLabel label="The Spa Day Experience" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] tracking-tight text-spa-charcoal"
            >
              A quieter way <br />
              <em className="font-light italic text-spa-gold-dark">
                to care for yourself.
              </em>
            </motion.h2>

            {/* Hairline Divider */}
            <motion.div
              variants={itemVariants}
              className="my-6 h-px w-14 bg-spa-gold/60"
            />

            {/* High-Contrast Body Copy */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-sm sm:text-[15px] font-light leading-relaxed text-spa-text-secondary"
            >
              <p>
                SPA DAY is a sanctuary of calm in Indore, where you can slow down,
                unwind, and take a pause from everyday life. Thoughtfully designed 
                to help you relax and reconnect with your inner balance.
              </p>

              <p>
                Every detail, from the atmosphere to each treatment, is thoughtfully 
                designed around your comfort and care. No rush, no pressure—just time dedicated to you.
              </p>
            </motion.div>

            {/* Action Group */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Button
                variant="primary"
                onClick={() => scrollTo('#booking')}
              >
                <span>Book or Enquire</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Button>

              <button
                type="button"
                onClick={() => scrollTo('#treatments')}
                className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.20em] text-spa-text-primary pb-1 border-b border-spa-gold/70 hover:text-spa-gold-dark hover:border-spa-gold-dark transition-colors"
              >
                <span>Discover Treatments</span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}