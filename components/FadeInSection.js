'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FadeInSection({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up' // 'up', 'down', 'left', 'right', 'fade'
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let fromProps = { opacity: 0 };
    let toProps = { opacity: 1, duration: 1, delay, ease: 'power2.out' };

    switch (direction) {
      case 'up':
        fromProps.y = 60;
        toProps.y = 0;
        break;
      case 'down':
        fromProps.y = -60;
        toProps.y = 0;
        break;
      case 'left':
        fromProps.x = 60;
        toProps.x = 0;
        break;
      case 'right':
        fromProps.x = -60;
        toProps.x = 0;
        break;
      default:
        // fade only
        break;
    }

    gsap.fromTo(element, fromProps, {
      ...toProps,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  }, [delay, direction]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}