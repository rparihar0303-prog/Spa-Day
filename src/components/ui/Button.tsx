import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'text';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-spa-charcoal text-spa-ivory border border-spa-charcoal hover:bg-spa-gold hover:border-spa-gold hover:text-spa-ivory shadow-sm',
  secondary:
    'bg-spa-gold text-spa-ivory border border-spa-gold hover:bg-spa-gold-dark hover:border-spa-gold-dark shadow-sm',
  outline:
    'bg-transparent text-spa-charcoal border border-spa-charcoal/25 hover:bg-spa-charcoal hover:text-spa-ivory hover:border-spa-charcoal',
  text:
    'bg-transparent text-spa-text-primary border-b border-spa-gold hover:text-spa-gold-dark rounded-none px-0 py-0.5 inline-flex items-center gap-2',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[10px]',
  md: 'px-7 py-3.5 text-[11px]',
  lg: 'px-9 py-4 text-[12px]',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', ...props }, ref) => {
    const isText = variant === 'text';
    const sizeClass = isText ? 'text-[11px]' : sizeStyles[size];

    return (
      <button
        ref={ref}
        className={`group inline-flex items-center justify-center gap-2.5 font-medium tracking-[0.20em] uppercase transition-all duration-400 ease-[0.16,1,0.3,1] disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
