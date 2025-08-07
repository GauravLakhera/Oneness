"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const ITEMS = [
  {
    title: "BUILDING & CONSTRUCTION",
    summary:
      "Comprehensive support and tailored solutions to principals, contractors and subcontractors throughout all residential and commercial project stages.",
    detail:
      "We guide stakeholders through contracts, compliance, risk assessment, and project delivery, ensuring every build exceeds expectations from concept to completion.",
  },
  {
    title: "INFRASTRUCTURE PROJECTS",
    summary:
      "Collaborative advice across large-scale infrastructure lifecycles to navigate legal complexities, minimise risk and efficiently achieve project success.",
    detail:
      "Our team addresses complex infrastructure needs—providing strategy, lifecycle support, and proactive resolution for seamless project execution.",
  },
  // {
  //   title: "REPAIR & MAINTENANCE",
  //   summary:
  //     "Tailored advice and peerless expertise to protect your interests and enhance your objectives within the complex engineering project landscape.",
  //   detail:
  //     "From design review to compliance guidance and technical innovation, we partner with you to deliver sustainable, high-value engineering results.",
  // },
  // Added new items below:
  // {
  //   title: "AMC PROJECT",
  //   summary:
  //     "Providing comprehensive Annual Maintenance Contract services for long-term project reliability and client satisfaction.",
  //   detail:
  //     "Our AMC services ensure ongoing maintenance, timely repairs, and minimization of downtime to keep your projects running smoothly and efficiently.",
  // },
  // {
  //   title: "ARCHITECTURE",
  //   summary:
  //     "Innovative architectural design services that blend creativity with practicality to meet client vision and regulatory requirements.",
  //   detail:
  //     "We deliver end-to-end architectural solutions, from conceptual design through detailed planning and execution, enhancing both aesthetics and function.",
  // },
  // {
  //   title: "ELECTRICAL",
  //   summary:
  //     "Expert electrical engineering services ensuring safety, compliance, and energy efficiency across a range of projects.",
  //   detail:
  //     "Our electrical team handles design, installation, and maintenance for residential, commercial, and industrial electrical systems.",
  // },
  {
    title: "INTERIOR DESIGN",
    summary:
      "Creative and functional interior design solutions tailored to enhance space usability and aesthetics.",
    detail:
      "We provide customized interior design services that align with client needs, focusing on style, comfort, and optimal use of space.",
  },
  {
    title: "ERECTION HT & LT LINE WORK",
    summary:
      "Specialist erection services for High Tension (HT) and Low Tension (LT) electrical line projects.",
    detail:
      "We manage the safe and efficient erection of HT & LT line works, ensuring compliance with industry standards and operational excellence.",
  },
  // {
  //   title: "PWD SUB WORKS",
  //   summary:
  //     "Reliable Public Works Department subcontracting services delivering projects with quality and adherence to schedules.",
  //   detail:
  //     "Our PWD subcontract works cover a wide array of civil and infrastructure projects, backed by thorough management and technical expertise.",
  // },
];

export default function CollapsibleDetailList() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const cardsRef = useRef([]);
  const triggersRef = useRef([]);

  useEffect(() => {
    triggersRef.current = []; // clear on mount

    cardsRef.current.forEach((el, i) => {
      const animation = gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.15, // slight stagger
        }
      );
      // Save this trigger for cleanup
      if (animation.scrollTrigger) {
        triggersRef.current.push(animation.scrollTrigger);
      }
    });

    // Cleanup: Only kill this component's triggers
    return () => {
      triggersRef.current.forEach((trigger) => trigger.kill());
      // Optionally, also kill all tweens we created (for this component only)
      gsap.killTweensOf(cardsRef.current);
    };
  }, []);

  return (
    <section className="bg-white text-black/90 py-10">
      <div className="lg:max-w-[85rem] mx-auto divide-y divide-yellow-600">
        {ITEMS.map((item, idx) => (
          <div key={item.title} ref={(el) => (cardsRef.current[idx] = el)}>
            <div
              className="flex flex-col px-4 lg:px-0 lg:flex-row items-center justify-between py-10 cursor-pointer group"
              onClick={() => toggle(idx)}
            >
              <div className="flex flex-col lg:flex-row justify-between flex-1 ">
                <div className=" lg:max-w-[30rem]">
                  <p className="lg:text-5xl text-2xl   font-sentient text-black/70">
                    {item.title}
                  </p>
                </div>

                <div className="mt-3 text-sm flex  lg:w-[42rem] font-normal text-gray-700 max-w-2xl">
                  <p>{item.summary}</p>
                </div>
              </div>
              <div
                className={`lg:ml-8 ml-auto transition-transform will-change-transform ${
                  openIndex === idx ? "rotate-45" : "rotate-0"
                }`}
              >
                {/* Arrow - can be an SVG for sharpness */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="a"
                  x="0"
                  y="0"
                  height={50}
                  width={50}
                  viewBox="0 0 80 80"
                  className="rotate-180 text-black"
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
            </div>
            {/* Detail section (collapsible) */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === idx
                  ? "max-h-48 opacity-100 py-4"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              <div className="text-base text-gray-800 border-t pt-4 px-4 lg:px-0">
                {item.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
