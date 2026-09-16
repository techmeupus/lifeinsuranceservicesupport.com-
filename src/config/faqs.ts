export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Is LifeInsuranceServiceSupport.com an insurance company or agency?',
    answer: 'No. LifeInsuranceServiceSupport.com is an independent online lead-generation website owned and operated by Zinabelle Inc. We are not an insurance company, carrier, agency, or underwriter. We do not issue, price, sell, or administer policies. Our role is to connect consumers with appropriately licensed independent insurance agents.'
  },
  {
    question: 'Does it cost anything to request information through this website?',
    answer: 'No. Submitting an information request through LifeInsuranceServiceSupport.com is completely free for consumers. Any premiums or costs associated with an insurance policy are determined solely by the issuing carrier if you decide to purchase coverage through a licensed agent.'
  },
  {
    question: 'Does submitting a request guarantee that I will receive coverage or approved rates?',
    answer: 'No. Submitting a request does not constitute an application for insurance and does not guarantee eligibility, coverage, pricing, or policy issuance. Insurance rates, terms, and approvals are subject to underwriting guidelines established exclusively by insurance carriers and reviewed by licensed agents.'
  },
  {
    question: 'What happens after I submit my information?',
    answer: 'Your information may be referred to an appropriately licensed independent insurance agent authorized to operate in your jurisdiction. The agent will reach out to discuss your coverage goals, answer questions, and present policies that may fit your unique situation.'
  },
  {
    question: 'How do I know which life insurance type is right for me?',
    answer: 'Term life offers coverage for a specific timeframe (e.g., 10–30 years), often making it the most economical choice for families. Permanent life (like whole life) provides lifelong coverage and cash value accumulation. Final expense focuses specifically on end-of-life costs. A licensed independent insurance agent can help evaluate which option matches your budget and goals.'
  }
];
