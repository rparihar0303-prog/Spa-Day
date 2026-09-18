import { Instagram } from 'lucide-react';
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
    <footer className="bg-charcoal pt-20 pb-10">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-ivory/10">
          {/* Brand — wider */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <h3 className="flex items-baseline gap-1.5">
              <span className="text-xl font-serif font-medium tracking-[0.15em] text-ivory">
                SPA
              </span>
              <span className="text-xs font-sans font-light tracking-[0.3em] uppercase text-gold-light">
                Day
              </span>
            </h3>
            <p className="text-sm font-light text-ivory/45 leading-relaxed max-w-xs">
              A calm space for your time to relax — in the heart of Indore.
            </p>
            {/* Instagram placeholder */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide-label text-ivory/40 hover:text-gold-light transition-colors mt-2"
            >
              <Instagram className="h-4 w-4" strokeWidth={1} />
              [Instagram to be added]
            </a>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-[10px] font-medium uppercase tracking-wide-label text-gold-light/70 mb-1">
              Explore
            </h4>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-light text-ivory/55 hover:text-gold-light transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-[10px] font-medium uppercase tracking-wide-label text-gold-light/70 mb-1">
              Contact
            </h4>
            <address className="text-sm font-light text-ivory/55 leading-[1.8] not-italic">
              Shop Office No. 101, N.M. Tower,
              <br />
              6/1/3, 209, Racecourse Road,
              <br />
              Opposite Om Namkeen, 56 Shop,
              <br />
              Indore, Madhya Pradesh, India.
            </address>
            <div className="flex flex-col gap-1 mt-2">
              <span className="text-sm font-light text-ivory/45">
                [Phone number to be added]
              </span>
              <span className="text-sm font-light text-ivory/45">
                [Email to be added]
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[11px] text-ivory/35 font-light tracking-wide">
            © 2026 SPA DAY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-ivory/35 hover:text-gold-light transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-[11px] text-ivory/35 hover:text-gold-light transition-colors cursor-pointer">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
