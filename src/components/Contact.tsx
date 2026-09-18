import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Copy, Check, Phone, MessageCircle, Mail, Clock, ArrowRight } from 'lucide-react';
import { contactImage } from '@/data/images';

const fullAddress =
  'Shop Office No. 101, N.M. Tower, 6/1/3, 209, Racecourse Road, Opposite Om Namkeen, 56 Shop, Indore, Madhya Pradesh, India.';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard not available
    }
  };

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: '[Phone number to be added]',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '[WhatsApp number to be added]',
    },
    {
      icon: Mail,
      label: 'Email',
      value: '[Email to be added]',
    },
    {
      icon: Clock,
      label: 'Opening Hours',
      value: '[Opening hours to be added]',
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-40 bg-cream">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16">
        {/* Split header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-7 bg-gold/50" />
              <span className="text-[11px] font-medium uppercase tracking-wide-label text-gold-dark">
                Find Spa Day
              </span>
            </div>
            <h2 className="text-[2rem] md:text-4xl lg:text-5xl font-light leading-[1.15] text-charcoal">
              Visit us in Indore.
            </h2>
          </motion.div>
          <motion.p
            className="lg:col-span-5 text-base font-light text-charcoal/50 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            We look forward to welcoming you to our peaceful space on Racecourse
            Road.
          </motion.p>
        </div>

        {/* Split layout: details left, image/map right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: address + contact details */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="flex items-center justify-center w-12 h-12 border border-gold/40 rounded-full flex-shrink-0">
                <MapPin className="h-5 w-5 text-gold" strokeWidth={1} />
              </div>
              <div className="flex flex-col gap-3 flex-grow">
                <h3 className="text-lg font-serif font-medium text-charcoal">
                  Our Address
                </h3>
                <address className="text-sm font-light text-charcoal/60 leading-[1.8] not-italic">
                  Shop Office No. 101, N.M. Tower,
                  <br />
                  6/1/3, 209, Racecourse Road,
                  <br />
                  Opposite Om Namkeen, 56 Shop,
                  <br />
                  Indore, Madhya Pradesh, India.
                </address>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-wide-label text-gold-dark hover:text-gold transition-colors mt-1"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" strokeWidth={1.25} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" strokeWidth={1.25} /> Copy Address
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact details — editorial list, not cards */}
            <div className="border-t border-taupe/20 pt-8 flex flex-col gap-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-5 pb-6 border-b border-taupe/15 last:border-b-0 last:pb-0"
                  >
                    <Icon
                      className="h-5 w-5 text-gold flex-shrink-0"
                      strokeWidth={1}
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] uppercase tracking-wide-label text-charcoal/40">
                        {item.label}
                      </span>
                      <span className="text-sm font-light text-charcoal/65">
                        {item.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Booking CTA */}
            <button
              onClick={() => scrollTo('#booking')}
              className="group inline-flex items-center gap-2 text-sm text-charcoal hover:text-gold transition-colors duration-400 mt-2"
            >
              <span className="uppercase tracking-wide-label text-[11px] font-medium">
                Book Your Visit
              </span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-1.5"
                strokeWidth={1}
              />
            </button>
          </motion.div>

          {/* Right: image with map placeholder overlay */}
          <motion.div
            className="relative min-h-[440px] lg:min-h-full overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={contactImage}
              alt="Elegant spa reception area with modern interior design"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-charcoal/40" />

            {/* Map placeholder overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 gap-4">
              <MapPin className="h-10 w-10 text-gold-light/60" strokeWidth={0.75} />
              <p className="text-sm font-light text-ivory/70 leading-relaxed max-w-xs">
                [Google Maps link to be added]
              </p>
              <p className="text-[10px] uppercase tracking-wide-label text-ivory/40">
                A map will appear here once confirmed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
