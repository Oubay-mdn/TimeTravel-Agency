import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const DestinationCard = ({ title, date, location, image, description }) => (
  <div className="group relative overflow-hidden bg-dark-800 border border-white/5 hover:border-gold-400/30 transition-all duration-500">
    <div className="aspect-[3/4] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80 z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />

      <div className="absolute bottom-0 left-0 w-full p-6 z-20">
        <div className="flex items-center gap-4 mb-3 text-gold-400 text-sm tracking-widest uppercase font-medium">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {date}</span>
        </div>
        <h3 className="text-3xl font-serif text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {description}
        </p>
        <button className="flex items-center gap-2 text-white hover:text-gold-400 transition-colors text-sm uppercase tracking-widest font-semibold">
          Réserver <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

const DestinationsSection = () => {
  const destinations = [
    {
      title: "Paris Belle Époque",
      date: "1889",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=2574&auto=format&fit=crop",
      description: "Vivez l'Exposition Universelle et l'inauguration de la Tour Eiffel dans une ambiance de faste et de progrès."
    },
    {
      title: "Florence Renaissance",
      date: "1504",
      location: "Florence, Italie",
      image: "https://images.unsplash.com/photo-1543429776-277adcf5207d?q=80&w=2670&auto=format&fit=crop",
      description: "Rencontrez Michel-Ange et Léonard de Vinci au cœur de la cité des arts. Une immersion culturelle absolue."
    },
    {
      title: "Ère des Titans",
      date: "-65M Années",
      location: "Pangée",
      image: "https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=2576&auto=format&fit=crop",
      description: "Observez les géants du Crétacé depuis notre station orbitale sécurisée ou nos bulles d'observation terrestres."
    },
  ];

  return (
    <section id="destinations" className="py-24 bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm tracking-[0.2em] uppercase font-bold">Nos Voyages</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">Destinations Légendaires</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-dark-900 transition-colors uppercase tracking-widest text-sm font-semibold">
            Voir toutes les époques
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
