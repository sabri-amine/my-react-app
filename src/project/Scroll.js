
import React, { useState, useEffect } from 'react';
import './hh.css'

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledEnough = window.scrollY > 200; 
      setIsVisible(isScrolledEnough);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    
    <i class="bi bi-arrow-up-short"
 onClick={scrollToTop}
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '99',
        transition: 'opacity 0.5s',
        fontSize:'1.5rem',
        color: 'white',
        backgroundColor: 'transparent',
        padding: '10px 6px',
        borderRadius: '10px',
        fontWeight: 'bold',
        backgroundColor: 'red'
        
        
      }}
></i>
  );
};

export default Scroll;


