import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/FifteenDaysChallenge';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);

    // Add intersection observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-view');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      if (fadeElements) {
        fadeElements.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <ExperienceSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <TestimonialsSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;