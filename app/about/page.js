"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import AnimatedText from "@/components/AnimatedText";
import FadeInSection from "@/components/FadeInSection";
import CustomIcon from "@/components/CustomIcon";

export default function About() {
  useEffect(() => {
    gsap.fromTo(
      ".page-hero",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-black/80 pt-32">
      {/* Hero Section */}
      <section className="py-8 lg:py-14 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero">
            <p className="text-5xl mb-12">Expertise/</p>
            <div className="max-w-3xl ml-auto">
              <p className="text-3xl font-sentient leading-relaxed  ">
                We are engineers, innovators, and problem solvers united by a
                singular vision: to create technology solutions that transcend
                conventional boundaries and deliver unprecedented value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <img src="/images/about1.jpg" className="grayscale"></img>
      <section className="pb-20 section-padding bg-[#dcdbd0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 py-10 gap-20  bg-[#dcdbd0]">
            <FadeInSection>
              <h2 className="text-4xl w-6/12 mb-8">Our Approach/</h2>
              <AnimatedText
                className="text-lg opacity-80 mb-8 "
                splitType="words"
              >
                As a team, ONENESS Sphere Techno is driven by a unified vision
                to anticipate project challenges, streamline complexities, and
                deliver innovative, cost-effective solutions that fulfill our
                clients’ unique needs
              </AnimatedText>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="">
                <hr />
                <div className="flex flex-col lg:flex-row justify-center items-baseline space-y-10 mt-10">
                  {/* Slide 1 */}
                  <div className="border-r mt-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        viewBox="0 0 120 120"
                        fill="none"
                      >
                        <path
                          d="M0 109.992H118.728"
                          stroke="black"
                          stroke-width="1.5"
                        ></path>
                        <path
                          d="M37.0576 65.8828H13.0576V109.798H37.0576V65.8828Z"
                          stroke="black"
                          stroke-width="1.5"
                        ></path>
                        <path
                          d="M71.1563 33.7344H47.1562V109.792H71.1563V33.7344Z"
                          stroke="black"
                          stroke-width="1.5"
                        ></path>
                        <path
                          d="M105.254 17.4375H81.2539V109.795H105.254V17.4375Z"
                          stroke="black"
                          stroke-width="1.5"
                        ></path>
                      </svg>
                    </div>
                    <h1 className="text-2xl font-normal">Unified Vision</h1>
                    <p className="py-3 text-black/80">
                      We believe in bringing together diverse talents and
                      perspectives, allowing us to deliver seamless, integrated
                      solutions that address every facet of your project.
                    </p>
                  </div>
                  {/* Slide 2 */}
                  <div className="border-l lg:border-l-0 lg:border-r px-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        viewBox="0 0 120 122"
                        fill="none"
                      >
                        <path
                          d="M60 117.502C91.4802 117.502 117 91.9223 117 60.3682C117 28.814 91.4802 3.23438 60 3.23438C28.5198 3.23438 3 28.814 3 60.3682C3 91.9223 28.5198 117.502 60 117.502Z"
                          stroke="black"
                          stroke-width="1.5"
                        ></path>
                        <path
                          d="M60 92.7464V27.0781"
                          stroke="black"
                          stroke-width="1.5"
                        ></path>
                        <path
                          d="M76.6051 77.0156C76.6051 86.2086 69.1703 93.6609 59.9989 93.6609C50.8274 93.6609 43.3926 86.2086 43.3926 77.0156"
                          stroke="black"
                          stroke-width="1.5"
                        ></path>
                        <path
                          d="M43.3945 43.7234C43.3945 34.5304 50.8294 27.0781 60.0008 27.0781C69.1722 27.0781 76.6071 34.5304 76.6071 43.7234"
                          stroke="black"
                          stroke-width="1.5"
                        ></path>
                        <path
                          d="M76.6063 77.0125C76.6063 67.8195 69.1714 60.3672 60 60.3672"
                          stroke="black"
                          stroke-width="1.5"
                        ></path>
                        <path
                          d="M43.3936 43.7266C43.3936 52.9195 50.8284 60.3718 59.9998 60.3718"
                          stroke="black"
                          stroke-width="1.5"
                        ></path>
                      </svg>
                    </div>
                    <h1 className="text-2xl font-normal">
                      Innovative Approach
                    </h1>
                    <p className="py-3 text-black/80">
                      By continually embracing technology and reimagining
                      methodologies, we provide fresh, tailored strategies that
                      drive value for our partners and clients.
                    </p>
                  </div>
                  {/* Slide 3 */}
                  <div className="border-r lg:border-r-0 px-2 ">
                    <div>
                      <CustomIcon width={80} height={80} />
                    </div>
                    <h1 className="text-2xl font-normal">
                      Enduring Partnerships
                    </h1>
                    <p className="py-3 text-black/80">
                      Our commitment goes beyond completion—fostering lasting
                      relationships, ensuring adaptability to evolving trends,
                      and supporting client growth for the long term.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 section-padding bg-black/90 text-white/90">
        <div className="flex justify-between gap-6">
          <h1 className="text-3xl w-8/12">
            At ONENESS Sphere Techno, we deliver integrated technological
            solutions that transform businesses through innovation and strategic
            excellence. We specialize in bringing together diverse expertise
            under one unified vision, leveraging cutting-edge technologies to
            streamline complexities and drive measurable growth.
          </h1>
          <h1 className="text-4xl">What we do/</h1>
        </div>
        <div className="flex flex-col justify-end items-end text-start mt-10">
          <ul className="text-sm text-white/80 space-y-2">
            <li>
              <strong>Building & Construction</strong> - Preventive and
              corrective maintenance services
            </li>

            <li>
              <strong> infrastructure Projects </strong> - Our team addresses
              complex infrastructure needs—providing strategy, lifecycle
              support, and proactive resolution for seamless project execution.
            </li>

            <li>
              <strong>Interior Design</strong> - Space planning and interior
              fit-out solutions
            </li>

            <li>
              <strong>HT & LT Line Work</strong> - High tension and low tension
              electrical line erection and maintenance
            </li>
          </ul>
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
              engineering disciplines, united by a shared commitment to
              excellence.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-16">
            <FadeInSection delay={0.1}>
              <div className="text-center">
                <div className="w-48 h-48 bg-black mx-auto mb-6"></div>
                <h3 className="text-xl font-light mb-2 tracking-wide">
                  SARAH CHEN
                </h3>
                <p className="text-sm opacity-60 mb-4">
                  CHIEF EXECUTIVE OFFICER
                </p>
                <p className="text-sm opacity-80">
                  15+ years in engineering leadership, specializing in complex
                  systems architecture and team development.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="text-center">
                <div className="w-48 h-48 bg-black mx-auto mb-6"></div>
                <h3 className="text-xl font-light mb-2 tracking-wide">
                  MARCUS RODRIGUEZ
                </h3>
                <p className="text-sm opacity-60 mb-4">
                  CHIEF TECHNOLOGY OFFICER
                </p>
                <p className="text-sm opacity-80">
                  Expert in emerging technologies with a proven track record of
                  delivering innovative engineering solutions.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="text-center">
                <div className="w-48 h-48 bg-black mx-auto mb-6"></div>
                <h3 className="text-xl font-light mb-2 tracking-wide">
                  EMMA THOMSON
                </h3>
                <p className="text-sm opacity-60 mb-4">HEAD OF OPERATIONS</p>
                <p className="text-sm opacity-80">
                  Operational excellence specialist ensuring seamless project
                  delivery and client satisfaction.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
