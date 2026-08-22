import { Instagram, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-ink-700 py-12">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-serif text-xl tracking-widest-3 text-ink-50">
            LUMIÈRE
          </p>
          <p className="text-[10px] uppercase tracking-widest-2 text-ink-100">
            Ana Moreau · Fine Art Wedding Photography · © {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-100 transition-colors hover:text-amber"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:hello@anamoreau.com"
              className="text-ink-100 transition-colors hover:text-amber"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest-2 text-ink-200">
              Made with <Heart size={10} className="text-amber" /> in Lisbon
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
