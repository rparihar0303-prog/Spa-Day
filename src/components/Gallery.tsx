import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Lightbox from '@/components/ui/Lightbox';
import { galleryImages } from '@/data/images';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-28 md:py-40 bg-cream">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16">
        <SectionHeading
          label="The Space"
          title="A space designed for stillness"
          subtitle="Warm light, natural textures, and a quietness that runs through every room."
          italic
        />

        {/* Curated editorial grid with consistent proportions */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-16 lg:mt-20">
          {galleryImages.map((image, i) => (
            <motion.button
              key={i}
              className={`group relative overflow-hidden cursor-pointer ${
                image.span === 'tall'
                  ? 'row-span-2 h-64 md:h-full'
                  : 'h-32 md:h-48 lg:h-56'
              }`}
              onClick={() => setLightboxIndex(i)}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              aria-label={`Open image: ${image.alt}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors duration-700" />
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={galleryImages.map((img) => ({ url: img.url, alt: img.alt }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
