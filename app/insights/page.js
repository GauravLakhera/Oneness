'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import AnimatedText from '@/components/AnimatedText';
import FadeInSection from '@/components/FadeInSection';

export default function Insights() {
  useEffect(() => {
    gsap.fromTo('.page-hero', 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
    );
  }, []);

  const insights = [
    {
      category: "ENGINEERING",
      date: "2024.01.15",
      title: "The Future of Precision Engineering",
      excerpt: "Exploring how advanced methodologies and emerging technologies are reshaping the engineering landscape for unprecedented accuracy and efficiency.",
      readTime: "8 min read"
    },
    {
      category: "INNOVATION",
      date: "2024.01.12",
      title: "Building Scalable Systems",
      excerpt: "A deep dive into architectural patterns and design principles that enable systems to grow seamlessly from startup to enterprise scale.",
      readTime: "12 min read"
    },
    {
      category: "STRATEGY",
      date: "2024.01.08",
      title: "Collaborative Engineering Excellence",
      excerpt: "How fostering true collaboration between teams, stakeholders, and technologies leads to breakthrough solutions and sustained success.",
      readTime: "6 min read"
    },
    {
      category: "TECHNOLOGY",
      date: "2024.01.05",
      title: "Minimalism in Complex Systems",
      excerpt: "The art of simplifying complex engineering challenges through thoughtful design, strategic reduction, and focused execution.",
      readTime: "10 min read"
    },
    {
      category: "METHODOLOGY",
      date: "2024.01.02",
      title: "Quality-First Development",
      excerpt: "Implementing quality-driven processes that ensure exceptional outcomes while maintaining efficiency and meeting critical deadlines.",
      readTime: "9 min read"
    },
    {
      category: "INSIGHTS",
      date: "2023.12.28",
      title: "The Power of Transparency",
      excerpt: "Why clear communication and transparent processes are fundamental to successful engineering projects and long-term partnerships.",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-32">
      {/* Hero Section */}
      <section className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero">
            <h1 className="hero-text mb-12">Insights</h1>
            <div className="max-w-3xl">
              <p className="section-title font-light leading-relaxed">
                Thoughts, discoveries, and perspectives on engineering excellence, 
                innovation methodologies, and the future of technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="bg-black text-white p-16 md:p-24">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-xs tracking-widest uppercase opacity-60">FEATURED</span>
                  <div className="w-12 h-px bg-white opacity-60"></div>
                  <span className="text-xs tracking-widest uppercase opacity-60">{insights[0].date}</span>
                </div>
                <AnimatedText className="text-4xl md:text-5xl font-light mb-8 leading-tight" splitType="words">
                  {insights[0].title}
                </AnimatedText>
                <AnimatedText className="body-text opacity-80 mb-12" splitType="lines" delay={0.3}>
                  {insights[0].excerpt}
                </AnimatedText>
                <div className="flex items-center justify-between">
                  <div className="border border-white inline-block">
                    <a 
                      href="#" 
                      className="block px-8 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Read Full Article
                    </a>
                  </div>
                  <span className="text-sm opacity-60">{insights[0].readTime}</span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="mb-20">
            <AnimatedText className="section-title mb-8" splitType="words">
              Latest Insights
            </AnimatedText>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {insights.slice(1).map((insight, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <article className="group cursor-pointer">
                  <div className="border border-black aspect-square mb-6 bg-white group-hover:bg-black transition-all duration-500 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs tracking-widest uppercase opacity-60 group-hover:text-white group-hover:opacity-60 transition-all duration-500 mb-4">
                        {insight.category}
                      </div>
                      <div className="text-2xl font-light group-hover:text-white transition-all duration-500">
                        {String(index + 2).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs tracking-widest uppercase opacity-60">
                      <span>{insight.category}</span>
                      <span>{insight.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-light leading-tight group-hover:opacity-60 transition-all duration-300">
                      {insight.title}
                    </h3>
                    
                    <p className="text-sm opacity-80 leading-relaxed">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xs tracking-widest uppercase">Read Article</span>
                      <span className="text-xs opacity-60">{insight.readTime}</span>
                    </div>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-20">
            <AnimatedText className="section-title mb-8" splitType="words">
              Explore by Category
            </AnimatedText>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {['Engineering', 'Innovation', 'Strategy', 'Technology', 'Methodology', 'Leadership'].map((category, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="text-center border border-white p-8 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
                  <h3 className="text-sm tracking-widest uppercase">{category}</h3>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <AnimatedText className="section-title mb-8" splitType="words">
              Stay Updated
            </AnimatedText>
            <p className="body-text opacity-80 mb-12 max-w-2xl mx-auto">
              Subscribe to receive our latest insights on engineering excellence, 
              innovation strategies, and technology trends.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 border border-black px-6 py-4 text-sm focus:outline-none focus:bg-black focus:text-white transition-all duration-300"
              />
              <button className="border border-black px-8 py-4 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
                Subscribe
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}