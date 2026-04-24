import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="py-24 md:py-40 bg-white overflow-hidden relative" id="about">
      {/* Decoration line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative h-[600px] md:h-[800px] w-full mt-10 md:mt-0 rounded-[2.5rem]">
            <motion.div style={{ y: imgY }} className="absolute inset-x-0 -top-[10%] -bottom-[10%] w-full rounded-[2.5rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1000&auto=format&fit=crop" 
                alt="Cat in focus"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Additional floating image */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
              className="hidden lg:block absolute -right-16 bottom-24 w-64 h-80 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl z-20 bg-light"
            >
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Happy dog" />
            </motion.div>
            
            {/* Glassmorphism Badge */}
            <div className="absolute bottom-8 right-8 z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl flex items-center gap-4 text-white max-w-[240px]"
              >
                <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div className="font-medium text-sm leading-snug">
                  Certificação Internacional Cat Friendly
                </div>
              </motion.div>
            </div>
          </div>

          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="uppercase tracking-widest text-xs font-semibold text-primary/60">O Nosso Manifesto</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] mb-10 text-primary tracking-tight"
            >
              Mais empatia. <br /> <span className="text-primary/40">Menos protocolo frio.</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg md:text-xl text-primary/70 font-sans font-light leading-relaxed"
            >
              <p>Nascemos para mudar a forma como os animais vivem a experiência médica. Substituímos as macas de inox geladas por ambientes acolhedores, aquecidos e projetados para a espécie.</p>
              <p>Acreditamos profundamente que a medicina veterinária só é excelente quando alia alta tecnologia biomédica ao carinho e respeito.</p>
              <p className="font-medium text-primary">Não somos apenas médicos. Somos guardiões da saúde e bem-estar de quem você mais ama.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 pt-10 border-t border-primary/10"
            >
               <div className="font-display text-4xl text-primary/80 mb-2 font-light" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                 Amanda Silva
               </div>
               <div className="font-display font-medium text-primary text-xl">Dra. Amanda Silva</div>
               <div className="text-sm text-primary/50 tracking-wider uppercase mt-1">Diretora Clínica & Fundadora</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
