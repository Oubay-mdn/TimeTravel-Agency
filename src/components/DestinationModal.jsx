import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Clock, Star, CheckCircle, ArrowLeft, Loader } from 'lucide-react';

const DestinationModal = ({ destination, onClose }) => {
  const [view, setView] = useState('details'); // 'details', 'form', 'success'
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    travelers: 1
  });

  // Initialize destination in form when prop changes
  useEffect(() => {
    if (destination) {
      setFormData(prev => ({ ...prev, destination: destination.title }));
      setView('details'); // Reset view when opening new destination
    }
  }, [destination]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!destination) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate backend delay
    setTimeout(() => {
      setIsLoading(false);
      setView('success');
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
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
        className="relative w-full max-w-5xl bg-dark-800 border border-gold-500/30 shadow-2xl shadow-gold-900/20 rounded-sm overflow-hidden flex flex-col md:flex-row my-8 min-h-[600px]"
      >
        {/* Close Button Mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-dark-900/50 rounded-full text-white hover:text-gold-400 md:hidden"
        >
          <X size={24} />
        </button>

        {/* Image Section - Always visible but content might change slightly or purely decorative */}
        <div className="md:w-2/5 relative h-48 md:h-auto hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-800 z-10"></div>
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 z-20">
            <span className="bg-gold-400 text-dark-900 px-3 py-1 font-bold text-xs uppercase tracking-wider rounded-sm shadow-lg mb-2 inline-block">
              {view === 'success' ? 'Voyage Confirmé' : 'Premium Experience'}
            </span>
            <h3 className="text-3xl font-serif text-white max-w-xs leading-tight mt-2 drop-shadow-lg">
              {view === 'success' ? 'Bon Voyage !' : destination.title}
            </h3>
          </div>
        </div>

        {/* Dynamic Content Section */}
        <div className="md:w-3/5 p-8 md:p-12 text-left relative flex flex-col justify-center bg-dark-800">
          {/* Close Button Desktop */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gold-400 transition-colors hidden md:block"
          >
            <X size={28} />
          </button>

          <AnimatePresence mode="wait">
            {view === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <div className="flex flex-wrap items-center gap-4 mb-2 text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {destination.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {destination.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {destination.duration}</span>
                </div>

                <h2 className="text-4xl font-serif text-white mb-6 leading-tight md:hidden">{destination.title}</h2>

                <div className="space-y-4 text-gray-300 font-light leading-relaxed mb-8 border-l-2 border-gold-500/20 pl-6">
                  {destination.longDescription.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="mb-8 flex-grow">
                  <h4 className="text-white font-serif text-lg mb-4 flex items-center gap-2">
                    <Star className="text-gold-400" size={18} /> Points Forts
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-gray-400 group">
                        <CheckCircle className="text-gold-500/50 group-hover:text-gold-400 transition-colors flex-shrink-0" size={16} />
                        <span className="group-hover:text-gray-200 transition-colors">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5 mt-auto">
                  <div className="text-center sm:text-left">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Prix par personne</p>
                    <p className="text-3xl font-serif text-gold-400">{destination.price}</p>
                  </div>
                  <button
                    onClick={() => setView('form')}
                    className="w-full sm:w-auto px-8 py-4 bg-gold-400 hover:bg-gold-300 text-dark-900 font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] rounded-sm"
                  >
                    Réserver ce voyage
                  </button>
                </div>
              </motion.div>
            )}

            {view === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <button
                    onClick={() => setView('details')}
                    className="flex items-center text-gray-400 hover:text-gold-400 text-sm uppercase tracking-wider transition-colors mr-auto"
                  >
                    <ArrowLeft size={16} className="mr-2" /> Retour
                  </button>
                  <h3 className="text-2xl font-serif text-white">Réservation</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-gold-400 block font-bold">Nom Complet</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-dark-900/50 border border-white/10 focus:border-gold-400/50 text-white px-4 py-3 rounded-sm outline-none transition-colors"
                        placeholder="Jules Verne"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-gold-400 block font-bold">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-dark-900/50 border border-white/10 focus:border-gold-400/50 text-white px-4 py-3 rounded-sm outline-none transition-colors"
                        placeholder="jules@timetravel.agency"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gold-400 block font-bold">Destination</label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full bg-dark-900/50 border border-white/10 focus:border-gold-400/50 text-white px-4 py-3 rounded-sm outline-none transition-colors appearance-none"
                    >
                      <option>Paris Belle Époque</option>
                      <option>Florence Renaissance</option>
                      <option>Ère des Titans</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-gold-400 block font-bold">Date de départ</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full bg-dark-900/50 border border-white/10 focus:border-gold-400/50 text-white px-4 py-3 rounded-sm outline-none transition-colors [color-scheme:dark]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-gold-400 block font-bold">Voyageurs</label>
                      <input
                        type="number"
                        name="travelers"
                        min="1"
                        required
                        value={formData.travelers}
                        onChange={handleInputChange}
                        className="w-full bg-dark-900/50 border border-white/10 focus:border-gold-400/50 text-white px-4 py-3 rounded-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gold-400 hover:bg-gold-300 text-dark-900 font-bold uppercase tracking-widest text-sm py-4 mt-6 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] rounded-sm disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2"><Loader className="animate-spin" size={18} /> Validation Temporelle...</span>
                    ) : (
                      'Confirmer la réservation'
                    )}
                  </button>
                </form>
              </motion.div>
            )}

            {view === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-24 h-24 rounded-full bg-gold-400/10 flex items-center justify-center mb-8 border border-gold-400/30">
                  <CheckCircle className="text-gold-400 w-12 h-12" />
                </div>
                <h2 className="text-4xl font-serif text-white mb-6">Réservation Confirmée !</h2>
                <p className="text-gray-300 text-lg max-w-lg mb-8 leading-relaxed">
                  Félicitations <strong>{formData.name}</strong> !<br />
                  Votre voyage vers <strong>{formData.destination}</strong> est validé.
                  <br /><br />
                  Nos agents temporels vous contacteront sous peu à l'adresse <em>{formData.email}</em> pour finaliser les protocoles de sécurité.
                </p>
                <button
                  onClick={onClose}
                  className="px-8 py-3 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-dark-900 transition-colors uppercase tracking-widest text-sm font-semibold"
                >
                  Fermer
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default DestinationModal;
