import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Mail,
  Clock3,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

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
      newErrors.phone = 'Please enter a valid phone number.';
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

  const inputClass =
    'w-full border-0 border-b border-charcoal/15 bg-transparent px-0 py-2.5 text-[13px] font-light text-charcoal outline-none transition-colors duration-300 placeholder:text-charcoal/25 focus:border-gold';

  const labelClass =
    'mb-1.5 block text-[9px] font-medium uppercase tracking-[0.24em] text-charcoal/45';

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#f4f1eb] py-16 md:py-20 lg:py-24"
    >
      {/* Decorative background shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full border border-gold/[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-40 h-[360px] w-[360px] rounded-full border border-gold/[0.06]"
      />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10 lg:px-16">
        {/* Compact Header */}
        <div className="mb-10 grid items-end gap-7 lg:grid-cols-12 lg:mb-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/70" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-dark">
                Book Your Visit
              </span>
            </div>

            <h2 className="font-serif text-[2.7rem] font-light leading-[1.05] tracking-[-0.045em] text-charcoal sm:text-5xl md:text-6xl">
              Ready to take a break?
            </h2>
          </motion.div>

          <motion.div
            className="flex items-end justify-between gap-5 lg:col-span-4 lg:col-start-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="max-w-[350px] text-sm font-light leading-6 text-charcoal/50 md:text-[15px]">
              Tell us when you would like to visit. We will help you find the
              right treatment and time.
            </p>

            <span className="hidden whitespace-nowrap text-[9px] uppercase tracking-[0.25em] text-charcoal/30 lg:block">
              Private appointments
            </span>
          </motion.div>
        </div>

        {/* Booking Console */}
        <div className="grid overflow-hidden border border-charcoal/[0.12] bg-[#ebe7df] lg:grid-cols-12">
          {/* Form Area */}
          <motion.div
            className="p-6 sm:p-8 md:p-10 lg:col-span-8 lg:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Form top label */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-[0.28em] text-gold-dark">
                  Appointment Request
                </span>

                <p className="mt-2 text-xs font-light text-charcoal/40">
                  All fields marked with * are required.
                </p>
              </div>

              <span className="font-serif text-2xl font-light text-charcoal/15">
                01
              </span>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-6"
            >
              {/* First row */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="full_name" className={labelClass}>
                    Full Name <span className="text-gold">*</span>
                  </label>

                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your name"
                    aria-required="true"
                    aria-invalid={!!errors.full_name}
                  />

                  {errors.full_name && (
                    <p className="mt-2 flex items-center gap-1 text-[11px] text-red-700">
                      <AlertCircle className="h-3 w-3" />
                      {errors.full_name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number <span className="text-gold">*</span>
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your phone number"
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />

                  {errors.phone && (
                    <p className="mt-2 flex items-center gap-1 text-[11px] text-red-700">
                      <AlertCircle className="h-3 w-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Second row */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email{' '}
                    <span className="text-charcoal/25">(optional)</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="treatment_interest" className={labelClass}>
                    Treatment of Interest
                  </label>

                  <select
                    id="treatment_interest"
                    name="treatment_interest"
                    value={form.treatment_interest}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">Select a treatment</option>

                    {treatmentOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Third row */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferred_date" className={labelClass}>
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    id="preferred_date"
                    name="preferred_date"
                    value={form.preferred_date}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  />
                </div>

                <div>
                  <label htmlFor="preferred_time" className={labelClass}>
                    Preferred Time
                  </label>

                  <select
                    id="preferred_time"
                    name="preferred_time"
                    value={form.preferred_time}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">Select a time</option>

                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={2}
                  className={`${inputClass} resize-none`}
                  placeholder="Any questions or details about your visit"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[250px] text-[10px] font-light leading-5 text-charcoal/35">
                  We usually respond within one business day to confirm your
                  appointment.
                </p>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group inline-flex min-h-[48px] items-center justify-center gap-4 bg-charcoal px-8 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory transition-all duration-500 hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'loading' && (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  )}

                  <span>
                    {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
                  </span>

                  {status !== 'loading' && (
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  )}
                </button>
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  className="flex items-start gap-3 border border-green-200 bg-green-50 p-4"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />

                  <p className="text-xs font-light leading-5 text-green-900">
                    Thank you. Your enquiry has been recorded. We will contact
                    you shortly to confirm availability.
                  </p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  className="flex items-start gap-3 border border-red-200 bg-red-50 p-4"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />

                  <p className="text-xs font-light leading-5 text-red-900">
                    Something went wrong. Please try again or contact us
                    directly.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Panel */}
          <motion.aside
            className="relative overflow-hidden bg-charcoal p-7 text-ivory sm:p-9 md:p-10 lg:col-span-4 lg:p-11"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Decorative number */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-12 font-serif text-[15rem] font-light leading-none text-gold/[0.06]"
            >
              01
            </div>

            <div className="relative flex h-full flex-col">
              {/* Panel heading */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-7 bg-gold" />

                  <span className="text-[9px] uppercase tracking-[0.3em] text-gold-light/70">
                    Need help?
                  </span>
                </div>

                <h3 className="max-w-[280px] font-serif text-3xl font-light leading-[1.15] tracking-[-0.03em] text-ivory md:text-4xl">
                  Prefer to speak directly?
                </h3>

                <p className="mt-5 max-w-[310px] text-sm font-light leading-6 text-ivory/45">
                  Our team is happy to help you choose a treatment or answer
                  questions about your visit.
                </p>
              </div>

              {/* Contact details */}
              <div className="mt-10 space-y-6 border-t border-ivory/10 pt-7">
                <a
                  href="tel:+910000000000"
                  className="group flex items-start gap-4"
                >
                  <Phone
                    size={16}
                    strokeWidth={1}
                    className="mt-0.5 text-gold/80"
                  />

                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.25em] text-gold-light/60">
                      Phone
                    </span>

                    <span className="mt-2 block text-sm font-light text-ivory/75 transition-colors group-hover:text-gold-light">
                      [Phone number to be added]
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <MessageCircle
                    size={16}
                    strokeWidth={1}
                    className="mt-0.5 text-gold/80"
                  />

                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.25em] text-gold-light/60">
                      WhatsApp
                    </span>

                    <span className="mt-2 block text-sm font-light text-ivory/75 transition-colors group-hover:text-gold-light">
                      [WhatsApp number to be added]
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:hello@spaday.com"
                  className="group flex items-start gap-4"
                >
                  <Mail
                    size={16}
                    strokeWidth={1}
                    className="mt-0.5 text-gold/80"
                  />

                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.25em] text-gold-light/60">
                      Email
                    </span>

                    <span className="mt-2 block text-sm font-light text-ivory/75 transition-colors group-hover:text-gold-light">
                      [Email to be added]
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <Clock3
                    size={16}
                    strokeWidth={1}
                    className="mt-0.5 text-gold/80"
                  />

                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.25em] text-gold-light/60">
                      Opening Hours
                    </span>

                    <span className="mt-2 block text-sm font-light leading-6 text-ivory/75">
                      [Opening hours to be added]
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom panel link */}
              <div className="mt-auto hidden border-t border-ivory/10 pt-7 lg:block">
                <span className="text-[9px] uppercase tracking-[0.28em] text-ivory/25">
                  SPA DAY · A quiet place to reconnect
                </span>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}