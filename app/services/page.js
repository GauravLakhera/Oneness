'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import AnimatedText from '@/components/AnimatedText';
import FadeInSection from '@/components/FadeInSection';

export default function Services() {
  useEffect(() => {
    gsap.fromTo('.page-hero', 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
    );
  }, []);

  const services = [
    {
      number: "01",
      title: "Engineering Consulting",
      description: "Strategic technical guidance for complex engineering challenges. We provide expert analysis, feasibility studies, and architectural recommendations to ensure your projects are built on solid foundations.",
      capabilities: ["System Architecture", "Technical Strategy", "Risk Assessment", "Performance Optimization"]
    },
    {
      number: "02", 
      title: "Project Delivery",
      description: "End-to-end project execution from concept to deployment. Our methodical approach ensures timely delivery while maintaining the highest quality standards throughout the development lifecycle.",
      capabilities: ["Agile Development", "Quality Assurance", "Integration Testing", "Deployment Management"]
    },
    {
      number: "03",
      title: "Technology Integration",
      description: "Seamless integration of cutting-edge technologies into existing systems. We bridge the gap between legacy infrastructure and modern solutions with minimal disruption to operations.",
      capabilities: ["API Development", "Data Migration", "System Integration", "Legacy Modernization"]
    },
    {
      number: "04",
      title: "Research & Development",
      description: "Innovation-driven R&D initiatives that push technological boundaries. We explore emerging technologies and develop proof-of-concepts that give our clients competitive advantages.",
      capabilities: ["Prototype Development", "Technology Research", "Innovation Strategy", "Patent Development"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-32">
      {/* Hero Section */}
      <section className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero">
            <h1 className="hero-text mb-12">Services</h1>
            <div className="max-w-3xl">
              <p className="section-title font-light leading-relaxed">
                Comprehensive engineering solutions designed to transform 
                your vision into reality through precision, innovation, 
                and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className={`grid md:grid-cols-2 gap-16 items-start ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="flex items-start space-x-8 mb-8">
                      <span className="text-6xl font-light opacity-20">{service.number}</span>
                      <div>
                        <h2 className="section-title mb-6">{service.title}</h2>
                        <AnimatedText className="body-text opacity-80" splitType="lines">
                          {service.description}
                        </AnimatedText>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-12">
                      {service.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="border border-black p-4 text-center">
                          <span className="text-xs tracking-widest uppercase">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''} ${
                    index % 2 === 0 ? 'bg-black' : 'border border-black'
                  } aspect-square flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`text-8xl font-light mb-4 ${
                        index % 2 === 0 ? 'text-white' : 'text-black'
                      }`}>
                        {service.number}
                      </div>
                      <div className={`text-sm tracking-widest uppercase ${
                        index % 2 === 0 ? 'text-white opacity-60' : 'text-black opacity-60'
                      }`}>
                        {service.title.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-20">
            <AnimatedText className="section-title mb-8" splitType="words">
              Our Process
            </AnimatedText>
            <p className="body-text opacity-80 max-w-2xl mx-auto">
              A systematic approach that ensures consistent delivery of 
              exceptional results across all our service offerings.
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-4 gap-12">
            {['Discovery', 'Strategy', 'Execution', 'Delivery'].map((phase, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 border border-white mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-light">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-light mb-4 tracking-wide">{phase.toUpperCase()}</h3>
                  <div className="w-full h-px bg-white opacity-20"></div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <AnimatedText className="section-title mb-12" splitType="words">
              Let's Discuss Your Project Requirements
            </AnimatedText>
            <div className="border border-black inline-block">
              <a 
                href="/contact" 
                className="block px-12 py-6 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}