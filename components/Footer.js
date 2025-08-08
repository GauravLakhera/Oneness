"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const lineRefs = useRef([]);

  useEffect(() => {
    lineRefs.current.forEach((el, idx) => {
      if (el) {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
            delay: 0.1 * idx,
          }
        );
      }
    });
  }, []);

  return (
    <footer className="bg-[#656565] text-white/90 w-full pt-10 pb-6">
      <div className="w-11/12 mx-auto">
        {/* Newsletter */}
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs text-gray-100 tracking-widest">
                NEWSLETTER
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl leading-snug font-light">
                Stay up to date with the latest news from{" "}
                <br className="hidden md:block" /> Oneness
              </h2>
            </div>

            <div className="lg:w-2/12 w-6/12">
              <img src="/images/logo.png"></img>
            </div>
          </div>
          <div className="flex flex-col mt-5 md:flex-row justify-between  items-center">
            <form className=" flex gap-3 max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-none bg-[#656565]  border-b border-[#cfcfcf] px-4 py-2 text-white/90 placeholder-gray-200 focus:outline-none"
              />
              <button
                type="submit"
                className="text-white/90 border-none px-5 text-sm tracking-widest transition underline-offset-2 hover:underline"
              >
                GET IN TOUCH &rarr;
              </button>
            </form>

            <nav className="flex flex-wrap gap-7   text-sm font-light text-white/90">
              <a className="hover:underline cursor-pointer duration-150">
                Our people
              </a>
              <a className="hover:underline cursor-pointer duration-150">
                Expertise
              </a>
              <a className="hover:underline cursor-pointer duration-150">
                Sectors
              </a>
              <a className="hover:underline cursor-pointer duration-150">
                Insights
              </a>
              <a className="hover:underline cursor-pointer duration-150">
                Careers
              </a>
              <a className="hover:underline cursor-pointer duration-150">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Divider Lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (lineRefs.current[i] = el)}
            className="w-full h-[1px] bg-[#e3e3e3] my-8 origin-left scale-x-0"
          />
        ))}

        {/* Nav Links */}
        <div className="text-gray-100  flex flex-col md:flex-row md:items-center md:justify-between text-lg mb-4 sm:mb-7 space-y-3 md:space-y-0">
          <span className="flex flex-col sm:flex-row sm:items-center text-center md:text-left">
            <span className="mb-1 sm:mb-0">Bangalore, Karnataka</span>
            <span className="hidden sm:inline text-white/90 mx-2">|</span>
            <span className="mb-1 sm:mb-0">info@onenessitech.com</span>
            <span className="hidden sm:inline text-white/90 mx-2">|</span>
            <span>+91 6364538472</span>
          </span>

          <div className="flex gap-4 sm:gap-7 justify-center md:justify-end mt-1 sm:mt-2">
            <a className="hover:underline cursor-pointer transition-all duration-200 hover:text-white/90">
              LinkedIn
            </a>
            <a className="hover:underline cursor-pointer transition-all duration-200 hover:text-white/90">
              Facebook
            </a>
            <a className="hover:underline cursor-pointer transition-all duration-200 hover:text-white/90">
              Instagram
            </a>
          </div>
        </div>

        {/* Last Divider */}
        <div
          ref={(el) => (lineRefs.current[5] = el)}
          className="w-full h-[2px] bg-[#c5c5c5] my-4 origin-left scale-x-0"
        />

        {/* Bottom Bar */}
        <div className="flex items-center justify-center">
          <p className="text-md text-center ">
            Copyright © 2025 Oneness. All rights reserved.
          </p>
          {/* <div className="flex gap-4">
            <span>Web design by RankMantra.</span>
            <span>Privacy Policy</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
