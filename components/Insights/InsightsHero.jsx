import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const InsightsHero = () => {
  return (
    <div className=" relative bg-black/80 pt-[180px] md:pt-[80px] pb-[150px]">
      <div className="absolute top-[7rem] lg:top-[10rem] left-5 lg:left-32 ">
        <Link href="/" className="flex items-center bg-white/90  px-2 py-2 rounded-full">
          <IoIosArrowBack className="text-black text-2xl" />
         
        </Link>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Left Side Heading */}
        <div className="md:w-[40%] w-full">
          <p className="text-5xl md:text-7xl font-sans font-[400] text-white text-center md:text-left">
            Insights/
          </p>
        </div>

        {/* Right Side Animated Text */}
        <div className="md:w-[60%] md:mt-[180px] w-full">
          <AnimatedText className="text-2xl md:text-4xl lg:text-5xl font-[400] leading-snug text-white text-center md:text-left">
            Discover how the latest industry news and legal developments affect
            you.
          </AnimatedText>
        </div>
      </div>
    </div>
  );
};

export default InsightsHero;
