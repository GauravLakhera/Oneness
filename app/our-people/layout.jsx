export const metadata = {
  title: 'Our People | ONENESS SPHERE TECHNO',
  description: 'Comprehensive building and construction services delivering high-quality structures for commercial, industrial, institutional, and residential projects with safety and compliance.',
  keywords: [
    'Building Construction',
    'Commercial Construction',
    'Industrial Construction',
    'Residential Construction',
    'Structural Construction',
    'RCC Construction',
    'Pre-Engineered Buildings',
    'Construction Management',
    'Building Renovation',
    'Quality Control',
    'Construction Safety',
    'Project Delivery'
  ].join(', '),
  authors: [{ name: 'ONENESS SPHERE TECHNO', url: 'https://yourwebsite.com' }],
  creator: 'ONENESS SPHERE TECHNO',
  publisher: 'ONENESS SPHERE TECHNO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/building-construction',
    siteName: 'ONENESS SPHERE TECHNO',
    title: 'Building & Construction Excellence',
    description: 'High-quality building and construction services from foundation to finish with comprehensive project management and safety compliance.',
    images: [
      {
        url: '/images/construction-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Building and Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
    title: 'Building & Construction | ONENESS SPHERE TECHNO',
    description: 'Professional building and construction services with quality assurance and timely delivery.',
    images: ['/images/construction-hero.jpg'],
  },
  alternates: {
    canonical: '/building-construction',
  },
};

export default function OurPeopleLayout({ children }) {
  return children;
}
