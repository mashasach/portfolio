import React, { useState, useEffect, useRef } from 'react';
import './animatedOnScroll.scss';

const AnimatedOnScroll = ({ opacity, children, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {

      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div

      className={`${opacity ? 'animated-on-scroll--opacity' : 'animated-on-scroll'} ${isVisible ? 'is-visible' : ''}`}

      ref={domRef}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;