import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Lightbox from '@/components/ui/Lightbox';
import { galleryImages } from '@/data/images';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-spa-ivory py-16 md:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          label="The Space"
          title="A space designed for stillness"
          subtitle="Warm light, natural textures, and a quietness that runs through every room."
          align="center"
        />

        {/* Curated architectural mosaic grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {galleryImages.map((image, i) => (
            <motion.button
              key={i}
              type="button"
              className="group relative overflow-hidden cursor-pointer border border-spa-sand/80 bg-spa-cream aspect-[4/5] focus-visible:ring-2 focus-visible:ring-spa-gold outline-none"
              onClick={() => setLightboxIndex(i)}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              aria-label={`Open image: ${image.alt}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-spa-charcoal/0 group-hover:bg-spa-charcoal/25 transition-colors duration-400 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-medium uppercase tracking-[0.22em] text-white bg-spa-charcoal/80 px-3.5 py-1.5 backdrop-blur-sm">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      <Lightbox
        images={galleryImages.map((img) => ({ url: img.url, alt: img.alt }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}

