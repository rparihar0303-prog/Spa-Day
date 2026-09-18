import { motion } from 'framer-motion';

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
      className="relative overflow-hidden bg-ivory py-20 md:py-24 lg:py-28"
    >
      {/* Decorative background element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-gold/[0.08] md:h-[650px] md:w-[650px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-gold/[0.06]"
      />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left Editorial Content */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" />

              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-dark">
                The Spa Experience
              </span>
            </div>

            <h2 className="max-w-[560px] font-serif text-[2.8rem] font-light leading-[1.04] tracking-[-0.045em] text-charcoal sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              A little time
              <br />
              <span className="ml-[8%] italic text-charcoal/55">
                for yourself.
              </span>
            </h2>

            <div className="mt-9 flex max-w-[390px] gap-5 border-l border-gold/30 pl-5 md:mt-12 md:pl-6">
              <p className="text-sm font-light leading-[1.9] text-charcoal/50 md:text-[15px]">
                Three simple steps from everyday life to a quiet hour of care.
                Let the outside world become a little quieter.
              </p>
            </div>

            {/* Small decorative detail */}
            <div className="mt-10 flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-charcoal/35">
              <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
              <span>A slower way to feel</span>
            </div>
          </motion.div>

          {/* Right Timeline */}
          <motion.div
            className="relative lg:col-span-7"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Vertical line */}
            <div className="absolute bottom-7 left-[25px] top-7 w-px bg-charcoal/10 md:left-[39px]" />

            <div className="relative space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="group relative flex min-h-[145px] gap-7 md:min-h-[160px] md:gap-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Number node */}
                  <div className="relative z-10 flex h-[51px] w-[51px] shrink-0 items-center justify-center rounded-full border border-charcoal/15 bg-ivory transition-all duration-500 group-hover:border-gold group-hover:bg-gold md:h-[79px] md:w-[79px]">
                    <span className="font-serif text-xl font-light text-gold-dark transition-colors duration-500 group-hover:text-white md:text-2xl">
                      {step.number}
                    </span>
                  </div>

                  {/* Step content */}
                  <div className="flex-1 border-b border-charcoal/10 pb-8 pt-1 transition-all duration-500 group-hover:translate-x-2 md:pt-3">
                    <div className="mb-3 flex items-center gap-4">
                      <h3 className="font-serif text-xl font-medium tracking-[-0.025em] text-charcoal md:text-2xl">
                        {step.title}
                      </h3>

                      <span className="text-base text-gold opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100">
                        ↗
                      </span>
                    </div>

                    <p className="max-w-[430px] text-sm font-light leading-7 text-charcoal/50 md:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom micro label */}
            <div className="ml-[78px] mt-5 flex items-center gap-3 md:ml-[119px]">
              <span className="h-px w-8 bg-gold/50" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-charcoal/35">
                Your time begins here
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}