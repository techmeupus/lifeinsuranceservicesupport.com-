import React from 'react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Educational Information',
      text: 'Learn about common types of life insurance and factors consumers may want to consider when exploring coverage.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    },
    {
      title: 'Connection With Licensed Professionals',
      text: 'We help consumers connect with appropriately licensed independent insurance agents who can discuss available coverage options based on individual eligibility.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <polyline points="16 11 18 13 22 9"></polyline>
        </svg>
      )
    },
    {
      title: 'Independent From Insurance Carriers',
      text: 'Zinabelle Inc is not owned or operated by an insurance carrier and does not claim affiliation with any particular insurance carrier. Zinabelle Inc operates independently and does not represent itself as an insurance carrier or as the official website, customer-service department, claims department, or policy-service department of any insurance carrier.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      title: 'Clear Business Identity',
      text: 'LifeInsuranceServiceSupport.com is owned and operated by Zinabelle Inc. We clearly disclose our role so consumers understand who they are interacting with before requesting information.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className="section-padding" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Consumer First Principles</span>
          <h2 className="section-title">Why Use LifeInsuranceServiceSupport.com?</h2>
          <p className="section-desc">
            We are committed to providing clear educational information and helping consumers connect with appropriately licensed independent insurance agents.
          </p>
        </div>

        <div className="why-us-grid">
          {points.map((pt) => (
            <div key={pt.title} className="why-card">
              <div className="why-card-icon">{pt.icon}</div>
              <h3 className="why-card-title">{pt.title}</h3>
              <p className="why-card-text">{pt.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
