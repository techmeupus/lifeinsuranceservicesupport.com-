import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About LifeInsuranceServiceSupport.com and Zinabelle Inc. Learn about our mission to connect consumers with licensed independent insurance agents.',
};

export default function AboutUsPage() {
  return (
    <>
      <header className="policy-page-header">
        <div className="container-narrow">
          <h1 className="policy-page-title">About Us</h1>
          <p className="policy-page-date">Operated by {SITE_CONFIG.legalName} | Transparent Life Insurance Referral Network</p>
        </div>
      </header>

      <section className="policy-content">
        <div className="container-narrow">
          <div style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <Image
              src="/images/hero-family.jpg"
              alt="Life Insurance Service Support About Us"
              width={960}
              height={450}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <h2>Who We Are</h2>
          <p>
            <strong>LifeInsuranceServiceSupport.com</strong> is an independent online lead-generation website owned and operated by <strong>Zinabelle Inc</strong>.
          </p>
          <p>
            Our mission is simple: to make exploring life insurance straightforward, educational, and accessible. Navigating the world of term life, whole life, universal life, and final expense policies can feel overwhelming. We bridge that gap by connecting interested consumers with appropriately licensed independent insurance agents who can explain coverage options based on each individual&apos;s personal circumstances and eligibility.
          </p>

          <div className="policy-callout">
            <h3 style={{ marginTop: 0, color: 'var(--color-primary)' }}>Our Core Operating Principles</h3>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li><strong>Complete Transparency:</strong> We openly disclose our business identity, operational model, and lack of carrier bias.</li>
              <li><strong>Independent Network:</strong> We are not owned, operated, or endorsed by any specific insurance carrier.</li>
              <li><strong>Consumer Empowerment:</strong> We provide educational information so consumers can make informed decisions before requesting a consultation.</li>
            </ul>
          </div>

          <h2>What We Do &amp; What We Don&apos;t Do</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ color: '#166534', fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 700 }}>What We Do</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#1e293b' }}>
                <li>Provide objective educational overviews of life insurance categories.</li>
                <li>Connect consumers with licensed independent agents.</li>
                <li>Operate a secure, compliant information referral platform.</li>
                <li>Clearly disclose our independent role.</li>
              </ul>
            </div>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ color: '#991b1b', fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 700 }}>What We Don&apos;t Do</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#1e293b' }}>
                <li>We do NOT sell, underwrite, or issue insurance policies.</li>
                <li>We do NOT price premiums or approve applications.</li>
                <li>We do NOT represent any single insurance company.</li>
                <li>We do NOT guarantee coverage or underwriting acceptance.</li>
              </ul>
            </div>
          </div>

          <h2>Corporate Identity</h2>
          <p>
            LifeInsuranceServiceSupport.com is operated by <strong>Zinabelle Inc</strong>, a United States corporate entity headquartered in Sheridan, Wyoming.
          </p>
          <div className="policy-callout">
            <p><strong>{SITE_CONFIG.legalName}</strong></p>
            <p>{SITE_CONFIG.address.street}</p>
            <p>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}</p>
            <p>Email: <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></p>
            <p>Toll-Free Phone: <a href={`tel:${SITE_CONFIG.phoneRaw}`}>{SITE_CONFIG.phone}</a></p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn btn-call">
              Call An Agent: {SITE_CONFIG.phone}
            </a>
            <Link href="/contact-us" className="btn btn-outline">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
