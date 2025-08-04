import React from 'react'
import AnimatedText from '@/components/AnimatedText'

const OurTeam = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 md:pt-20 sm:px-6 lg:px-12 flex flex-col md:flex-row ">
                {/* Left Side Heading */}
                <div className="md:w-[43%] w-full ">
                    <p className="text-5xl md:text-7xl font-sans font-[400] text-black text-center md:text-left">
                        Meet the Team/
                    </p>
                </div>

                {/* Right Side Animated Text */}
                <div className="md:w-[50%] md:mt-20   w-full">

                    <p className="text-md mt-8 md:text-lg  font-[300] leading-snug text-black text-center md:text-left">
                        The diverse expertise of our executive team matches our diverse client base. Our knowledge encompasses decades of experience accrued across a range of practice areas, both at a domestic and international level, spanning the construction and engineering industry and related sectors.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default OurTeam
