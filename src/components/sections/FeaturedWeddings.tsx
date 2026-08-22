import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { photoUrl, WEDDINGS } from '@/lib/weddings';
import { ChapterEntry, CameraPan } from '@/components/camera-effects';

export function FeaturedWeddings() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-25%']);

  const featured = WEDDINGS.slice(0, 4);

  return (
    <section ref={ref} id="weddings" className="relative py-24 md:py-32">
      {/* Section label */}
      <div className="mx-auto mb-16 max-w-[1600px] px-6 lg:px-12">
        <div className="flex items-end justify-between">
          <div>
            <ChapterEntry>
              <span className="text-xs uppercase tracking-widest-3 text-amber">
                01 — Real Weddings
              </span>
            </ChapterEntry>
            <ChapterEntry delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl text-ink-50 md:text-6xl">
                Love stories, <em className="text-amber">told frame by frame</em>
              </h2>
            </ChapterEntry>
          </div>
          <ChapterEntry delay={0.2}>
            <p className="hidden max-w-xs text-sm text-ink-100 md:block">
              Each wedding is its own story. These are a few I've had the honor
              of telling — from clifftop elopements to garden celebrations.
            </p>
          </ChapterEntry>
        </div>
      </div>

      {/* Horizontal scrolling strip with camera pan */}
      <div className="overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-6 lg:px-12">
          {featured.map((wedding, i) => (
            <motion.div
              key={wedding.slug}
              className="group relative w-[80vw] shrink-0 overflow-hidden md:w-[40vw] lg:w-[30vw]"
              style={{ height: '70vh' }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              data-cursor="hover"
            >
              <CameraPan
                src={photoUrl(wedding.cover, 'large')}
                alt={wedding.cover.alt}
                className="h-full w-full"
                panY={['-2%', '2%']}
                scale={[1.1, 1]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] uppercase tracking-widest-2 text-amber">
                  {wedding.style} · {wedding.date}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-ink-50 md:text-3xl">
                  {wedding.couple}
                </h3>
                <p className="mt-1 text-xs text-ink-100">
                  {wedding.venue} · {wedding.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
