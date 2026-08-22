import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { photoUrl, PHOTOGRAPHER_PORTRAITS, BTS_PHOTOS } from '@/lib/weddings';
import { ChapterEntry, ParallaxLayer } from '@/components/camera-effects';

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  const portrait = PHOTOGRAPHER_PORTRAITS[0];

  return (
    <section ref={ref} id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <ChapterEntry>
          <span className="text-xs uppercase tracking-widest-3 text-amber">
            02 — The Photographer
          </span>
        </ChapterEntry>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* Portrait with parallax */}
          <motion.div style={{ y: imageY }} className="relative aspect-[3/4] overflow-hidden">
            <motion.img
              src={photoUrl(portrait, 'large')}
              alt={portrait.alt}
              loading="lazy"
              className="h-full w-full object-cover"
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
          </motion.div>

          {/* Text with parallax */}
          <motion.div style={{ y: textY }} className="flex flex-col justify-center">
            <ChapterEntry>
              <h2 className="font-serif text-3xl leading-tight text-ink-50 md:text-5xl">
                The eye behind <em className="text-amber">the lens</em>
              </h2>
            </ChapterEntry>

            <ChapterEntry delay={0.2}>
              <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-100 md:text-base">
                <p>
                  I'm Ana Moreau — a wedding photographer based in Lisbon, working
                  across Europe and wherever love stories take me. For ten years
                  I've been quietly documenting weddings, and I still believe
                  it's the greatest privilege to be trusted with someone's most
                  unguarded day.
                </p>
                <p>
                  My approach is simple: I disappear. I don't direct moments —
                  I wait for them. The look on a father's face when he first
                  sees his daughter. The laugh that escapes between the vows.
                  The hand that reaches out, just for a second, when nobody's
                  watching. Those are the frames that matter.
                </p>
                <p>
                  I shoot on film and digital, but always with the same philosophy:
                  let the day unfold, let the light do its work, and be ready when
                  the real thing happens. No stiff poses. No forced smiles. Just
                  you, as you actually are.
                </p>
              </div>
            </ChapterEntry>

            {/* Stats */}
            <ChapterEntry delay={0.4}>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink-700 pt-8">
                {[
                  { value: '10+', label: 'Years Shooting' },
                  { value: '120+', label: 'Weddings Told' },
                  { value: '15', label: 'Countries Visited' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl text-amber md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest-2 text-ink-100">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ChapterEntry>
          </motion.div>
        </div>

        {/* Behind the scenes strip */}
        <div className="mt-20 overflow-hidden">
          <ChapterEntry>
            <p className="mb-6 text-[10px] uppercase tracking-widest-2 text-ink-100">
              Behind the Scenes
            </p>
          </ChapterEntry>
          <div className="flex gap-4">
            {BTS_PHOTOS.map((photo, i) => (
              <ParallaxLayer key={photo.id} depth={0.15 + i * 0.05} className="w-1/3 shrink-0">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={photoUrl(photo, 'medium')}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-cinema hover:scale-105"
                  />
                </div>
              </ParallaxLayer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
