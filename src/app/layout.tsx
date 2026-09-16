import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Connect With Appropriately Licensed Independent Insurance Agents | LifeInsuranceServiceSupport.com',
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: 'LifeInsuranceServiceSupport.com connects consumers with appropriately licensed independent insurance agents to explore term life, whole life, and final expense coverage. Owned and operated by Zinabelle Inc.',
  keywords: [
    'life insurance',
    'appropriately licensed independent insurance agent',
    'term life insurance',
    'whole life insurance',
    'final expense insurance',
    'burial insurance',
    'Zinabelle Inc',
    'LifeInsuranceServiceSupport.com',
    'life insurance quote information',
    'independent referral service'
  ],
  authors: [{ name: SITE_CONFIG.legalName }],
  creator: SITE_CONFIG.legalName,
  publisher: SITE_CONFIG.legalName,
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
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Connect With Appropriately Licensed Independent Insurance Agents | LifeInsuranceServiceSupport.com',
    description: 'Get help exploring life insurance options. Connect with appropriately licensed independent insurance agents for term life, whole life, and final expense coverage.',
    images: [
      {
        url: '/images/hero-family.jpg',
        width: 1200,
        height: 630,
        alt: 'Connect with appropriately licensed independent insurance agents through LifeInsuranceServiceSupport.com',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connect With Appropriately Licensed Independent Insurance Agents',
    description: 'Independent referral service connecting consumers with appropriately licensed independent insurance agents. Operated by Zinabelle Inc.',
    images: ['/images/hero-family.jpg'],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
