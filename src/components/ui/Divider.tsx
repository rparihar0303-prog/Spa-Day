interface DividerProps {
  className?: string;
  light?: boolean;
}

export default function Divider({ className = '', light = false }: DividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className={`h-px w-12 ${light ? 'bg-gold-light/40' : 'bg-gold/40'}`} />
      <span className={`block h-1.5 w-1.5 rotate-45 ${light ? 'border border-gold-light/50' : 'border border-gold/50'}`} />
      <span className={`h-px w-12 ${light ? 'bg-gold-light/40' : 'bg-gold/40'}`} />
    </div>
  );
}
