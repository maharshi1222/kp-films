import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PACKAGES } from '@/lib/weddings';
import { ChapterEntry } from '@/components/camera-effects';

export function Packages() {
  return (
    <section id="packages" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <ChapterEntry>
            <span className="text-xs uppercase tracking-widest-3 text-amber">
              03 — Packages
            </span>
          </ChapterEntry>
          <ChapterEntry delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl text-ink-50 md:text-6xl">
              Choose your <em className="text-amber">chapter</em>
            </h2>
          </ChapterEntry>
          <ChapterEntry delay={0.2}>
            <p className="mx-auto mt-6 max-w-lg text-sm text-ink-100 md:text-base">
              Three thoughtfully crafted collections. Each one fully customizable —
              tell me about your day and we'll find the right fit together.
            </p>
          </ChapterEntry>
        </div>

        {/* Package cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`relative flex flex-col border p-8 transition-all duration-500 ${
                pkg.featured
                  ? 'border-amber/40 bg-ink-800/50'
                  : 'border-ink-700 bg-transparent hover:border-ink-500'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber px-4 py-1 text-[10px] uppercase tracking-widest-2 text-ink-900">
                  Most Chosen
                </span>
              )}

              <h3 className="font-serif text-2xl text-ink-50">{pkg.name}</h3>
              <p className="mt-2 text-xs italic text-ink-100">{pkg.tagline}</p>
              <p className="mt-6 font-serif text-3xl text-amber">{pkg.price}</p>

              <div className="my-8 h-px w-full bg-ink-700" />

              <ul className="flex-1 space-y-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ink-100">
                    <Check size={14} className="mt-0.5 shrink-0 text-amber" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`mt-8 w-full border py-4 text-xs uppercase tracking-widest-2 transition-all duration-300 ${
                  pkg.featured
                    ? 'border-amber bg-amber text-ink-900 hover:bg-amber-light'
                    : 'border-ink-500 text-ink-50 hover:border-amber hover:text-amber'
                }`}
              >
                Inquire About This Package
              </button>
            </motion.div>
          ))}
        </div>

        <ChapterEntry delay={0.3}>
          <p className="mt-10 text-center text-xs text-ink-100">
            Travel fees may apply for destinations outside Portugal. Custom packages available — just ask.
          </p>
        </ChapterEntry>
      </div>
    </section>
  );
}
