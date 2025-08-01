"use client";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    title: "Pre-Contract",
    icon: (
      // Example SVG icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 163 163"
        fill="none"
      >
        <path
          d="M115.965 143.965H144.27V18.5625H17.959V143.965H92.7362V98.8049"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M100.268 60.5703H144.301"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M114.037 100.836L144.299 100.836"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M100.268 39.5469L100.268 19.0685"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M18.6582 100.834H67.9275V76.375"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M19.0078 52.2733H67.9276V19.0781"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    ),
    description:
      "Practical advice and risk analysis for the tender and procurement phase:",
    bullets: [
      "Contract preparation",
      "Contract negotiation",
      "Contract review",
      "Contract risk analysis",
      "Contract administration",
    ],
  },
  {
    title: "Contract Delivery",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 163 163"
        fill="none"
      >
        <path
          d="M27.1523 48.2031H45.0618"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M27.1523 66.8672H45.0618"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M27.1523 85.0234H45.0618"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path d="M27.1523 104H45.0618" stroke="black" stroke-width="1.5"></path>
        <path
          d="M27.4062 123.43L36.1089 123.43"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M22.2988 141.297L31.0015 141.297"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M131.258 141.297L139.96 141.297"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M115.189 48.2031H134.865"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M115.189 66.8672H134.865"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M115.189 85.0234H134.865"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path d="M115.189 104H134.865" stroke="black" stroke-width="1.5"></path>
        <path
          d="M127.297 123.43L134.865 123.43"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M27.166 141.305C27.166 101.305 27.166 21.3047 27.166 21.3047H135.609V141.305"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M27.6191 29.5391L135.611 130.941"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M26.6504 29.5391H135.116"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M134.863 29.5391L27.4062 131.698"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M46.0703 29.5391V113.538"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M115.189 29.5391L115.189 111.519"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    ),
    description:
      "Strategic guidance to ensure optimal outcomes on contentious issues:",
    bullets: [
      "Contract administration guidance",
      "Contractual communications",
      "Claim preparation & defence",
      "Risk management",
      "Dispute resolution",
    ],
  },
  {
    title: "Post-Contract",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 163 163"
        fill="none"
      >
        <g clip-path="url(#clip0_8271_8067)">
          <path
            d="M80.7715 137.905C80.7715 100.299 80.7715 25.0859 80.7715 25.0859H128.145V137.905"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M33.4004 137.907C33.4004 110.899 33.4004 56.8828 33.4004 56.8828H80.7736V137.907"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M34.3125 137.906H18.0547"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M143.492 137.906H127.41"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <rect
            x="87.6875"
            y="36.4062"
            width="16.7771"
            height="8.00711"
            stroke="black"
            stroke-width="1.5"
          ></rect>
          <rect
            x="40.3105"
            y="67.3672"
            width="16.7771"
            height="8.00711"
            stroke="black"
            stroke-width="1.5"
          ></rect>
          <rect
            x="87.6875"
            y="50.3672"
            width="16.7771"
            height="8.00711"
            stroke="black"
            stroke-width="1.5"
          ></rect>
          <rect
            x="40.3105"
            y="82.5312"
            width="16.7771"
            height="8.00711"
            stroke="black"
            stroke-width="1.5"
          ></rect>
          <rect
            x="87.6875"
            y="66.4453"
            width="16.7771"
            height="8.00711"
            stroke="black"
            stroke-width="1.5"
          ></rect>
          <rect
            x="40.3105"
            y="96.3281"
            width="16.7771"
            height="8.00711"
            stroke="black"
            stroke-width="1.5"
          ></rect>
        </g>
        <defs>
          <clipPath id="clip0_8271_8067">
            <rect
              width="126"
              height="126"
              fill="white"
              transform="translate(17.7734 18.5)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    ),
    description:
      "Legal representation and advice for dispute avoidance or resolution:",
    bullets: [
      "Litigation, Mediation, Arbitration",
      "Security of Payment (SOPA)",
      "Delay & cost escalation claims",
      "Breach of contract",
      "Residential building disputes",
      "Professional negligence",
      "WHS issues",
    ],
  },
];

export default function PhaseCards() {
  const cardsRef = useRef([]);
  const triggersRef = useRef([]);

  useEffect(() => {
    triggersRef.current = [];

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
          delay: i * 0.15,
        }
      );

      if (animation.scrollTrigger) {
        triggersRef.current.push(animation.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach((trigger) => trigger.kill());

      gsap.killTweensOf(cardsRef.current);
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl  grid grid-cols-1 md:grid-cols-3 justify-self-end gap-10">
        {phases.map((phase, idx) => (
          <div
            key={phase.title}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-white p-8  text-center "
          >
            {" "}
            <div className="text-5xl text-black mb-2 font-medium text-start border-b border-black/80">{`0${
              idx + 1
            }.`}</div>
            <div className="border-r border-black/80">
              {phase.icon}

              <h3 className="text-2xl  text-black mb-4 text-start">
                {phase.title}
              </h3>
              <div className="text-gray-700 mb-5  text-start">
                {phase.description}
              </div>
              <ul className="text-left list-disc list-inside text-black/90 space-y-2 ">
                {phase.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
