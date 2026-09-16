import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for LifeInsuranceServiceSupport.com operated by Zinabelle Inc. Learn how we collect, use, protect, and share your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="policy-page-header">
        <div className="container-narrow">
          <h1 className="policy-page-title">Privacy Policy</h1>
          <p className="policy-page-date">Last Updated: March 2026 | Operated by {SITE_CONFIG.legalName}</p>
        </div>
      </header>

      <section className="policy-content">
        <div className="container-narrow">
          <div className="policy-callout">
            <p style={{ margin: 0, fontWeight: 500 }}>
              <strong>Notice:</strong> LifeInsuranceServiceSupport.com is an independent lead-generation website operated by <strong>Zinabelle Inc</strong>. We respect your privacy and are committed to transparently explaining how your information is gathered, utilized, and shared with licensed independent insurance agents.
            </p>
          </div>

          <h2>1. Information We Collect</h2>
          <p>
            When you interact with LifeInsuranceServiceSupport.com or complete our online referral form, we may collect the following categories of information:
          </p>
          <ul>
            <li><strong>Contact Identifiers:</strong> First and last name, postal address, residential ZIP code, telephone number, and email address.</li>
            <li><strong>Insurance Preferences:</strong> Preferred insurance category (e.g., Term Life, Whole Life, Final Expense), desired coverage range, and age bracket.</li>
            <li><strong>Technical &amp; Usage Data:</strong> Internet Protocol (IP) address, browser type, operating system, referring URLs, and interaction patterns through cookies or standard analytical tracking.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the data collected for legitimate business purposes, including:</p>
          <ul>
            <li>Connecting you with appropriately licensed independent insurance agents who can explain available products and coverage options suited to your inquiry.</li>
            <li>Confirming and validating your contact information to deliver accurate referral requests.</li>
            <li>Responding to customer service inquiries, comments, or complaints.</li>
            <li>Maintaining compliance with applicable laws, including the Telephone Consumer Protection Act (TCPA) and state recordkeeping requirements.</li>
          </ul>

          <h2>3. How Information Is Shared</h2>
          <p>
            <strong>We do not sell your personal information to unvetted third parties for unrelated marketing.</strong> Your information is shared under the following specific circumstances:
          </p>
          <ul>
            <li><strong>Independent Insurance Agents &amp; Referral Partners:</strong> When you request information or contact our referral service, your details may be transmitted to appropriately licensed independent insurance agents, authorized referral partner entities, marketplaces, qualification call centers, or lead-routing networks solely for the purpose of facilitating a connection with an appropriately licensed insurance professional who can fulfill your inquiry.</li>
            <li><strong>Service Providers:</strong> We work with trusted technology, communication, and infrastructure vendors (such as hosting, telephony, analytics, and security providers) operating under confidentiality obligations.</li>
            <li><strong>Legal &amp; Regulatory Compliance:</strong> We may disclose information if required by subpoena, court order, regulatory investigation, or applicable federal and state laws.</li>
          </ul>

          <h2>4. Telephone Consumer Protection Act (TCPA) &amp; Communications Consent</h2>
          <p>
            By submitting an information request and checking the consent box, you grant express written consent for LifeInsuranceServiceSupport.com, its operator Zinabelle Inc., and matched licensed independent insurance agents to contact you by telephone, text message (SMS), or automated dialing technology at the number provided. Consent is never a condition of purchase. You may revoke consent or opt out at any time by replying &quot;STOP&quot; to text messages or requesting removal during phone conversations.
          </p>

          <h2>5. State-Specific Consumer Rights (CCPA / CPRA)</h2>
          <p>
            If you are a resident of California or states with comparable consumer data privacy protections, you may possess the following rights:
          </p>
          <ul>
            <li><strong>Right to Know:</strong> You may request disclosure of what personal information has been collected, used, and shared during the preceding 12 months.</li>
            <li><strong>Right to Delete:</strong> You may request the deletion of personal information we have collected from you, subject to legal recordkeeping exemptions.</li>
            <li><strong>Right to Opt Out:</strong> You have the right to opt out of the sale or sharing of your personal data.</li>
            <li><strong>Non-Discrimination:</strong> We will never discriminate against you for exercising your privacy rights.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact our privacy compliance officer at <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: 'var(--color-secondary)' }}>{SITE_CONFIG.email}</a>.
          </p>

          <h2>6. Data Security &amp; Retention</h2>
          <p>
            We implement administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, loss, alteration, or disclosure. However, no internet transmission is 100% immune from security vulnerabilities. We retain your data only as long as necessary to fulfill the purposes described or meet regulatory obligations.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For questions, data access requests, or privacy concerns regarding this policy, please reach out to:
          </p>
          <div className="policy-callout">
            <p><strong>{SITE_CONFIG.legalName}</strong></p>
            <p>Attn: Privacy Compliance</p>
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
