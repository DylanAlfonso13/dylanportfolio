import React, { useState } from 'react';
import './App.css';
import ParticleBackground from './components/ParticleBackground';
import Nav from './components/Nav';
import About from './components/About';
import FrontEndProjects from './components/FrontEndProjects';
import BackEndProjects from './components/BackEndProjects';
import FullStackProjects from './components/FullStackProjects';

function App() {
  const [selectedSection, setSelectedSection] = useState('about');

  const renderSection = () => {
    switch (selectedSection) {
      case 'about':
        return <About />;
      case 'frontend':
        return <FrontEndProjects />;
      case 'backend':
        return <BackEndProjects />;
      case 'fullstack':
        return <FullStackProjects />;
      default:
        return null;
    }
  };

  return (
    <div className='h-full'>
      {/* Particle Background is contained strictly in this div */}
      <div className="relative isolate px-6 py-10 lg:px-8 overflow-hidden" style={{ height: 'calc(100vh)' }}>
        <ParticleBackground />
        <div className="mx-auto max-w-3xl py-10 sm:py-12 lg:py-14 relative z-10">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-primary-light dark:text-primary-dark sm:text-7xl">
              Hello! I'm Dylan Alfonso. I'm a Software Engineer
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-secondary-light dark:text-secondary-dark sm:text-xl/8">
              I built this portfolio from scratch using Tailwind CSS and React. Below you can navigate through my projects and learn a bit more about me :)
            </p>
          </div>
        </div>
      </div>

      {/* Navigation & Other Content */}
      <Nav onSelectSection={setSelectedSection} />
      <div className="mt-8">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
