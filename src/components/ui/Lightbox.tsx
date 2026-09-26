import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { url: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = index !== null;

  const handlePrev = useCallback(() => {
    if (index === null) return;
    onNavigate(index === 0 ? images.length - 1 : index - 1);
  }, [index, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (index === null) return;
    onNavigate(index === images.length - 1 ? 0 : index + 1);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  const currentImage = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-spa-charcoal/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button
            className="absolute top-6 right-6 z-10 p-2 text-spa-ivory/80 hover:text-spa-gold-light transition-colors focus-visible:ring-1 focus-visible:ring-spa-gold rounded-sm"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <X className="h-7 w-7" />
          </button>

          <button
            className="absolute left-4 md:left-8 z-10 p-2 text-spa-ivory/80 hover:text-spa-gold-light transition-colors focus-visible:ring-1 focus-visible:ring-spa-gold rounded-sm"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <motion.img
            key={index}
            src={currentImage.url}
            alt={currentImage.alt}
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 md:right-8 z-10 p-2 text-spa-ivory/80 hover:text-spa-gold-light transition-colors focus-visible:ring-1 focus-visible:ring-spa-gold rounded-sm"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-spa-text-light-muted text-xs tracking-widest font-sans uppercase">
            {(index ?? 0) + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
