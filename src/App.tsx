import { useState, useEffect } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { Loader } from '@/components/Loader';
import { Navigation } from '@/components/Navigation';
import { ScrollProgress } from '@/components/ScrollProgress';
import { SectionCounter } from '@/components/SectionCounter';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { FeaturedWeddings } from '@/components/sections/FeaturedWeddings';
import { About } from '@/components/sections/About';
import { Gallery } from '@/components/sections/Gallery';
import { Packages } from '@/components/sections/Packages';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

function App() {
  const [loaded, setLoaded] = useState(false);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useSmoothScroll(loaded && !prefersReducedMotion);

  useEffect(() => {
    if (loaded) document.body.style.overflow = 'auto';
    else document.body.style.overflow = 'hidden';
  }, [loaded]);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <SectionCounter />

      <main>
        <Hero />
        <FeaturedWeddings />
        <About />
        <Gallery />
        <Packages />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
