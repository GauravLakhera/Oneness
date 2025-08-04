"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AnimatedText from "@/components/AnimatedText";
import FadeInSection from "@/components/FadeInSection";
import CustomIcon from "@/components/CustomIcon";
import ProjectPhases from "@/components/ProjectPhases";
import PartnersCarousel from "@/components/PartnersCarousel";
import { ChevronRight } from "lucide-react";
if (typeof window !== "undefined" && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
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
        trigger: ".text1", // Trigger when first text enters
        start: "top 80%", // Starts when 80% of viewport
        end: "top top", // Ends earlier to center the animation
        scrub: true, // Smooth scroll-based animation
      },
    });

    tl.fromTo(
      ".text1",
      { x: "100vw", opacity: 1 }, // ✅ from right
      { x: 0, opacity: 1, ease: "power2.out", duration: 3 }
    ).fromTo(
      ".text2",
      { x: "-100vw", opacity: 1 }, // ✅ from left
      { x: 0, opacity: 1, ease: "power2.out", duration: 3 },
      "<" // Start at the same time as text1
    );

    return () => tl.kill();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black/80 pt-32">
      {/* Hero Section */}
      <section className="py-8 lg:py-14 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="page-hero">
            <p className="lg:text-6xl text-4xl mb-12">Expertise/</p>
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

      {/* What we do */}
      <section className="pt-32 pb-10 lg:pb-3 section-padding bg-black/90 text-white/80">
        <div className="flex justify-between  flex-col-reverse lg:flex-row gap-6">
          <h1 className="text-3xl lg:w-8/12">
            At ONENESS Sphere Techno, we deliver integrated technological
            solutions that transform businesses through innovation and strategic
            excellence. We specialize in bringing together diverse expertise
            under one unified vision, leveraging cutting-edge technologies to
            streamline complexities and drive measurable growth.
          </h1>
          <h1 className="text-5xl">What we do/</h1>
        </div>
        <div className="flex flex-col justify-end items-end text-start mt-10">
          <ul className="text-sm font-extralight text-white/80 space-y-2">
            <li>
              <strong>Building & Construction</strong> - Preventive and
              corrective maintenance services
            </li>

            <li>
              <strong> infrastructure Projects </strong> - Our team addresses
              complex infrastructure needs
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
      <div className="lg:px-20 ">
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
            stroke-width="1.5"
          ></path>
          <path
            d="M76.7363 20.8618C60.4522 20.8605 27.8845 20.8588 27.8845 20.8618L22.0527 2.64844H82.5684L76.7363 20.8618Z"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M52.3105 100.547L52.3105 57.7188"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <circle
            cx="52.3105"
            cy="50.7051"
            r="6.26758"
            stroke="black"
            stroke-width="1.5"
          ></circle>
        </svg>
      </div>

      <section>
        <ProjectPhases />
      </section>
      <div className="lg:text-[8rem] text-5xl flex flex-col justify-center items-center pb-5 ">
        <h1 className="text1">From Contract</h1>
        <h1 className="text2">To Completion</h1>
      </div>

      {/* Tweenty year  */}

      <section className="flex mt-16 lg:mt-0 flex-col lg:flex-row bg-[#33312f] min-h-screen text-[#efe0b1] justify-between items-start px-8 py-16 gap-8">
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
            Oneness is celebrating 8 years of serving India's construction and
            engineering industry. Over two decades, we have built a reputation
            for delivering sharp legal insight, commercial clarity and strategic
            depth across some of the country’s most complex projects. With a
            team known for its technical excellence, we’re proud to say–very few
            do what Kreisson does.
          </p>
          <div className="font-medium hidden lg:block md:text-[8rem] text-right tracking-wider text-white font-sentient">
            EIGHT
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-start lg:max-w-[50%]">
          <img
            src="/images/year.jpg"
            alt="Businessman in shadow"
            className="w-full max-w-md min-w-[20rem] object-cover border-0 mb-4 grayscale contrast-125"
          />
          <div className="block lg:hidden font-medium font-sentient text-5xl md:text-[8rem] text-white mt-10  tracking-wider">
            EIGHT
          </div>
          <div className=" font-medium font-sentient text-5xl text-right w-full md:text-[8rem] text-white lg:mt-10 mb-4  tracking-wider">
            YEARS
          </div>
          <button className="mt-8 border border-white text-white py-3 px-8 rounded transition bg-transparent hover:bg-[#efe0b1] hover:text-[#33312f] text-base">
            Our team &rarr;
          </button>
        </div>
      </section>

      {/* Our Memberships/ section */}
      <section className="">
        <div className="w-10/12 mx-auto  flex flex-col lg:flex-row justify-between pt-[3rem] pb-[3rem] lg:pb-[5rem] lg:pt-[10rem]">
          <h1 className="text-4xl lg:text-7xl w-6/12  text-left text-black/80 font-sentient ">
            Industry Engagement/
          </h1>

          <div className=" lg:w-4/12 mt-10">
            <p>
              We are actively involved with peak industry bodies–not just as
              members, but as contributors and educators. Our team regularly
              delivers training, presents at events and supports industry-wide
              capability uplift, helping to ensure legal and commercial best
              practice across the sector.
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
                className="object-cover grayscale h-[20rem]"
              ></img>
            </div>
            <div className=" absolute lg:relative right-0 top-5 flex flex-col items-end justify-center pr-16 space-y-3 lg:space-y-2">
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
              <h1 className="md:text-[8rem] text-6xl text-end ">CONTACT US</h1>
              <button className="border px-2 flex justify-center items-center text-sm py-2 hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
                <span>GET IN TOUCH </span> <ChevronRight strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
