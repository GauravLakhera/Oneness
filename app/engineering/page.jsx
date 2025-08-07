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
  FaCogs, 
  FaLightbulb, 
  FaBuilding, 
  FaIndustry, 
  FaClipboardList, 
  FaWrench,
  FaChartLine,
  FaShieldAlt
} from "react-icons/fa";
import { 
  MdEngineering, 
  MdElectricBolt, 
  MdConstruction,
  MdDesignServices,
  MdSupportAgent,
  MdAnalytics
} from "react-icons/md";
import { 
  GiElectric,
  GiMechanicalArm,
} from "react-icons/gi";
import { SiCivicrm } from "react-icons/si";

import { 
  RiTestTubeFill 
} from "react-icons/ri";

if (typeof window !== "undefined" && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Engineering() {
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
        <Link href="/" className="flex items-center bg-black/90 px-2 py-2 rounded-full">
          <IoIosArrowBack className="text-white text-2xl" />
        </Link>
      </div>

      <section className="py-8 lg:py-24 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero">
            <p className="lg:text-6xl text-4xl mb-12">Engineering Solutions/</p>
            <div className="max-w-3xl ml-auto">
              <p className="text-3xl font-sentient leading-relaxed">
                ONENESS plays a crucial role in designing, developing, and executing 
                technical solutions for infrastructure, industrial, and commercial projects, 
                ensuring efficiency, safety, and compliance with industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <img src="https://cdn.pixabay.com/photo/2016/11/18/22/27/arches-1837166_1280.jpg" className="grayscale w-full h-96 object-cover" alt="Engineering solutions" />
      
      <section className="pb-20 section-padding bg-[#dcdbd0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 py-10 gap-20 bg-[#dcdbd0]">
            <FadeInSection>
              <h2 className="text-4xl w-6/12 mb-8">What We Do/</h2>
              <AnimatedText
                className="text-2xl opacity-80 mb-8"
                splitType="words"
              >
                We specialize in civil and electrical engineering services — offering design, 
                installation, supervision, and commissioning for residential, commercial, and 
                industrial projects. Our work is backed by technical expertise, commitment to 
                safety, and compliance with industry standards.
              </AnimatedText>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Experience */}
      <section className="pt-32 pb-10 lg:pb-3 section-padding bg-black/90 text-white/80">
        <div className="flex justify-between flex-col-reverse lg:flex-row gap-6">
          <h1 className="text-3xl lg:w-8/12">
            We have extensive experience in civil, electrical, and mechanical engineering works, 
            having executed projects for data centers, office interiors, infrastructure developments, 
            and industrial facilities. Our team is well-versed in working with complex technical 
            requirements and tight timelines while maintaining the highest standards of safety and quality.
          </h1>
          <h1 className="text-5xl">Our Experience/</h1>
        </div>
        
        <div className="flex flex-col justify-end items-end text-start mt-10">
          <ul className="text-sm font-extralight text-white/80 space-y-2">
            <li>
              <strong>Data Centers & IT Infrastructure</strong> - Complex technical installations 
              with precision requirements
            </li>
            <li>
              <strong>Office & Commercial Interiors</strong> - Modern workspace engineering solutions
            </li>
            <li>
              <strong>Infrastructure Development</strong> - Large-scale civil engineering projects
            </li>
            <li>
              <strong>Industrial Facilities</strong> - Specialized engineering for manufacturing 
              and processing plants
            </li>
          </ul>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-20 section-padding bg-[#dcdbd0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-16 text-center font-sentient">Our Capabilities/</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Design & Development", 
                icon: <MdDesignServices/>,
                description: "Comprehensive engineering design from concept to detailed drawings",
                details: ["CAD design & modeling", "Technical specifications", "3D visualization", "Design optimization"]
              },
              { 
                title: "Project Management", 
                icon: <FaClipboardList/>,
                description: "End-to-end project coordination with timeline and budget management",
                details: ["Project planning & scheduling", "Resource allocation", "Risk management", "Progress monitoring"]
              },
              { 
                title: "Engineering Consulting", 
                icon: <MdEngineering/>,
                description: "Expert technical advisory services for complex engineering challenges",
                details: ["Feasibility studies", "Technical assessments", "Code compliance review", "Value engineering"]
              },
              { 
                title: "Construction & Implementation", 
                icon: <MdConstruction/>,
                description: "Professional execution of engineering solutions with quality control",
                details: ["Site supervision", "Installation oversight", "Quality assurance", "Safety compliance"]
              },
              { 
                title: "Strategic Support", 
                icon: <FaChartLine/>,
                description: "Strategic guidance during project delivery and operational phases",
                details: ["Delivery optimization", "Performance analysis", "Process improvement", "Technical troubleshooting"]
              },
              { 
                title: "Maintenance & Support", 
                icon: <MdSupportAgent/>,
                description: "Ongoing maintenance services to ensure optimal system performance",
                details: ["Preventive maintenance", "Emergency repairs", "System upgrades", "Performance monitoring"]
              },
              { 
                title: "Testing & Inspection", 
                icon: <RiTestTubeFill/>,
                description: "Comprehensive testing protocols to ensure safety and compliance",
                details: ["System commissioning", "Performance testing", "Safety inspections", "Compliance verification"]
              },
              { 
                title: "Claims Strategy", 
                icon: <FaShieldAlt/>,
                description: "Strategic claims management and entitlement preservation services",
                details: ["Contract analysis", "Risk assessment", "Dispute prevention", "Entitlement preservation"]
              }
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white/50 rounded-lg hover:bg-white/70 transition-all duration-300 p-6 h-full">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4 text-black/70">{item.icon}</div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-sm text-black/70 mb-4 leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-black/60">
                        <div className="w-1.5 h-1.5 bg-black/40 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-yellow-600/90">
                    <Link href='/contact' className="text-xs text-black/60 hover:text-black/80 font-medium uppercase tracking-wider transition-colors duration-300">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Engineering Disciplines */}
          <div className="mt-20 pt-16 border-t border-black/20">
            <h3 className="text-3xl mb-8 text-center font-sentient">Engineering Disciplines/</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <SiCivicrm className="text-5xl mx-auto mb-4 text-black/70" />
                <h4 className="text-xl font-medium mb-2">Civil Engineering</h4>
                <p className="text-sm text-black/70">Structural design, site development, and infrastructure solutions</p>
              </div>
              <div className="text-center">
                <MdElectricBolt className="text-5xl mx-auto mb-4 text-black/70" />
                <h4 className="text-xl font-medium mb-2">Electrical Engineering</h4>
                <p className="text-sm text-black/70">Power systems, automation, and electrical installations</p>
              </div>
              <div className="text-center">
                <GiMechanicalArm className="text-5xl mx-auto mb-4 text-black/70" />
                <h4 className="text-xl font-medium mb-2">Mechanical Engineering</h4>
                <p className="text-sm text-black/70">HVAC systems, mechanical installations, and equipment design</p>
              </div>
            </div>
          </div>

          {/* Additional Stats Section */}
          <div className="mt-16 pt-16 border-t border-black/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="text-3xl font-sentient mb-2">200+</h4>
                <p className="text-sm text-black/70">Projects Engineered</p>
              </div>
              <div>
                <h4 className="text-3xl font-sentient mb-2">50+</h4>
                <p className="text-sm text-black/70">Professional Engineers</p>
              </div>
              <div>
                <h4 className="text-3xl font-sentient mb-2">99%</h4>
                <p className="text-sm text-black/70">Design Accuracy</p>
              </div>
              <div>
                <h4 className="text-3xl font-sentient mb-2">24/7</h4>
                <p className="text-sm text-black/70">Technical Support</p>
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
        <h1 className="text1">From Concept</h1>
        <h1 className="text2">To Reality</h1>
      </div>

      {/* Engineering Excellence Section */}
      <div className="bg-[#33312f]">
        <section className="flex container mt-16 w-7xl mx-auto lg:mt-0 flex-col lg:flex-row min-h-screen text-[#efe0b1] justify-between items-start px-8 py-16 gap-8">
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

            <h3 className="text-3xl font-sentient mb-4">Engineering Excellence/</h3>
            <p className="text-white/80 text-base md:max-w-xl leading-relaxed font-sentient">
              Our engineering solutions combine cutting-edge technology with proven methodologies, 
              delivering innovative, efficient, and sustainable solutions that exceed client expectations 
              while ensuring the highest standards of safety and compliance.
            </p>
            
            <div className="font-medium md:block hidden md:text-[6rem] tracking-wider text-white font-sentient whitespace-nowrap">
              ENGINEER{" "}
              <span className="relative md:top-[120px] md:left-[-120px]">
                TOMORROW
              </span>
            </div>
          </div>
          
          <div className="relative flex flex-col items-start justify-start lg:max-w-[50%]">
            <img
              src="https://cdn.pixabay.com/photo/2025/05/14/16/21/city-9599967_1280.jpg"
              alt="Engineering Team"
              className="w-full max-w-md min-w-[20rem] object-cover border-0 mb-4 grayscale contrast-125"
            />
            
            <div className="font-medium block md:hidden text-[4vh] lg:text-[3rem]tracking-wider text-white font-sentient whitespace-nowrap">
              ENGINEER{" "}
              <span className="relative top-[50px] right-[4rem]">
                TOMORROW
              </span>
            </div>

            <div className="w-full md:py-3 flex items-center md:justify-end">
              <Link href='/our-people' className="border md:mt-[120px] mt-[80px] border-white text-white py-3 px-8 rounded transition bg-transparent hover:bg-[#efe0b1] hover:text-[#33312f] text-base">
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
                alt="Engineering solutions"
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
              <h1 className="text-end">Engineer Your Success</h1>
              <h1 className="md:text-[8rem] text-6xl text-end">CONTACT US</h1>
              <Link href="/contact" className="border border-yellow-600/60 px-2 flex justify-center items-center text-sm py-2 hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
                <span>GET IN TOUCH</span> <ChevronRight strokeWidth={1} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
