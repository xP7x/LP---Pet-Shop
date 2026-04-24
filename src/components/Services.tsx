import { motion } from 'framer-motion';
import { Stethoscope, Scissors, HeartPulse, Activity } from 'lucide-react';

const services = [
  {
    title: "Clínica Geral",
    desc: "Check-ups e acompanhamento preventivo completo com atenção aos detalhes.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Estética Animal",
    desc: "Banho & Tosa com produtos premium, secagem silenciosa e cromoterapia.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Cardiologia",
    desc: "Prevenção, diagnóstico preciso e tratamento especializado com os melhores equipamentos.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Cirurgia",
    desc: "Centro cirúrgico de alta complexidade com anestesia inalatória e monitoramento 24h.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section className="py-24 md:py-40 bg-light relative" id="services">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="uppercase tracking-widest text-xs font-semibold text-primary/60">Especialidades</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-medium tracking-tight mb-6 leading-[1.05]"
            >
              Nossa expertise, <br /> o conforto deles.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:block pb-4"
          >
            <p className="text-primary/60 max-w-sm text-lg font-light leading-relaxed">
              Investimos em tecnologia de ponta e infraestrutura premium para entregar o cuidado médico que seu pet merece.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2rem] overflow-hidden bg-white h-[400px] md:h-[500px] flex items-end cursor-pointer"
            >
               <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-90" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
               </div>

               <div className="relative z-10 p-8 md:p-12 w-full transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md mb-6 border border-white/20 text-white`}>
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 text-lg max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.desc}
                  </p>
               </div>
               
               {/* Magnetic arrow corner */}
               <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-10">
                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M1 13L13 1M13 1H3.4M13 1V10.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
