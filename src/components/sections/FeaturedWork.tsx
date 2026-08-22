import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { photoUrl, PHOTOS } from '@/lib/images';

const featured = [
  PHOTOS[0],
  PHOTOS[9],
  PHOTOS[18],
  PHOTOS[27],
  PHOTOS[35],
  PHOTOS[42],
];

export function FeaturedWork() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-30%']);

  return (
    <section ref={ref} id="work" className="relative py-24 md:py-32">
      {/* Section label */}
      <div className="mx-auto mb-16 max-w-[1600px] px-6 lg:px-12">
        <div className="flex items-end justify-between">
          <div>
            <motion.span
              className="text-xs uppercase tracking-widest-3 text-amber"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              01 — Featured
            </motion.span>
            <motion.h2
              className="mt-3 font-serif text-4xl text-ink-50 md:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Selected Works
            </motion.h2>
          </div>
          <motion.p
            className="hidden max-w-xs text-sm text-ink-100 md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A curated cross-section of recent commissions — fashion, landscape,
            and the spaces between.
          </motion.p>
        </div>
      </div>

      {/* Horizontal scrolling strip */}
      <div className="overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-6 lg:px-12">
          {featured.map((photo, i) => (
            <motion.div
              key={photo.id}
              className={`relative shrink-0 overflow-hidden ${
                photo.orientation === 'portrait'
                  ? 'w-[70vw] h-[70vh] md:w-[32vw] md:h-[75vh]'
                  : 'w-[80vw] h-[50vh] md:w-[45vw] md:h-[55vh]'
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <img
                src={photoUrl(photo, 'large')}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-cinema hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 transition-opacity duration-500 hover:opacity-100">
                <p className="font-serif text-xl text-ink-50">{photo.title}</p>
                <p className="mt-1 text-xs uppercase tracking-widest-2 text-ink-100">
                  {photo.location} · {photo.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
