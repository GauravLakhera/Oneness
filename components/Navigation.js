"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

// const navItems = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "our expertise" },
//   { href: "/services", label: "Sectors" },
//   { href: "/insights", label: "Insights" },
//   { href: "/approach", label: "Approach" },
// ];

const navItems = [
 
  { href: "/about", label: "our expertise" },
  { href: "/", label: "Sectors" },
  { href: "/", label: "Insights" },
  { href: "/", label: "Approach" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-black">
      <div className="section-padding py-5 lg:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="nav-item">
              <img src="/images/logo.png" className=" w-[5rem] "></img>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item nav-link ${
                  pathname === item.href ? "opacity-100" : "opacity-60"
                }`}
              >
                {item.label}
              </Link>
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
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${
                    pathname === item.href ? "opacity-100" : "opacity-60"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
