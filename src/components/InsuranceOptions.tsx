import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/config/site';

export default function InsuranceOptions() {
  return (
    <section id="options" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Educational Overview</span>
          <h2 className="section-title">Understand Your Life Insurance Options</h2>
          <p className="section-desc">
            Life insurance can vary significantly based on age, health, location, coverage amount, policy type, eligibility, and the insurance carrier issuing the policy.
          </p>
          <p className="section-desc" style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>
            LifeInsuranceServiceSupport.com provides general educational information and helps consumers connect with appropriately licensed independent insurance agents who can discuss available options.
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
            Zinabelle Inc does not issue, underwrite, approve, price, sell, or administer insurance policies.
          </p>
        </div>

        <div className="options-grid">
          {/* Term Life Insurance Card */}
          <article className="option-card">
            <div className="option-card-image">
              <Image
                src="/images/term-life.jpg"
                alt="Young family with toddler discussing term life insurance protection"
                width={400}
                height={260}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span className="option-card-badge">Specified Period Coverage</span>
            </div>
            <div className="option-card-body">
              <h3 className="option-card-title">Term Life Insurance</h3>
              <p className="option-card-text">
                Learn about life insurance designed to provide coverage for a specified period (such as 10, 20, or 30 years). Often chosen for income replacement during peak earning and parenting years.
              </p>
              <ul className="option-card-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Level premiums during the specified initial term</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Commonly designed for mortgage &amp; family protection</span>
                </li>
              </ul>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn btn-call" style={{ width: '100%' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Connect About Term Life</span>
              </a>
            </div>
          </article>

          {/* Whole Life Insurance Card */}
          <article className="option-card">
            <div className="option-card-image">
              <Image
                src="/images/whole-life.jpg"
                alt="Couple planning long term financial protection with whole life insurance"
                width={400}
                height={260}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span className="option-card-badge">Permanent Coverage</span>
            </div>
            <div className="option-card-body">
              <h3 className="option-card-title">Whole Life Insurance</h3>
              <p className="option-card-text">
                Learn about permanent life insurance and how whole life coverage generally works. Whole life insurance is a type of permanent life insurance that may provide lifetime coverage when applicable policy requirements are satisfied.
              </p>
              <ul className="option-card-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Designed to provide permanent coverage, subject to the terms and conditions of the policy</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Potential cash value accumulation component</span>
                </li>
              </ul>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn btn-call" style={{ width: '100%' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Connect About Whole Life</span>
              </a>
            </div>
          </article>

          {/* Final Expense Insurance Card */}
          <article className="option-card">
            <div className="option-card-image" style={{ background: 'linear-gradient(135deg, #0a3866 0%, #009688 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', color: '#ffffff', padding: '1.5rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>End-of-Life Peace of Mind</div>
              </div>
              <span className="option-card-badge">Burial &amp; Funeral</span>
            </div>
            <div className="option-card-body">
              <h3 className="option-card-title">Final Expense Insurance</h3>
              <p className="option-card-text">
                Learn about life insurance options commonly designed to help beneficiaries with funeral, burial, and other final expenses. Typically features smaller face amounts and simplified underwriting.
              </p>
              <ul className="option-card-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>May assist with funeral, memorial, &amp; personal debts</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Simplified qualification guidelines</span>
                </li>
              </ul>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn btn-call" style={{ width: '100%' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Connect About Final Expense</span>
              </a>
            </div>
          </article>

          {/* Other Life Insurance Options Card */}
          <article className="option-card">
            <div className="option-card-image" style={{ background: 'linear-gradient(135deg, #062343 0%, #028090 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', color: '#ffffff', padding: '1.5rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                  </svg>
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Customized Policy Options</div>
              </div>
              <span className="option-card-badge">Universal &amp; Specialty</span>
            </div>
            <div className="option-card-body">
              <h3 className="option-card-title">Other Life Insurance Options</h3>
              <p className="option-card-text">
                An appropriately licensed independent insurance agent can discuss insurance products that may be available based on your individual circumstances and eligibility, including universal, indexed, and variable options.
              </p>
              <ul className="option-card-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Universal &amp; flexible premium options</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Consultation tailored to your eligibility</span>
                </li>
              </ul>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn btn-call" style={{ width: '100%' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Connect With an Independent Agent</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
