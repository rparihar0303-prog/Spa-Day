import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  italic?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  italic = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`flex flex-col gap-5 max-w-2xl ${
        align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-3">
        <span className={`h-px w-7 ${light ? 'bg-gold-light/50' : 'bg-gold/50'}`} />
        <span
          className={`text-[11px] font-medium uppercase tracking-wide-label ${
            light ? 'text-gold-light' : 'text-gold-dark'
          }`}
        >
          {label}
        </span>
      </div>
      <h2
        className={`text-[2rem] md:text-4xl lg:text-5xl font-light leading-[1.15] text-balance ${
          light ? 'text-ivory' : 'text-charcoal'
        }`}
      >
        {italic ? <em className="font-light italic">{title}</em> : title}
      </h2>
      {subtitle && (
        <p
          className={`text-base font-light leading-relaxed ${
            light ? 'text-ivory/65' : 'text-charcoal/55'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
