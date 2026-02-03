import React, { useState, useEffect } from 'react';
import { Menu, X, Clock } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/95 backdrop-blur-md py-4 shadow-lg border-b border-gold-500/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Clock className="w-8 h-8 text-gold-400" />
          <span className="text-2xl font-serif font-bold text-white tracking-wide">
            TimeTravel <span className="text-gold-400">Agency</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#destinations" className="text-gray-300 hover:text-gold-400 transition-colors uppercase text-sm tracking-widest">Destinations</a>
          <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors uppercase text-sm tracking-widest">À propos</a>
          <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors uppercase text-sm tracking-widest">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-gold-500/20 py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#destinations" className="text-gray-300 hover:text-gold-400 uppercase text-sm tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Destinations</a>
            <a href="#about" className="text-gray-300 hover:text-gold-400 uppercase text-sm tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>À propos</a>
            <a href="#contact" className="text-gray-300 hover:text-gold-400 uppercase text-sm tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
