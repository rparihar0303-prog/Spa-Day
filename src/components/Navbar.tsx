import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navItems } from '@/data/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  // Change navbar appearance after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Detect currently visible section
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Smooth scroll navigation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'border-b border-spa-charcoal/10 bg-spa-ivory/95 shadow-[0_8px_30px_rgba(27,25,23,0.04)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div
            className={`flex items-center justify-between transition-all duration-400 ${
              scrolled ? 'h-[70px]' : 'h-[84px]'
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group relative flex shrink-0 items-baseline gap-2"
              aria-label="SPA DAY Home"
            >
              <span
                className={`font-serif text-[23px] font-medium tracking-[0.16em] transition-colors duration-400 ${
                  scrolled ? 'text-spa-charcoal' : 'text-white'
                }`}
              >
                SPA
              </span>

              <span
                className={`text-[11px] font-light uppercase tracking-[0.3em] transition-colors duration-400 ${
                  scrolled ? 'text-spa-gold-dark' : 'text-spa-gold-light'
                }`}
              >
                Day
              </span>

              {/* Logo hover underline */}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-spa-gold transition-all duration-400 group-hover:w-full" />
            </a>

            {/* Desktop Navigation - ALL TABS PRESERVED */}
            <ul className="hidden items-center gap-6 lg:flex xl:gap-7">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`group relative inline-block whitespace-nowrap px-1 py-2.5 text-[12px] tracking-[0.04em] transition-colors duration-300 ${
                        scrolled
                          ? isActive
                            ? 'text-spa-charcoal font-medium'
                            : 'text-spa-text-secondary hover:text-spa-gold-dark'
                          : isActive
                            ? 'text-white font-medium'
                            : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}

                      {/* Underline */}
                      <span
                        className={`absolute bottom-0 left-0 h-[1.5px] bg-spa-gold transition-all duration-300 ease-out ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Book Now Button */}
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className={`group hidden shrink-0 items-center gap-2.5 border px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] transition-all duration-300 lg:flex ${
                scrolled
                  ? 'border-spa-charcoal/25 text-spa-charcoal hover:border-spa-charcoal hover:bg-spa-charcoal hover:text-spa-ivory'
                  : 'border-white/40 text-white hover:border-white hover:bg-white hover:text-spa-charcoal'
              }`}
            >
              <span>Book Now</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className={`relative z-[60] flex h-10 w-10 items-center justify-center lg:hidden ${
                scrolled || mobileOpen ? 'text-spa-charcoal' : 'text-white'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-spa-ivory lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex min-h-screen flex-col justify-center px-7 sm:px-10 pb-12 pt-20">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.35 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-spa-gold" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-spa-gold-dark font-medium">
                  Spa Day · Indore
                </span>
              </motion.div>

              {/* ALL MOBILE TABS */}
              <div className="flex flex-col items-start divide-y divide-spa-sand/60 border-y border-spa-sand/60">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href;

                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.04,
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`group flex w-full items-center justify-between py-3 font-serif text-[1.85rem] font-light leading-tight transition-colors duration-300 ${
                        isActive
                          ? 'text-spa-gold-dark font-normal'
                          : 'text-spa-charcoal hover:text-spa-gold-dark'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight
                        size={16}
                        className={`transition-all duration-300 ${
                          isActive
                            ? 'opacity-100 text-spa-gold-dark'
                            : 'opacity-30 group-hover:opacity-100'
                        }`}
                      />
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile Booking CTA */}
              <motion.a
                href="#booking"
                onClick={(e) => handleNavClick(e, '#booking')}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.35,
                }}
                className="mt-8 flex w-full items-center justify-between bg-spa-charcoal px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-spa-ivory transition-colors duration-300 hover:bg-spa-gold"
              >
                <span>Book Your Experience</span>
                <ArrowUpRight size={15} strokeWidth={1.3} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}