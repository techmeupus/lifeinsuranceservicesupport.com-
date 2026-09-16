import React from 'react';

export default function LeadGenTransparency() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="lead-gen-highlight">
          <div className="lead-gen-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Regulatory &amp; Consumer Disclosure</span>
          </div>

          <h2 className="lead-gen-title">
            An Independent Life Insurance Lead-Generation Service
          </h2>

          <p className="lead-gen-text">
            <strong>LifeInsuranceServiceSupport.com</strong> is owned and operated by <strong>Zinabelle Inc</strong>, an independent online lead-generation company.
          </p>

          <p className="lead-gen-text">
            <strong>Zinabelle Inc is not an insurance agency or insurance carrier.</strong> We do not issue, underwrite, approve, price, sell, or administer insurance policies. Zinabelle Inc is not directly affiliated with, sponsored by, endorsed by, or operated by any insurance carrier.
          </p>

          <p className="lead-gen-text">
            Insurance agents who may receive consumer inquiries through our service operate independently and may hold licenses and appointments with one or more insurance carriers. Any such individual agent relationship does not constitute an affiliation between Zinabelle Inc and those insurance carriers.
          </p>

          <div className="lead-gen-boxes">
            <div className="lead-gen-subbox">
              <h4>Independent Operation</h4>
              <p>
                We do not sell policies or represent any single carrier. We exist purely to connect interested consumers with licensed professionals who can guide them.
              </p>
            </div>
            <div className="lead-gen-subbox">
              <h4>Licensed Agent Network</h4>
              <p>
                All insurance discussions, underwriting questions, quotes, and applications are handled strictly by appropriately licensed insurance agents and issuers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
