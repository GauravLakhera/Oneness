import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const OurHero = () => {
  return (
    <div className="relative pt-[160px] md:pt-[80px] pb-[150px]">
      <div className="absolute top-[7rem] lg:top-[10rem] left-5 lg:left-32 ">
        <Link href="/" className="flex items-center bg-black/90  px-2 py-2 rounded-full">
          <IoIosArrowBack className="text-white text-2xl" />
         
        </Link>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Left Side Heading */}
        <div className="md:w-[30%] w-full">
          <p className="text-5xl md:text-7xl font-sans font-[400] text-black text-start md:text-left">
            Our People/
          </p>
        </div>

        {/* Right Side Animated Text */}
        <div className="md:w-[60%] md:mt-[180px] w-full">
          <AnimatedText className="text-3xl font-sentient md:text-4xl lg:text-5xl font-[300] leading-snug text-black text-start md:text-left">
            Oneness solution-driven outlook is the product of an innovative and
            supportive culture.
          </AnimatedText>
          <AnimatedText className="text-lg mt-8 md:text-lg  font-[300] leading-snug text-black text-start md:text-left">
            We are an elite legal team with decades of applied industry
            experience, giving us a deep understanding of the business context
            of our clients. We are considered, commercial and strategic in all
            advice we give and all actions we take.
          </AnimatedText>
        </div>
      </div>
    </div>
  );
};

export default OurHero;
