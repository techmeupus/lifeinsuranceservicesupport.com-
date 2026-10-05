'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';
import { submitLead } from '@/utils/submitLead';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC'
];

const HELP_OPTIONS = [
  'Understanding my policy',
  'Understanding policy loan options',
  'Accessing cash value',
  'Reviewing my coverage',
  'Other'
];

export default function LoansFullForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    state: '',
    hasLifeInsurance: 'Yes',
    helpTopics: ['Understanding policy loan options'] as string[],
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxToggle = (topic: string) => {
    setFormData((prev) => {
      const exists = prev.helpTopics.includes(topic);
      if (exists) {
        return {
          ...prev,
          helpTopics: prev.helpTopics.filter((t) => t !== topic),
        };
      } else {
        return {
          ...prev,
          helpTopics: [...prev.helpTopics, topic],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setErrorMessage('Please enter your first and last name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number (required).');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.state) {
      setErrorMessage('Please select your state.');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitLead({
        ...formData,
        formType: 'Loans Section 6 Full Form',
      });

      setSubmitted(true);
    } catch (err: unknown) {
      console.error('Full form submission error:', err);
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred while submitting your information. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="loans-fullform-card loans-form-success" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
        <div className="loans-success-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
          Thank You, {formData.firstName}!
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Your request has been received. An appropriately licensed insurance professional may contact you at <strong>{formData.phone}</strong> to discuss your situation and explain available policy options.
        </p>
        <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', display: 'inline-block', textAlign: 'left' }}>
          <div style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>
            Need Immediate Policy Details?
          </div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            Call toll-free: <a href={`tel:${SITE_CONFIG.phoneRaw}`} style={{ color: 'var(--color-secondary-dark)', fontWeight: 700 }}>{SITE_CONFIG.phone}</a> ({SITE_CONFIG.operatingHours})
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="loans-fullform-card" id="request-info-form">
      <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
          Request Information
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>
          Fill out the form below to connect with an appropriately licensed insurance professional.
        </p>
      </div>

      {errorMessage && (
        <div className="loans-form-error" role="alert">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="loans-form-body">
        <div className="loans-form-row">
          <div className="loans-field-group">
            <label htmlFor="full-firstName" className="loans-label">First Name *</label>
            <input
              type="text"
              id="full-firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="loans-input"
            />
          </div>
          <div className="loans-field-group">
            <label htmlFor="full-lastName" className="loans-label">Last Name *</label>
            <input
              type="text"
              id="full-lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="loans-input"
            />
          </div>
        </div>

        <div className="loans-form-row">
          <div className="loans-field-group">
            <label htmlFor="full-phone" className="loans-label">
              Phone Number *
            </label>
            <input
              type="tel"
              id="full-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(555) 000-0000"
              className="loans-input"
            />
          </div>
          <div className="loans-field-group">
            <label htmlFor="full-email" className="loans-label">Email Address *</label>
            <input
              type="email"
              id="full-email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@example.com"
              className="loans-input"
            />
          </div>
        </div>

        <div className="loans-field-group">
          <label htmlFor="full-state" className="loans-label">State *</label>
          <select
            id="full-state"
            name="state"
            required
            value={formData.state}
            onChange={handleInputChange}
            className="loans-select"
          >
            <option value="">Select State</option>
            {US_STATES.map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>

        <div className="loans-field-group">
          <label className="loans-label">Do you currently have life insurance? *</label>
          <div className="loans-radio-group">
            <label className="loans-radio-label">
              <input
                type="radio"
                name="hasLifeInsurance"
                value="Yes"
                checked={formData.hasLifeInsurance === 'Yes'}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </label>
            <label className="loans-radio-label">
              <input
                type="radio"
                name="hasLifeInsurance"
                value="No"
                checked={formData.hasLifeInsurance === 'No'}
                onChange={handleInputChange}
              />
              <span>No</span>
            </label>
            <label className="loans-radio-label">
              <input
                type="radio"
                name="hasLifeInsurance"
                value="Not sure"
                checked={formData.hasLifeInsurance === 'Not sure'}
                onChange={handleInputChange}
              />
              <span>Not sure</span>
            </label>
          </div>
        </div>

        <div className="loans-field-group">
          <label className="loans-label">What would you like help with?</label>
          <div className="loans-checkbox-grid">
            {HELP_OPTIONS.map((topic) => (
              <label key={topic} className="loans-checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.helpTopics.includes(topic)}
                  onChange={() => handleCheckboxToggle(topic)}
                />
                <span>{topic}</span>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="loans-submit-btn" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
          {isSubmitting ? (
            'Submitting Information...'
          ) : (
            <>
              <span>Request Information</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </>
          )}
        </button>

        <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
          <p className="loans-consent-text" style={{ maxWidth: '640px', margin: '0 auto 0.75rem' }}>
            By submitting this form, you agree that you may be contacted regarding your request by an appropriately licensed insurance professional. Submitting this form does not guarantee eligibility, approval, coverage, or any specific terms.
          </p>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-light)', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/privacy-policy" style={{ color: 'var(--color-secondary-dark)', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" style={{ color: 'var(--color-secondary-dark)', textDecoration: 'underline' }}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
