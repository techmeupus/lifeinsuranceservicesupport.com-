import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for using LifeInsuranceServiceSupport.com operated by Zinabelle Inc.',
};

export default function TermsPage() {
  return (
    <>
      <header className="policy-page-header">
        <div className="container-narrow">
          <h1 className="policy-page-title">Terms and Conditions</h1>
          <p className="policy-page-date">Last Updated: March 2026 | Operated by {SITE_CONFIG.legalName}</p>
        </div>
      </header>

      <section className="policy-content">
        <div className="container-narrow">
          <div className="policy-callout">
            <p style={{ margin: 0, fontWeight: 500 }}>
              <strong>Important Scope Notice:</strong> LifeInsuranceServiceSupport.com is an independent online lead-generation website owned and operated by <strong>Zinabelle Inc</strong>. By accessing or using this website, you acknowledge and agree to these Terms and Conditions.
            </p>
          </div>

          <h2>1. Nature of Our Referral Service</h2>
          <p>
            LifeInsuranceServiceSupport.com operates strictly as an independent lead-generation service that connects consumers seeking information about life insurance with appropriately licensed independent insurance agents.
          </p>
          <p>
            <strong>Zinabelle Inc is not an insurance company, insurance agency, underwriter, or broker.</strong> We do not issue, underwrite, approve, price, sell, or administer life insurance policies. Zinabelle Inc is not directly affiliated with, sponsored by, endorsed by, or operated by any insurance carrier.
          </p>

          <h2>2. No Guarantee of Eligibility, Coverage, or Pricing</h2>
          <p>
            Submitting an information request through this website does not constitute a formal insurance application and does not guarantee that you will be approved for insurance coverage or receive specific premium rates. Any rate, quote, coverage amount, or policy issuance is subject to individual underwriting guidelines and decisions made exclusively by issuing insurance carriers and evaluated by licensed agents.
          </p>

          <h2>3. Accuracy of Information Provided</h2>
          <p>
            By submitting information through this website, you represent and warrant that:
          </p>
          <ul>
            <li>You are at least 18 years of age and a resident of the United States.</li>
            <li>All personal and contact details you provide are accurate, truthful, and belong to you.</li>
            <li>You understand that providing false or misleading details may impede or prevent licensed insurance professionals from providing accurate assistance.</li>
          </ul>

          <h2>4. Telephone Consumer Protection Act (TCPA) Consent</h2>
          <p>
            By providing your phone number and submitting our lead inquiry form, you authorize Zinabelle Inc and matched independent insurance agents to contact you via voice telephone calls, automatic dialing mechanisms, text messages (SMS), or pre-recorded messages, even if your phone number is registered on a state or national Do Not Call list. You may revoke consent at any time.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All logos, graphic elements, text content, design layouts, and software code on LifeInsuranceServiceSupport.com are the intellectual property of Zinabelle Inc or used under authorized license. Reproduction, modification, or distribution without prior written consent is strictly prohibited.
          </p>

          <h2>6. Disclaimer of Warranties &amp; Limitation of Liability</h2>
          <p>
            This website and its educational content are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. Under no circumstances shall Zinabelle Inc, its officers, directors, employees, or affiliates be liable for any indirect, incidental, consequential, or punitive damages arising from the use of, or inability to use, this website or interactions with independent third-party insurance agents.
          </p>

          <h2>7. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Florida, without regard to conflicts of law principles.
          </p>

          <h2>8. Operator Contact Details</h2>
          <p>
            If you have questions regarding these Terms and Conditions, please contact us at:
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
