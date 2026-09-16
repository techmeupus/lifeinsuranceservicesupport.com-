import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact LifeInsuranceServiceSupport.com operated by Zinabelle Inc. Call our toll-free line to connect with an appropriately licensed independent insurance agent.',
};

export default function ContactUsPage() {
  return (
    <>
      <header className="policy-page-header">
        <div className="container-narrow">
          <h1 className="policy-page-title">Contact Us</h1>
          <p className="policy-page-date">Call to connect with an appropriately licensed independent insurance agent or reach our corporate administrative team.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Phone Card */}
            <div className="lead-form-card" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-secondary-light)', color: 'var(--color-secondary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Call to Connect
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Connect with an appropriately licensed independent insurance agent to explore available policy options tailored to your eligibility.
              </p>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn-call-hero" style={{ justifyContent: 'center', width: '100%', marginBottom: '1rem' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Call to Connect: {SITE_CONFIG.phone}</span>
              </a>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                Toll-Free • {SITE_CONFIG.operatingHours}
              </div>
            </div>

            {/* Corporate & Support Inquiries */}
            <div className="contact-info-card">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                Operator &amp; Administrative Support
              </h3>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.2rem' }}>Corporate Headquarters</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>
                    {SITE_CONFIG.legalName}<br />
                    Orlando, FL<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.2rem' }}>Email Inquiries</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>
                    <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: 'var(--color-secondary-dark)', fontWeight: 600 }}>{SITE_CONFIG.email}</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item" style={{ marginBottom: 0 }}>
                <div className="contact-detail-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.2rem' }}>Hours of Operation</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>
                    {SITE_CONFIG.operatingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="policy-callout" style={{ marginTop: '2.5rem' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.6 }}>
              <strong>Important Notice:</strong> LifeInsuranceServiceSupport.com is an independent online lead-generation website operated by Zinabelle Inc. Zinabelle Inc is not an insurance agency or carrier. Zinabelle Inc operates independently and does not represent itself as an insurance carrier or as the official website, customer-service department, claims department, or policy-service department of any insurance carrier. We do not service existing policies or process claims. Submitting an inquiry or calling does not guarantee eligibility, coverage, pricing, or policy issuance.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/" className="btn btn-outline">
              &larr; Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
