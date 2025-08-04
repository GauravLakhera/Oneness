import React from 'react';
import Image from 'next/image';
import { CgMail } from "react-icons/cg";

const memberData = [
    {
        Heading: "EXECUTIVE MANAGEMENT",
        teamMembers: [
            {
                name: 'David Glinatsis',
                title: 'Managing Director | Principal Lawyer',
                image: 'https://kreisson.com.au/wp-content/uploads/2025/04/Untitled-design-7.svg',
                mail: "mailto:"
            },
            {
                name: 'Michael Glinatsis',
                title: 'Chief Executive Officer / Director',
                image: 'https://kreisson.com.au/wp-content/uploads/2025/04/Untitled-design-8.svg',
            },
            {
                name: 'Johnathan Glinatsis',
                title: 'Associate Director',
                image: 'https://kreisson.com.au/wp-content/uploads/2025/05/1.svg',
                mail: "mailto:"
            },
            {
                name: 'Christina Demetriou',
                title: 'Chief Financial and Operations Officer',
                image: 'https://kreisson.com.au/wp-content/uploads/2025/05/2.svg',
            },
            {
                name: 'Marinsa Harper',
                title: 'Head of Business Development',
                image: 'https://kreisson.com.au/wp-content/uploads/2025/05/3.svg',
            },
        ]
    },

    {
        Heading: "SOLICITORS",
        teamMembers: [
            {
                name: 'Tristan Cockman',
                title: 'Special Counsel',
                image: 'https://kreisson.com.au/wp-content/uploads/2025/05/4.svg',
                mail: "mailto:"
            },
            {
                name: 'John Hodgkinson',
                title: 'Special Counsel',
                image: 'https://kreisson.com.au/wp-content/uploads/2025/05/5.svg',
                mail: "mailto:"
            },
            {
                name: 'Richard Kouchoo',
                title: 'Special Counsel',
                image: 'https://kreisson.com.au/wp-content/uploads/2025/05/11.svg',
                mail: "mailto:"
            },
            {
                name: 'Estelle Nam',
                title: 'Senior Associate',
                image: 'https://kreisson.com.au/wp-content/uploads/2025/05/6.svg',
                mail: "mailto:"
            },
            {
                name: 'Giselle Casagrande',
                title: 'Associate',
                image: 'https://kreisson.com.au/wp-content/uploads/2025/05/7.svg',
                mail: "mailto:"
            },
            {
                name: 'Gretel Wathen',
                title: 'Associate',
                image: 'https://kreisson.com.au/wp-content/uploads/2025/04/Untitled-design-10.svg',
                mail: "mailto:"
            },
        ]
    }
]

const TeamGrid = () => {
    return (
        <div className=" px-4 md:px-10 py-0 ">
            {
                memberData?.map((item, i) => {
                    return (
                        <div key={i} className="flex flex-col md:flex-row md:mt-16">
                            {/* Left Sidebar */}
                            <div className="md:w-[30%] mb-8 md:mb-0">
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
                                        className="-rotate-90 md:mt-8 text-black/80"
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

                            {/* Right Grid */}
                            <div className="md:w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {item?.teamMembers?.map((member, index) => (
                                    <div key={index} className="text-left">
                                        <div className="overflow-hidden w-full">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={100}
                                                height={100}
                                                className="w-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-4xl font-[300] text-[#1a1a1a] mt-4">{member.name}</h3>
                                        <p className="text-black/80 mt-1 text-[18px]">{member.title}</p>
                                        {
                                            member?.mail ? (
                                                <a href={member.mail} target='_blank' rel="noopener noreferrer">
                                                    <div className="mt-2 inline-block rounded-[5px] p-1 bg-black/80 ">
                                                        <CgMail className="text-white text-[22px]" />
                                                    </div>
                                                </a>
                                            ) : null
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default TeamGrid;
