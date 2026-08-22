import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { photoUrl, TESTIMONIALS } from '@/lib/weddings';
import { ChapterEntry } from '@/components/camera-effects';

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <ChapterEntry>
          <span className="text-xs uppercase tracking-widest-3 text-amber">
            04 — Couples
          </span>
        </ChapterEntry>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* Couple photo */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={photoUrl(TESTIMONIALS[index].couplePhoto, 'large')}
                  alt={TESTIMONIALS[index].couplePhoto.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quote */}
          <div className="flex flex-col justify-center">
            <Quote size={32} className="text-amber/40" />
            <div className="mt-6 min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote className="font-serif text-2xl leading-relaxed text-ink-50 md:text-3xl md:leading-relaxed">
                    "{TESTIMONIALS[index].quote}"
                  </blockquote>
                  <div className="mt-8">
                    <p className="text-sm font-medium text-ink-50">
                      {TESTIMONIALS[index].author}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest-2 text-ink-100">
                      {TESTIMONIALS[index].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-12 flex items-center gap-4">
              <button
                onClick={prev}
                className="text-xs uppercase tracking-widest-2 text-ink-100 transition-colors hover:text-amber"
              >
                ← Previous
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-px transition-all duration-300 ${
                      i === index ? 'w-12 bg-amber' : 'w-6 bg-ink-600'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="text-xs uppercase tracking-widest-2 text-ink-100 transition-colors hover:text-amber"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
