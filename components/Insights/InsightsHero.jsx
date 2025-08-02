import React from 'react';
import AnimatedText from '@/components/AnimatedText';

const InsightsHero = () => {
    return (
        <div className="bg-black/80 pt-[180px] md:pt-[80px] pb-[150px]">
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
                        Discover how the latest industry news and legal developments affect you.
                    </AnimatedText>
                </div>
            </div>
        </div>
    );
};

export default InsightsHero;
