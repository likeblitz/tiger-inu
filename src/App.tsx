import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TokenomicsSection from './components/TokenomicsSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-yellow-400" style={{ fontFamily: "'Fredoka One', cursive" }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default App;
