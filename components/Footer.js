"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    <footer className="bg-[#161619] text-white w-full pt-10 pb-6 px-6">
      <div className="w-11/12 mx-auto">
        {/* Newsletter */}
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <div>
            <span className="text-xs text-gray-400 tracking-widest">
              NEWSLETTER
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl leading-snug font-light">
              Stay up to date with the latest news from{" "}
              <br className="hidden md:block" /> Oneness
            </h2>
            </div>

            <div className="w-2/12">
              <img src="/images/logo.png"></img>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <form className="mt-5 flex gap-3 max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-none bg-[#161619]  border-b border-[#404044] px-4 py-2 text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="text-white border-none px-5 text-sm tracking-widest transition underline-offset-2 hover:underline"
              >
                GET IN TOUCH &rarr;
              </button>
            </form>

            <nav className="flex flex-wrap gap-7 mt-6 mb-2 md:mb-8 text-sm font-light text-white/80">
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
            className="w-full h-[1px] bg-[#404044] my-8 origin-left scale-x-0"
          />
        ))}

        {/* Nav Links */}

        {/* Info Section */}
        <div className="text-gray-400 flex flex-col gap-1 text-sm mb-7">
          <span>
            234, Rao and Rao Residency chinnapa colony near bharathgas godwon
            vijinapura dooravani nagar, Bangalore-560016 &nbsp;&nbsp;
            <span className="text-white">|</span>&nbsp;&nbsp;
            info@onenessitech.com &nbsp;&nbsp;
            <span className="text-white">|</span>&nbsp;&nbsp; +91 9066597303
          </span>
          <div className="flex gap-7 mt-2">
            <a className="hover:underline cursor-pointer">LinkedIn</a>
            <a className="hover:underline cursor-pointer">Facebook</a>
            <a className="hover:underline cursor-pointer">Instagram</a>
          </div>
        </div>

        {/* Last Divider */}
        <div
          ref={(el) => (lineRefs.current[5] = el)}
          className="w-full h-[2px] bg-[#404044] my-4 origin-left scale-x-0"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-4 text-gray-500 text-sm gap-3">
          <small>Copyright © 2025 Oniness. All rights reserved.</small>
          <div className="flex gap-4">
            <span>Web design by RankMantra.</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
