import { motion } from 'framer-motion';

const team = [
  {
    name: "Dra. Amanda Silva",
    role: "Diretora Clínica & Especialista Felina",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Carlos Mendes",
    role: "Cirurgia Pediátrica & Ortopedia",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Beatriz Costa",
    role: "Esteticista Animal",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Team() {
  return (
    <section className="py-24 md:py-40 bg-light" id="team">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="uppercase tracking-widest text-xs font-semibold text-primary/60">Especialistas</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-medium leading-[1.1] text-primary max-w-2xl"
          >
            Mãos que cuidam, mentes que curam.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-8 bg-black/5 shadow-xl shadow-primary/5 border border-primary/10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-secondary/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-[1s] group-hover:scale-105 group-hover:opacity-90 grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


              </div>

              <div className="text-center">
                <h3 className="text-2xl font-display font-medium text-primary mb-2">{member.name}</h3>
                <p className="text-primary/60 text-sm uppercase tracking-wider">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
