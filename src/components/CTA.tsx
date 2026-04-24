import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({ name: '', phone: '', pet: '' });
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Função de agendamento fictícia! Dados: ' + JSON.stringify(formData));
  };

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-primary" id="book">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/30 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-500/20 blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 block lg:hidden"
            >
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="uppercase tracking-widest text-xs font-semibold text-white/50">Dê o primeiro passo</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-medium text-white leading-[1.1] mb-8"
            >
              Transforme a<br/> rotina do seu pet.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-md"
            >
              Agende uma visita e descubra como a medicina veterinária pode ser humana, transparente e Premium.
            </motion.p>
            
            <div className="hidden lg:flex items-center gap-6 mt-16 text-white/40 font-mono text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                Vagas limitadas esta semana
              </div>
            </div>

          </div>

          <motion.div 
            ref={formRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative"
          >
            <h3 className="text-2xl font-display font-medium text-white mb-8">Pedir Contato</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-widest mb-2 font-medium">Seu Nome</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/20 border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-secondary transition-colors placeholder:text-white/20" 
                  placeholder="Como gostaria de ser chamado?" 
                />
              </div>
              
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-widest mb-2 font-medium">WhatsApp</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-black/20 border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-secondary transition-colors placeholder:text-white/20" 
                  placeholder="(00) 00000-0000" 
                />
              </div>

              <div>
                <label className="block text-white/60 text-xs uppercase tracking-widest mb-2 font-medium">Nome do Pet</label>
                <input 
                  type="text" 
                  required
                  value={formData.pet}
                  onChange={(e) => setFormData({...formData, pet: e.target.value})}
                  className="w-full bg-black/20 border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-secondary transition-colors placeholder:text-white/20" 
                  placeholder="Quem vamos atender?" 
                />
              </div>

              <button 
                type="submit" 
                className="w-full mt-8 bg-secondary text-primary font-medium py-5 rounded-full hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Solicitar Agendamento
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
