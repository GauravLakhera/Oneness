"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import OurHero from "@/components/our-people/OurHero";
import OurTeam from "@/components/our-people/OurTeam";
import TeamGrid from "@/components/our-people/TeamGrid";
import AnimatedSentence from "@/components/AnimatedSentence";
import ContactCTA from "@/components/Insights/ContactCTA";

export default function Approach() {
  return (
    <>
      <OurHero />
      <section className="border-b border-yellow-600/80 pb-5">
        <AnimatedSentence text="Built on knowledge." />
      </section>
      <OurTeam />
      <TeamGrid />

      <div className="container mx-auto px-4 flex md:gap-3 mt-10 md:py-[100px] md:pb-[200px]    md:flex-row flex-col pb-[20px]">
        <div className="w-full md:w-[30%]">
          <p className="text-[100px] md:mb-0 md:mt-0 mb-[-50px] mt-[-30px]">
            ”
          </p>
        </div>
        <div className="w-full md:w-[70%]">
          <h1 className="text-black/80 text-2xl md:text-5xl   font-[300]">
            You work to unique requirements. We offer unique solutions. Our
            legal team collaborates with key stakeholders across your
            organisation to ensure all guidance is considered, commercial and
            strategic.
          </h1>
          <p className="text-black/80 text-lg mt-5  md:text-1xl leading-4  font-[300]">
           Ajay Kumar P
          </p>
        </div>
      </div>

      <ContactCTA />
    </>
  );
}
