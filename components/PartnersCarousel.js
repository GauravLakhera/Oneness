import Image from 'next/image';

const logos = [
  { src: "/images/clients/1.png", alt: "Partner 1" },
  { src: "/images/clients/2.png", alt: "Partner 2" },
  { src: "/images/clients/3.png", alt: "Partner 3" },
  { src: "/images/clients/4.png", alt: "Partner 4" },
  { src: "/images/clients/5.png", alt: "Partner 5" },
  { src: "/images/clients/6.png", alt: "Partner 6" },
  { src: "/images/clients/7.png", alt: "Partner 7" },
  { src: "/images/clients/8.png", alt: "Partner 8" },
  { src: "/images/clients/9.png", alt: "Partner 9" },
  { src: "/images/clients/10.png", alt: "Partner 10" },
  { src: "/images/clients/11.png", alt: "Partner 11" },
  { src: "/images/clients/12.png", alt: "Partner 12" },
  { src: "/images/clients/13.png", alt: "Partner 13" },
  { src: "/images/clients/14.png", alt: "Partner 14" },
  { src: "/images/clients/15.png", alt: "Partner 15" },
  { src: "/images/clients/16.png", alt: "Partner 16" },
];

// Repeat for seamless infinite scroll
const repeatedLogos = [...logos, ...logos];

export default function PartnersCarousel() {
  return (
    <div className="w-full overflow-hidden bg-white py-6">
      <div className="flex animate-scroll min-w-fit">
      
        {repeatedLogos.map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 px-8">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="object-cover grayscale h-16 w-auto"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
