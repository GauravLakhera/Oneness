import React from 'react'
import Image from 'next/image'

const ContactDetails = () => {
  return (
    <div className="bg-black/80 text-white md:py-[100px] p-8">
      <div className='max-w-7xl overflow-hidden mx-auto'>
        <Image
          src="https://kreisson.com.au/wp-content/uploads/2025/04/image-22-copy-1024x338.webp" alt="Office"
          width={500}
          height={500}
          className="w-full h-auto object-cover mb-4"
        />

        <div className=" text-white px-6 py-10 md:px-20 md:mt-[50px] ">
          <div className="">
            <div className="space-y-10">
              {/* Direction Row */}
              <div className="md:flex md:items-start md:gap-10 border-b border-white pb-8">
                <div className="w-full md:w-[20%] text-sm text-white/60 uppercase tracking-wide mb-2 md:mb-0">
                  Direction
                </div>
                <div className="text:3xl md:text-4xl  leading-snug">
                  Suite 37.01, Level 37, 25 Martin Place Sydney<br />
                  NSW 2000, Australia
                </div>
              </div>

              {/* Phone Row */}
              <div className="md:flex md:items-start md:gap-10 border-b border-white pb-8">
                <div className="w-full md:w-[20%] text-sm text-white/60 uppercase tracking-wide mb-2 md:mb-0">
                  Phone
                </div>
                <div className="text:3xl md:text-4xl">+61 2 8239 6500</div>
              </div>

              {/* Email Row */}
              <div className="md:flex md:items-start md:gap-10 border-b border-white pb-8">
                <div className="w-full md:w-[20%] text-sm text-white/60 uppercase tracking-wide mb-2 md:mb-0">
                  Email
                </div>
                <div className="text:3xl md:text-4xl">excellence@kreisson.com.au</div>
              </div>
            </div>
          </div>


          {/* Social Links */}
          <div className="mt-14 flex justify-between   ">
            <a href="#" className="underline text:1xl md:text-4xl  underline-offset-[6px] hover:text-gray-300 transition">Facebook</a>
            <a href="#" className="underline text:1xl md:text-4xl underline-offset-[6px] hover:text-gray-300 transition">LinkedIn</a>
            <a href="#" className="underline text:1xl md:text-4xl underline-offset-[6px] hover:text-gray-300 transition">Instagram</a>
          </div>
        </div>







      </div>
    </div>

  )
}

export default ContactDetails
