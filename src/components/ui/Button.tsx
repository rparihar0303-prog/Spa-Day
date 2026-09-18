import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gold text-white hover:bg-gold-dark border border-gold',
  secondary:
    'bg-charcoal text-ivory hover:bg-charcoal-light border border-charcoal',
  outline:
    'bg-transparent text-charcoal hover:bg-charcoal hover:text-ivory border border-charcoal/30 hover:border-charcoal',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-sm ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
