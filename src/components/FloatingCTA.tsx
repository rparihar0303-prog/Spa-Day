import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarHeart } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 700);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const target = document.querySelector('#booking');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 bg-spa-charcoal px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.20em] text-spa-ivory border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 hover:bg-spa-gold hover:border-spa-gold focus-visible:ring-2 focus-visible:ring-spa-gold outline-none"
          onClick={handleClick}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Book or enquire"
        >
          <CalendarHeart
            className="h-4 w-4 text-spa-gold-light group-hover:text-spa-ivory transition-colors"
            strokeWidth={1.5}
          />
          <span>Book or Enquire</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

