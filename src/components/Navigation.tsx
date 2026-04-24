import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Manifesto', href: '#about' },
    { name: 'Especialistas', href: '#team' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-6 md:py-8'}`}
      >
        <div className="container mx-auto px-6 lg:px-24 flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-display font-medium tracking-tight text-primary cursor-pointer w-1/3">
            Pet<span className="text-secondary">Premium</span>
          </div>

          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 w-1/3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-primary text-sm font-medium hover:text-secondary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="w-1/3 flex justify-end">
            <button 
              className="hidden md:flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-secondary hover:text-primary transition-colors cursor-pointer"
              onClick={() => {
                const el = document.getElementById('book');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Agendar
            </button>
            <button 
              className="md:hidden text-primary p-2 focus:outline-none" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-primary flex flex-col px-6 py-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
               <div className="text-2xl font-display font-medium tracking-tight text-white">
                Pet<span className="text-secondary">Premium</span>
               </div>
               <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                 <X size={32} strokeWidth={1.5} />
               </button>
            </div>

            <div className="flex flex-col gap-8 items-start">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-4xl text-white font-display font-light"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById('book');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-8 bg-secondary text-primary px-8 py-4 rounded-full text-lg w-full font-medium"
              >
                  Agendar Consulta
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
