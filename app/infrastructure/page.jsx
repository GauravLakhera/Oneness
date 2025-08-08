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
import { LiaRoadSolid } from "react-icons/lia";
import { FaWater } from "react-icons/fa6";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaBridge } from "react-icons/fa6";
import { MdOutlineElectricBolt } from "react-icons/md";
import { PiNuclearPlantFill } from "react-icons/pi";
import { FaCarTunnel } from "react-icons/fa6";
import { TbBuildingFactory2 } from "react-icons/tb";

if (typeof window !== "undefined" && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InfrastructureProjects() {
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
            <p className="lg:text-6xl text-4xl mb-12">
              Infrastructure Projects/
            </p>
            <div className="max-w-3xl ml-auto">
              <p className="text-3xl font-sentient leading-relaxed">
                ONENESS specializes in delivering comprehensive engineering
                solutions for infrastructure projects, including design,
                construction, installation, and ongoing maintenance. We take
                pride in offering end-to-end services that ensure not only the
                successful execution of infrastructure works but also their
                long-term performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <img
        src="https://cdn.pixabay.com/photo/2022/11/04/05/50/city-7569067_1280.jpg"
        className="grayscale w-full h-96 object-cover"
      />

      <section className="pb-20 section-padding bg-[#dcdbd0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 py-10 gap-20 bg-[#dcdbd0]">
            <FadeInSection>
              <h2 className="text-4xl w-6/12 mb-8">Our Commitment/</h2>
              <AnimatedText
                className="text-2xl opacity-80 mb-8"
                splitType="words"
              >
                With a strong emphasis on durability, performance, and client
                satisfaction, we deliver infrastructure projects that are built
                to last and supported with reliable technical maintenance
                throughout their lifecycle.
              </AnimatedText>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="pt-32 pb-10  section-padding bg-black/90 text-white/90">
        <div className="flex justify-between flex-col-reverse lg:flex-row gap-6">
          <h1 className="text-3xl lg:w-8/12">
            Our experienced managers, engineers and project teams work on major
            infrastructure projects where time, cost and compliance risks are
            tightly interwoven. These projects often operate under demanding
            public frameworks, making precise legal strategy essential.
          </h1>
          <h1 className="text-5xl">What we do/</h1>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 section-padding bg-[#dcdbd0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-16 text-center font-sentient">
            Our Expertise/
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Roads & Highways",
                icon: <LiaRoadSolid />,
                description:
                  "Complete road construction from rural pathways to major highways",
                details: [
                  "Asphalt & concrete paving",
                  "Traffic signal installation",
                  "Road marking & signage",
                  "Bridge construction",
                ],
              },
              {
                title: "Drainage Systems",
                icon: <FaWater />,
                description:
                  "Comprehensive water management and flood prevention solutions",
                details: [
                  "Storm water drainage",
                  "Underground pipe networks",
                  "Retention ponds",
                  "Flood mitigation systems",
                ],
              },
              {
                title: "Foundations & Structures",
                icon: <FaBridge />,
                description:
                  "Robust foundation solutions for all types of construction projects",
                details: [
                  "Deep foundation systems",
                  "Retaining walls",
                  "Concrete structures",
                  "Pile driving & testing",
                ],
              },
              {
                title: "Utility Buildings",
                icon: <PiBuildingOfficeFill />,
                description:
                  "Essential infrastructure buildings for public and private utilities",
                details: [
                  "Substations & control rooms",
                  "Water treatment facilities",
                  "Maintenance workshops",
                  "Administrative buildings",
                ],
              },
              {
                title: "Electrical Networks",
                icon: <MdOutlineElectricBolt />,
                description:
                  "Complete electrical infrastructure from generation to distribution",
                details: [
                  "HT/LT line installation",
                  "Transformer stations",
                  "Power distribution systems",
                  "Street lighting networks",
                ],
              },
              {
                title: "Sewage Treatment Plants",
                icon: <PiNuclearPlantFill />,
                description:
                  "Modern wastewater treatment facilities for environmental protection",
                details: [
                  "Primary & secondary treatment",
                  "Sludge management",
                  "Effluent polishing",
                  "Biogas recovery systems",
                ],
              },
              {
                title: "Tunnels & Underground Works",
                icon: <FaCarTunnel />,
                description:
                  "Complex underground infrastructure for transportation and utilities",
                details: [
                  "Road & rail tunnels",
                  "Utility corridors",
                  "Subway systems",
                  "Underground parking",
                ],
              },
              {
                title: "Waste Management Facilities",
                icon: <TbBuildingFactory2 />,
                description:
                  "Comprehensive waste processing and recycling infrastructure",
                details: [
                  "Material recovery facilities",
                  "Composting plants",
                  "Incineration systems",
                  "Landfill engineering",
                ],
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white/50 rounded-lg hover:bg-white/70 transition-all duration-300 p-6 h-full">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4 text-black/70">
                      {item.icon}
                    </div>
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
                      className="text-xs text-black/60 hover:text-black/80 font-medium uppercase tracking-wider transition-colors duration-300"
                    >
                      Contact us →
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Additional Stats Section */}
          <div className="mt-20 pt-16 border-t border-yellow-600/90">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="text-3xl font-sentient mb-2">500+</h4>
                <p className="text-sm text-black/70">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-sentient mb-2">8</h4>
                <p className="text-sm text-black/70">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-sentient mb-2">50+</h4>
                <p className="text-sm text-black/70">Expert Engineers</p>
              </div>
              <div>
                <h4 className="text-3xl font-sentient mb-2">100%</h4>
                <p className="text-sm text-black/70">Client Satisfaction</p>
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
        <h1 className="text1">From Design</h1>
        <h1 className="text2">To Delivery</h1>
      </div>

      {/* Industry Expert Section */}
      <div className="bg-[#33312f]">
        <section className="flex container mt-16 w-7xl mx-auto lg:mt-0 flex-col lg:flex-row min-h-screen text-white/90 justify-between items-start px-8 py-16 gap-8">
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

            <h3 className="text-3xl font-sentient mb-4">Industry Expert/</h3>
            <p className="text-white/90 text-base md:max-w-xl leading-relaxed font-sentient">
              We support project success by being proactive and precise,
              enabling our clients to act early, protect their position, and
              move forward with confidence.
            </p>
            <p className="text-sm text-white/90/60">Managing Director</p>
          </div>

          <div className="relative flex flex-col items-start justify-start lg:max-w-[50%]">
            <img
              src="/images/md.jpeg"
              alt="CEO"
              className="w-full max-w-md min-w-[20rem] object-cover border-0 mb-4 grayscale contrast-125"
            />
          </div>
        </section>

        {/* Second Expert Section */}
        <section className="flex container w-7xl mx-auto flex-col lg:flex-row-reverse min-h-screen text-white/90 justify-between items-start px-8 py-16 gap-8">
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

            <h3 className="text-3xl font-sentient mb-4">Industry Expert/</h3>
            <p className="text-white/90 text-base md:max-w-xl leading-relaxed font-sentient">
              Our team consists of creative problem solvers as well as careful,
              strategic, and forward-thinking professionals who consistently
              deliver innovative, cost-effective, and responsible solutions for
              our clients.
            </p>
            <p className="text-sm text-white/90/60">
              Chief Executive Officer/Proprietor
            </p>
          </div>

          <div className="relative flex flex-col items-start justify-start lg:max-w-[50%]">
            <img
              src="/images/ce.jpeg"
              alt="General Manager"
              className="w-full max-w-md min-w-[20rem] object-cover border-0 mb-4 grayscale contrast-125"
            />
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
                alt="Infrastructure project"
              />
            </div>
            <div className="absolute lg:relative right-0 top-5 flex flex-col items-end justify-center pr-5 lg:pr-16 space-y-3 lg:space-y-2">
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
              <h1 className="text-end">Build Your Future</h1>
              <h1 className="md:text-[8rem] text-6xl text-black/80 text-end">
                CONTACT US
              </h1>
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
