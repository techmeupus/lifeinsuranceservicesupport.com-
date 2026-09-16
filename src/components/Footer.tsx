import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export default function Footer() {
  return (
    <>
      {/* Important Disclosure Section (Strict Google Ads Compliance) */}
      <section id="disclosures" className="disclosure-section">
        <div className="container">
          <div className="disclosure-card">
            <h3 className="disclosure-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-secondary)' }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>Important Disclosure</span>
            </h3>
            
            <p className="disclosure-text">
              <strong>LifeInsuranceServiceSupport.com is owned and operated by Zinabelle Inc.</strong>
            </p>
            <p className="disclosure-text">
              LifeInsuranceServiceSupport.com operates as an independent online lead-generation website that helps connect consumers with appropriately licensed independent insurance agents.
            </p>
            <p className="disclosure-text">
              <strong>Zinabelle Inc is not an insurance agency or insurance carrier and does not issue, underwrite, approve, price, sell, or administer insurance policies.</strong>
            </p>
            <p className="disclosure-text">
              <strong>Zinabelle Inc is not directly affiliated with, sponsored by, endorsed by, or operated by any insurance carrier.</strong>
            </p>
            <p className="disclosure-text">
              Zinabelle Inc operates independently and does not represent itself as an insurance carrier or as the official website, customer-service department, claims department, or policy-service department of any insurance carrier.
            </p>
            <p className="disclosure-text">
              Insurance availability, eligibility, premiums, coverage amounts, policy terms, exclusions, and underwriting requirements vary by consumer, state, insurance carrier, and other applicable factors. Any insurance product is offered and issued only by the applicable insurance carrier through appropriately licensed insurance professionals.
            </p>
            <p className="disclosure-text">
              <strong>Submitting a request, providing information, or calling through this website does not guarantee insurance coverage, approval, or specific pricing.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-grid">
            {/* Column 1: Brand & Identity */}
            <div>
              <div style={{ background: '#ffffff', padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)', display: 'inline-block', marginBottom: '1.25rem' }}>
                <Image
                  src="/logo.png"
                  alt="Life Insurance Service Support Logo"
                  width={200}
                  height={46}
                  style={{ objectFit: 'contain', width: 'auto', height: '36px' }}
                />
              </div>
              <p className="footer-brand-desc">
                An independent lead-generation service operated by Zinabelle Inc. Helping consumers discover educational life insurance resources and connect with appropriately licensed independent insurance agents.
              </p>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Operated by <strong>Zinabelle Inc.</strong>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#options">Insurance Options</Link></li>
                <li><Link href="/#how-it-works">How It Works</Link></li>
                <li><Link href="/#why-us">Why Choose Us</Link></li>
                <li><a href={`tel:${SITE_CONFIG.phoneRaw}`}>Call to Connect</a></li>
              </ul>
            </div>

            {/* Column 3: Legal & Policies */}
            <div>
              <h4 className="footer-heading">Compliance</h4>
              <ul className="footer-links">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
                <li><Link href="/disclosures">Licensing Disclosures</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="footer-heading">Operator Details</h4>
              <div className="footer-contact-info">
                <div>
                  <strong>Zinabelle Inc.</strong><br />
                  Orlando, FL<br />
                  United States
                </div>
                <div>
                  <strong>Inquiries &amp; Support:</strong><br />
                  <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: '#80cbc4' }}>{SITE_CONFIG.email}</a>
                </div>
                <div>
                  <strong>Toll-Free Phone:</strong><br />
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`} style={{ color: '#80cbc4' }}>{SITE_CONFIG.phone}</a>
                </div>
                <div>
                  <strong>Hours:</strong><br />
                  <span>{SITE_CONFIG.operatingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <div className="footer-policy-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
              <span>|</span>
              <Link href="/contact-us">Contact Us</Link>
              <span>|</span>
              <Link href="/about-us">About Us</Link>
              <span>|</span>
              <Link href="/disclosures">Important Disclaimers</Link>
            </div>
            <p>
              &copy; {SITE_CONFIG.year} {SITE_CONFIG.legalName} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
