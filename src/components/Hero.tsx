import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = "Cuidado que transforma vidas.".split(" ");

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F7F9FC] pb-24">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#eef7f2] to-[#F7F9FC] opacity-90" />
      
      {/* Parallax Image / Decor */}
      <motion.div style={{ y, opacity }} className="absolute right-0 bottom-0 w-[55vw] h-[85vh] pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" 
          alt="Happy dogs" 
          className="w-full h-full object-cover object-left-top mix-blend-multiply opacity-30 rounded-tl-[120px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" 
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 lg:px-24 pt-24 md:pt-32">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[2px] w-12 bg-secondary" />
            <span className="uppercase tracking-[0.15em] text-sm font-semibold text-primary/70">
              Premium Pet Care
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-display font-medium leading-[0.9] tracking-[-0.03em] mb-8 text-primary">
            {words.map((word, i) => (
              <span key={i} className="overflow-hidden inline-block mr-4 mb-2 pb-2">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 + i * 0.1 
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-primary/60 max-w-2xl mb-12 font-sans font-light leading-relaxed"
          >
            A clínica veterinária que quebra o padrão. Sem ansiedade. 
            Sem cheiro de hospital. Apenas o melhor para quem você ama.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <button className="group relative inline-flex h-16 md:h-20 items-center justify-center overflow-hidden rounded-full bg-primary px-10 md:px-12 font-medium text-white transition-all hover:scale-[1.02] active:scale-95">
              <span className="absolute inset-0 bg-secondary transition-transform duration-500 [transform:translateY(100%)] group-hover:[transform:translateY(0)]" />
              <span className="relative z-10 flex items-center gap-3 text-lg">
                Agendar Consulta
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 lg:left-24 flex items-center gap-4 text-primary/40"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
