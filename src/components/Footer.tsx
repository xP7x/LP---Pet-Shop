import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/10 text-white rounded-t-[3rem] -mt-[3rem] relative z-20">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-display font-medium tracking-tight mb-6">Pet<span className="text-secondary">Premium.</span></h3>
            <p className="text-white/60 font-light mb-8 max-w-sm">
              Elevando o padrão de cuidados veterinários no Brasil com medicina de ponta e infraestrutura humanizada.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6 font-mono">Contato</h4>
            <ul className="space-y-4 text-white/80">
              <li className="hover:text-secondary cursor-pointer transition-colors">Ola@petpremium.com</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">+55 (11) 99999-9999</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">+55 (11) 3333-3333</li>
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6 font-mono">Endereço</h4>
             <ul className="space-y-4 text-white/80">
               <li>Av. Brigadeiro Faria Lima, 1234</li>
               <li>Jardim Paulistano, São Paulo - SP</li>
               <li className="text-secondary cursor-pointer hover:underline underline-offset-4 pt-2">Ver no Maps →</li>
             </ul>
          </div>

          <div>
             <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6 font-mono">Horários</h4>
             <ul className="space-y-4 text-white/80">
               <li>Seg a Sex: 08h às 20h</li>
               <li>Sáb: 08h às 14h</li>
               <li className="text-secondary">Emergências: 24h</li>
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm">
          <p>© 2026 Pet Premium. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
