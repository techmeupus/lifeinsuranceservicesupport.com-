import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';
import LoansHeroForm from '@/components/loans/LoansHeroForm';
import LoansFullForm from '@/components/loans/LoansFullForm';
import LoansFaqAccordion from '@/components/loans/LoansFaqAccordion';

export const metadata: Metadata = {
  title: 'Can You Borrow Against Your Life Insurance Policy? | Policy Loan Information',
  description: 'Learn how life insurance policy loans work, whether your permanent policy may have cash value options, and connect with appropriately licensed insurance professionals.',
  keywords: [
    'borrow against life insurance',
    'life insurance policy loan',
    'cash value life insurance loan',
    'borrow from whole life insurance',
    'borrow from universal life insurance',
    'can you borrow against life insurance',
    'how to take a loan from life insurance',
    'life insurance cash value borrowing'
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/loans`,
  },
  openGraph: {
    title: 'Can You Borrow Against Your Life Insurance Policy? | LifeInsuranceServiceSupport.com',
    description: 'Learn if your permanent life insurance policy qualifies for cash value borrowing. Connect with appropriately licensed insurance professionals.',
    url: `${SITE_CONFIG.url}/loans`,
    type: 'website',
  },
};

const FAQ_SCHEMA_DATA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a life insurance policy loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A life insurance policy loan is a feature offered on certain permanent life insurance contracts (such as whole life or universal life) allowing the policyholder to borrow funds against the accumulated cash value of the policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I borrow against my life insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Possibly. You can only borrow against your policy if you own an eligible permanent life insurance policy that accumulates cash value, has built up sufficient cash value, and allows policy loans under the carrier’s terms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I borrow from my life insurance policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no universal dollar amount. The amount you can borrow typically depends on factors such as your policy’s current cash surrender value, any outstanding policy loans, and the insurance carrier’s loan-to-value limits.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I borrow against my life insurance policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The process generally starts by reviewing your existing policy contract or contacting your insurance carrier to verify whether sufficient cash value is available, then submitting a policy loan request directly to the carrier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I borrow against term life insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally, no. Standard term life insurance provides pure death benefit protection for a fixed term and does not accumulate cash value, so policy loans are not available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does borrowing against life insurance affect the death benefit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Any outstanding loan balance, along with accumulated interest, will generally be deducted from the death benefit payout provided to your beneficiaries upon your death.',
      },
    }
  ],
};

export default function LoansLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_DATA) }}
      />

      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="loans-hero-section">
        <div className="container">
          <div className="loans-hero-grid">
            {/* Left Hero Content */}
            <div className="loans-hero-content">
              <div className="loans-badge-pill">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>Educational Policy Loan Resource</span>
              </div>

              <h1 className="loans-hero-title">
                Can You Borrow Against Your Life Insurance Policy?
              </h1>

              <p className="loans-hero-subheadline">
                If you have a qualifying permanent life insurance policy with cash value, you may have options for accessing funds. Learn more about how policy loans work and whether your policy may qualify.
              </p>

              <div className="loans-hero-cta-box">
                <a href="#hero-request-form" className="loans-btn-primary">
                  <span>See What Options May Be Available</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <p className="loans-hero-supporting-text">
                  Connect with an appropriately licensed insurance professional who can discuss your existing policy and available options.
                </p>
              </div>

              {/* Direct Phone Call Alternative Pill */}
              <div className="loans-hero-phone-strip">
                <div className="loans-hero-phone-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Prefer to speak on the phone?
                  </div>
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="loans-hero-phone-link">
                    Call to Learn More: {SITE_CONFIG.phone}
                  </a>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', marginTop: '0.15rem' }}>
                    Toll-Free • {SITE_CONFIG.operatingHours} • No Obligation
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Lead Form */}
            <div>
              <LoansHeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. IMMEDIATE TRUST / DISCLAIMER SECTION (Close to Hero)
          ========================================================================= */}
      <section className="loans-trust-section">
        <div className="container">
          <div className="loans-trust-card">
            <div className="loans-trust-header">
              <div className="loans-trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h2 className="loans-trust-title">Independent Information &amp; Connection Service</h2>
            </div>

            <div className="loans-trust-body">
              <p className="loans-trust-highlight">
                <strong>LifeInsuranceServiceSupport.com is owned and operated by Zinabelle Inc.</strong>
              </p>
              <p>
                Zinabelle Inc. operates this website as an independent online lead-generation service. We help connect consumers with appropriately licensed independent insurance professionals.
              </p>
              <p>
                <strong>Zinabelle Inc. is not an insurance agency, insurance carrier, lender, or financial institution.</strong> We do not issue, underwrite, approve, price, sell, or administer insurance policies or provide loans.
              </p>
              <p>
                <strong>Zinabelle Inc. is not directly affiliated with, sponsored by, endorsed by, or operated by any insurance carrier.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. EXPLAIN THE ACTUAL TOPIC
          ========================================================================= */}
      <section className="loans-topic-section">
        <div className="container-narrow">
          <div className="loans-section-intro">
            <div className="loans-sub-pill">Educational Guide</div>
            <h2 className="loans-section-heading">Can You Borrow Money From a Life Insurance Policy?</h2>
          </div>

          <div className="loans-topic-card">
            <p className="loans-topic-lead">
              Some permanent life insurance policies that accumulate cash value may allow the policy owner to access funds through a policy loan or other available policy feature.
            </p>
            <p className="loans-topic-text">
              Whether this is available depends on the type of policy, its cash value, policy provisions, insurer requirements, and other factors.
            </p>
            <p className="loans-topic-text">
              A licensed insurance professional can help you understand your policy and explain what options may be available.
            </p>

            <div className="loans-important-box">
              <div className="loans-important-header">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>Important Distinction</span>
              </div>
              <p className="loans-important-content">
                A life insurance policy loan is generally different from applying for a traditional personal loan. Availability and terms depend on the specific policy and insurance carrier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. TARGET THE KEYWORD QUESTIONS DIRECTLY
          ========================================================================= */}
      <section className="loans-keywords-section">
        <div className="container">
          <div className="loans-section-intro">
            <div className="loans-sub-pill">Policy Loan Insights</div>
            <h2 className="loans-section-heading">Common Questions About Borrowing Against Life Insurance</h2>
            <p className="loans-section-subtext">
              Key facts you need to know about accessing funds through a permanent life insurance contract.
            </p>
          </div>

          <div className="loans-keywords-grid">
            {/* Question 1 */}
            <div className="loans-keyword-card">
              <div className="loans-keyword-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="loans-keyword-title">Can I borrow from my life insurance policy?</h3>
              <p className="loans-keyword-answer">
                Possibly. Certain permanent life insurance policies may accumulate cash value that can potentially be accessed through a policy loan. Your policy type and current policy values determine whether this option is available.
              </p>
            </div>

            {/* Question 2 */}
            <div className="loans-keyword-card">
              <div className="loans-keyword-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="loans-keyword-title">How do I borrow against my life insurance policy?</h3>
              <p className="loans-keyword-answer">
                The process generally starts by reviewing your existing policy to determine whether it has cash value and whether the policy permits borrowing. The insurance carrier&apos;s policy terms and procedures will determine the available options.
              </p>
            </div>

            {/* Question 3 */}
            <div className="loans-keyword-card">
              <div className="loans-keyword-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="loans-keyword-title">How much can I borrow from my life insurance policy?</h3>
              <p className="loans-keyword-answer">
                There is no universal amount. The amount available may depend on factors such as your policy&apos;s cash value, outstanding policy loans, policy terms, and the insurance carrier&apos;s requirements.
              </p>
            </div>

            {/* Question 4 */}
            <div className="loans-keyword-card">
              <div className="loans-keyword-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="loans-keyword-title">How soon can I borrow from my life insurance policy?</h3>
              <p className="loans-keyword-answer">
                Timing varies depending on the policy and insurance carrier. A licensed insurance professional can help you understand the process applicable to your policy.
              </p>
            </div>

            {/* Question 5 */}
            <div className="loans-keyword-card">
              <div className="loans-keyword-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="loans-keyword-title">Can I take a loan from my life insurance?</h3>
              <p className="loans-keyword-answer">
                If you have an eligible permanent life insurance policy with sufficient cash value, a policy loan may be an option. Not all life insurance policies have this feature.
              </p>
            </div>

            {/* Question 6 */}
            <div className="loans-keyword-card">
              <div className="loans-keyword-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="loans-keyword-title">What type of life insurance can you borrow against?</h3>
              <p className="loans-keyword-answer">
                Policy loans are generally associated with permanent life insurance policies that build cash value, rather than typical term life insurance policies. Your specific policy documents determine what options are available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. VERY IMPORTANT DISTINCTION (Comparison Table)
          ========================================================================= */}
      <section className="loans-table-section">
        <div className="container">
          <div className="loans-section-intro">
            <div className="loans-sub-pill">Policy Comparison</div>
            <h2 className="loans-section-heading">Does Your Life Insurance Policy Have Cash Value?</h2>
            <p className="loans-section-subtext">
              Understanding the difference between term coverage and cash-value permanent coverage is essential before exploring loan options.
            </p>
          </div>

          <div className="loans-table-wrapper">
            <table className="loans-comparison-table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '40%' }}>Policy Type</th>
                  <th scope="col" style={{ width: '30%' }}>May Have Cash Value?</th>
                  <th scope="col" style={{ width: '30%' }}>Policy Loan May Be Available?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Term Life Insurance</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', marginTop: '0.2rem' }}>
                      Pure death benefit protection for a fixed number of years.
                    </div>
                  </td>
                  <td>
                    <span className="loans-tag loans-tag-no">Generally no</span>
                  </td>
                  <td>
                    <span className="loans-tag loans-tag-no">Generally no</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Whole Life Insurance</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', marginTop: '0.2rem' }}>
                      Permanent coverage with guaranteed level premiums and cash value growth.
                    </div>
                  </td>
                  <td>
                    <span className="loans-tag loans-tag-yes">Yes</span>
                  </td>
                  <td>
                    <span className="loans-tag loans-tag-potential">Potentially</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Universal Life Insurance</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', marginTop: '0.2rem' }}>
                      Flexible permanent coverage with adjustable premiums and interest accumulation.
                    </div>
                  </td>
                  <td>
                    <span className="loans-tag loans-tag-yes">Yes</span>
                  </td>
                  <td>
                    <span className="loans-tag loans-tag-potential">Potentially</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Variable Life Insurance</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', marginTop: '0.2rem' }}>
                      Permanent coverage with cash value tied to investment sub-accounts.
                    </div>
                  </td>
                  <td>
                    <span className="loans-tag loans-tag-yes">Yes</span>
                  </td>
                  <td>
                    <span className="loans-tag loans-tag-potential">Potentially</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Other Permanent Policies</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', marginTop: '0.2rem' }}>
                      Indexed universal life (IUL), survivorship, or specialized permanent contracts.
                    </div>
                  </td>
                  <td>
                    <span className="loans-tag loans-tag-depends">Depends on policy</span>
                  </td>
                  <td>
                    <span className="loans-tag loans-tag-depends">Depends on policy</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="loans-table-note">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--color-primary)' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>
              <strong>Note:</strong> Policy features vary by carrier and contract. Review your policy documents or speak with an appropriately licensed insurance professional for information about your specific policy.
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. LEAD-GENERATION SECTION (Detailed Form)
          ========================================================================= */}
      <section className="loans-fullform-section">
        <div className="container-narrow">
          <div className="loans-section-intro">
            <div className="loans-sub-pill">Get Expert Insights</div>
            <h2 className="loans-section-heading">Want to Understand Your Policy Options?</h2>
            <p className="loans-section-subtext" style={{ maxWidth: '620px', margin: '0 auto 0.75rem' }}>
              If you already have a life insurance policy and want to learn whether it may provide access to cash value, submit your information below.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
              An appropriately licensed insurance professional may contact you to discuss your situation and available policy options.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <LoansFullForm />
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PHONE CTA SECTION
          ========================================================================= */}
      <section className="loans-phone-cta-section">
        <div className="container">
          <div className="loans-phone-card">
            <div className="loans-phone-badge">Direct Phone Connection</div>
            <h2 className="loans-phone-title">Prefer to Speak With Someone?</h2>
            <p className="loans-phone-subtitle">
              Have questions about your existing life insurance policy?
            </p>

            <div style={{ margin: '1.75rem 0 1rem' }}>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="loans-btn-phone">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Call to Learn More: {SITE_CONFIG.phone}</span>
              </a>
            </div>

            <p className="loans-phone-desc">
              Speak with an appropriately licensed insurance professional about your policy and available options.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.25rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <span>✓ Toll-Free Number</span>
              <span>• {SITE_CONFIG.operatingHours}</span>
              <span>• No Obligation Connection</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. HOW IT WORKS
          ========================================================================= */}
      <section className="loans-how-it-works-section">
        <div className="container">
          <div className="loans-section-intro">
            <div className="loans-sub-pill">Simple 3-Step Process</div>
            <h2 className="loans-section-heading">How It Works</h2>
            <p className="loans-section-subtext">
              We make it straightforward to connect with licensed professionals who can evaluate your life insurance options.
            </p>
          </div>

          <div className="loans-steps-grid">
            {/* Step 1 */}
            <div className="loans-step-card">
              <div className="loans-step-number">1</div>
              <h3 className="loans-step-title">Tell Us About Your Request</h3>
              <p className="loans-step-desc">
                Provide some basic information about your existing life insurance policy and what you&apos;d like to learn.
              </p>
            </div>

            {/* Step 2 */}
            <div className="loans-step-card">
              <div className="loans-step-number">2</div>
              <h3 className="loans-step-title">Submit Your Contact Information</h3>
              <p className="loans-step-desc">
                We&apos;ll use the information you provide to help facilitate a connection with an appropriately licensed insurance professional.
              </p>
            </div>

            {/* Step 3 */}
            <div className="loans-step-card">
              <div className="loans-step-number">3</div>
              <h3 className="loans-step-title">Discuss Your Options</h3>
              <p className="loans-step-desc">
                A licensed professional can discuss your policy and explain options that may be available based on your individual circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. STRONG FAQ SECTION
          ========================================================================= */}
      <section className="loans-faq-section">
        <div className="container-narrow">
          <div className="loans-section-intro">
            <div className="loans-sub-pill">Answers &amp; Clarity</div>
            <h2 className="loans-section-heading">Frequently Asked Questions</h2>
            <p className="loans-section-subtext">
              Detailed answers regarding life insurance policy loans, cash value accumulation, and financial considerations.
            </p>
          </div>

          <LoansFaqAccordion />
        </div>
      </section>

      {/* =========================================================================
          10. FINAL LEGAL / BUSINESS DISCLOSURE
          ========================================================================= */}
      <section className="loans-disclosure-section">
        <div className="container">
          <div className="loans-disclosure-card">
            <h3 className="loans-disclosure-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-secondary)' }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>About LifeInsuranceServiceSupport.com</span>
            </h3>

            <div className="loans-disclosure-content">
              <p>
                <strong>LifeInsuranceServiceSupport.com is owned and operated by Zinabelle Inc.</strong>
              </p>
              <p>
                LifeInsuranceServiceSupport.com is an independent online lead-generation website that helps connect consumers with appropriately licensed independent insurance professionals.
              </p>
              <p>
                <strong>Zinabelle Inc. is not an insurance agency, insurance carrier, lender, or financial institution.</strong> Zinabelle Inc. does not issue, underwrite, approve, price, sell, administer, or provide insurance policies or loans.
              </p>
              <p>
                <strong>Zinabelle Inc. is not directly affiliated with, sponsored by, endorsed by, or operated by any insurance carrier.</strong>
              </p>
              <p>
                Zinabelle Inc. does not represent itself as an insurance carrier or as the official website, customer-service department, claims department, or policy-service department of any insurance carrier.
              </p>
              <p>
                Insurance availability, eligibility, premiums, coverage amounts, policy terms, exclusions, and underwriting requirements vary based on the consumer, state, insurance carrier, policy, and other applicable factors.
              </p>
              <p>
                <strong>Submitting a request, providing information, or calling through this website does not guarantee insurance coverage, approval, access to cash value, a policy loan, or any specific pricing or terms.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. FOOTER (Standalone Landing Page Footer)
          ========================================================================= */}
      <footer className="loans-standalone-footer">
        <div className="container">
          <div className="loans-footer-top">
            <div>
              <div className="loans-footer-brand">LifeInsuranceServiceSupport.com</div>
              <div className="loans-footer-subbrand">Owned and operated by Zinabelle Inc.</div>
            </div>

            <nav className="loans-footer-nav" aria-label="Footer Legal Links">
              <Link href="/about-us" className="loans-footer-link">About Us</Link>
              <span className="loans-footer-divider">•</span>
              <Link href="/contact-us" className="loans-footer-link">Contact Us</Link>
              <span className="loans-footer-divider">•</span>
              <Link href="/privacy-policy" className="loans-footer-link">Privacy Policy</Link>
              <span className="loans-footer-divider">•</span>
              <Link href="/terms-and-conditions" className="loans-footer-link">Terms &amp; Conditions</Link>
            </nav>
          </div>

          <div className="loans-footer-copyright">
            <p>&copy; {SITE_CONFIG.year} Zinabelle Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
