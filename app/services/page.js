"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AnimatedText from "@/components/AnimatedText";
import FadeInSection from "@/components/FadeInSection";
import CustomIcon from "@/components/CustomIcon";
import ProjectPhases from "@/components/ProjectPhases";
import PartnersCarousel from "@/components/PartnersCarousel";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined" && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const sectorItems = [
  {
    title: "Building & Construction",
    description:
      "Comprehensive support and tailored solutions to principals, contractors and subcontractors throughout all residential and commercial project stages.",
    href: "/services",
    svg: "https://kreisson.com.au/wp-content/uploads/2025/04/PRE-CONTRACT-2-1.svg",
  },
  {
    title: "Infrastructure Projects",
    description:
      "Collaborative advice across large-scale infrastructure lifecycles to navigate legal complexities, minimise risk and efficiently achieve project success.",
    href: "/services",
    svg: "https://kreisson.com.au/wp-content/uploads/2025/04/POST-CONTRACT-2.svg",
  },
  {
    title: "Engineering",
    description:
      "Tailored advice and peerless expertise to protect your interests and enhance your objectives within the complex engineering project landscape.",
    href: "/services",
    svg: "https://kreisson.com.au/wp-content/uploads/2025/04/CONTRACT-DELIVERY-3.svg",
  },
  {
    title: "Energy & Environment",
    description:
      "Careful and considered navigation of the legal and regulatory landscape to keep your projects on track, on time and adhering to all standards.",
    href: "/services",
    svg: "https://kreisson.com.au/wp-content/uploads/2025/04/ENERGY-2-1.svg",
  },
];

const serviceDetails = [
  {
    title: "BUILDING & CONSTRUCTION",
    description:
      "Comprehensive support and tailored solutions to principals, contractors and subcontractors throughout all residential and commercial project stages.",
    detailedDescription:
      "Our building and construction services encompass the complete project lifecycle, from initial planning and design to final delivery and handover. We work with residential developers, commercial contractors, and government agencies to deliver projects that meet exacting standards of quality, safety, and efficiency.",
    features: [
      "Residential and commercial construction",
      "Project management and coordination",
      "Quality assurance and safety compliance",
      "Structural engineering and design",
      "Cost estimation and budget management",
    ],

    image: "/images/services/1.jpg",
    alt: "Building and construction project",
  },
  {
    title: "INFRASTRUCTURE PROJECTS",
    description:
      "Collaborative advice across large-scale infrastructure lifecycles to navigate legal complexities, minimise risk and efficiently achieve project success.",
    detailedDescription:
      "We specialize in large-scale infrastructure development, providing comprehensive project management services for transportation, utilities, and public works projects. Our team ensures regulatory compliance while maintaining project timelines and budget constraints.",
    features: [
      "Transportation infrastructure development",
      "Utility installation and maintenance",
      "Public works project execution",
      "Regulatory compliance management",
      "Risk assessment and mitigation",
    ],

    image: "/images/services/2.jpg",
    alt: "Infrastructure development project",
  },
  {
    title: "INTERIOR DESIGN",
    description:
      "Creative and functional interior design solutions tailored to enhance space usability and aesthetics.",
    detailedDescription:
      "Our interior design team combines creativity with functionality to transform spaces that reflect your vision while optimizing usability. From concept development to final installation, we manage every aspect of your interior transformation project.",
    features: [
      "Space planning and design consultation",
      "Custom furniture and fixture design",
      "Color schemes and material selection",
      "Lighting design and installation",
      "Project coordination and installation",
    ],

    image: "/images/services/3.jpg",
    alt: "Interior design project showcase",
  },
  {
    title: "ERECTION HT & LT LINE WORK",
    description:
      "Specialist erection services for High Tension (HT) and Low Tension (LT) electrical line projects.",
    detailedDescription:
      "Our specialized electrical team provides comprehensive high and low tension line erection services, ensuring safe and efficient power distribution systems. We handle everything from planning and installation to testing and commissioning of electrical infrastructure.",
    features: [
      "High tension line erection and maintenance",
      "Low tension distribution systems",
      "Electrical safety compliance",
      "Power system testing and commissioning",
      "Emergency repair and maintenance services",
    ],

    image: "/images/services/4.jpg",
    alt: "Electrical line work project",
  },
];

