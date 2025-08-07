export const metadata = {
  title: 'Energy & Environment - ONENESS SPHERE TECHNO',
  description: 'Comprehensive environmental and social impact assessments, renewable energy solutions, and sustainable development services with regulatory compliance and ESIA documentation.',
  keywords: 'Environmental Impact Assessment, Renewable Energy, Sustainability Consulting, ESIA Documentation, Solar Energy, Wind Power, Environmental Management, Climate Change Adaptation',
  authors: [{ name: 'ONENESS SPHERE TECHNO' }],
  openGraph: {
    title: 'Energy & Environment Solutions',
    description: 'Leading provider of environmental assessments and renewable energy solutions for sustainable development.',
    url: '/energy-environment',
    siteName: 'ONENESS SPHERE TECHNO',
    images: [
      {
        url: '/images/energy-environment-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Energy and Environment Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energy & Environment - ONENESS SPHERE TECHNO',
    description: 'Sustainable energy solutions and environmental stewardship services.',
    images: ['/images/energy-environment-hero.jpg'],
  },
};

export default function EnergyEnvironmentLayout({ children }) {
  return children;
}
