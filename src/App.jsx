import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AgencySection from './components/AgencySection';
import DestinationsSection from './components/DestinationsSection';
import QuizSection from './components/QuizSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import DestinationModal from './components/DestinationModal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    destination: null,
    view: 'details'
  });

  const openModal = (destination, view = 'details') => {
    setModalState({
      isOpen: true,
      destination,
      view
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="bg-dark-900 min-h-screen font-sans text-white">
      <Header />
      <Hero />
      <AgencySection />
      <DestinationsSection onOpenModal={openModal} />
      <QuizSection onOpenModal={openModal} />
      <Footer />
      <Chatbot />

      <AnimatePresence>
        {modalState.isOpen && (
          <DestinationModal
            destination={modalState.destination}
            initialView={modalState.view}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
