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
            <strong>LifeInsuranceServiceSupport.com is owned and operated by Zinabelle Inc.</strong>
          </p>

          <p className="lead-gen-text">
            LifeInsuranceServiceSupport.com operates as an independent online lead-generation website that helps connect consumers with appropriately licensed independent insurance agents.
          </p>

          <p className="lead-gen-text">
            <strong>Zinabelle Inc is not an insurance agency or insurance carrier and does not issue, underwrite, approve, price, sell, or administer insurance policies.</strong>
          </p>

          <p className="lead-gen-text">
            <strong>Zinabelle Inc is not directly affiliated with, sponsored by, endorsed by, or operated by any insurance carrier.</strong>
          </p>

          <p className="lead-gen-text">
            Insurance agents who may receive consumer inquiries through our service operate independently and may hold licenses and appointments with one or more insurance carriers. Any such individual agent relationship does not constitute an affiliation between Zinabelle Inc and those insurance carriers.
          </p>

          <p className="lead-gen-text">
            Zinabelle Inc operates independently and does not represent itself as an insurance carrier or as the official website, customer-service department, claims department, or policy-service department of any insurance carrier.
          </p>

          <div className="lead-gen-boxes">
            <div className="lead-gen-subbox">
              <h4>Independent Operation</h4>
              <p>
                Zinabelle Inc is not owned or operated by an insurance carrier and does not claim affiliation with any particular insurance carrier. We exist to help connect consumers with appropriately licensed independent insurance agents.
              </p>
            </div>
            <div className="lead-gen-subbox">
              <h4>No Existing Policy Support</h4>
              <p>
                Zinabelle Inc does not service existing insurance policies, handle carrier customer service, process insurance claims, change beneficiaries, cancel existing policies, handle premium payments, or provide official carrier support. Consumers seeking assistance with existing policies must contact their issuing insurance carrier directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
