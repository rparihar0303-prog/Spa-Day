import { Instagram } from 'lucide-react';
import Container from '@/components/ui/Container';
import { navItems } from '@/data/navigation';

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative overflow-hidden bg-spa-charcoal text-spa-ivory border-t border-white/[0.08] pt-16 pb-12">
      <Container>
        <div className="grid gap-10 pb-12 border-b border-white/10 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 md:col-span-5">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-flex items-baseline gap-2 group w-fit"
            >
              <span className="font-serif text-2xl font-light tracking-[0.16em] text-spa-ivory group-hover:text-spa-gold-light transition-colors">
                SPA DAY
              </span>
            </a>

            <p className="max-w-xs text-sm font-light leading-relaxed text-spa-text-light-secondary">
              A sanctuary of stillness in the heart of Indore, dedicated to mindful
              relaxation and holistic renewal.
            </p>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="mt-2 inline-flex items-center gap-2 text-xs font-light uppercase tracking-[0.2em] text-spa-text-light-muted hover:text-spa-gold-light transition-colors"
            >
              <Instagram className="h-4 w-4 text-spa-gold" strokeWidth={1.5} />
              <span>spa_day_wellness</span>
            </a>
          </div>

          {/* Navigation Directory */}
          <div className="flex flex-col gap-3 md:col-span-3">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.24em] text-spa-gold-light mb-1">
              Explore
            </h4>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xs sm:text-sm font-light text-spa-text-light-secondary hover:text-spa-gold-light transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Sanctuary Contact */}
          <div className="flex flex-col gap-3 md:col-span-4">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.24em] text-spa-gold-light mb-1">
              Sanctuary
            </h4>
            <address className="text-xs sm:text-sm font-light leading-relaxed text-spa-text-light-secondary not-italic">
              Shop Office No. 101, N.M. Tower,
              <br />
              6/1/3, 209, Racecourse Road,
              <br />
              Opposite Om Namkeen, 56 Shop,
              <br />
              Indore, Madhya Pradesh, India.
            </address>

            <div className="mt-2 flex flex-col gap-1 text-xs sm:text-sm font-light text-spa-text-light-muted">
              <span>+91 8889456484</span>
              <span>spaday1212@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs font-light tracking-wide text-spa-text-light-muted">
            &copy; 2026 SPA DAY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-light text-spa-text-light-muted hover:text-spa-gold-light transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-xs font-light text-spa-text-light-muted hover:text-spa-gold-light transition-colors cursor-pointer">
              Terms &amp; Conditions
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
