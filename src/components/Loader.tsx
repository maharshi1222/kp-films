import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SKIP_KEY = 'lumiere_loaded';

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(SKIP_KEY)) {
      setVisible(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem(SKIP_KEY, '1');
      setVisible(false);
      onComplete();
    }, 2300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink-900"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative flex flex-col items-center">
            {/* Camera body + lens SVG */}
            <svg
              width="280"
              height="160"
              viewBox="0 0 280 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              {/* Camera body outline */}
              <motion.path
                d="M20 50 L20 120 Q20 130 30 130 L100 130 L100 130 L100 130 L100 130 L100 130"
                stroke="#C9A66B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
              <motion.path
                d="M20 50 L20 120 Q20 130 30 130 L100 130"
                stroke="#C9A66B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              {/* Top of body */}
              <motion.path
                d="M30 50 L50 50 L55 40 L85 40 L90 50 L100 50"
                stroke="#C9A66B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              />
              {/* Viewfinder bump */}
              <motion.path
                d="M60 40 L60 32 L80 32 L80 40"
                stroke="#C9A66B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
              />
              {/* Shutter button */}
              <motion.circle
                cx="92"
                cy="44"
                r="3"
                stroke="#C9A66B"
                strokeWidth="1.5"
                fill="none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.25 }}
              />

              {/* Lens barrel segments - telescope out */}
              {/* Segment 1 (attached to body) */}
              <motion.rect
                x="100"
                y="60"
                width="20"
                height="40"
                rx="3"
                stroke="#C9A66B"
                strokeWidth="1.5"
                fill="none"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              />
              {/* Segment 2 */}
              <motion.rect
                x="120"
                y="63"
                width="22"
                height="34"
                rx="3"
                stroke="#C9A66B"
                strokeWidth="1.5"
                fill="none"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              />
              {/* Segment 3 */}
              <motion.rect
                x="142"
                y="66"
                width="24"
                height="28"
                rx="3"
                stroke="#C9A66B"
                strokeWidth="1.5"
                fill="none"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              />
              {/* Segment 4 (front) */}
              <motion.rect
                x="166"
                y="69"
                width="26"
                height="22"
                rx="3"
                stroke="#C9A66B"
                strokeWidth="1.5"
                fill="none"
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
              />

              {/* Aperture / iris at front of lens */}
              <motion.circle
                cx="192"
                cy="80"
                r="11"
                stroke="#C9A66B"
                strokeWidth="1.5"
                fill="none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              />
              {/* Iris blades */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.line
                  key={i}
                  x1="192"
                  y1="80"
                  x2={192 + 9 * Math.cos((angle * Math.PI) / 180)}
                  y2={80 + 9 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#C9A66B"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.8,
                    delay: 1.1 + i * 0.05,
                    ease: 'easeInOut',
                  }}
                />
              ))}
              {/* Center dot */}
              <motion.circle
                cx="192"
                cy="80"
                r="2"
                fill="#C9A66B"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.3, 1] }}
                transition={{ duration: 0.6, delay: 1.1 }}
              />
            </svg>

            {/* Wordmark */}
            <motion.div
              className="mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1
                className="font-serif text-2xl tracking-widest-3 text-ink-50"
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                LUMIÈRE
              </motion.h1>
            </motion.div>

            {/* Progress line */}
            <motion.div
              className="mt-4 h-px w-24 bg-ink-600 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-amber"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.8, ease: [0.45, 0, 0.15, 1], delay: 0.3 }}
              />
            </motion.div>
          </div>

          {/* Shutter flash */}
            <motion.div
              className="absolute inset-0 bg-white pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 0.9, 0] }}
              transition={{
                duration: 0.3,
                times: [0, 0.82, 0.88, 0.92, 1],
                delay: 2.0,
              }}
            />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
