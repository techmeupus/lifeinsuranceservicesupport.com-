'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'What is a life insurance policy loan?',
    answer: 'A life insurance policy loan is a feature offered on certain permanent life insurance contracts (such as whole life or universal life) allowing the policyholder to borrow funds against the accumulated cash value of the policy. The cash value acts as collateral for the loan.'
  },
  {
    question: 'Can I borrow against my life insurance?',
    answer: 'Possibly. You can only borrow against your policy if you own an eligible permanent life insurance policy that accumulates cash value, has built up sufficient cash value, and allows policy loans under the carrier’s terms. Term life policies do not accumulate cash value and do not offer policy loans.'
  },
  {
    question: 'How much can I borrow from my life insurance policy?',
    answer: 'There is no universal dollar amount. The amount you can borrow typically depends on factors such as your policy’s current cash surrender value, any outstanding policy loans, the insurance carrier’s loan-to-value limits (often between 80% to 90%), and policy provisions.'
  },
  {
    question: 'How do I borrow against my life insurance policy?',
    answer: 'The process generally starts by reviewing your existing policy contract or contacting your insurance carrier to verify whether sufficient cash value is available. If eligible, you submit a policy loan request directly to the carrier. An appropriately licensed insurance professional can help you understand the requirements and implications.'
  },
  {
    question: 'How soon can I borrow against my life insurance?',
    answer: 'Timing varies depending on your policy contract, the amount of premiums paid, and carrier rules. Building sufficient cash value typically takes several years after policy issue, though some specially structured contracts may accumulate cash value more quickly.'
  },
  {
    question: 'Can I borrow against term life insurance?',
    answer: 'Generally, no. Standard term life insurance provides pure death benefit protection for a fixed term (e.g., 10, 20, or 30 years) and does not accumulate cash value. As a result, policy loans are generally not available on term life insurance policies.'
  },
  {
    question: 'Which life insurance policies build cash value?',
    answer: 'Permanent life insurance policies typically build cash value. This includes Whole Life, Universal Life, Indexed Universal Life (IUL), and Variable Universal Life (VUL). Cash value growth mechanisms, interest crediting, and fee structures differ significantly across these policy types.'
  },
  {
    question: 'Does borrowing against life insurance affect the death benefit?',
    answer: 'Yes. Any outstanding loan balance, along with accumulated interest, will generally be deducted from the death benefit payout provided to your beneficiaries upon your death, reducing the net proceeds they receive.'
  },
  {
    question: 'Does a life insurance policy loan have to be repaid?',
    answer: 'Life insurance policy loans generally do not have mandatory monthly repayment schedules like bank loans. However, interest continues to accrue on the outstanding balance. If not repaid during your lifetime, the outstanding principal and interest will be deducted from your death benefit or cash surrender value.'
  },
  {
    question: 'What happens if I don\'t repay a policy loan?',
    answer: 'If an unpaid policy loan and its compounding interest grow to exceed the total remaining cash value of the policy, the policy may lapse (terminate). A policy lapse terminates coverage and may also trigger significant tax consequences on the portion of the cash value that exceeds the total premiums you paid.'
  },
  {
    question: 'Can I access the cash value of my life insurance policy?',
    answer: 'Yes, depending on your contract terms, permanent policyholders can generally access cash value through policy loans, partial withdrawals (surrenders), or by completely surrendering the policy. Each method carries specific impacts on death benefits, cash value growth, and potential taxes.'
  }
];

export default function LoansFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="loans-faq-list">
      {FAQ_DATA.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`loans-faq-item ${isOpen ? 'loans-faq-item-open' : ''}`}
          >
            <button
              type="button"
              className="loans-faq-trigger"
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className="loans-faq-question-text">{item.question}</span>
              <span className="loans-faq-icon-wrapper">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`loans-faq-chevron ${isOpen ? 'loans-faq-chevron-rotated' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="loans-faq-answer"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
