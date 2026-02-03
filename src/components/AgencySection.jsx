import React from 'react';
import { Shield, Star, Clock } from 'lucide-react';

const AgencySection = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-gold-400 text-sm tracking-[0.2em] uppercase mb-4 font-bold">L'Excellence Temporelle</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Une agence hors du <br /> commun
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Depuis 2142, TimeTravel Agency est le leader mondial du tourisme chronologique de luxe. Nous ne vendons pas seulement des destinations, nous offrons l'immortalité de l'instant.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Nos capsules temporelles de classe Quantum garantissent une sécurité absolue et un confort digne des plus grands palaces, quelle que soit l'époque visitée.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-gold-400 shrink-0" />
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Sécurité Maximale</h4>
                  <p className="text-sm text-gray-500">Protection paradoxale certifiée ISO-9000.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-gold-400 shrink-0" />
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Service Premium</h4>
                  <p className="text-sm text-gray-500">Majordome personnel inclus dans chaque voyage.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 border-2 border-gold-400/30 translate-x-4 translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1542259659-4ab2b1ee3f93?q=80&w=1964&auto=format&fit=crop"
                alt="Intérieur luxueux"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencySection;
