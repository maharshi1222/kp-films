import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: '00' },
  { id: 'weddings', label: '01' },
  { id: 'about', label: '02' },
  { id: 'packages', label: '03' },
  { id: 'testimonials', label: '04' },
  { id: 'contact', label: '05' },
];

export function SectionCounter() {
  const [active, setActive] = useState('00');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const section = SECTIONS.find((s) => s.id === id);
            if (section) setActive(section.label);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
      <div className="flex flex-col items-center gap-3">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`text-[10px] tracking-widest-2 transition-all duration-300 ${
              active === s.label
                ? 'text-amber'
                : 'text-ink-200 hover:text-ink-50'
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
      <div className="h-16 w-px bg-gradient-to-b from-amber/40 to-transparent" />
      <span className="text-[10px] tracking-widest-2 text-ink-200">06</span>
    </div>
  );
}
