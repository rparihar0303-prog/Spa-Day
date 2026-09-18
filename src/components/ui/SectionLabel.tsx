interface SectionLabelProps {
  label: string;
  light?: boolean;
  className?: string;
  showLine?: boolean;
}

export default function SectionLabel({
  label,
  light = false,
  className = '',
  showLine = true,
}: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {showLine && (
        <span
          className={`h-px w-8 shrink-0 ${
            light ? 'bg-spa-gold-light/60' : 'bg-spa-gold/70'
          }`}
          aria-hidden="true"
        />
      )}
      <span
        className={`text-[11px] font-medium uppercase tracking-[0.24em] ${
          light ? 'text-spa-gold-light' : 'text-spa-gold-dark'
        }`}
      >
        {label}
      </span>
    </div>
  );
}
