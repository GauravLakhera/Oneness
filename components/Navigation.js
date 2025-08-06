"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ChevronRight } from "lucide-react";

const navItems = [
  { href: "/our-people", label: "Our People" },
  { href: "/about", label: "our expertise" },
  { href: "/services", label: "Sectors", hasDropdown: true },
  { href: "/insights", label: "Insights" },
];

const sectorItems = [
  {
    title: "Building & Construction",
    description:
      "Comprehensive support and tailored solutions to principals, contractors and subcontractors throughout all residential and commercial project stages.",
    href: "/services",
  },
  {
    title: "Infrastructure Projects",
    description:
      "Collaborative advice across large-scale infrastructure lifecycles to navigate legal complexities, minimise risk and efficiently achieve project success.",
    href: "/services",
  },
  {
    title: "Engineering",
    description:
      "ONENESS plays a crucial role in designing, developing, and executing technical solutions for infrastructure, industrial, and commercial projects, ensuring efficiency, safety, and compliance with industry standards.",
    href: "/services",
  },
  {
    title: "Energy & Environment",
    description:
      "Energy and environmental devlopment projects explicitly outline the client responsibilities, detailing specific E&S (environmental and social) commitments, requirements, and provisions derived from sources like E&S policies, regulatory mandates, ESIA documentation (environmental and social impact assessment), and supplemental assessments.",
    href: "/services",
  },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [isMobileSectorsOpen, setIsMobileSectorsOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".nav-item",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.2 }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileSectors = () => {
    setIsMobileSectorsOpen(!isMobileSectorsOpen);
  };

  const handleSectorsMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsSectorsOpen(true);
  };

  const handleSectorsMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSectorsOpen(false);
    }, 150);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-black">
        <div className="section-padding py-5 lg:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="nav-item">
              <img src="/images/logo.png" className="w-[6rem]" alt="Logo" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && handleSectorsMouseEnter()
                  }
                  onMouseLeave={() =>
                    item.hasDropdown && handleSectorsMouseLeave()
                  }
                >
                  {item.hasDropdown ? (
                    <span
                      className={`nav-item nav-link cursor-pointer flex ${
                        pathname === item.href ? "opacity-100" : "opacity-60"
                      } ${isSectorsOpen ? "opacity-100" : ""}`}
                    >
                      {item.label}
                      <ChevronRight className="rotate-90" strokeWidth={1} />
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className={`nav-item nav-link ${
                        pathname === item.href ? "opacity-100" : "opacity-60"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className={`nav-item nav-link text-white px-3 py-3 rounded-full bg-black ${
                  pathname === "contact" ? "opacity-100" : "opacity-60"
                }`}
              >
                TALK TO US
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden nav-item text-sm font-light tracking-widest uppercase"
            >
              {isMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-8 pb-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={toggleMobileSectors}
                          className={`nav-link text-left w-full flex items-center justify-between ${
                            pathname === item.href
                              ? "opacity-100"
                              : "opacity-60"
                          }`}
                        >
                          {item.label}
                          <span
                            className={`transition-transform duration-200 ${
                              isMobileSectorsOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        {isMobileSectorsOpen && (
                          <div className="ml-4 mt-4 space-y-3 border-l border-gray-300 pl-4">
                            {sectorItems.map((sector) => (
                              <Link
                                key={sector.title}
                                href={sector.href}
                                className="block group"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileSectorsOpen(false);
                                }}
                              >
                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {sector.title}
                                </h4>
                                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                  {sector.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`nav-link ${
                          pathname === item.href ? "opacity-100" : "opacity-60"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Sectors Dropdown Mega Menu */}
      {isSectorsOpen && (
        <div
          className="fixed top-[68px] left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-100 hidden md:block"
          onMouseEnter={handleSectorsMouseEnter}
          onMouseLeave={handleSectorsMouseLeave}
        >
          <div className="py-8 px-4">
            <div className="flex items-stretch gap-0">
              {/* Logo - Fixed width, smaller space */}
              <div className="w-36 flex-shrink-0 flex items-center justify-center border-r border-gray-300 pr-6">
                <img src="/images/logo.png" alt="Logo" className="w-32" />
              </div>

              {/* Sector Items - Equal width, one line */}
              <div className="flex flex-1">
                {sectorItems.map((sector, index) => (
                  <Link
                    key={sector.title}
                    href={sector.href}
                    className={`group flex-1 p-6 hover:bg-gray-50 transition-colors duration-200 ${
                      index < sectorItems.length - 1
                        ? "border-r border-gray-300"
                        : ""
                    }`}
                    onClick={() => setIsSectorsOpen(false)}
                  >
                    <div className="h-full flex flex-col">
                      <h3 className="text-xl  text-gray-900 group-hover:text-black transition-colors duration-200 mb-3 leading-tight">
                        {sector.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">
                        {sector.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
