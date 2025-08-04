import Image from 'next/image';

const logos = [
  { src: "/images/clients/2.png", alt: "Partner 2" },
  { src: "/images/clients/3.png", alt: "Partner 3" },
  { src: "/images/clients/4.png", alt: "Partner 4" },
  { src: "/images/clients/7.png", alt: "Partner 7" },
  { src: "/images/clients/12.png", alt: "Partner 12" },
  { src: "/images/clients/13.png", alt: "Partner 13" },
  { src: "/images/clients/14.png", alt: "Partner 14" },
  { src: "/images/clients/15.png", alt: "Partner 15" },
];

// Repeat for seamless infinite scroll
const repeatedLogos = [...logos, ...logos];

export default function PartnersCarousel() {
  return (
    <div className="w-full overflow-hidden bg-white py-6">
      <div className="flex animate-scroll min-w-fit">
        {repeatedLogos.map((logo, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 px-8"
          >
            <div className="relative w-32 h-16 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 768px) 120px, 128px"
                className="object-contain grayscale transition-all duration-300 hover:grayscale-0"
                priority={idx < logos.length}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
