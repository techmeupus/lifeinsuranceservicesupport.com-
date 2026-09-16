import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Connect With Licensed Independent Life Insurance Agents | LifeInsuranceServiceSupport.com',
    template: '%s | LifeInsuranceServiceSupport.com'
  },
  description: 'LifeInsuranceServiceSupport.com connects consumers with appropriately licensed independent insurance agents to explore term life, whole life, and final expense coverage. Owned and operated by Zinabelle Inc.',
  keywords: [
    'life insurance',
    'licensed insurance agent',
    'term life insurance',
    'whole life insurance',
    'final expense insurance',
    'independent insurance referral',
    'Zinabelle Inc'
  ],
  authors: [{ name: 'Zinabelle Inc.' }],
  creator: 'Zinabelle Inc.',
  publisher: 'Zinabelle Inc.',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Connect With Licensed Independent Life Insurance Agents | LifeInsuranceServiceSupport.com',
    description: 'Get help exploring life insurance options. Connect with licensed independent agents for term life, whole life, and final expense coverage.',
    images: [
      {
        url: '/images/hero-family.jpg',
        width: 1200,
        height: 630,
        alt: 'Life Insurance Service Support Family Security',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connect With Licensed Independent Life Insurance Agents',
    description: 'Independent referral service connecting consumers with licensed insurance agents. Operated by Zinabelle Inc.',
    images: ['/images/hero-family.jpg'],
  },
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
