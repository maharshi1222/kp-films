import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Send, Calendar, Heart } from 'lucide-react';
import { ChapterEntry } from '@/components/camera-effects';

const PROJECT_TYPES = [
  'Full-Day Wedding',
  'Elopement / Intimate',
  'Destination Wedding',
  'Engagement Session',
  'Other',
];

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { label: 'Email', icon: Mail, href: 'mailto:hello@anamoreau.com' },
];

export function Contact() {
  const [form, setForm] = useState({
    names: '',
    email: '',
    weddingDate: '',
    venue: '',
    projectType: PROJECT_TYPES[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ names: '', email: '', weddingDate: '', venue: '', projectType: PROJECT_TYPES[0], message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: heading + info */}
          <div>
            <ChapterEntry>
              <span className="text-xs uppercase tracking-widest-3 text-amber">
                05 — Inquire
              </span>
            </ChapterEntry>
            <ChapterEntry delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ink-50 md:text-6xl">
                Let's tell <em className="text-amber">your story</em>
              </h2>
            </ChapterEntry>
            <ChapterEntry delay={0.2}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-100 md:text-base">
                I take on a limited number of weddings each year so every couple
                gets my full attention. Tell me about your day — the where, the
                when, and how you imagine it feeling. I'll reply within 48 hours.
              </p>
            </ChapterEntry>

            <ChapterEntry delay={0.3}>
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-sm text-ink-100">
                  <MapPin size={16} className="text-amber" />
                  Lisbon · Available Worldwide
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-100">
                  <Calendar size={16} className="text-amber" />
                  Booking 2025 — 2026
                </div>
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-ink-100 transition-colors hover:text-amber"
                  >
                    <link.icon size={16} className="text-amber" />
                    {link.label}
                    <span className="h-px w-0 bg-amber transition-all duration-300 group-hover:w-8" />
                  </a>
                ))}
              </div>
            </ChapterEntry>

            <ChapterEntry delay={0.4}>
              <div className="mt-10 flex items-center gap-2 text-xs text-ink-200">
                <Heart size={12} className="text-amber" />
                Currently accepting a few select 2025 dates
              </div>
            </ChapterEntry>
          </div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest-2 text-ink-100">
                Your Names
              </label>
              <input
                type="text"
                required
                value={form.names}
                onChange={(e) => setForm({ ...form, names: e.target.value })}
                className="w-full border-b border-ink-600 bg-transparent py-3 text-sm text-ink-50 outline-none transition-colors focus:border-amber"
                placeholder="Jane & John"
              />
            </div>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest-2 text-ink-100">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-b border-ink-600 bg-transparent py-3 text-sm text-ink-50 outline-none transition-colors focus:border-amber"
                placeholder="you@email.com"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-widest-2 text-ink-100">
                  Wedding Date
                </label>
                <input
                  type="text"
                  value={form.weddingDate}
                  onChange={(e) => setForm({ ...form, weddingDate: e.target.value })}
                  className="w-full border-b border-ink-600 bg-transparent py-3 text-sm text-ink-50 outline-none transition-colors focus:border-amber"
                  placeholder="June 2025"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-widest-2 text-ink-100">
                  Venue / Location
                </label>
                <input
                  type="text"
                  value={form.venue}
                  onChange={(e) => setForm({ ...form, venue: e.target.value })}
                  className="w-full border-b border-ink-600 bg-transparent py-3 text-sm text-ink-50 outline-none transition-colors focus:border-amber"
                  placeholder="Tuscany, Italy"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest-2 text-ink-100">
                Project Type
              </label>
              <select
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className="w-full border-b border-ink-600 bg-transparent py-3 text-sm text-ink-50 outline-none transition-colors focus:border-amber"
              >
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type} className="bg-ink-800">
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest-2 text-ink-100">
                Tell Me About Your Day
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none border-b border-ink-600 bg-transparent py-3 text-sm text-ink-50 outline-none transition-colors focus:border-amber"
                placeholder="How do you imagine your wedding day feeling?"
              />
            </div>

            <button
              type="submit"
              className="group mt-4 flex items-center gap-3 self-start border border-amber px-8 py-4 text-xs uppercase tracking-widest-2 text-amber transition-all duration-300 hover:bg-amber hover:text-ink-900"
            >
              {submitted ? 'Inquiry Sent' : 'Send Inquiry'}
              <Send
                size={14}
                className={`transition-transform duration-300 group-hover:translate-x-1 ${
                  submitted ? 'translate-x-2 opacity-0' : ''
                }`}
              />
            </button>

            {submitted && (
              <motion.p
                className="text-xs text-amber"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thank you — I can't wait to hear about your day. I'll reply within 48 hours.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
