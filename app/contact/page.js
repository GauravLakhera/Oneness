'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import AnimatedText from '@/components/AnimatedText';
import FadeInSection from '@/components/FadeInSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  useEffect(() => {
    gsap.fromTo('.page-hero', 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
    );
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white text-black pt-32">
      {/* Hero Section */}
      <section className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero">
            <h1 className="hero-text mb-12">Contact</h1>
            <div className="max-w-3xl">
              <p className="section-title font-light leading-relaxed">
                Ready to transform your vision into reality? Let's start 
                a conversation about your project, challenges, and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Contact Form */}
            <FadeInSection>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm tracking-widest uppercase mb-4 opacity-60">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border-b border-black pb-4 text-lg font-light focus:outline-none focus:border-opacity-60 transition-all duration-300 bg-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm tracking-widest uppercase mb-4 opacity-60">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border-b border-black pb-4 text-lg font-light focus:outline-none focus:border-opacity-60 transition-all duration-300 bg-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm tracking-widest uppercase mb-4 opacity-60">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full border-b border-black pb-4 text-lg font-light focus:outline-none focus:border-opacity-60 transition-all duration-300 bg-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm tracking-widest uppercase mb-4 opacity-60">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full border-b border-black pb-4 text-lg font-light focus:outline-none focus:border-opacity-60 transition-all duration-300 bg-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="consulting">Engineering Consulting</option>
                    <option value="delivery">Project Delivery</option>
                    <option value="integration">Technology Integration</option>
                    <option value="research">Research & Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm tracking-widest uppercase mb-4 opacity-60">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full border-b border-black pb-4 text-lg font-light focus:outline-none focus:border-opacity-60 transition-all duration-300 bg-transparent resize-none"
                    placeholder="Tell us about your project, challenges, and goals..."
                  />
                </div>
                
                <div className="pt-8">
                  <button
                    type="submit"
                    className="border border-black px-12 py-6 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </FadeInSection>

            {/* Contact Information */}
            <FadeInSection delay={0.2}>
              <div className="space-y-16">
                <div>
                  <h3 className="text-2xl font-light mb-8 tracking-wide">Get in Touch</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm tracking-widest uppercase opacity-60 mb-2">Email</div>
                      <a href="mailto:hello@onenessnametech.com" className="text-lg font-light hover:opacity-60 transition-opacity">
                        hello@onenessnametech.com
                      </a>
                    </div>
                    
                    <div>
                      <div className="text-sm tracking-widest uppercase opacity-60 mb-2">Phone</div>
                      <a href="tel:+1234567890" className="text-lg font-light hover:opacity-60 transition-opacity">
                        +1 (234) 567-890
                      </a>
                    </div>
                    
                    <div>
                      <div className="text-sm tracking-widest uppercase opacity-60 mb-2">Address</div>
                      <address className="text-lg font-light not-italic">
                        123 Innovation Drive<br />
                        Tech District, CA 94105<br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-light mb-8 tracking-wide">Office Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="opacity-60">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-60">Saturday</span>
                      <span>10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-60">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-light mb-8 tracking-wide">Response Time</h3>
                  <p className="text-lg font-light opacity-80 leading-relaxed">
                    We typically respond to all inquiries within 24 hours. 
                    For urgent matters, please call directly.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Map/Location Visual */}
      <section className="py-32 section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center">
            <div className="max-w-4xl mx-auto">
              <AnimatedText className="section-title mb-12" splitType="words">
                Located in the Heart of Innovation
              </AnimatedText>
              
              {/* Simplified Map Representation */}
              <div className="border border-white aspect-video flex items-center justify-center mb-12">
                <div className="text-center">
                  <div className="w-4 h-4 bg-white rounded-full mx-auto mb-4"></div>
                  <div className="text-sm tracking-widest uppercase opacity-60">San Francisco, CA</div>
                </div>
              </div>
              
              <p className="body-text opacity-80">
                Strategically positioned in San Francisco's technology hub, we're at 
                the center of innovation and just a conversation away from your next breakthrough.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <AnimatedText className="section-title mb-8" splitType="words">
              Let's Build Something Extraordinary Together
            </AnimatedText>
            <p className="body-text opacity-80 mb-12 max-w-2xl mx-auto">
              Every great project starts with a single conversation. 
              We're ready when you are.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="border border-black inline-block">
                <a 
                  href="mailto:hello@onenessnametech.com" 
                  className="block px-12 py-6 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
              <div className="border border-black inline-block">
                <a 
                  href="tel:+1234567890" 
                  className="block px-12 py-6 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}