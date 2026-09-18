import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Choose Your Treatment',
    description:
      'Explore the available options and choose what feels right for you.',
  },
  {
    number: '02',
    title: 'Plan Your Visit',
    description:
      'Contact SPA DAY to ask questions and confirm your appointment.',
  },
  {
    number: '03',
    title: 'Enjoy Your Time',
    description:
      'Arrive, slow down, and enjoy a calm spa experience.',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-spa-cream py-16 md:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Content */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mb-4">
              <SectionLabel label="The Spa Experience" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] tracking-tight text-spa-charcoal">
              A little time <br />
              <em className="font-light italic text-spa-gold-dark">
                for yourself.
              </em>
            </h2>

            <div className="mt-6 border-l-2 border-spa-gold/40 pl-4 sm:pl-5">
              <p className="text-sm sm:text-base font-light leading-relaxed text-spa-text-secondary max-w-sm">
                Three simple steps from everyday life to a quiet hour of care.
                Let the outside world become a little quieter.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-spa-text-muted font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-spa-gold" />
              <span>A slower way to feel</span>
            </div>
          </motion.div>

          {/* Right Sequence Ribbon */}
          <motion.div
            className="relative lg:col-span-7"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="divide-y divide-spa-sand/80 border-y border-spa-sand/80 bg-white/50 p-6 sm:p-8 border border-spa-sand/80 shadow-[0_8px_28px_rgba(27,25,23,0.04)]">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="group flex gap-5 py-6 sm:gap-7 sm:py-6 first:pt-0 last:pb-0 transition-colors"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Number node */}
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-spa-sand bg-spa-ivory transition-all duration-400 group-hover:border-spa-gold group-hover:bg-spa-gold sm:h-12 sm:w-12">
                    <span className="font-serif text-base sm:text-lg font-normal text-spa-gold-dark transition-colors duration-400 group-hover:text-spa-ivory">
                      {step.number}
                    </span>
                  </div>

                  {/* Step content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug text-spa-charcoal transition-colors duration-300 group-hover:text-spa-gold-dark">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-[15px] font-light leading-relaxed text-spa-text-secondary max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom micro label */}
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-spa-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-spa-text-muted font-medium">
                Your time begins here
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}