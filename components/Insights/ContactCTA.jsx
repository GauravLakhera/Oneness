import React from "react";
import PartnersCarousel from "../PartnersCarousel";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ContactCTA = () => {
  return (
    <section className="">
      <div className="w-10/12 mx-auto  flex flex-col lg:flex-row justify-between pt-[3rem] pb-[3rem] lg:pb-[5rem] ">
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
            <h1 className="md:text-[8rem] text-6xl text-black/80 text-end ">
              CONTACT US
            </h1>
            <Link
              href="/contact"
              className="border border-yellow-600/60 px-2 flex justify-center items-center text-sm py-2 hover:bg-black hover:text-white/90 transition-all duration-500 ease-in-out"
            >
              <span>GET IN TOUCH </span> <ChevronRight strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
