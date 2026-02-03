import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const DestinationCard = ({ title, date, location, image, description, price, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
    className="group relative overflow-hidden bg-dark-800 border border-white/5 hover:border-gold-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-900/20 hover:-translate-y-1"
  >
    <div className="aspect-[3/4] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-90 z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />

      <div className="absolute top-4 right-4 z-20">
        <span className="bg-dark-900/80 backdrop-blur-md border border-gold-400/30 text-gold-400 px-4 py-1 text-sm font-bold tracking-wider rounded-sm">
          {price}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-4 mb-2 text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {date}</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</span>
        </div>
        <h3 className="text-3xl font-serif text-white mb-3 group-hover:text-gold-100 transition-colors">{title}</h3>
        <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
          {description}
        </p>
        <button className="w-full py-3 bg-transparent border border-white/20 text-white hover:bg-gold-400 hover:border-gold-400 hover:text-dark-900 transition-all duration-300 text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-2 group-hover:bg-gold-400 group-hover:text-dark-900">
          En savoir plus <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

const DestinationsSection = () => {
  const destinations = [
    {
      title: "Paris Belle Époque",
      date: "1889",
      location: "Paris, France",
      image: "/paris-1889.png",
      description: "Plongez dans l'effervescence de l'Exposition Universelle. Flânez sous la tour Eiffel flambant neuve et découvrez le Paris des artistes et des inventeurs.",
      price: "12 500 €"
    },
    {
      title: "Florence Renaissance",
      date: "1504",
      location: "Florence, Italie",
      image: "/florence-1504.png",
      description: "Côtoyez les génies de la Renaissance. Assistez à la création du David de Michel-Ange et arpentez les rues d'une Florence à son apogée culturelle.",
      price: "15 000 €"
    },
    {
      title: "Ère des Titans",
      date: "-65M Années",
      location: "Pangée",
      image: "/dino.png",
      description: "Une aventure primitive sécurisée. Observez le T-Rex régner sur son territoire depuis nos dômes d'observation invisibles. L'expérience sauvage ultime.",
      price: "25 000 €"
    },
  ];

  return (
    <section id="destinations" className="py-24 bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold-400 text-sm tracking-[0.2em] uppercase font-bold"
          >
            Nos Voyages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mt-4"
          >
            Destinations Légendaires
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-dark-900 transition-colors uppercase tracking-widest text-sm font-semibold"
          >
            Voir toutes les époques
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
