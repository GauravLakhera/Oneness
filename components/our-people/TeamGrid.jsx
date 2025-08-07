import React from "react";
import Image from "next/image";
import { CgMail } from "react-icons/cg";
import { Phone } from "lucide-react";

const memberData = [
  {
    Heading: "EXECUTIVE MANAGEMENT",
    teamMembers: [
      {
        name: "Vijay Kumar P",
        title: "Managing Director",
        image: "/images/md.jpeg",
        mail: "mailto:vijay@onenessitech.com ",
        mail2: "vijay@onenessitech.com ",
        phone: "7411795734",
        description: `Vijay has been a dedicated Electrical Engineer with Communication in 2008. Over the years, he has built a strong reputation as a skilled litigator, problem solver, and strategist, particularly in the areas of commercial and complex construction.\n\n

With extensive experience in handling high-stakes and large-scale litigation, Vijay is well-versed in navigating the intricacies of complex construction disputes. His expertise also includes the effective and efficient management of multidisciplinary project support teams, ensuring optimal outcomes for every case.\n\n

Vijay’s strategic approach and deep industry knowledge continue to drive value and results across all projects under his leadership.`,
      },
      {
        name: "Ajay Kumar P",
        title: "Chief Executive Officer/Proprietor",
        image: "/images/ce.jpeg",

        description: ``,
      },
    ],
  },

  //   {
  //     Heading: "SOLICITORS",
  //     teamMembers: [
  //       {
  //         name: "Tristan Cockman",
  //         title: "Special Counsel",
  //         image: "https://kreisson.com.au/wp-content/uploads/2025/05/4.svg",
  //         mail: "mailto:",
  //       },
  //       {
  //         name: "John Hodgkinson",
  //         title: "Special Counsel",
  //         image: "https://kreisson.com.au/wp-content/uploads/2025/05/5.svg",
  //         mail: "mailto:",
  //       },
  //       {
  //         name: "Richard Kouchoo",
  //         title: "Special Counsel",
  //         image: "https://kreisson.com.au/wp-content/uploads/2025/05/11.svg",
  //         mail: "mailto:",
  //       },
  //       {
  //         name: "Estelle Nam",
  //         title: "Senior Associate",
  //         image: "https://kreisson.com.au/wp-content/uploads/2025/05/6.svg",
  //         mail: "mailto:",
  //       },
  //       {
  //         name: "Giselle Casagrande",
  //         title: "Associate",
  //         image: "https://kreisson.com.au/wp-content/uploads/2025/05/7.svg",
  //         mail: "mailto:",
  //       },
  //       {
  //         name: "Gretel Wathen",
  //         title: "Associate",
  //         image:
  //           "https://kreisson.com.au/wp-content/uploads/2025/04/Untitled-design-10.svg",
  //         mail: "mailto:",
  //       },
  //     ],
  //   },
];

const TeamGrid = () => {
  return (
    <div className=" px-4 md:px-10 py-0 ">
      {memberData?.map((item, i) => {
        return (
          <div key={i} className="flex flex-col-reverse md:flex-row md:mt-16">
            {/* Right Grid */}
            <div className="md:w-[80%] grid grid-cols-1  gap-10">
              {item?.teamMembers?.map((member, index) => (
                <div
                  key={index}
                  className="text-left flex flex-col lg:flex-row justify-start  items-center gap-6 border border-black/5 py-6"
                >
                  <div className="overflow-hidden lg:w-6/12 ">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={50}
                      height={50}
                      className="w-10/12 object-cover"
                    />
                    <div className="py-4 px-2">
                      <h3 className="text-4xl font-[300] text-[#1a1a1a] mt-4">
                        {member.name}
                      </h3>
                      <p className="text-black/80 font-semibold my-2  text-[18px]">
                        {member.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 px-2  space-y-3 lg:space-y-10">
                    <div>
                      {member?.mail ? (
                        <a
                          href={member.mail}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="mt-2  rounded-[5px] flex gap-3 ">
                            <CgMail className="text-black text-[22px] " />
                            <h1>{member.mail2}</h1>
                          </div>
                        </a>
                      ) : null}
                      {/* {member?.phone ? (
                        <div className="  rounded-[5px] flex gap-3 ">
                          <Phone className="text-black text-[22px] " />
                          <h1>{member.phone}</h1>
                        </div>
                      ) : null} */}
                    </div>

                    {member?.description && <p>{member.description}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Left Sidebar */}
            <div className="md:w-[20%] mb-8 md:mb-0 ">
              <div className="pl-4 flex flex-row md:flex-col items-center mt-10 md:items-start md:mt-0">
                <h2 className="text-[#1a1a1a] font-[300] text-4xl leading-tight">
                  {item?.Heading}
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="a"
                  x="0"
                  y="0"
                  height={50}
                  width={100}
                  viewBox="0 0 80 80"
                  className=" md:mt-8 text-black/80"
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamGrid;