export default function Services() {
  gsap.set(".text1", { x: -100 });

  useEffect(() => {
    gsap.fromTo(
      ".page-hero",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
    );

    // Timeline for the two headings
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text1",
        start: "top 80%",
        end: "top top",
        scrub: true,
      },
    });

    tl.fromTo(
      ".text1",
      { x: "100vw", opacity: 1 },
      { x: 0, opacity: 1, ease: "power2.out", duration: 3 }
    ).fromTo(
      ".text2",
      { x: "-100vw", opacity: 1 },
      { x: 0, opacity: 1, ease: "power2.out", duration: 3 },
      "<"
    );

    return () => tl.kill();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black/80 pt-32">
      {/* Hero Section */}
      <section className="py-8 lg:py-14 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero">
            <p className="lg:text-6xl text-4xl mb-12">Services/</p>
            <div className="max-w-3xl ml-auto">
              <p className="text-3xl font-sentient leading-relaxed">
                From concept to completion, we deliver comprehensive
                construction and infrastructure solutions that transform visions
                into reality through expert craftsmanship and innovative
                approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <img
        src="/images/projectPhases2.jpg"
        className="grayscale w-full h-96 object-cover"
      ></img>
      <section className="pb-20 section-padding bg-[#dcdbd0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 py-10 gap-20 bg-[#dcdbd0]">
            <FadeInSection>
              <h2 className="text-4xl w-6/12 mb-8">Our Services/</h2>
              <AnimatedText
                className="text-lg opacity-80 mb-8"
                splitType="words"
              >
                ONENESS Sphere Techno delivers integrated construction solutions
                across diverse sectors, combining technical expertise with
                innovative methodologies to ensure project success from initial
                planning through final delivery.
              </AnimatedText>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="">
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                  {sectorItems.map((sector, index) => (
                    <div
                      key={sector.title}
                      className="group hover:bg-white/50 p-6 rounded-lg transition-all duration-300"
                    >
                      <div className="mb-4">
<img src={sector.svg}></img>
                      </div>
                      <h3 className="text-xl font-normal mb-3 group-hover:text-black transition-colors">
                        {sector.title}
                      </h3>
                      <p className="text-black/80 text-sm leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Detailed Services Showcase */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-sentient mb-6">
                Service Excellence/
              </h2>
              <p className="text-xl text-black/70 max-w-3xl mx-auto">
                Discover our comprehensive range of specialized services, each
                delivered with unmatched expertise and attention to detail.
              </p>
            </div>
          </FadeInSection>

          {/* Services Detail Cards */}
          <div className="space-y-24 lg:space-y-32">
            {serviceDetails.map((service, index) => {
              const isEven = index % 2 === 1;

              return (
                <FadeInSection key={service.title} delay={index * 0.2}>
                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                    } items-center gap-12 lg:gap-16`}
                  >
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative overflow-hidden group">
                        <img
                          src={service.image}
                          alt={service.alt}
                          className="w-full md:h-80 lg:h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                            <h4 className="font-sentient text-black">
                              {service.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div>
                        <div className="inline-block">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">
                                {(index + 1).toString().padStart(2, "0")}
                              </span>
                            </div>
                            <div className="h-px bg-black/20 flex-1"></div>
                          </div>
                        </div>
                        <h3 className="text-2xl lg:text-3xl  text-black mb-4">
                          {service.title}
                        </h3>
                        <p className="text-lg text-black/80 leading-relaxed mb-6">
                          {service.detailedDescription}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-sentient text-black mb-4">
                          Key Features:
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start space-x-3"
                            >
                              <ArrowRight className="w-5 h-5 text-black/60 mt-0.5 flex-shrink-0" />
                              <span className="text-black/70">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3 rounded-full hover:bg-black/80 transition-colors duration-300"
                        >
                          <span>Learn More</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <div className="lg:text-[8rem] text-5xl flex flex-col justify-center items-center">
        <h1 className="text1">Expert Solutions</h1>
        <h1 className="text2">Delivered Daily</h1>
      </div>

      {/* Service Excellence Section */}
      <section className="flex mt-16 lg:mt-0 flex-col lg:flex-row bg-[#33312f] min-h-screen text-[#efe0b1] justify-between items-start px-8 py-16 gap-8">
        <div className="flex flex-col gap-10 lg:max-w-[50%]">
          <div className="mb-2 lg:mb-8 text-[#efe0b1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="a"
              x="0"
              y="0"
              height={100}
              width={100}
              viewBox="0 0 80 80"
              className="-rotate-90 text-white"
              xmlSpace="preserve"
            >
              <g>
                <polygon
                  points="62.6,67.5 12.4,67.5 12.4,17.2 13.6,17.2 13.6,66.2 62.6,66.2"
                  fill="currentColor"
                />
              </g>
              <g>
                <rect
                  x="2.2"
                  y="39.3"
                  transform="matrix(0.7075 -0.7067 0.7067 0.7075 -16.5202 40.0866)"
                  width="75.9"
                  height="1.3"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>

          <p className="text-white/80 text-base md:max-w-xl leading-relaxed font-sentient">
            With 8 years of dedicated service in India's construction industry,
            ONENESS Sphere Techno has established itself as a trusted partner
            for complex building and infrastructure projects. Our comprehensive
            service portfolio spans from initial design to ongoing maintenance,
            ensuring complete project lifecycle support.
          </p>
          <div className="font-medium hidden lg:block md:text-[7rem] text-right tracking-wider text-white font-sentient">
            COMPLETE
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-start lg:max-w-[50%]">
          <img
            src="/images/services/bg.jpg"
            alt="Construction work"
            className="w-full max-w-md min-w-[20rem] object-cover border-0 mb-4 grayscale contrast-125"
          />
          <div className="block lg:hidden font-medium font-sentient text-5xl md:text-[7rem] text-white mt-10 tracking-wider">
            COMPLETE
          </div>
          <div className="font-medium font-sentient text-5xl text-right w-full md:text-[7rem] text-white lg:mt-10 mb-4 tracking-wider">
            SOLUTIONS
          </div>
          <button className="mt-8 border border-white text-white py-3 px-8 rounded transition bg-transparent hover:bg-[#efe0b1] hover:text-[#33312f] text-base">
            View Projects &rarr;
          </button>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="">
        <div className="w-10/12 mx-auto flex flex-col lg:flex-row justify-between pt-[3rem] pb-[3rem] lg:pb-[5rem] lg:pt-[10rem]">
          <h1 className="text-4xl lg:text-7xl w-6/12 text-left text-black/80 font-sentient">
            Recent Projects/
          </h1>

          <div className="lg:w-4/12 mt-10">
            <p>
              Explore our portfolio of successfully completed projects across
              various sectors. From residential complexes to commercial
              developments, our work demonstrates our commitment to quality,
              innovation, and client satisfaction.
            </p>
          </div>
        </div>

        <div className="pt-10">
          <hr className="text-yellow-600"></hr>
          <PartnersCarousel />
          <hr className="text-yellow-600"></hr>
          <div className="flex relative flex-col py-5 lg:flex-row justify-between">
            <div className="lg:w-5/12">
              <img
                src="https://kreisson.com.au/wp-content/uploads/2025/03/image-23-copy-2.webp"
                className="object-cover grayscale h-[20rem] w-full"
                alt="Recent project"
              ></img>
            </div>
            <div className="absolute lg:relative right-0 top-5 flex flex-col items-end justify-center pr-16 space-y-3 lg:space-y-2">
              <div className="mb-8 text-[#efe0b1]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="a"
                  x="0"
                  y="0"
                  height={50}
                  width={50}
                  viewBox="0 0 80 80"
                  className="text-black"
                  xmlSpace="preserve"
                >
                  <g>
                    <polygon
                      points="62.6,67.5 12.4,67.5 12.4,17.2 13.6,17.2 13.6,66.2 62.6,66.2"
                      fill="currentColor"
                    />
                  </g>
                  <g>
                    <rect
                      x="2.2"
                      y="39.3"
                      transform="matrix(0.7075 -0.7067 0.7067 0.7075 -16.5202 40.0866)"
                      width="75.9"
                      height="1.3"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </div>
              <h1 className="text-end">Start Your Project</h1>
              <h1 className="md:text-[8rem] text-6xl text-end">GET QUOTE</h1>
              <button className="border px-2 flex justify-center items-center text-sm py-2 hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
                <span>REQUEST QUOTE</span> <ChevronRight strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
