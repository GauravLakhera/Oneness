'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined' && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedSentence = ({ text }) => {
  const sentenceRef = useRef(null);

  useEffect(() => {
    const el = sentenceRef.current;

    // Reset initial state (offscreen right)
    gsap.set(el, { x: '100vw', opacity: 1 });

    const animation = gsap.to(el, {
      x: '80%',  // Move to center (50% from the left viewport)
      xPercent: -80, // offset to center exact since transform-origin is center
      ease: 'power1.out',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',    // when sentence top hits bottom of viewport
        end: 'top top',      // till sentence top reaches center of viewport
        scrub: true,            // smooth scrubbing synced to scroll
        // markers: true,       // uncomment for debug markers
      },
    });

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    };
  }, []);

  return (
<div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
  <div
    ref={sentenceRef}
    className="whitespace-nowrap text-5xl md:text-[8rem] py-4 font-semibold text-black block leading-none"
    style={{ width: 'max-content' }}
  >
    {text}
  </div>
</div>


  );
};

export default AnimatedSentence;
