import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const ringX = useSpring(x, springConfig);
  const ringY = useSpring(y, springConfig);
  const dotX = useSpring(x, { damping: 40, stiffness: 900, mass: 0.3 });
  const dotY = useSpring(y, { damping: 40, stiffness: 900, mass: 0.3 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setHidden(true);
      return;
    }

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, input, textarea, select, label, [data-cursor="hover"]');
      setHovering(!!interactive);
    };

    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, [x, y]);

  if (hidden) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/40"
          animate={{
            width: hovering ? 48 : 28,
            height: hovering ? 48 : 28,
            borderColor: hovering ? 'rgba(201,166,107,0.8)' : 'rgba(201,166,107,0.4)',
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-amber"
          animate={{
            width: hovering ? 6 : 5,
            height: hovering ? 6 : 5,
            opacity: hovering ? 1 : 0.7,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}
