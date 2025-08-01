import React, { useEffect } from "react";
import "./Home.styles.css";
import HeroSection from "./HeroSection";
import JourneySection from "./sections/JourneySection";
import InventorySection from "./sections/InventorySection";
import UpdatesSection from "./sections/UpdatesSection";
import FeaturesSection from "./sections/FeaturesSection";
import StatsSection from "./sections/StatsSection";
import StepsSection from "./sections/StepsSection";
import FinalCTASection from "./sections/FinalCTASection";

const Home = () => {
  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          entry.target.style.filter = "blur(0)";
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".home-section");
    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
      section.style.filter = "blur(2px)";
      section.style.transition = "all 0.8s ease-in-out";
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      <div className="home-section">
        <HeroSection />
      </div>
      <div className="home-section">
        <JourneySection />
      </div>
      <div className="home-section">
        <InventorySection />
      </div>
      <div className="home-section">
        <UpdatesSection />
      </div>
      <div className="home-section">
        <FeaturesSection />
      </div>
      <div className="home-section">
        <StatsSection />
      </div>
      <div className="home-section">
        <StepsSection />
      </div>
      <div className="home-section">
        <FinalCTASection />
      </div>
    </div>
  );
};

export default Home;
