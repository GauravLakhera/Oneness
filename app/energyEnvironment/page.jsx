"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AnimatedText from "@/components/AnimatedText";
import FadeInSection from "@/components/FadeInSection";
import CustomIcon from "@/components/CustomIcon";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import {
  FaSolarPanel,
  FaWind,
  FaLeaf,
  FaRecycle,
  FaWater,
  FaClipboardCheck,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";
import {
  MdEnergySavingsLeaf,
  MdOutlineWbSunny,
  MdEco,
  MdAssessment,
  MdPolicy,
  MdManageAccounts,
} from "react-icons/md";
import { GiWindTurbine, GiElectric, GiPlantWatering } from "react-icons/gi";
import { TbReportAnalytics } from "react-icons/tb";

if (typeof window !== "undefined" && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EnergyEnvironment() {
  useEffect(() => {
    gsap.set(".text1", { x: -100 });
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
    <div className="relative min-h-screen bg-white text-black/80 pt-32">
      {/* Hero Section */}
      <div className="absolute top-[7rem] lg:top-[10rem] left-5 lg:left-32">
        <Link
          href="/"
          className="flex items-center bg-black/90 px-2 py-2 rounded-full"
        >
          <IoIosArrowBack className="text-white/90 text-2xl" />
        </Link>
      </div>

      <section className="py-8 lg:py-24 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero">
            <p className="lg:text-6xl text-4xl mb-12">Energy & Environment/</p>
            <div className="max-w-3xl ml-auto">
              <p className="text-3xl font-sentient leading-relaxed">
                Energy and environmental development projects explicitly outline
                the client responsibilities, detailing specific E&S
                (environmental and social) commitments, requirements, and
                provisions derived from sources like E&S policies, regulatory
                mandates, ESIA documentation, and supplemental assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <img
        src="https://cdn.pixabay.com/photo/2016/11/19/11/38/windmills-1838788_1280.jpg"
        className="grayscale w-full h-96 object-cover"
        alt="Energy and environment solutions"
      />

      <section className="pb-20 section-padding bg-[#dcdbd0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 py-10 gap-20 bg-[#dcdbd0]">
            <FadeInSection>
              <h2 className="text-4xl w-6/12 mb-8">Our Mission/</h2>
              <AnimatedText
                className="text-2xl opacity-80 mb-8"
                splitType="words"
              >
                In essence, energy and environmental development, we strive to
                find the balance between meeting societal energy needs and
                protecting the environment for current and future generations.
                We are at the forefront of the transition towards a sustainable
                energy future, working to build a world where economic growth
                and ecological health can coexist.
              </AnimatedText>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="pt-32 pb-10  section-padding bg-black/90 text-white/90">
        <div className="flex justify-between flex-col-reverse lg:flex-row gap-6">
          <h1 className="text-3xl lg:w-8/12">
            We specialize in comprehensive environmental and social impact
            assessments, regulatory compliance, and sustainable energy solutions
            that meet the highest standards of environmental stewardship while
            driving economic value for our clients.
          </h1>
          <h1 className="text-5xl">What We Do/</h1>
        </div>

        <div className="flex flex-col justify-end items-end text-start mt-10">
          <ul className="text-sm font-extralight text-white/90 space-y-2">
            <li>
              <strong>Environmental Impact Assessment</strong> - Comprehensive
              ESIA documentation and regulatory compliance
            </li>
            <li>
              <strong>Renewable Energy Solutions</strong> - Solar, wind, and
              sustainable energy project development
            </li>
            <li>
              <strong>Environmental Management</strong> - E&S policies,
              monitoring, and compliance frameworks
            </li>
            <li>
              <strong>Sustainability Consulting</strong> - Strategic guidance
              for sustainable development initiatives
            </li>
          </ul>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 section-padding bg-[#dcdbd0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-16 text-center font-sentient">
            Our Services/
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Impact Assessment",
                icon: <MdAssessment />,
                description:
                  "Comprehensive environmental and social impact assessments for development projects",
                details: [
                  "ESIA documentation",
                  "Environmental baseline studies",
                  "Impact mitigation strategies",
                  "Regulatory compliance review",
                ],
              },
              {
                title: "Renewable Energy Development",
                icon: <FaSolarPanel />,
                description:
                  "End-to-end renewable energy project development and implementation",
                details: [
                  "Solar power systems",
                  "Wind energy projects",
                  "Energy storage solutions",
                  "Grid integration planning",
                ],
              },
              {
                title: "Environmental Management Systems",
                icon: <MdEco className="text-green-600" />,
                description:
                  "Development and implementation of comprehensive environmental management frameworks",
                details: [
                  "E&S policy development",
                  "Environmental monitoring plans",
                  "Compliance tracking systems",
                  "Performance indicators",
                ],
              },
              {
                title: "Sustainability Consulting",
                icon: <FaLeaf />,
                description:
                  "Strategic consulting for sustainable development and green initiatives",
                details: [
                  "Sustainability strategy",
                  "Carbon footprint assessment",
                  "Green building certification",
                  "ESG compliance",
                ],
              },
              {
                title: "Water & Waste Management",
                icon: <FaWater />,
                description:
                  "Integrated water and waste management solutions for environmental protection",
                details: [
                  "Water treatment systems",
                  "Waste management planning",
                  "Recycling programs",
                  "Pollution prevention",
                ],
              },
              {
                title: "Environmental Monitoring",
                icon: <TbReportAnalytics />,
                description:
                  "Continuous monitoring and reporting of environmental parameters",
                details: [
                  "Air quality monitoring",
                  "Water quality assessment",
                  "Soil contamination testing",
                  "Biodiversity surveys",
                ],
              },
              {
                title: "Regulatory Compliance",
                icon: <MdPolicy />,
                description:
                  "Ensuring full compliance with environmental regulations and standards",
                details: [
                  "Permit applications",
                  "Regulatory liaison",
                  "Compliance audits",
                  "Legal documentation",
                ],
              },
              {
                title: "Climate Change Adaptation",
                icon: <FaGlobe />,
                description:
                  "Climate resilience planning and adaptation strategies for sustainable development",
                details: [
                  "Climate risk assessment",
                  "Adaptation planning",
                  "Resilience strategies",
                  "Mitigation measures",
                ],
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white/50 rounded-lg hover:bg-white/70 transition-all duration-300 p-6 h-full">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-sm text-black/70 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center text-sm text-black/60"
                      >
                        <div className="w-1.5 h-1.5 bg-black/50 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-yellow-600/90">
                    <Link
                      href="/contact"
                      className="text-xs text-black/80 hover:text-black/90 font-medium uppercase tracking-wider transition-colors duration-300"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Energy Solutions */}
          <div className="mt-20 pt-16 border-t border-yellow-600/90">
            <h3 className="text-3xl mb-8 text-center font-sentient">
              Sustainable Energy Solutions/
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <MdOutlineWbSunny className="text-5xl mx-auto mb-4 " />
                <h4 className="text-xl font-medium mb-2">Solar Energy</h4>
                <p className="text-sm text-black/70">
                  Photovoltaic systems and solar thermal solutions
                </p>
              </div>
              <div className="text-center">
                <GiWindTurbine className="text-5xl mx-auto mb-4 " />
                <h4 className="text-xl font-medium mb-2">Wind Power</h4>
                <p className="text-sm text-black/70">
                  Wind turbine installations and wind farm development
                </p>
              </div>
              <div className="text-center">
                <FaWater className="text-5xl mx-auto mb-4 " />
                <h4 className="text-xl font-medium mb-2">Hydro Energy</h4>
                <p className="text-sm text-black/70">
                  Small-scale hydro and water-based energy systems
                </p>
              </div>
              <div className="text-center">
                <MdEnergySavingsLeaf className="text-5xl mx-auto mb-4 text-green-500" />
                <h4 className="text-xl font-medium mb-2">Energy Efficiency</h4>
                <p className="text-sm text-black/70">
                  Energy audits and efficiency optimization solutions
                </p>
              </div>
            </div>
          </div>

          {/* Additional Stats Section */}
          <div className="mt-16 pt-16 border-t border-yellow-600/90">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="text-3xl font-sentient mb-2">150+</h4>
                <p className="text-sm text-black/70">Environmental Projects</p>
              </div>
              <div>
                <h4 className="text-3xl font-sentient mb-2">50MW</h4>
                <p className="text-sm text-black/70">
                  Renewable Energy Capacity
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-sentient mb-2">100%</h4>
                <p className="text-sm text-black/70">Compliance Rate</p>
              </div>
              <div>
                <h4 className="text-3xl font-sentient mb-2">25%</h4>
                <p className="text-sm text-black/70">Average Energy Savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:px-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 104 104"
          fill="none"
        >
          <path
            d="M76.6546 20.9766H27.9642L21.0293 39.9468L52.3706 100.728L83.5905 39.9468L76.6546 20.9766Z"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M76.7363 20.8618C60.4522 20.8605 27.8845 20.8588 27.8845 20.8618L22.0527 2.64844H82.5684L76.7363 20.8618Z"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M52.3105 100.547L52.3105 57.7188"
            stroke="black"
            strokeWidth="1.5"
          />
          <circle
            cx="52.3105"
            cy="50.7051"
            r="6.26758"
            stroke="black"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="lg:text-[8rem] py-6 text-5xl flex flex-col justify-center items-center">
        <h1 className="text1">Sustainable</h1>
        <h1 className="text2">Tomorrow</h1>
      </div>

      {/* Sustainability Excellence Section */}
      <div className="bg-[#33312f]">
        <section className="flex container mt-16 lg:w-7xl mx-auto lg:mt-0 flex-col lg:flex-row min-h-screen text-white/90 justify-between items-start px-8 py-16 gap-8">
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
                className="-rotate-90 text-white/90"
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

            <h3 className="text-3xl font-sentient mb-4">
              Environmental Leadership/
            </h3>
            <p className="text-white/90 text-base md:max-w-xl leading-relaxed font-sentient">
              We are committed to environmental excellence, combining innovative
              technology with proven sustainable practices to deliver solutions
              that protect our planet while meeting the energy needs of today
              and tomorrow. Our approach ensures long-term environmental
              stewardship and regulatory compliance.
            </p>

            <div className="font-medium md:block hidden md:text-[5rem] tracking-wider text-white/90 font-sentient whitespace-nowrap">
              GREEN{" "}
              <span className="relative md:top-[100px] md:left-[-80px]">
                FUTURE
              </span>
            </div>
          </div>

          <div className="relative flex flex-col items-start justify-start lg:max-w-[50%]">
            <img
              src="https://cdn.pixabay.com/photo/2024/01/10/16/11/solar-8499901_1280.jpg"
              alt="Environmental Team"
              className="w-full max-w-md min-w-[20rem] object-cover border-0 mb-4 grayscale contrast-125"
            />

            <div className="font-medium block md:hidden text-4xl lg:text-[3rem] tracking-wider text-white/90 font-sentient whitespace-nowrap">
              GREEN <span className="relative top-[50px]">FUTURE</span>
            </div>

            <div className="w-full md:py-3 flex items-center md:justify-end">
              <Link
                href="/our-team"
                className="border md:mt-[100px] mt-[80px] border-white text-white/90 py-3 px-8 rounded transition bg-transparent hover:bg-[#efe0b1] hover:text-[#33312f] text-base"
              >
                Our Team &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section className="py-20">
        <div className="pt-10">
          <hr className="text-yellow-600" />
          <div className="flex relative flex-col py-5 lg:flex-row justify-between">
            <div className="lg:w-5/12">
              <img
                src="https://kreisson.com.au/wp-content/uploads/2025/03/image-23-copy-2.webp"
                className="object-cover grayscale h-[20rem] w-full"
                alt="Sustainable energy solutions"
              />
            </div>
            <div className="absolute lg:relative right-0 top-5 flex flex-col items-end justify-center pr-10 lg:pr-16 space-y-3 lg:space-y-2">
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
              <h1 className="text-end">Power Your Future</h1>
              <h1 className="md:text-[8rem] text-6xl text-end">CONTACT US</h1>
              <Link
                href="/contact"
                className="border border-yellow-600/60 px-2 flex justify-center items-center text-sm py-2 hover:bg-black hover:text-white/90 transition-all duration-500 ease-in-out"
              >
                <span>GET IN TOUCH</span> <ChevronRight strokeWidth={1} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
