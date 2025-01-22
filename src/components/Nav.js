import React from 'react';

const Nav = ({ onSelectSection }) => {
  return (
    <nav className="flex justify-between items-center py-6 px-6 lg:px-8">
      <div className="text-pretty text-lg font-medium text-secondary-light dark:text-secondary-dark sm:text-xl/8">
        <button onClick={() => onSelectSection('about')} className="hover:text-primary-light dark:hover:text-primary-dark">About</button>
      </div>
      <div className="text-pretty text-lg font-medium text-secondary-light dark:text-secondary-dark sm:text-xl/8">
        <button onClick={() => onSelectSection('frontend')} className="hover:text-primary-light dark:hover:text-primary-dark">Front-End</button>
      </div>
      <div className="text-pretty text-lg font-medium text-secondary-light dark:text-secondary-dark sm:text-xl/8">
        <button onClick={() => onSelectSection('backend')} className="hover:text-primary-light dark:hover:text-primary-dark">Back-End</button>
      </div>
      <div className="text-pretty text-lg font-medium text-secondary-light dark:text-secondary-dark sm:text-xl/8">
        <button onClick={() => onSelectSection('fullstack')} className="hover:text-primary-light dark:hover:text-primary-dark">Full-Stack</button>
      </div>
    </nav>
  );
};

export default Nav;