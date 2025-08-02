import React from "react";
import FadeInSection from "./FadeInSection";

const ProjectPhases = () => {
  const phases = [
    {
      id: 1,
      title: "Pre-Contract",
      subtitle: "Planning & Consultation Phase",
      image: "/images/projectPhases1.jpg",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 163 163"
          fill="none"
        >
          <path
            d="M115.965 143.965H144.27V18.5625H17.959V143.965H92.7362V98.8049"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M100.268 60.5703H144.301"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M114.037 100.836L144.299 100.836"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M100.268 39.5469L100.268 19.0685"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M18.6582 100.834H67.9275V76.375"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M19.0078 52.2733H67.9276V19.0781"
            stroke="black"
            stroke-width="1.5"
          ></path>
        </svg>
      ),
      points: [
        "Site Assessment & Feasibility Studies - Comprehensive evaluation of project requirements and site conditions",
        "Architectural Design & Engineering - Custom design solutions tailored to client specifications and regulatory compliance",
        "Cost Estimation & Project Planning - Detailed budgeting, timeline development, and resource allocation",
        "Regulatory Approvals & Permits - Assistance with government clearances, PWD approvals, and compliance documentation",
      ],
      imageAlt: "Pre-contract planning and consultation",
    },
    {
      id: 2,
      title: "Contract Delivery",
      image: "/images/projectPhases2.jpg",
      subtitle: "Execution & Project Management",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 163 163"
          fill="none"
        >
          <path
            d="M27.1523 48.2031H45.0618"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M27.1523 66.8672H45.0618"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M27.1523 85.0234H45.0618"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M27.1523 104H45.0618"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M27.4062 123.43L36.1089 123.43"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M22.2988 141.297L31.0015 141.297"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M131.258 141.297L139.96 141.297"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M115.189 48.2031H134.865"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M115.189 66.8672H134.865"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M115.189 85.0234H134.865"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M115.189 104H134.865"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M127.297 123.43L134.865 123.43"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M27.166 141.305C27.166 101.305 27.166 21.3047 27.166 21.3047H135.609V141.305"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M27.6191 29.5391L135.611 130.941"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M26.6504 29.5391H135.116"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M134.863 29.5391L27.4062 131.698"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M46.0703 29.5391V113.538"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M115.189 29.5391L115.189 111.519"
            stroke="black"
            stroke-width="1.5"
          ></path>
        </svg>
      ),
      points: [
        "Multi-Disciplinary Construction - Coordinated execution of carpentry, electrical, plumbing, fabrication, and painting works",
        "Quality Control & Safety Management - Stringent quality assurance protocols and workplace safety compliance",
        "Progress Monitoring & Reporting - Regular updates, milestone tracking, and transparent communication with stakeholders",
        "HT & LT Line Installation - Professional electrical line erection and power infrastructure setup",
      ],
      imageAlt: "Contract delivery and execution",
    },
    {
      id: 3,
      title: "Post-Contract",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 163 163"
          fill="none"
        >
          <g clip-path="url(#clip0_8271_8067)">
            <path
              d="M80.7715 137.905C80.7715 100.299 80.7715 25.0859 80.7715 25.0859H128.145V137.905"
              stroke="black"
              stroke-width="1.5"
            ></path>
            <path
              d="M33.4004 137.907C33.4004 110.899 33.4004 56.8828 33.4004 56.8828H80.7736V137.907"
              stroke="black"
              stroke-width="1.5"
            ></path>
            <path
              d="M34.3125 137.906H18.0547"
              stroke="black"
              stroke-width="1.5"
            ></path>
            <path
              d="M143.492 137.906H127.41"
              stroke="black"
              stroke-width="1.5"
            ></path>
            <rect
              x="87.6875"
              y="36.4062"
              width="16.7771"
              height="8.00711"
              stroke="black"
              stroke-width="1.5"
            ></rect>
            <rect
              x="40.3105"
              y="67.3672"
              width="16.7771"
              height="8.00711"
              stroke="black"
              stroke-width="1.5"
            ></rect>
            <rect
              x="87.6875"
              y="50.3672"
              width="16.7771"
              height="8.00711"
              stroke="black"
              stroke-width="1.5"
            ></rect>
            <rect
              x="40.3105"
              y="82.5312"
              width="16.7771"
              height="8.00711"
              stroke="black"
              stroke-width="1.5"
            ></rect>
            <rect
              x="87.6875"
              y="66.4453"
              width="16.7771"
              height="8.00711"
              stroke="black"
              stroke-width="1.5"
            ></rect>
            <rect
              x="40.3105"
              y="96.3281"
              width="16.7771"
              height="8.00711"
              stroke="black"
              stroke-width="1.5"
            ></rect>
          </g>
          <defs>
            <clipPath id="clip0_8271_8067">
              <rect
                width="126"
                height="126"
                fill="white"
                transform="translate(17.7734 18.5)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      ),
      subtitle: "Maintenance & Ongoing Support",
      image: "/images/projectPhases3.jpg",
      points: [
        "AMC Services - Comprehensive annual maintenance contracts for sustained facility performance",
        "Preventive & Corrective Maintenance - Scheduled upkeep and emergency repair services across all building systems",
        "Interior Upgrades & Modifications - Ongoing interior design improvements and space optimization solutions",
        "Technical Support & Warranty Services - Dedicated support team for troubleshooting and warranty claim resolution",
      ],
      imageAlt: "Post-contract maintenance and support",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {phases.map((phase, index) => {
        const isEven = index % 2 === 1;

        return (
          <FadeInSection key={phase.id}>
            <div
              className={`flex flex-col border-y py-6 ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 lg:gap-12 xl:gap-16`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={phase.image} // Replace with actual image paths
                    alt={phase.imageAlt}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover grayscale transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`w-full lg:w-1/2 ${
                  isEven ? `border-r` : `border-l pl-2`
                } space-y-6`}
              >
                <div className="w-16 h-16">{phase.svg}</div>
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl  text-gray-900 leading-tight">
                    {phase.title}
                  </h2>
                  <h3 className="text-xl md:text-2xl lg:text-3xl  text-black/70">
                    {phase.subtitle}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {phase.points.map((point, pointIndex) => {
                    const [title, description] = point.split(" - ");
                    return (
                      <li
                        key={pointIndex}
                        className="flex items-start space-x-3 group"
                      >
                        <div className="flex-shrink-0 w-1 h-1 bg-yellow-700 rounded-full mt-2 group-hover:bg-black/80 transition-colors duration-200"></div>
                        <div className="text-sm ">
                          <span className="font-semibold text-gray-900  transition-colors duration-200">
                            {title}
                          </span>
                          {description && (
                            <span className="text-gray-700 leading-relaxed">
                              {" "}
                              - {description}
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </FadeInSection>
        );
      })}
    </div>
  );
};

export default ProjectPhases;
