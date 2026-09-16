import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/config/site';

export default function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Hero Text Content */}
            <div>
              <div className="hero-badge-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>Independent Referral Network</span>
              </div>

              <h1 className="hero-title">
                Connect With an Appropriately Licensed Independent Insurance Agent
              </h1>

              <h2 className="hero-subtitle">
                Get Help Exploring Life Insurance Options
              </h2>

              <p className="hero-desc">
                <strong>LifeInsuranceServiceSupport.com is owned and operated by Zinabelle Inc.</strong>
              </p>

              <p className="hero-desc">
                LifeInsuranceServiceSupport.com operates as an independent online lead-generation website that helps connect consumers with appropriately licensed independent insurance agents.
              </p>

              <p className="hero-desc" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                Zinabelle Inc is not an insurance agency or insurance carrier and does not issue, underwrite, approve, price, sell, or administer insurance policies. Zinabelle Inc is not directly affiliated with, sponsored by, endorsed by, or operated by any insurance carrier.
              </p>

              {/* Call to Connect Button */}
              <div style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn-call-hero">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Call to Connect With an Independent Agent: {SITE_CONFIG.phone}</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary-dark)', fontWeight: 600 }}>
                    ✓ Toll-Free Call
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    • {SITE_CONFIG.operatingHours}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    • No Obligation
                  </span>
                </div>

                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', marginTop: '0.75rem', maxWidth: '520px', lineHeight: 1.5 }}>
                  Submitting a request or calling does not constitute an application for insurance and does not guarantee eligibility, coverage, pricing, or policy issuance.
                </p>
              </div>
            </div>

            {/* Right Hero Image */}
            <div>
              <div className="hero-image-large">
                <Image
                  src="/images/hero-family.jpg"
                  alt="Multi-generational family enjoying security and peace of mind with life insurance protection"
                  width={880}
                  height={620}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(10, 56, 102, 0.92)',
                  color: '#ffffff',
                  padding: '1.1rem 1.4rem',
                  borderRadius: 'var(--radius-md)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.25)'
                }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: '#80cbc4', marginBottom: '0.25rem' }}>
                    Protect What Matters Most
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.45 }}>
                    Connect with appropriately licensed independent insurance agents who can help discuss available options.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights Strip Below Hero Section */}
      <section className="hero-trust-bar-section">
        <div className="container">
          <div className="hero-trust-bar-grid">
            <div className="hero-trust-bar-card">
              <div className="hero-trust-bar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <polyline points="16 11 18 13 22 9"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="hero-trust-bar-title">Independent Agents</h3>
                <p className="hero-trust-bar-desc">
                  Connect with appropriately licensed independent insurance agents.
                </p>
              </div>
            </div>

            <div className="hero-trust-bar-card">
              <div className="hero-trust-bar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <div>
                <h3 className="hero-trust-bar-title">Tailored Information</h3>
                <p className="hero-trust-bar-desc">
                  Discuss policies suited to your age, health, and budget goals.
                </p>
              </div>
            </div>

            <div className="hero-trust-bar-card">
              <div className="hero-trust-bar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div>
                <h3 className="hero-trust-bar-title">Independent From Insurance Carriers</h3>
                <p className="hero-trust-bar-desc">
                  Zinabelle Inc is not owned or operated by an insurance carrier and does not claim affiliation with any particular insurance carrier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
