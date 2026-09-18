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
          className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 px-7 py-4 text-[11px] font-medium uppercase tracking-wide-label bg-charcoal text-ivory hover:bg-gold transition-all duration-400 shadow-xl"
          onClick={handleClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Book or enquire"
        >
          <CalendarHeart className="h-4 w-4" strokeWidth={1.25} />
          Book or Enquire
        </motion.button>
      )}
    </AnimatePresence>
  );
}
