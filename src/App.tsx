import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if it's desktop for custom cursor
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.8,
    });

    if (isDesktop) document.body.classList.add('cursor-none');
    else document.body.classList.remove('cursor-none');

    return () => {
      lenis.destroy();
      window.removeEventListener('resize', checkIsDesktop);
      document.body.classList.remove('cursor-none');
    };
  }, [isDesktop]);

  return (
    <div className="relative overflow-hidden w-full bg-light selection:bg-secondary selection:text-primary">
      <div className="grain-overlay" />
      {isDesktop && <CustomCursor />}
      
      <Navigation />
      
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Gallery />
        <Team />
        <Testimonials />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
