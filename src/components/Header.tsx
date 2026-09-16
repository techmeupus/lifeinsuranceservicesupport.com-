'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Google Ads Compliance Notice Bar */}
      <div className="top-notice-bar">
        <div className="container top-notice-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="top-notice-badge">Independent Service</span>
            <span>LifeInsuranceServiceSupport.com is owned & operated by Zinabelle Inc.</span>
          </div>
          <div>
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="top-notice-phone">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>{SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="header-logo" aria-label="Life Insurance Service Support Home">
            <Image
              src="/logo.png"
              alt="Life Insurance Service Support Logo"
              width={240}
              height={56}
              priority
              style={{ objectFit: 'contain', width: 'auto', height: '48px' }}
            />
          </Link>

          <nav className="header-nav" aria-label="Main Navigation">
            <Link href="#options" className="nav-link">Insurance Options</Link>
            <Link href="#how-it-works" className="nav-link">How It Works</Link>
            <Link href="#why-us" className="nav-link">Why Choose Us</Link>
            <Link href="#disclosures" className="nav-link">Disclosures</Link>
            <Link href="/about-us" className="nav-link">About Zinabelle</Link>
          </nav>

          <div className="header-actions">
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn btn-call" style={{ padding: '0.65rem 1.25rem', fontSize: '0.925rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call Now</span>
            </a>
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <Link href="#options" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Insurance Options</Link>
            <Link href="#how-it-works" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
            <Link href="#why-us" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Why Choose Us</Link>
            <Link href="#disclosures" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Disclosures</Link>
            <Link href="/about-us" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Zinabelle</Link>
            <Link href="/contact-us" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn btn-call btn-full" onClick={() => setIsMobileMenuOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call Now: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
