import React from 'react';
import Hero from '@/components/Hero';
import InsuranceOptions from '@/components/InsuranceOptions';
import HowItWorks from '@/components/HowItWorks';
import LeadGenTransparency from '@/components/LeadGenTransparency';
import WhyChooseUs from '@/components/WhyChooseUs';
import CallToAction from '@/components/CallToAction';
import FaqSection from '@/components/FaqSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Understand Your Life Insurance Options */}
      <InsuranceOptions />

      {/* 3. How Our Service Works */}
      <HowItWorks />

      {/* 4. An Independent Life Insurance Lead-Generation Service */}
      <LeadGenTransparency />

      {/* 5. Why Use LifeInsuranceServiceSupport.com? */}
      <WhyChooseUs />

      {/* 6. Looking for Information About Life Insurance? (CTA Banner) */}
      <CallToAction />

      {/* 7. Common Questions (FAQ Accordion with Schema) */}
      <FaqSection />
    </>
  );
}
