import React from 'react';
import './Home.styles.css';
import HeroSection from './sections/HeroSection';
import JourneySection from './sections/JourneySection';
import InventorySection from './sections/InventorySection';
import UpdatesSection from './sections/UpdatesSection';
import FeaturesSection from './sections/FeaturesSection';
import StatsSection from './sections/StatsSection';
import StepsSection from './sections/StepsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FinalCTASection from './sections/FinalCTASection';

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <JourneySection />
      <InventorySection />
      <UpdatesSection />
      <FeaturesSection />
      <StatsSection />
      <StepsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default Home;