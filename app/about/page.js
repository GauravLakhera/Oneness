'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import AnimatedText from '@/components/AnimatedText';
import FadeInSection from '@/components/FadeInSection';

export default function About() {
  useEffect(() => {
    gsap.fromTo('.page-hero', 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-black pt-32">
      {/* Hero Section */}
      <section className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero">
            <h1 className="hero-text mb-12">About</h1>
            <div className="max-w-3xl">
              <p className="section-title font-light leading-relaxed">
                We are engineers, innovators, and problem solvers united by 
                a singular vision: to create technology solutions that transcend 
                conventional boundaries and deliver unprecedented value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <FadeInSection>
              <h2 className="section-title mb-8">Our Mission</h2>
              <AnimatedText className="body-text opacity-80 mb-8" splitType="lines">
                To bridge the gap between visionary concepts and practical 
                implementation through cutting-edge engineering excellence. 
                We transform complex challenges into elegant solutions that 
                drive progress and create lasting impact.
              </AnimatedText>
              <AnimatedText className="body-text opacity-80" splitType="lines" delay={0.3}>
                Every project we undertake is an opportunity to push boundaries, 
                explore new possibilities, and deliver outcomes that exceed 
                expectations while maintaining the highest standards of quality 
                and precision.
              </AnimatedText>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-light mb-4 tracking-wide">FOUNDED</h3>
                  <p className="text-4xl font-light">2024</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4 tracking-wide">PROJECTS DELIVERED</h3>
                  <p className="text-4xl font-light">150+</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4 tracking-wide">TEAM MEMBERS</h3>
                  <p className="text-4xl font-light">25</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-20">
            <AnimatedText className="section-title mb-8" splitType="words">
              Our Philosophy
            </AnimatedText>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FadeInSection delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 border border-white mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white"></div>
                </div>
                <h3 className="text-lg font-light mb-4 tracking-wide">SIMPLICITY</h3>
                <p className="text-sm opacity-80">
                  Elegant solutions emerge from deep understanding and careful reduction to essentials.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 border border-white mx-auto mb-6 flex items-center justify-center">
                  <div className="w-12 h-px bg-white"></div>
                </div>
                <h3 className="text-lg font-light mb-4 tracking-wide">PRECISION</h3>
                <p className="text-sm opacity-80">
                  Every detail matters. Precision in execution ensures reliability and excellence.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 border border-white mx-auto mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 border border-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-light mb-4 tracking-wide">INNOVATION</h3>
                <p className="text-sm opacity-80">
                  We embrace new technologies and methodologies to create breakthrough solutions.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.4}>
              <div className="text-center">
                <div className="w-20 h-20 border border-white mx-auto mb-6 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-3 h-3 bg-white"></div>
                    <div className="w-3 h-3 bg-white"></div>
                    <div className="w-3 h-3 bg-white"></div>
                    <div className="w-3 h-3 bg-white"></div>
                  </div>
                </div>
                <h3 className="text-lg font-light mb-4 tracking-wide">INTEGRITY</h3>
                <p className="text-sm opacity-80">
                  Honest communication and transparent processes build lasting partnerships.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-20">
            <AnimatedText className="section-title mb-8" splitType="words">
              Leadership Team
            </AnimatedText>
            <p className="body-text opacity-80 max-w-2xl mx-auto">
              Our diverse team brings together decades of experience across 
              engineering disciplines, united by a shared commitment to excellence.
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-16">
            <FadeInSection delay={0.1}>
              <div className="text-center">
                <div className="w-48 h-48 bg-black mx-auto mb-6"></div>
                <h3 className="text-xl font-light mb-2 tracking-wide">SARAH CHEN</h3>
                <p className="text-sm opacity-60 mb-4">CHIEF EXECUTIVE OFFICER</p>
                <p className="text-sm opacity-80">
                  15+ years in engineering leadership, specializing in 
                  complex systems architecture and team development.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="text-center">
                <div className="w-48 h-48 bg-black mx-auto mb-6"></div>
                <h3 className="text-xl font-light mb-2 tracking-wide">MARCUS RODRIGUEZ</h3>
                <p className="text-sm opacity-60 mb-4">CHIEF TECHNOLOGY OFFICER</p>
                <p className="text-sm opacity-80">
                  Expert in emerging technologies with a proven track record 
                  of delivering innovative engineering solutions.
                </p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.3}>
              <div className="text-center">
                <div className="w-48 h-48 bg-black mx-auto mb-6"></div>
                <h3 className="text-xl font-light mb-2 tracking-wide">EMMA THOMSON</h3>
                <p className="text-sm opacity-60 mb-4">HEAD OF OPERATIONS</p>
                <p className="text-sm opacity-80">
                  Operational excellence specialist ensuring seamless 
                  project delivery and client satisfaction.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}