import React, { useState } from 'react';
import './App.css';
import Blob from './components/Blob';
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
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden h-full -z-10">
        <Blob smtop="-top-96" top="-top-40" animate="animate-move1" />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-primary-light dark:text-primary-dark sm:text-7xl">
              Hi! I'm Dylan Alfonso and this is my portfolio
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-secondary-light dark:text-secondary-dark sm:text-xl/8">
              I built this portfolio from scratch using Tailwind CSS and React. Below you can navigate through my projects and learn a bit more about me :)
            </p>
          </div>
        </div>
        <Blob smtop="top-[calc(100%-30rem)]" top="top-[calc(100%-13rem)]" animate="animate-move2" />
      </div>
      <Nav onSelectSection={setSelectedSection} />
      <div className="mt-8">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
