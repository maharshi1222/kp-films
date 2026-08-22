import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Weddings', href: '#weddings' },
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Couples', href: '#testimonials' },
  { label: 'Inquire', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ink-900/80 backdrop-blur-md py-4' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-12">
          <button
            onClick={() => handleNav('#hero')}
            className="font-serif text-xl tracking-widest-3 text-ink-50 transition-colors hover:text-amber"
          >
            LUMIÈRE
          </button>

          <div className="hidden items-center gap-10 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="group relative text-xs uppercase tracking-widest-2 text-ink-100 transition-colors hover:text-ink-50"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNav('#contact')}
            className="hidden md:block text-xs uppercase tracking-widest-2 text-amber transition-colors hover:text-amber-light"
          >
            Check Availability
          </button>

          <button
            className="text-ink-50 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink-900/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="font-serif text-3xl tracking-widest-2 text-ink-50 transition-colors hover:text-amber"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
