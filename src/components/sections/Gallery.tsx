import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { photoUrl, WEDDINGS, WEDDING_STYLES, type WeddingStyle, type Photo } from '@/lib/weddings';
import { ChapterEntry, ApertureReveal } from '@/components/camera-effects';

export function Gallery() {
  const [activeStyle, setActiveStyle] = useState<WeddingStyle | 'All'>('All');
  const [activeWedding, setActiveWedding] = useState<typeof WEDDINGS[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredWeddings = useMemo(() => {
    if (activeStyle === 'All') return WEDDINGS;
    return WEDDINGS.filter((w) => w.style === activeStyle);
  }, [activeStyle]);

  const allFilteredPhotos = useMemo(() => {
    return filteredWeddings.flatMap((w) => w.photos);
  }, [filteredWeddings]);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % allFilteredPhotos.length));
  }, [allFilteredPhotos.length]);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + allFilteredPhotos.length) % allFilteredPhotos.length));
  }, [allFilteredPhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextPhoto, prevPhoto]);

  // Editorial grid spans
  const spans = [
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
    'col-span-2 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
  ];

  // Build a flat list with wedding info for display
  const photoList = filteredWeddings.flatMap((w) =>
    w.photos.map((p) => ({ ...p, couple: w.couple, venue: w.venue, location: w.location, date: w.date, style: w.style }))
  );

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <ChapterEntry>
              <span className="text-xs uppercase tracking-widest-3 text-amber">
                The Archive
              </span>
            </ChapterEntry>
            <ChapterEntry delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl text-ink-50 md:text-6xl">
                Every story, <em className="text-amber">remembered</em>
              </h2>
            </ChapterEntry>
          </div>

          {/* Filter pills */}
          <ChapterEntry delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {(['All', ...WEDDING_STYLES] as const).map((style) => (
                <button
                  key={style}
                  onClick={() => setActiveStyle(style)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest-2 transition-all duration-300 ${
                    activeStyle === style
                      ? 'bg-amber text-ink-900'
                      : 'border border-ink-600 text-ink-100 hover:border-amber hover:text-amber'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </ChapterEntry>
        </div>

        {/* Masonry grid with aperture reveals */}
        <motion.div
          layout
          className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-2 md:auto-rows-[280px] md:grid-cols-4 lg:grid-cols-6"
        >
          <AnimatePresence mode="popLayout">
            {photoList.map((photo, i) => (
              <motion.div
                key={`${photo.id}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative cursor-pointer overflow-hidden ${spans[i % spans.length]}`}
                onClick={() => {
                  const flatIndex = allFilteredPhotos.findIndex((p) => p.id === photo.id);
                  openLightbox(flatIndex >= 0 ? flatIndex : i);
                }}
                data-cursor="hover"
              >
                <ApertureReveal
                  src={photoUrl(photo as Photo, 'medium')}
                  alt={photo.alt}
                  className="h-full w-full"
                >
                  <div className="absolute inset-0 bg-ink-900/0 transition-colors duration-500 group-hover:bg-ink-900/40" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-serif text-lg text-ink-50">{photo.couple}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest-2 text-ink-100">
                      {photo.style} · {photo.location}
                    </p>
                  </div>
                  <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn size={16} className="text-amber" />
                  </div>
                </ApertureReveal>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 z-10 text-ink-50 transition-colors hover:text-amber"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center text-ink-50 transition-colors hover:text-amber md:left-8"
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={allFilteredPhotos[lightboxIndex]?.id}
              className="relative max-h-[85vh] max-w-[90vw]"
              initial={{ scale: 0.85, opacity: 0, filter: 'blur(8px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              exit={{ scale: 0.9, opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photoUrl(allFilteredPhotos[lightboxIndex], 'full')}
                alt={allFilteredPhotos[lightboxIndex]?.alt ?? ''}
                className="max-h-[85vh] max-w-[90vw] object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center text-ink-50 transition-colors hover:text-amber md:right-8"
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest-2 text-ink-100">
              {String(lightboxIndex + 1).padStart(2, '0')} / {String(allFilteredPhotos.length).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
