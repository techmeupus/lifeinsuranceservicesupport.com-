import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Important Disclosures & Licensing Information',
  description: 'Licensing, advertising, and carrier disclosures for LifeInsuranceServiceSupport.com operated by Zinabelle Inc.',
};

export default function DisclosuresPage() {
  return (
    <>
      <header className="policy-page-header">
        <div className="container-narrow">
          <h1 className="policy-page-title">Important Disclosures &amp; Disclaimers</h1>
          <p className="policy-page-date">Operated by {SITE_CONFIG.legalName} | Consumer Transparency</p>
        </div>
      </header>

      <section className="policy-content">
        <div className="container-narrow">
          <div className="policy-callout">
            <h3 style={{ marginTop: 0, color: 'var(--color-primary)' }}>Notice of Independent Lead-Generation</h3>
            <p style={{ margin: 0 }}>
              <strong>LifeInsuranceServiceSupport.com</strong> is an independent online lead-generation website owned and operated by <strong>Zinabelle Inc</strong>. LifeInsuranceServiceSupport.com connects consumers with appropriately licensed independent insurance agents who can discuss available life insurance options based on the consumer&apos;s individual needs and eligibility.
            </p>
          </div>

          <h2>1. Not an Insurance Carrier or Agency</h2>
          <p>
            <strong>Zinabelle Inc is not an insurance agency, brokerage, or insurance carrier.</strong> We do not issue, underwrite, approve, price, sell, or administer insurance policies. We do not participate in underwriting decisions or collect premium payments.
          </p>
          <p>
            Zinabelle Inc is not directly affiliated with, sponsored by, endorsed by, or operated by any insurance carrier.
          </p>

          <h2>2. Independent Agent Relationships</h2>
          <p>
            Insurance agents who may receive consumer inquiries through our service operate independently and may hold licenses and appointments with one or more insurance carriers. Any such individual agent relationship does not constitute an affiliation between Zinabelle Inc and those insurance carriers.
          </p>

          <h2>3. Underwriting, Eligibility, &amp; Non-Guarantee</h2>
          <p>
            Insurance availability, eligibility, premiums, coverage amounts, policy terms, exclusions, and underwriting requirements vary by consumer, state, insurance carrier, and other applicable factors.
          </p>
          <p>
            <strong>Submitting a request through this website does not guarantee insurance coverage, approval, or pricing.</strong> Any insurance product is offered and issued only by the applicable insurance carrier through appropriately licensed insurance professionals. Submitting a request does not constitute a completed insurance application.
          </p>

          <h2>4. Advertising Disclosure</h2>
          <p>
            This website is an advertising and referral marketplace. Participating appropriately licensed independent insurance agents may compensate Zinabelle Inc for consumer connection referrals. This compensation does not influence the objectivity of the educational information presented on this site, nor does it impact any rates or policy terms established by third-party insurance carriers.
          </p>

          <h2>5. Geographic Availability</h2>
          <p>
            Products, coverages, and policies discussed by appropriately licensed independent insurance agents are subject to state regulatory approvals and may not be available in all 50 U.S. states.
          </p>

          <h2>6. No Existing-Policy Servicing or Carrier Support</h2>
          <p>
            Zinabelle Inc operates independently and does not represent itself as an insurance carrier or as the official website, customer-service department, claims department, or policy-service department of any insurance carrier. Zinabelle Inc does not service existing insurance policies, handle carrier customer service, process insurance claims, change beneficiaries, cancel existing policies, handle premium payments, or provide official carrier support.
          </p>

          <h2>7. Questions &amp; Support</h2>
          <p>
            If you have questions regarding these disclosures or our referral service, please contact us:
          </p>
          <div className="policy-callout">
            <p><strong>{SITE_CONFIG.legalName}</strong></p>
            <p>Orlando, FL</p>
            <p>Email: <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></p>
            <p>Phone: {SITE_CONFIG.phone}</p>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/" className="btn btn-navy">
              &larr; Return to Home Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
