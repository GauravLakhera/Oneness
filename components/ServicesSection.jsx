"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const containerRef = useRef(null);
  const gsapContext = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create GSAP context to properly clean up animations
    gsapContext.current = gsap.context(() => {
      let sections = gsap.utils.toArray(".service-section");

      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          {
            autoAlpha: 0,
            y: 80,
            scale: 0.95,
          },
          {
            duration: 1.2,
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
              scrub: false,
            },
            delay: index * 0.1, // Stagger effect
          }
        );

        // Animate content sections separately
        gsap.fromTo(
          section.querySelectorAll(".content-section"),
          {
            autoAlpha: 0,
            x: 30,
          },
          {
            duration: 0.8,
            autoAlpha: 1,
            x: 0,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => {
      // Clean up GSAP context and ScrollTrigger instances
      if (gsapContext.current) {
        gsapContext.current.revert();
      }
    };
  }, []);

  const data = [
    {
      id: "building&construction",
      title: "Building & Construction",
      description:
        "ONENESS offer comprehensive building and construction services, delivering high-quality structures that meet the functional, aesthetic, and safety requirements of our clients. From groundwork to final finishes, our expertise spans across commercial, industrial, institutional, and residential projects.",
      whatWeDo:
        "We work closely with clients to navigate complex legal and commercial challenges amid the real-world pressures of construction delivery. Our approach is practical, proactive, and focused on achieving strategic outcomes.",
      ourExperience:
        "Our team has been engaged in significant dispute resolution and advisory roles across a range of projects, including residential towers, public infrastructure precincts, nationwide rollout programs, and large-scale commercial developments.\n\nWe represent clients in high-stakes litigation under the Home Building Act, the Design and Building Practitioners Act, and the Residential Apartment Buildings Act. Our team regularly prepares and defends claims involving delay, disruption, prolongation, defective works, variations, latent conditions, and back-charges. Our experience spans Supreme Court proceedings, Security of Payment adjudications, arbitration, and complex mediations across India.",
      capability: [
        "Structural Construction – RCC foundations, columns, beams, slabs, and brick/block masonry works.",
        "Superstructure & Finishing – Plastering, flooring, painting, waterproofing, doors, windows, and ceiling works.",
        "Industrial & Pre-Engineered Buildings – Construction of factory sheds, warehouses, and steel structures.",
        "External Development – Compound walls, drainage systems, paving, landscaping, and site grading.",
        "Renovation & Expansion Works – Modifications, extensions, and upgradation of existing structures.",
        "Project Management & Quality Control – End-to-end coordination, material management, safety compliance, and timely delivery.",
      ],
      image:
        "https://cdn.pixabay.com/photo/2024/10/12/08/06/building-9114701_1280.jpg",
    },
    {
      id: "infrastructure",
      title: "Infrastructure Projects",
      description:
        "ONENESS specializes in delivering comprehensive engineering solutions for infrastructure projects, including design, construction, installation, and ongoing maintenance. We take pride in offering end-to-end services that ensure not only the successful execution of infrastructure works but also their long-term performance and reliability. With a strong emphasis on durability, performance, and client satisfaction, we deliver infrastructure projects that are built to last and supported with reliable technical maintenance throughout their lifecycle.",
      whatWeDo:
        "managers, engineers and project teams on major infrastructure projects where time, cost and compliance risks are tightly interwoven. These projects often operate under demanding public frameworks, making precise legal strategy essential.",
      ourExperience: `Roads,
Drainage systems,
Foundations,
Utility buildings,
electrical networks,
Sewage Treatment Plants,
Tunnels,
Waste Plants & Facilities`,
      // capability: ["Advanced Heavy Machinery Fleet", "Innovative Engineering Solutions", "Strong Government Partnerships", "Environmental Compliance Expertise", "Large-scale Project Management"],
      image:
        "https://cdn.pixabay.com/photo/2022/11/04/05/50/city-7569067_1280.jpg",
    },
    {
      id: "engineering",
      title: "Engineering",
      description:
        "ONENESS plays a crucial role in designing, developing, and executing technical solutions for infrastructure, industrial, and commercial projects, ensuring efficiency, safety, and compliance with industry standards",
      whatWeDo:
        "We specialize in civil and electrical engineering services — offering design, installation, supervision, and commissioning for residential, commercial, and industrial projects. Our work is backed by technical expertise, commitment to safety, and compliance with industry standards.",
      ourExperience:
        "We have extensive experience in civil, electrical, and mechanical engineering works, having executed projects for data centers, office interiors, infrastructure developments, and industrial facilities. Our team is well-versed in working with complex technical requirements and tight timelines while maintaining the highest standards of safety and quality.",
      capability: [
        "Design and Development",
        "Project Management",
        "Consulting",
        "Construction and Implementation",
        "Strategic support during delivery",
        "Maintenance and Support",
        "Testing and Inspection",
        "Claims strategy and entitlement preservation",
      ],
      image:
        "https://cdn.pixabay.com/photo/2014/10/05/08/27/site-474806_1280.jpg",
    },
    {
      id: "energy&environment",
      title: "Energy & Environment",
      description:
        "Energy and environmental devlopment projects explicitly outline the client responsibilities, detailing specific E&S (environmental and social) commitments, requirements, and provisions derived from sources like E&S policies, regulatory mandates, ESIA documentation (environmental and social impact assessment), and supplemental assessments.",
      whatWeDo:
        "In essence, energy and environmental we strive to find the balance between meeting societal energy needs and protecting the environment for current and future generations. we are at the forefront of the transition towards a sustainable energy future, working to build a world where economic growth and ecological health can coexist.",
      // ourExperience: "Pioneering sustainable solutions for over a decade with 100+ renewable energy projects and environmental consulting for major corporations.",
      // capability: ["Renewable Energy Technology", "Environmental Impact Assessment", "Sustainability Consulting", "Green Certification Processes", "Climate Change Mitigation"],
      image:
        "https://cdn.pixabay.com/photo/2015/11/18/11/24/windmills-1048981_1280.jpg",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen"
    >
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient text-black/80 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-black/70 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions across multiple sectors with decades of
            expertise and innovation
          </p>
        </div>

        {data.map(
          (
            {
              id,
              title,
              description,
              whatWeDo,
              ourExperience,
              capability,
              image,
            },
            index
          ) => (
            <article
              key={index}
              id={id}
              className="service-section bg-white shadow-xl  mb-16 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="relative w-full lg:w-2/5 h-64 lg:h-auto min-h-[300px]">
                  {image && (
                    <>
                      <Image
                        src={image}
                        alt={title || "Service"}
                        fill
                        className="object-cover grayscale"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20"></div>
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/5 p-8 lg:p-12">
                  {title && (
                    <h3 className="content-section text-3xl lg:text-4xl font-sentient text-black/80 mb-6 leading-tight">
                      {title}
                    </h3>
                  )}

                  {description && (
                    <p className="content-section text-gray-700 text-lg leading-relaxed mb-8">
                      {description}
                    </p>
                  )}

                  <div className="space-y-8">
                    {whatWeDo && (
                      <div className="content-section">
                        <h4 className="text-xl font-normal text-black/70 mb-3 flex items-center">
                          <span className="w-1 h-1 bg-black/60 rounded-full mr-3"></span>
                          What We Do
                        </h4>
                        <p className="text-gray-700 leading-relaxed pl-5">
                          {whatWeDo}
                        </p>
                      </div>
                    )}

                    {ourExperience && (
                      <div className="content-section">
                        <h4 className="text-xl font-normal text-black/70 mb-3 flex items-center">
                          <span className="w-1 h-1 bg-black/60 rounded-full mr-3"></span>
                          Our Experience
                        </h4>
                        <div className="text-gray-700 leading-relaxed pl-5 space-y-4">
                          {ourExperience.split("\n\n").map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {capability && capability.length > 0 && (
                      <div className="content-section">
                        <h4 className="text-xl font-normal text-black/70 mb-4 flex items-center">
                          <span className="w-1 h-1 bg-black/60 rounded-full mr-3"></span>
                          Our Capabilities
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-5">
                          {capability.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2 text-gray-700"
                            >
                              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}
