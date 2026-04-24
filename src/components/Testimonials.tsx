import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Pela primeira vez a Mel não tremeu na sala de espera. O cuidado da equipe é algo fora do comum. Me senti em casa.",
    author: "Karina Alves",
    pet: "Tutor da Mel (Golden Retriever)"
  },
  {
    text: "O pós-operatório do Joca foi acompanhado de perto todos os dias. A transparência e o carinho me deram paz.",
    author: "Roberto Diniz",
    pet: "Tutor do Joca (SRD)"
  },
  {
    text: "Eles realmente entendem o comportamento felino. A sala só para gatos faz toda a diferença para o bem-estar deles.",
    author: "Marina Sampaio",
    pet: "Tutora do Simba (Siamês)"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden text-white">
      {/* Decorative large quote mark */}
      <div className="absolute top-12 left-12 text-[300px] text-white/[0.03] font-display leading-none select-none">"</div>

      <div className="container mx-auto px-6 lg:px-24">
        <div className="max-w-4xl mx-auto" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 pl-4 text-center cursor-grab active:cursor-grabbing">
                <div className="mb-8 flex justify-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.1 }}
                      className="text-secondary text-2xl"
                    >
                      ★
                    </motion.div>
                  ))}
                </div>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.3] mb-12 text-white/90 tracking-tight">
                  "{t.text}"
                </h3>
                <div className="inline-block relative">
                  <div className="absolute -left-12 top-1/2 w-8 h-[1px] bg-secondary/50" />
                  <div className="absolute -right-12 top-1/2 w-8 h-[1px] bg-secondary/50" />
                  <div className="font-sans font-medium text-lg text-white tracking-widest">{t.author}</div>
                  <div className="text-secondary/80 text-sm mt-1 font-sans">{t.pet}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? 'w-12 bg-secondary' : 'bg-white/20 hover:bg-white/50'}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
