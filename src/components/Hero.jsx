import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/40 to-dark-900 z-10"></div>
        {/* Placeholder for background image - using a high quality historical/abstract image */}
        <img
          src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=2074&auto=format&fit=crop"
          alt="Historical atmosphere"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Explorez l'histoire, <br />
          <span className="text-gold-400 italic">réinventée</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Voyagez à travers les époques avec un confort absolu. TimeTravel Agency vous ouvre les portes du passé pour des expériences inoubliables.
        </p>

        <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-dark-900 font-semibold text-lg hover:bg-gold-300 transition-all duration-300 rounded-sm">
          <span>Réserver mon voyage</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 border border-white/20 scale-105 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 rounded-sm"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
