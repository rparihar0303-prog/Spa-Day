import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Loader2,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Mail,
  Clock3,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import {
  FormField,
  SelectField,
  TextareaField,
  StatusNotice,
} from '@/components/ui/FormField';

interface FormData {
  full_name: string;
  phone: string;
  email: string;
  preferred_date: string;
  preferred_time: string;
  treatment_interest: string;
  message: string;
}

interface FormErrors {
  full_name?: string;
  phone?: string;
}

const initialForm: FormData = {
  full_name: '',
  phone: '',
  email: '',
  preferred_date: '',
  preferred_time: '',
  treatment_interest: '',
  message: '',
};

const timeSlots = [
  'Morning (9 AM - 12 PM)',
  'Afternoon (12 PM - 3 PM)',
  'Evening (3 PM - 6 PM)',
  'Night (6 PM - 9 PM)',
];

const treatmentOptions = [
  'Swedish Massage',
  'Deep Tissue Massage',
  'Aromatherapy',
  'Head & Shoulder Therapy',
  'Body Polish',
  'Couple Spa',
  'Not sure yet',
];

export default function Booking() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.full_name.trim()) {
      newErrors.full_name = 'Please enter your name.';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (form.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid phone number (minimum 7 digits).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('loading');

    try {
      const { error } = await supabase.from('enquiries').insert({
        full_name: form.full_name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        preferred_date: form.preferred_date || null,
        preferred_time: form.preferred_time || null,
        treatment_interest: form.treatment_interest || null,
        message: form.message.trim() || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-spa-cream py-16 md:py-20 lg:py-24"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 lg:mb-14 grid items-end gap-6 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel label="Concierge & Reservations" />
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light leading-[1.08] tracking-tight text-spa-charcoal">
              Reserve Your{' '}
              <em className="italic font-light text-spa-gold-dark">
                Moment of Calm
              </em>
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
              Tell us when you would like to visit. Our concierge will curate your
              session and confirm availability with you personally.
            </p>
          </motion.div>
        </div>

        {/* Dual-Tone Concierge Console */}
        <div className="grid overflow-hidden border border-spa-sand/80 shadow-[0_12px_40px_rgba(27,25,23,0.05)] lg:grid-cols-12">
          {/* Left Form Panel: Warm Alabaster */}
          <motion.div
            className="bg-spa-ivory p-6 sm:p-8 md:p-10 lg:col-span-8 lg:p-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-8 flex items-center justify-between border-b border-spa-sand/80 pb-5">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-spa-gold-dark">
                  Appointment Request
                </span>
                <p className="mt-1 text-xs font-light text-spa-text-muted">
                  Required fields are marked with an asterisk (*).
                </p>
              </div>

              <span className="font-serif text-2xl font-light text-spa-sand-dark">
                01
              </span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Row 1: Name & Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Full Name"
                  id="full_name"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  error={errors.full_name}
                />

                <FormField
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  error={errors.phone}
                />
              </div>

              {/* Row 2: Email & Treatment */}
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  optional
                />

                <SelectField
                  label="Treatment of Interest"
                  id="treatment_interest"
                  name="treatment_interest"
                  value={form.treatment_interest}
                  onChange={handleChange}
                  options={treatmentOptions}
                  placeholder="Select a treatment"
                  optional
                />
              </div>

              {/* Row 3: Date & Time */}
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Preferred Date"
                  id="preferred_date"
                  name="preferred_date"
                  type="date"
                  value={form.preferred_date}
                  onChange={handleChange}
                  optional
                />

                <SelectField
                  label="Preferred Time Slot"
                  id="preferred_time"
                  name="preferred_time"
                  value={form.preferred_time}
                  onChange={handleChange}
                  options={timeSlots}
                  placeholder="Select a time"
                  optional
                />
              </div>

              {/* Row 4: Message */}
              <TextareaField
                label="Message or Special Requests"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any preferences, questions, or specific requirements..."
                optional
              />

              {/* Action row */}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[280px] text-[11px] font-light leading-relaxed text-spa-text-muted">
                  We usually respond within one business day to confirm your appointment.
                </p>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' && (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  )}
                  <span>
                    {status === 'loading' ? 'Sending Request...' : 'Send Enquiry'}
                  </span>
                  {status !== 'loading' && (
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  )}
                </Button>
              </div>

              {/* Status Notices */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <StatusNotice
                    status="success"
                    title="Enquiry Received"
                    message="Thank you. Your enquiry has been recorded. Our concierge will contact you shortly to confirm your booking and schedule."
                  />
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <StatusNotice
                    status="error"
                    title="Submission Notice"
                    message="Something went wrong while submitting your enquiry. Please try again or reach out directly by phone or WhatsApp."
                  />
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right Aside: Deep Charcoal Concierge Desk */}
          <motion.aside
            className="flex flex-col justify-between bg-spa-charcoal p-6 sm:p-8 md:p-10 lg:col-span-4 lg:p-12 text-spa-ivory border-t lg:border-t-0 lg:border-l border-white/10"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-6 bg-spa-gold" />
                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-spa-gold-light">
                  Direct Assistance
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-light leading-snug tracking-tight text-spa-ivory">
                Prefer personal attention?
              </h3>

              <p className="mt-4 text-xs sm:text-sm font-light leading-relaxed text-spa-text-light-secondary">
                Our concierge is available to guide you through treatment options,
                curate tailored packages, or address specific scheduling requests.
              </p>

              {/* Contact list */}
              <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
                <a
                  href="tel:+910000000000"
                  className="group flex items-start gap-3.5 transition-colors"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-spa-gold/30 bg-white/5 text-spa-gold group-hover:border-spa-gold group-hover:bg-spa-gold/10 transition-colors">
                    <Phone size={13} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-spa-gold-light">
                      Telephone
                    </span>
                    <span className="mt-0.5 block text-xs sm:text-sm font-light text-spa-ivory/80 group-hover:text-spa-gold-light transition-colors">
                      [Phone number to be added]
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3.5 transition-colors"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-spa-gold/30 bg-white/5 text-spa-gold group-hover:border-spa-gold group-hover:bg-spa-gold/10 transition-colors">
                    <MessageCircle size={13} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-spa-gold-light">
                      WhatsApp Concierge
                    </span>
                    <span className="mt-0.5 block text-xs sm:text-sm font-light text-spa-ivory/80 group-hover:text-spa-gold-light transition-colors">
                      [WhatsApp number to be added]
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:hello@spaday.com"
                  className="group flex items-start gap-3.5 transition-colors"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-spa-gold/30 bg-white/5 text-spa-gold group-hover:border-spa-gold group-hover:bg-spa-gold/10 transition-colors">
                    <Mail size={13} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-spa-gold-light">
                      Email Concierge
                    </span>
                    <span className="mt-0.5 block text-xs sm:text-sm font-light text-spa-ivory/80 group-hover:text-spa-gold-light transition-colors">
                      [Email to be added]
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-spa-gold/30 bg-white/5 text-spa-gold">
                    <Clock3 size={13} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-spa-gold-light">
                      Operating Hours
                    </span>
                    <span className="mt-0.5 block text-xs sm:text-sm font-light text-spa-ivory/80">
                      [Opening hours to be added]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Brand Stamp */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <span className="text-[10px] font-light uppercase tracking-[0.26em] text-spa-text-light-muted">
                SPA DAY &middot; The Sanctuary of Stillness
              </span>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}