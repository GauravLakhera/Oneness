export const metadata = {
  title: 'Engineering Solutions | ONENESS SPHERE TECHNO',
  description: 'Comprehensive civil, electrical, and mechanical engineering services including design, installation, supervision, and commissioning for residential, commercial, and industrial projects.',
  keywords: [
    'Civil Engineering',
    'Electrical Engineering', 
    'Mechanical Engineering',
    'Engineering Design',
    'Project Management',
    'Construction Implementation',
    'Technical Consulting',
    'System Commissioning',
    'Engineering Solutions',
    'Infrastructure Engineering',
    'Data Center Engineering',
    'Industrial Facilities'
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
    url: '/engineering',
    siteName: 'ONENESS SPHERE TECHNO',
    title: 'Professional Engineering Solutions',
    description: 'Expert engineering services for infrastructure, industrial, and commercial projects with technical excellence and safety compliance.',
    images: [
      {
        url: '/images/engineering-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Engineering Solutions and Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
    title: 'Engineering Solutions | ONENESS SPHERE TECHNO',
    description: 'Comprehensive engineering services for complex technical requirements and infrastructure projects.',
    images: ['/images/engineering-hero.jpg'],
  },
  alternates: {
    canonical: '/engineering',
  },
};

export default function EngineeringLayout({ children }) {
  return children;
}
