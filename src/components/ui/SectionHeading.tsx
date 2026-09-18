import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  italic?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  italic = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`flex flex-col gap-3.5 sm:gap-4 max-w-2xl ${
        align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Eyebrow kicker */}
      <div className="flex items-center gap-3">
        <span
          className={`h-px w-8 shrink-0 ${
            light ? 'bg-spa-gold-light/60' : 'bg-spa-gold/70'
          }`}
          aria-hidden="true"
        />
        <span
          className={`text-[11px] font-medium uppercase tracking-[0.24em] ${
            light ? 'text-spa-gold-light' : 'text-spa-gold-dark'
          }`}
        >
          {label}
        </span>
      </div>

      {/* Main title */}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] tracking-tight text-balance ${
          light ? 'text-spa-ivory' : 'text-spa-charcoal'
        }`}
      >
        {italic ? <em className="font-light italic">{title}</em> : title}
      </h2>

      {/* Subtitle with high-contrast, readable typography */}
      {subtitle && (
        <p
          className={`text-sm sm:text-base font-light leading-relaxed max-w-xl ${
            light ? 'text-spa-text-light-secondary' : 'text-spa-text-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

