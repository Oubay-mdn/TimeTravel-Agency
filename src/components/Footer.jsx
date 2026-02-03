import React from 'react';
import { Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-800 pt-20 pb-10 border-t border-gold-500/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="w-6 h-6 text-gold-400" />
              <span className="text-xl font-serif font-bold text-white">
                TimeTravel <span className="text-gold-400">Agency</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Le temps est notre domaine. L'excellence est notre promesse.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Exploration</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Époques</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Expériences sur mesure</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Guide du voyageur</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Agence</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-400 transition-colors">À propos de nous</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">La Technologie</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Presse</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Carrières</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>contact@timetravel.agency</li>
              <li>+33 1 23 45 67 89</li>
              <li className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} TimeTravel Agency. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-400 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-gold-400 transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
