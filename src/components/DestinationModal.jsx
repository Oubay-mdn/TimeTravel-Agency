import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Clock, Star, CheckCircle } from 'lucide-react';

const DestinationModal = ({ destination, onClose }) => {
  if (!destination) return null;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/90 backdrop-blur-sm overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-dark-800 border border-gold-500/30 shadow-2xl shadow-gold-900/20 rounded-sm overflow-hidden flex flex-col md:flex-row my-8"
        >
          {/* Close Button Mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-dark-900/50 rounded-full text-white hover:text-gold-400 md:hidden"
          >
            <X size={24} />
          </button>

          {/* Image Section */}
          <div className="md:w-2/5 relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-dark-800 z-10"></div>
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 bg-gold-400 text-dark-900 px-3 py-1 font-bold text-xs uppercase tracking-wider rounded-sm shadow-lg">
                <Star size={14} fill="currentColor" /> Premium
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-3/5 p-8 md:p-10 text-left relative">
            {/* Close Button Desktop */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-gold-400 transition-colors hidden md:block"
            >
              <X size={28} />
            </button>

            <div className="flex flex-wrap items-center gap-4 mb-2 text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">
              <span className="flex items-center gap-1"><Calendar size={14} /> {destination.date}</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> {destination.location}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {destination.duration}</span>
            </div>

            <h2 className="text-4xl font-serif text-white mb-6 leading-tight">{destination.title}</h2>

            <div className="space-y-4 text-gray-300 font-light leading-relaxed mb-8 border-l-2 border-gold-500/20 pl-6">
              {destination.longDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-white font-serif text-lg mb-4 flex items-center gap-2">
                <Star className="text-gold-400" size={18} /> Points Forts
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-400 group">
                    <CheckCircle className="text-gold-500/50 group-hover:text-gold-400 transition-colors" size={16} />
                    <span className="group-hover:text-gray-200 transition-colors">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Prix par personne</p>
                <p className="text-3xl font-serif text-gold-400">{destination.price}</p>
              </div>
              <button className="w-full sm:w-auto px-8 py-4 bg-gold-400 hover:bg-gold-300 text-dark-900 font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] rounded-sm">
                Réserver ce voyage
              </button>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DestinationModal;
