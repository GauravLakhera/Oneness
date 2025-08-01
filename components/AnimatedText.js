'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText({
  children,
  className = '',
  delay = 0,
  splitType = 'words', // use 'words' or 'chars' for more reliable splitting
}) {
  const textRef = useRef(null);
  // Store ScrollTriggers related only to this component instance
  const scrollTriggersRef = useRef([]);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Clean up DOM
    element.innerHTML = '';
    // Kill only the ScrollTriggers from previous effect run
    scrollTriggersRef.current.forEach(trigger => trigger.kill());
    scrollTriggersRef.current = [];

    const text = typeof children === 'string' ? children : element.textContent;

    let spans = [];
    if (splitType === 'words') {
      const words = text.split(' ');
      words.forEach((word, idx) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.display = 'inline-block';
        element.appendChild(span);
        if (idx < words.length - 1) {
          element.appendChild(document.createTextNode(' '));
        }
        spans.push(span);
      });
    } else {
      const chars = text.split('');
      chars.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        element.appendChild(span);
        spans.push(span);
      });
    }

    const animation = gsap.fromTo(
      spans,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: splitType === 'words' ? 0.6 : 0.4,
        stagger: 0.05,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Store this component's ScrollTrigger references for cleanup
    if (animation.scrollTrigger) {
      scrollTriggersRef.current.push(animation.scrollTrigger);
    }

    return () => {
      // Kill **only** this component's ScrollTriggers on cleanup
      scrollTriggersRef.current.forEach(trigger => trigger.kill());
      gsap.killTweensOf(spans);
      scrollTriggersRef.current = [];
    };
  }, [delay, splitType, children]);

  return <div ref={textRef} className={className}></div>;
}
