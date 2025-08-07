"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import AnimatedText from "@/components/AnimatedText";
import { ChevronRight } from "lucide-react";
import AnimatedSentence from "@/components/AnimatedSentence";
import PhaseCards from "@/components/PhaseCards";
import CollapsibleDetailList from "@/components/CollapsibleDetailList";
import PartnersCarousel from "@/components/PartnersCarousel";
import Link from "next/link";

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
          src="/images/hero-bg.jpg"
          alt="hero"
          className="w-full h-[28rem] lg:h-[25rem] grayscale-0 object-cover"
        />
      </section>

      <section className="relative flex flex-col pt-6 items-start ">
        <div className="md:max-w-7xl mx-auto w-full px-4 lg:px-0">
          <h1 className="hero-main text-[5vh] md:text-7xl w-6/12 mb-8 text-black/80">
            CONSTRUCTION & ENGINEERING
            <br />
            {/* <span className="text-black/70 ">The art of workmenship</span> */}
          </h1>

          <div className="text-xl section-title mb-3 max-w-2xl">
            Engineering Excellence Through Collaborative Innovation
          </div>
          <Link
            href="/contact"
            className="text-sm lg:text-lg flex justify-center w-max items-center border border-black/60 text-black/70  px-2 py-1"
          >
            <span>BOOK A CONSULTATION</span>
            <ChevronRight size={32} strokeWidth={0.75} />
          </Link>

          {/* <div className="hero-description body-text max-w-xl opacity-80">
            We deliver cutting-edge engineering solutions with precision, 
            clarity, and unwavering commitment to excellence. Your vision, 
            our expertise, infinite possibilities.
          </div> */}
        </div>
        <div className="absolute -top-24 flex flex-col justify-end items-end right-0 lg:right-10 transform ">
          <img
            src="/images/Since2017.png"
            className=" w-[8rem] md:w-[14rem] "
          ></img>
          <h1 className=" hidden lg:block text-lg text-black/80 uppercase text-start w-full">
            Practical Advice.
          </h1>
          <h1 className=" hidden lg:block text-lg text-black/80 uppercase">
            Commercial Outcomes.
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-12 right-12 transform -translate-x-1/2">
          <ChevronRight className="rotate-90" size={42} strokeWidth={1} />
        </div>
      </section>

      <section className="lg:py-16 py-0 px-4 lg:px-0 relative">
        <div className="md:max-w-7xl mx-auto w-full py-10 lg:py-28">
          <AnimatedText
            className="md:w-8/12 text-3xl lg:text-6xl leading-[3rem] font-sentient text-black/80"
            splitType="words"
          >
            ONENESS is a progressive civil engineering, architecture, and
            interior design firm based in Bengaluru, delivering innovative
            technical solutions to clients across India.
          </AnimatedText>
        </div>
        <div className="absolute w-11/12 my-10 right-3 md:w-5/12 text-xl text-black/80">
          <h1 className="mb-10">
            Over the past eight years, we have contributed to the success of
            diverse industries and witnessed significant growth and
            transformation.{" "}
          </h1>
          <div className="flex mt-4 gap-6">
            <Link
              href="/our-people"
              className="text-sm flex border items-center border-yellow-600/60 text-black/80  px-4 py-1 hover:bg-black hover:text-white/90 transition-all ease-in-out duration-500"
            >
              <span>OUR TEAM</span>
              <ChevronRight size={32} strokeWidth={0.75} />
            </Link>
            <Link
              href="/about"
              className="text-sm flex border items-center border-yellow-600/60 text-black/80  px-4 py-1 hover:bg-black hover:text-white/90  transition-all ease-in-out duration-500"
            >
              <span>OUR EXPERTISE</span>
              <ChevronRight size={32} strokeWidth={0.75} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-[16rem] lg:pt-32 pb-5">
        <AnimatedSentence text="Innovate. Design. Build. Excellence." />
      </section>

      <hr className="text-yellow-600"></hr>

      {/* Our Expertise/ */}
      <section className="py-5 w-11/12 mx-auto">
        <div>
          <h1 className="text-4xl lg:text-7xl  text-right text-black/80">
            Our Expertise/
          </h1>
        </div>
        <AnimatedText
          className="lg:w-8/12 lg:text-5xl text-3xl pt-14 leading-[3rem] font-sentient text-black/80"
          splitType="words"
        >
          Our multidisciplinary team delivers superior results at every phase of
          your project’s lifecycle. Leveraging extensive experience across civil
          engineering, architecture, and design sectors, we proactively identify
          and manage technical and commercial risks to safeguard, optimize, and
          grow your assets and opportunities.
        </AnimatedText>

        <PhaseCards />
      </section>

      {/* sector we work in  */}
      <div className=" w-11/12 md:w-10/12 mx-auto">
        <img src="/images/home2.jpg" className="grayscale"></img>
      </div>

      <div>
        <div className="relative w-11/12 md:w-10/12 mx-auto pt-10 pb-[15rem]">
          <h1 className="text-4xl lg:text-7xl w-8/12 md:w-4/12 text-black/80">
            Sectors we work in/
          </h1>
          <div className="absolute right-10 md:w-6/12">
            <p className="md:text-xl text-black/80 py-10 font-sentient">
              ONENESS partners with clients across a diverse spectrum of
              construction, infrastructure, and design projects, enabling them
              to navigate complex technical challenges while minimizing risk.
              Our unrivaled expertise, combined with a collaborative mindset,
              ensures every client receives tailored, end-to-end support and
              innovative solutions for optimal project outcomes
            </p>
          </div>
        </div>
        <hr className="hidden lg:block text-yellow-600 w-10/12 mx-auto"></hr>
        <CollapsibleDetailList />
      </div>

      {/* Tweenty year  */}
      <div className=" bg-[#33312f]">
        <section className="flex container mt-16 w-7xl mx-auto lg:mt-0 flex-col lg:flex-row  min-h-screen text-[#efe0b1] justify-between items-start px-8 py-16 gap-8">
          <div className="flex flex-col gap-10 lg:max-w-[50%]">
            <div className=" mb-2 lg:mb-8 text-[#efe0b1] ">
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

            <p className="text-white/90 text-base md:max-w-xl leading-relaxed font-sentient">
              Oneness is celebrating 8 years of serving India's construction and
              engineering industry. we have built a reputation for delivering
              sharp legal insight, commercial clarity and strategic depth across
              some of the country’s most complex projects. With a team known for
              its technical excellence, we’re proud to say–very few do what
              Kreisson does.
            </p>
            <div className="font-medium md:block hidden   md:text-[8rem] tracking-wider text-white/90 font-sentient whitespace-nowrap">
              EIGHT{" "}
              <span className="relative md:top-[150px] md:left-[-100px]">
                YEARS
              </span>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-start lg:max-w-[50%]">
            <img
              src="/images/year.jpg"
              alt="Businessman in shadow"
              className="w-full max-w-md min-w-[20rem] object-cover border-0 mb-4 grayscale contrast-125"
            />

            <div className="font-medium block md:hidden   text-[3rem] tracking-wider text-white/90 font-sentient whitespace-nowrap">
              EIGHT{" "}
              <span className="relative top-[50px] md:left-[-100px]">
                YEARS
              </span>
            </div>

            <div className="w-full  md:py-3 flex items-center md:justify-end">
              <Link
                href="/our-people"
                className=" border md:mt-[185px] mt-[80px]  border-white text-white/90 py-3 px-8 rounded transition bg-transparent hover:bg-[#efe0b1] hover:text-[#33312f] text-base"
              >
                Our team &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Our Memberships/ section */}
      <section className="">
        <div className="w-10/12 mx-auto  flex flex-col lg:flex-row justify-between pt-[3rem] pb-[3rem] lg:pb-[5rem] lg:pt-[10rem]">
          <h1 className="text-4xl lg:text-7xl  text-left text-black/80 font-sentient ">
            {" "}
            Our Memberships/
          </h1>

          <div className=" lg:w-4/12 mt-10">
            <p>
              Our staff are actively involved with a range of peak industry
              bodies, connecting with their peers, drawing on educational
              resources and accessing up-to-date information on industry
              developments.
            </p>
          </div>
        </div>

        <div className="py-10">
          <hr className="text-yellow-600"></hr>
          <PartnersCarousel />
          <hr className="text-yellow-600"></hr>
          <div className="flex relative flex-col py-5 lg:flex-row justify-between">
            <div className="lg:w-5/12">
              <img
                src="https://kreisson.com.au/wp-content/uploads/2025/03/image-23-copy-2.webp"
                className="object-cover grayscale h-[20rem]"
              ></img>
            </div>
            <div className=" absolute lg:relative right-0 top-5 flex flex-col items-end justify-center pr-5 lg:pr-16 space-y-3 lg:space-y-2">
              <div className=" mb-8 text-[#efe0b1] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="a"
                  x="0"
                  y="0"
                  height={50}
                  width={50}
                  viewBox="0 0 80 80"
                  className=" text-black"
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
              <h1 className="text-end">Protect Your Project </h1>
              <h1 className="md:text-[8rem] text-black/80 text-6xl text-end ">
                CONTACT US
              </h1>
              <button className="border border-yellow-600/60 px-2 flex justify-center items-center text-sm py-2 hover:bg-black hover:text-white/90 transition-all duration-500 ease-in-out">
                <span>GET IN TOUCH </span> <ChevronRight strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
