import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { photoUrl, WEDDINGS } from '@/lib/weddings';

const SLIDES = [
  WEDDINGS[0].cover,
  WEDDINGS[3].cover,
  WEDDINGS[2].cover,
  WEDDINGS[4].cover,
];

export function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Slideshow with slow camera pan */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: i === slideIndex ? 1 : 0,
              scale: i === slideIndex ? 1.08 : 1.15,
            }}
            transition={{
              opacity: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 5, ease: 'easeInOut' },
            }}
          >
            <img
              src={photoUrl(slide, 'full')}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-ink-900/20 to-ink-900/80"
      />

      {/* Center content */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          className="mb-4 text-xs uppercase tracking-widest-3 text-amber"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Ana Moreau — Fine Art Wedding Photography
        </motion.span>
        <motion.h1
          className="font-serif text-5xl leading-tight text-ink-50 sm:text-7xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
        >
          Timeless love,
          <br />
          <em className="text-amber">beautifully told</em>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-md text-sm leading-relaxed text-ink-100 sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Wedding stories captured with intention — the laughter, the tears,
          the quiet in-between moments that become your forever.
        </motion.p>

        {/* Slide indicators */}
        <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`h-px transition-all duration-500 ${
                i === slideIndex ? 'w-10 bg-amber' : 'w-5 bg-ink-500'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-[10px] uppercase tracking-widest-3 text-ink-100">
              Scroll
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-amber/60 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
