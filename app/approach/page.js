'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import AnimatedText from '@/components/AnimatedText';
import FadeInSection from '@/components/FadeInSection';

export default function Approach() {
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
            <h1 className="hero-text mb-12">Approach</h1>
            <div className="max-w-3xl">
              <p className="section-title font-light leading-relaxed">
                Three fundamental principles guide every decision, 
                every line of code, and every solution we deliver. 
                This is how we achieve engineering excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles - Large Display */}
      <section className="py-32 section-padding">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Collaboration */}
          <FadeInSection>
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <AnimatedText className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight" splitType="chars">
                  COLLABORATION
                </AnimatedText>
              </div>
              <div className="md:col-span-4">
                <div className="border-l-2 border-black pl-8">
                  <h3 className="text-xl font-light mb-4 tracking-wide">PARTNERSHIP</h3>
                  <AnimatedText className="body-text opacity-80" splitType="lines" delay={0.3}>
                    We don't just execute your vision—we become part of your team. 
                    Through open dialogue, shared ownership, and transparent 
                    communication, we ensure every stakeholder is aligned and 
                    engaged throughout the journey.
                  </AnimatedText>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Clarity */}
          <FadeInSection>
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 md:order-2">
                <div className="border-r-2 border-black pr-8 text-right">
                  <h3 className="text-xl font-light mb-4 tracking-wide">TRANSPARENCY</h3>
                  <AnimatedText className="body-text opacity-80" splitType="lines" delay={0.3}>
                    Complex problems require clear solutions. We eliminate ambiguity 
                    through precise documentation, regular updates, and honest 
                    assessments. You always know where you stand.
                  </AnimatedText>
                </div>
              </div>
              <div className="md:col-span-8 md:order-1">
                <AnimatedText className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-right" splitType="chars">
                  CLARITY
                </AnimatedText>
              </div>
            </div>
          </FadeInSection>

          {/* Excellence */}
          <FadeInSection>
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <AnimatedText className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight" splitType="chars">
                  EXCELLENCE
                </AnimatedText>
              </div>
              <div className="md:col-span-4">
                <div className="border-l-2 border-black pl-8">
                  <h3 className="text-xl font-light mb-4 tracking-wide">PERFECTION</h3>
                  <AnimatedText className="body-text opacity-80" splitType="lines" delay={0.3}>
                    Good enough never is. We pursue perfection in every detail, 
                    from initial concept to final deployment. Our commitment to 
                    excellence drives innovation and ensures lasting value.
                  </AnimatedText>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-32 section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-20">
            <AnimatedText className="section-title mb-8" splitType="words">
              Our Methodology
            </AnimatedText>
            <p className="body-text opacity-80 max-w-2xl mx-auto">
              A proven framework that transforms principles into practice, 
              ensuring consistent excellence across every project.
            </p>
          </FadeInSection>
          
          <div className="space-y-16">
            {[
              {
                phase: "01",
                title: "UNDERSTAND",
                content: "Deep dive into your challenges, objectives, and constraints. We listen, analyze, and synthesize to build a comprehensive understanding of your needs."
              },
              {
                phase: "02",
                title: "STRATEGIZE", 
                content: "Develop a clear roadmap with defined milestones, success metrics, and contingency plans. Every decision is deliberate and purposeful."
              },
              {
                phase: "03",
                title: "EXECUTE",
                content: "Implement solutions with precision and care. Regular checkpoints ensure we stay on track while maintaining flexibility for optimization."
              },
              {
                phase: "04",
                title: "OPTIMIZE",
                content: "Continuous improvement through monitoring, feedback, and refinement. Excellence is not a destination but a continuous journey."
              }
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="left">
                <div className="grid md:grid-cols-6 gap-8 items-start border-b border-white border-opacity-20 pb-16">
                  <div className="md:col-span-1">
                    <span className="text-4xl font-light opacity-40">{item.phase}</span>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-light tracking-wide">{item.title}</h3>
                  </div>
                  <div className="md:col-span-3">
                    <p className="body-text opacity-80">{item.content}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-20">
            <AnimatedText className="section-title mb-8" splitType="words">
              Quality Standards
            </AnimatedText>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "99.9%", label: "Uptime Guarantee" },
              { metric: "< 24h", label: "Response Time" },
              { metric: "100%", label: "Client Satisfaction" },
              { metric: "0", label: "Compromises" }
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="text-center border border-black p-12 hover:bg-black hover:text-white transition-all duration-500">
                  <div className="text-4xl font-light mb-4">{item.metric}</div>
                  <div className="text-sm tracking-widest uppercase opacity-60">{item.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <AnimatedText className="section-title mb-12" splitType="words">
              Experience the Difference
            </AnimatedText>
            <div className="border border-black inline-block">
              <a 
                href="/contact" 
                className="block px-12 py-6 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                Work With Us
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}