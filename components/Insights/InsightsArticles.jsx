"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "@/public/images/Insights/article-icon.svg";
import img1 from "@/public/images/Insights/ArtificialIntelligence.webp";
import img2 from "@/public/images/Insights/BuildingDefectsandStrata.jpg";
import img3 from "@/public/images/Insights/BuildingInformation.jpg";
import img4 from "@/public/images/Insights/CaseNotes.webp";
import img5 from "@/public/images/Insights/Cladding.png";
import img6 from "@/public/images/Insights/CommercialLitigation.webp";
import img7 from "@/public/images/Insights/CompulsoryAcquisitions.webp";
import img8 from "@/public/images/Insights/ConstructionandEngineering.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const categories = [
  "Artificial Intelligence",
  "Building Defects and Strata",
  "Building Information Modelling (BIM)",
  "Case Notes",
  "Cladding",
  "Commercial Litigation",
  "Compulsory Acquisitions",
  "Construction and Engineering",
];

const allArticles = [
  {
    title: "AI Transforming Legal Strategies",
    date: "28 July 2025",
    image: img1,
    category: "Artificial Intelligence",
    description:
      "Explore how artificial intelligence is reshaping legal decision-making and case predictions.",
  },
  {
    title: "Understanding Building Defects in Strata Schemes",
    date: "25 July 2025",
    image: img2,
    category: "Building Defects and Strata",
    description:
      "A guide to navigating building defects in strata-titled properties and legal implications.",
  },
  {
    title: "Leveraging BIM in Construction Disputes",
    date: "22 July 2025",
    image: img3,
    category: "Building Information Modelling (BIM)",
    description:
      "How Building Information Modelling is influencing dispute resolution in construction projects.",
  },
  {
    title: "Recent Case Notes in Contractual Disputes",
    date: "20 July 2025",
    image: img4,
    category: "Case Notes",
    description:
      "A review of recent case law impacting commercial and construction contracts.",
  },
  {
    title: "Legal Insights into Cladding Compliance",
    date: "17 July 2025",
    image: img5,
    category: "Cladding",
    description:
      "Stay up-to-date with cladding regulations and compliance challenges in Australia.",
  },
  {
    title: "Trends in Commercial Litigation Post-2025",
    date: "13 July 2025",
    image: img6,
    category: "Commercial Litigation",
    description:
      "An analysis of commercial litigation trends and strategies for businesses.",
  },
  {
    title: "Understanding Compulsory Acquisition Laws",
    date: "10 July 2025",
    image: img7,
    category: "Compulsory Acquisitions",
    description:
      "What property owners need to know about compulsory acquisition and compensation.",
  },
  {
    title: "Risk Mitigation in Construction Contracts",
    date: "05 July 2025",
    image: img8,
    category: "Construction and Engineering",
    description:
      "Legal strategies for managing risk in construction and engineering agreements.",
  },
];

const InsightsArticles = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState(allArticles);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredArticles(allArticles);
    } else {
      setFilteredArticles(
        allArticles.filter((article) =>
          selectedCategories.includes(article.category)
        )
      );
    }
    setVisibleCount(6); // reset count when filter changes
  }, [selectedCategories]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <section className="bg-black/80 py-12 px-4 md:px-10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
      <aside className="w-full md:w-1/4 space-y-10 border-r border-white">
  <h2 className="text-4xl font-[300] mb-4 hidden md:block">Categories</h2>

  {/* ✅ Mobile Dropdown */}
  <div className="md:hidden mb-6">
    <select
      className="w-full p-3 bg-white text-black"
      onChange={(e) =>
        setSelectedCategories(
          e.target.value ? [e.target.value] : []
        )
      }
      value={selectedCategories[0] || ""}
    >
      <option value="">All Categories</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>

  {/* ✅ Desktop Checkboxes */}
  <div className="hidden md:block">
    {categories.map((category, index) => (
      <label
        key={index}
        className="flex items-center space-x-2 mt-6 cursor-pointer"
      >
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-yellow-400"
          checked={selectedCategories.includes(category)}
          onChange={() => handleCategoryChange(category)}
        />
        <span className="text-sm">{category}</span>
      </label>
    ))}
  </div>
</aside>


        {/* Articles */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {visibleArticles.map((article, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden transition-all duration-300 group"
              >
                <div className="relative">
                  <Image
                    height={150}
                    width={100}
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 text-sm bg-white text-black z-30 px-5 py-2">
                    {article.category}
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                </div>

                <div className="flex mt-5 w-full gap-4">
                  <div className="flex w-[20%] items-center border-r border-white px-2">
                    <Image
                      height={100}
                      width={100}
                      src={img}
                      alt={article.title}
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="px-4 py-2 w-[80%]">
                    <p className="text-sm mb-2">{article.date}</p>
                    <h3 className="text-lg font-[400]">{article.title}</h3>
                    <p>{article.description}</p>
                  </div>
                </div>

                <button className="border flex gap-2 items-center border-white px-8 py-3 mt-5 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                  Read More <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleCount < filteredArticles.length && (
            <div className="text-center mt-10">
              <button
                onClick={handleLoadMore}
                className="bg-white text-black px-6 py-3 hover:bg-yellow-400 transition-all duration-300"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InsightsArticles;
