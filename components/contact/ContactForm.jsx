import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-black/80">
      <div className=" text-white/90 px-6 py-12 max-w-6xl mx-auto">
        <hr className="py-5 md:block hidden" />
        <div className="md:space-y-12">
          {/* DETAILS SECTION */}
          <div className="grid md:grid-cols-4 gap-8 items-start pb-10">
            {/* Left Sidebar */}
            <div className="md:col-span-1 border-white pt-4">
              <p className="text-lg ">DETAILS</p>
            </div>

            {/* Form Inputs */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full text-lg bg-transparent border-b border-white focus:outline-none py-2"
                />
              </div>
              <div>
                <input
                  placeholder="Last Name*"
                  type="text"
                  className="w-full text-lg bg-transparent border-b border-white focus:outline-none py-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone*"
                  className="w-full text-lg bg-transparent border-b border-white focus:outline-none py-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full text-lg bg-transparent border-b border-white focus:outline-none py-2"
                />
              </div>
            </div>
          </div>
          <hr className="py-5 md:block hidden" />

          {/* MESSAGE SECTION */}
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {/* Left Sidebar */}
            <div className="md:col-span-1 pt-4">
              <p className="text-lg">YOUR MESSAGE</p>
            </div>

            {/* Message Input */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <label className="text-sm block mb-1"></label>
                <textarea
                  rows="3"
                  className="w-full bg-transparent border-b border-white focus:outline-none py-2 resize-none"
                  placeholder="Write your message here*"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-all">
                SUBMIT &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
