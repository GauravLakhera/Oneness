'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText({ 
  children, 
  className = '', 
  delay = 0,
  splitType = 'lines' // 'lines', 'words', 'chars'
}) {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Split text based on type
    const text = element.textContent;
    element.innerHTML = '';

    if (splitType === 'lines') {
      const lines = text.split('\n').filter(line => line.trim());
      lines.forEach((line, index) => {
        const lineElement = document.createElement('div');
        lineElement.textContent = line;
        lineElement.style.overflow = 'hidden';
        const span = document.createElement('span');
        span.textContent = line;
        span.style.display = 'block';
        lineElement.appendChild(span);
        element.appendChild(lineElement);
      });

      gsap.fromTo(element.querySelectorAll('span'), 
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    } else if (splitType === 'words') {
      const words = text.split(' ');
      words.forEach((word) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.display = 'inline-block';
        element.appendChild(span);
      });

      gsap.fromTo(element.querySelectorAll('span'), 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    } else {
      // chars
      const chars = text.split('');
      chars.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        element.appendChild(span);
      });

      gsap.fromTo(element.querySelectorAll('span'), 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, [delay, splitType]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}