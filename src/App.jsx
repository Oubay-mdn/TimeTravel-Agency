import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AgencySection from './components/AgencySection';
import DestinationsSection from './components/DestinationsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <AgencySection />
        <DestinationsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
