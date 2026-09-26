import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Copy,
  Check,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
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
      label: 'Telephone',
      value: '[Phone number to be added]',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp Concierge',
      value: '[WhatsApp number to be added]',
    },
    {
      icon: Mail,
      label: 'Email Concierge',
      value: '[Email to be added]',
    },
    {
      icon: Clock,
      label: 'Operating Hours',
      value: '[Opening hours to be added]',
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-spa-ivory py-16 md:py-20 lg:py-24"
    >
      <Container>
        {/* Split Header */}
        <div className="mb-10 sm:mb-12 lg:mb-14 grid items-end gap-6 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel label="Location & Reception" />
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light leading-[1.08] tracking-tight text-spa-charcoal">
              Visit Us in{' '}
              <em className="italic font-light text-spa-gold-dark">Indore</em>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:pb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-sm sm:text-base font-light leading-relaxed text-spa-text-secondary">
              We look forward to welcoming you to our tranquil sanctuary situated on
              Racecourse Road.
            </p>
          </motion.div>
        </div>

        {/* Split Layout: details left, image/map right */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-stretch">
          {/* Left Column: Address + Contact Directory */}
          <motion.div
            className="flex flex-col justify-between gap-8 lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Address Card */}
            <div className="border border-spa-sand/80 bg-spa-cream/60 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-spa-gold/40 bg-white text-spa-gold">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-normal text-spa-charcoal">
                    Our Address
                  </h3>
                  <address className="mt-2 text-sm font-light leading-relaxed text-spa-text-secondary not-italic">
                    Shop Office No. 101, N.M. Tower,
                    <br />
                    6/1/3, 209, Racecourse Road,
                    <br />
                    Opposite Om Namkeen, 56 Shop,
                    <br />
                    Indore, Madhya Pradesh, India.
                  </address>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-spa-gold-dark hover:text-spa-gold transition-colors focus-visible:ring-1 focus-visible:ring-spa-gold rounded-sm outline-none"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-spa-gold" strokeWidth={1.5} />
                        <span>Address Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" strokeWidth={1.5} />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Contact directory list */}
            <div className="divide-y divide-spa-sand/80 border-y border-spa-sand/80">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 py-4.5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-spa-sand bg-white/60 text-spa-gold">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-spa-text-muted">
                        {item.label}
                      </span>
                      <span className="text-sm font-light text-spa-charcoal">
                        {item.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Booking action */}
            <div>
              <Button
                variant="outline"
                size="md"
                onClick={() => scrollTo('#booking')}
              >
                <span>Reserve an Experience</span>
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Reception image with map placeholder */}
          <motion.div
            className="relative min-h-[380px] lg:min-h-full overflow-hidden border border-spa-sand/80 shadow-[0_8px_32px_rgba(27,25,23,0.04)] lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={contactImage}
              alt="SPA DAY reception sanctuary in Indore"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-spa-charcoal/50 backdrop-blur-[1px]" />

            {/* Map placeholder card */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-spa-charcoal/60 text-spa-gold-light backdrop-blur-md mb-4">
                <MapPin className="h-6 w-6" strokeWidth={1.25} />
              </div>
              <p className="font-serif text-xl sm:text-2xl font-light text-spa-ivory">
                Racecourse Road, Indore
              </p>
              <p className="mt-2 text-xs font-light text-spa-text-light-secondary max-w-xs leading-relaxed">
                [Google Maps interactive location will be embedded here]
              </p>
              <span className="mt-4 text-[10px] font-medium uppercase tracking-[0.24em] text-spa-gold-light/80 border border-spa-gold/30 px-3.5 py-1.5 backdrop-blur-sm">
                Near 56 Shop
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
