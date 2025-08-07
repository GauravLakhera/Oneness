export const metadata = {
  title: 'Infrastructure Projects | ONENESS SPHERE TECHNO',
  description: 'Comprehensive engineering solutions for infrastructure projects including roads, drainage systems, electrical networks, sewage treatment plants, and utility buildings with long-term reliability.',
  keywords: [
    'Infrastructure Projects',
    'Road Construction',
    'Drainage Systems',
    'Electrical Networks',
    'Sewage Treatment Plants',
    'Utility Buildings',
    'Foundation Work',
    'Tunnel Construction',
    'Waste Management Facilities',
    'Infrastructure Engineering',
    'Public Works',
    'Civil Infrastructure'
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
    url: '/infrastructure-projects',
    siteName: 'ONENESS SPHERE TECHNO',
    title: 'Infrastructure Project Solutions',
    description: 'End-to-end infrastructure engineering solutions for roads, utilities, drainage systems, and public works with durability and performance focus.',
    images: [
      {
        url: '/images/infrastructure-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Infrastructure Project Engineering Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
    title: 'Infrastructure Projects | ONENESS SPHERE TECHNO',
    description: 'Comprehensive infrastructure engineering and construction services for sustainable development.',
    images: ['/images/infrastructure-hero.jpg'],
  },
  alternates: {
    canonical: '/infrastructure-projects',
  },
};

export default function InfrastructureProjectsLayout({ children }) {
  return children;
}
