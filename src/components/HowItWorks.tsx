import React from 'react';
import { SITE_CONFIG } from '@/config/site';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Request Information',
      description: 'Provide the requested information so we can help connect you with an appropriately licensed independent insurance agent.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      number: '2',
      title: 'Connect With an Independent Agent',
      description: 'Your request may be referred to an appropriately licensed independent insurance agent who can discuss life insurance options that may be available to you.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      number: '3',
      title: 'Review Available Options',
      description: 'The licensed insurance professional can explain available products, coverage, premiums, eligibility requirements, exclusions, and other applicable policy terms.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 14 14"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="section-padding how-it-works-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Step-by-Step Transparency</span>
          <h2 className="section-title">How Our Service Works</h2>
          <p className="section-desc">
            We help consumers connect with appropriately licensed independent insurance agents who can provide information about available life insurance options.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((s) => (
            <div key={s.number} className="step-card">
              <div className="step-number-badge">{s.number}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.description}</p>
            </div>
          ))}
        </div>

        {/* CTA to Connect */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn btn-call btn-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Call to Connect With an Independent Agent: {SITE_CONFIG.phone}</span>
          </a>
        </div>

        {/* Mandatory Underwriting & Non-Carrier Notice */}
        <div className="service-underwriting-note">
          <p>
            Any insurance application, underwriting decision, premium, coverage amount, policy issuance, or approval is handled by the applicable licensed insurance professional and insurance carrier—not by Zinabelle Inc.
          </p>
        </div>
      </div>
    </section>
  );
}
