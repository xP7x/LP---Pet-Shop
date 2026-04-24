import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const cases = [
  {
    title: "Luna",
    subtitle: "Recuperação Ortopédica",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Thor",
    subtitle: "Tratamento Dermatológico",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Mia",
    subtitle: "Check-up Preventivo",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Bob",
    subtitle: "Cirurgia Geral",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={targetRef} className="h-[150vh] relative bg-primary">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Dynamic Background decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-24 z-10 w-full pointer-events-none mb-[20px] shrink-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="uppercase tracking-widest text-xs font-semibold text-white/50">Galeria</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] text-white">
            Histórias felizes.
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-6 lg:px-24 gallery-track w-max">
          {cases.map((c, i) => (
            <div
              key={i}
              className="relative w-[80vw] md:w-[45vw] lg:w-[35vw] shrink-0 h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden group cursor-none"
            >
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              {/* Grain Texture on photo */}
              <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] " />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

              <div className="absolute bottom-10 left-10 z-20 overflow-hidden">
                <div className="text-secondary uppercase tracking-[0.2em] text-xs font-semibold mb-2 transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">{c.subtitle}</div>
                <div className="text-5xl font-display font-medium text-white">{c.title}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
