"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import AnimatedText from "@/components/AnimatedText";
import FadeInSection from "@/components/FadeInSection";
import { ChevronRight } from "lucide-react";
import AnimatedSentence from "@/components/AnimatedSentence";

export default function Home() {
  useEffect(() => {
    // Hero entrance animation
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(
      ".hero-main",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
    )
      .fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        ".hero-description",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

    // Scroll indicator animation
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section>
        <img
          src="/images/hero_bg.png"
          alt="hero"
          className="w-full h-[25rem] grayscale-0 object-cover"
        />
      </section>

      <section className="relative flex flex-col pt-6 items-start ">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="hero-main text-7xl mb-8">
            ONENESS
            <br />
            <span className="text-black/70 ">The art of workmenship</span>
          </h1>

          <div className="text-xl section-title mb-3 max-w-2xl">
            Engineering Excellence Through Collaborative Innovation
          </div>
          <button className="text-xl flex border border-black/60 text-black  px-2 py-3">
            <span>Book a consultation</span>
            <ChevronRight size={32} strokeWidth={0.75} />
          </button>

          {/* <div className="hero-description body-text max-w-xl opacity-80">
            We deliver cutting-edge engineering solutions with precision, 
            clarity, and unwavering commitment to excellence. Your vision, 
            our expertise, infinite possibilities.
          </div> */}
        </div>
        <div className="absolute -top-12 right-3 transform ">
          <img src="/images/logo.png" className="w-[16rem] "></img>
          <h1 className="font-medium text-black/80">
            Innovate. Design. Build. Excellence
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-12 right-12 transform -translate-x-1/2">
          <ChevronRight className="rotate-90" size={42} strokeWidth={1} />
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto w-full py-28">
          <AnimatedText className="w-8/12 text-6xl " splitType="words">
            Kreisson is a forward-thinking construction and engineering law firm
            based in Sydney, providing comprehensive legal and technical support
            to clients across Australia and the world.
          </AnimatedText>
        </div>
        <div className="absolute  right-3 w-5/12 text-xl text-black/80">
          <h1 className="mb-10">
            Over the past eight years, we have contributed to the success of
            diverse industries and witnessed significant growth and
            transformation.{" "}
          </h1>
          <div className="flex mt-4 gap-6">
            <button className="text-sm flex border items-center border-black/60 text-black  px-4 py-1 hover:bg-black hover:text-white transition-all ease-in-out duration-500">
              <span>OUR TEAM</span>
              <ChevronRight size={32} strokeWidth={0.75} />
            </button>
            <button className="text-sm flex border items-center border-black/60 text-black  px-4 py-1 hover:bg-black hover:text-white  transition-all ease-in-out duration-500">
              <span>OUR EXPERTISE</span>
              <ChevronRight size={32} strokeWidth={0.75} />
            </button>
          </div>
        </div>
      </section>

      <section className="pt-28 pb-5">
        <AnimatedSentence text="Innovate. Design. Build. Excellence." />
      </section>

      <hr></hr>

      {/* Our Expertise/ */}
      <section className="py-5 w-11/12 mx-auto">
        <div>
          <h1 className="text-7xl text-right ">Our Expertise/</h1>
        </div>
        <p className="text-5xl pt-14 w-8/12">
          Our multidisciplinary team delivers superior results at every phase of
          your project’s lifecycle. Leveraging extensive experience across civil
          engineering, architecture, and design sectors, we proactively identify
          and manage technical and commercial risks to safeguard, optimize, and
          grow your assets and opportunities.
        </p>
      </section>

      {/* Vision Statement */}
      <section className="py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedText className="section-title mb-8" splitType="words">
                Precision in Every Detail
              </AnimatedText>
              <AnimatedText
                className="body-text opacity-80"
                splitType="lines"
                delay={0.3}
              >
                We believe in the power of meticulous engineering. Every line of
                code, every structural calculation, every design decision is
                crafted with absolute precision and thoughtful consideration.
              </AnimatedText>
            </div>
            <div className="border border-black p-12 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-light mb-4">∞</div>
                <div className="text-sm tracking-widest uppercase">
                  Infinite Potential
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Core Values Preview */}
      <section className="py-32 section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-20">
            <AnimatedText className="section-title mb-8" splitType="words">
              Our Foundation
            </AnimatedText>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-16">
            <FadeInSection delay={0.2}>
              <div className="text-center">
                <div className="text-2xl font-light mb-6">01</div>
                <h3 className="text-xl font-light mb-4 tracking-wide">
                  COLLABORATION
                </h3>
                <p className="body-text opacity-80">
                  Partnership drives innovation. We work alongside you to
                  transform ideas into reality.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="text-center">
                <div className="text-2xl font-light mb-6">02</div>
                <h3 className="text-xl font-light mb-4 tracking-wide">
                  CLARITY
                </h3>
                <p className="body-text opacity-80">
                  Clear communication and transparent processes ensure perfect
                  alignment with your goals.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <div className="text-center">
                <div className="text-2xl font-light mb-6">03</div>
                <h3 className="text-xl font-light mb-4 tracking-wide">
                  EXCELLENCE
                </h3>
                <p className="body-text opacity-80">
                  We pursue perfection in every project, delivering solutions
                  that exceed expectations.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <AnimatedText className="hero-text mb-12" splitType="words">
              Ready to Build
              <br />
              Something Extraordinary?
            </AnimatedText>
            <div className="border border-black inline-block">
              <a
                href="/contact"
                className="block px-12 py-6 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                Start Your Project
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
