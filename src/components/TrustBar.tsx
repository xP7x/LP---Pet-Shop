import { motion } from 'framer-motion';

const stats = [
  { value: "4.9/5", label: "Google Reviews", icon: "⭐" },
  { value: "2.400+", label: "Pets Atendidos", icon: "🐕" },
  { value: "10", label: "Anos de Experiência", icon: "🏆" },
  { value: "8", label: "Especialistas", icon: "🩺" },
];

export default function TrustBar() {
  return (
    <section className="bg-primary text-white py-16 md:py-20 relative z-20">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 relative"
            >
              {i !== 0 && (
                <div className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10" />
              )}
              <div className="text-4xl md:text-5xl font-display font-light mb-2 flex items-center gap-3">
                <span className="text-2xl md:text-3xl grayscale brightness-200 opacity-80">{stat.icon}</span>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-white/50 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
