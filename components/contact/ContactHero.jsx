import React from "react";
import AnimatedText from "@/components/AnimatedText";

const ContactHero = () => {
  return (
    <div className="bg-black/80 pt-[180px] md:pt-[200px] pb-[150px]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row  gap-10 md:gap-20">
        {/* Left Side Heading */}
        <div className="md:w-[35%] w-full">
          <p className="text-5xl md:text-7xl font-sans font-[400] text-white/90 text-center md:text-left">
            Get in touch/
          </p>
        </div>

        {/* Right Side Animated Text */}
        <div className="md:w-[60%] md:mt-[80px] w-full">
          <AnimatedText className="text-lg md:text-2xl font-sentient   text-white/90 text-center md:text-left">
            We are passionate about what we do and empowered to turn great ideas
            into reality, delivering superior service and ongoing value to our
            clients.
          </AnimatedText>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
