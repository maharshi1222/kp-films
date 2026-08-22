import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Camera zoom effect — image scales from oversized to natural (or vice versa)
 * tied directly to scroll progress, like a slow cinematic zoom.
 */
export function CameraZoom({
  src,
  alt,
  className,
  from = 1.3,
  to = 1,
}: {
  src: string;
  alt: string;
  className?: string;
  from?: number;
  to?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [from, to, from]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover will-change-transform"
        style={{ scale }}
      />
    </div>
  );
}

/**
 * Camera pan effect — image translates within its frame as you scroll,
 * like a slow dolly/pan move. Combined with slight scale.
 */
export function CameraPan({
  src,
  alt,
  className,
  panX = ['0%', '0%'],
  panY = ['-3%', '3%'],
  scale = [1.2, 1.05],
}: {
  src: string;
  alt: string;
  className?: string;
  panX?: [string, string];
  panY?: [string, string];
  scale?: [number, number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], panX);
  const y = useTransform(scrollYProgress, [0, 1], panY);
  const imgScale = useTransform(scrollYProgress, [0, 1], scale);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-[120%] w-full object-cover will-change-transform"
        style={{ x, y, scale: imgScale }}
      />
    </div>
  );
}

/**
 * Focus pull — image starts blurred and sharpens into focus as it
 * scrolls into view, mimicking a photographer racking focus.
 */
export function FocusPull({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  });
  const blur = useTransform(scrollYProgress, [0, 0.6], [12, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.3, 1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover will-change-filter"
        style={{ filter: useBlurFilter(blur), opacity }}
      />
    </div>
  );
}

function useBlurFilter(blur: MotionValue<number>) {
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  return filter;
}

/**
 * Parallax layer — moves at a different speed than surrounding content,
 * giving the "camera depth" feel. Positive depth = slower (background),
 * negative = faster (foreground).
 */
export function ParallaxLayer({
  children,
  className,
  depth = 0.3,
}: {
  children: ReactNode;
  className?: string;
  depth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${depth * 20}%`, `${-depth * 20}%`]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Aperture wipe reveal — image reveals through a circular iris opening,
 * reinforcing the camera motif from the loader.
 */
export function ApertureReveal({
  src,
  alt,
  className,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.3'],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(50% 50% 50% 50%)', 'inset(0% 0% 0% 0%)']
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover will-change-clip"
        style={{ clipPath }}
      />
      {children}
    </div>
  );
}

/**
 * Clip-path wipe reveal — directional wipe tied to scroll progress.
 */
export function WipeReveal({
  src,
  alt,
  className,
  direction = 'left',
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.2'],
  });

  const clipStart: Record<string, string> = {
    left: 'inset(0 100% 0 0)',
    right: 'inset(0 0 0 100%)',
    top: 'inset(0 0 100% 0)',
    bottom: 'inset(100% 0 0 0)',
  };
  const clipEnd = 'inset(0 0 0 0)';

  const clipPath = useTransform(scrollYProgress, [0, 1], [clipStart[direction], clipEnd]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover will-change-clip"
        style={{ clipPath }}
      />
      {children}
    </div>
  );
}

/**
 * Staggered chapter entry — for section-level reveals with
 * choreographed element entries.
 */
export function ChapterEntry({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export { EASE };
