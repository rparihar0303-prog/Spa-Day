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
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-[#24211e]/10 bg-[#f8f5f0]/95 shadow-[0_8px_30px_rgba(36,29,24,0.04)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? 'h-[74px]' : 'h-[88px]'
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group relative flex shrink-0 items-baseline gap-2"
            >
              <span
                className={`font-serif text-[24px] font-medium tracking-[0.16em] transition-colors duration-500 ${
                  scrolled ? 'text-[#24211e]' : 'text-white'
                }`}
              >
                SPA
              </span>

              <span
                className={`text-[12px] font-light uppercase tracking-[0.3em] transition-colors duration-500 ${
                  scrolled ? 'text-[#a77c4c]' : 'text-[#d2ad7b]'
                }`}
              >
                Day
              </span>

              {/* Logo hover underline */}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#b5946b] transition-all duration-500 group-hover:w-full" />
            </a>

            {/* Desktop Navigation - ALL TABS KEPT */}
            <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`group relative inline-block whitespace-nowrap px-1 py-3 text-[12px] font-light tracking-[0.04em] transition-colors duration-300 ${
                        scrolled
                          ? isActive
                            ? 'text-[#24211e]'
                            : 'text-[#24211e]/65 hover:text-[#a77c4c]'
                          : isActive
                            ? 'text-white'
                            : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}

                      {/* Underline */}
                      <span
                        className={`absolute bottom-0 left-0 h-[1px] bg-[#b5946b] transition-all duration-400 ease-out ${
                          isActive
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }`}
                      />

                      {/* Small dot on hover */}
                      <span
                        className={`absolute -bottom-[3px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#b5946b] opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                          isActive ? 'opacity-100' : ''
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
              className={`group hidden shrink-0 items-center gap-3 border px-5 py-3 text-[10px] font-medium uppercase tracking-[0.25em] transition-all duration-400 lg:flex ${
                scrolled
                  ? 'border-[#24211e]/20 text-[#24211e] hover:border-[#24211e] hover:bg-[#24211e] hover:text-white'
                  : 'border-white/40 text-white hover:border-white hover:bg-white hover:text-[#24211e]'
              }`}
            >
              <span>Book Now</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.3}
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
                scrolled || mobileOpen
                  ? 'text-[#24211e]'
                  : 'text-white'
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
                    <X size={24} strokeWidth={1.4} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} strokeWidth={1.4} />
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
            className="fixed inset-0 z-40 bg-[#f8f5f0] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full border border-[#b5946b]/15" />
            <div className="pointer-events-none absolute -right-16 top-36 h-56 w-56 rounded-full border border-[#b5946b]/10" />

            <div className="flex min-h-screen flex-col justify-center px-8 pb-16">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="mb-8 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#b5946b]" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#a77c4c]">
                  Spa Day · Indore
                </span>
              </motion.div>

              {/* ALL MOBILE TABS */}
              <div className="flex flex-col items-start">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href;

                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.15 + index * 0.06,
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`group relative flex items-center gap-3 border-b py-2.5 font-serif text-[2.25rem] font-light leading-tight transition-colors duration-300 ${
                        isActive
                          ? 'border-[#b5946b]/40 text-[#a77c4c]'
                          : 'border-[#24211e]/10 text-[#24211e] hover:text-[#a77c4c]'
                      }`}
                    >
                      {/* Mobile animated line */}
                      <span
                        className={`h-px bg-[#b5946b] transition-all duration-300 ${
                          isActive
                            ? 'w-7'
                            : 'w-0 group-hover:w-7'
                        }`}
                      />

                      {item.label}
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile Booking CTA */}
              <motion.a
                href="#booking"
                onClick={(e) => handleNavClick(e, '#booking')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.65,
                  duration: 0.5,
                }}
                className="mt-10 flex w-full max-w-xs items-center justify-between bg-[#24211e] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-[#a77c4c]"
              >
                <span>Book Your Experience</span>
                <ArrowUpRight size={16} strokeWidth={1.3} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}