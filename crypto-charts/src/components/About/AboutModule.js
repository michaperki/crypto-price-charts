import React, { useRef, useEffect } from 'react';
import AboutModuleStyles from './AboutModuleStyles';

const AboutModule = ({ onClose }) => {
  const moduleRef = useRef(null);

  // Handle click outside the module to close it
  const handleOutsideClick = (event) => {
    if (moduleRef.current && !moduleRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Add event listener to handle outside click
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="about-module" ref={moduleRef}>
      <AboutModuleStyles />
      <h2>About</h2>
      <p>This is a React application to display cryptocurrency prices using Recharts.</p>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default AboutModule;
