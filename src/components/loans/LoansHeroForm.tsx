'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/config/site';
import { submitLead } from '@/utils/submitLead';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC'
];

export default function LoansHeroForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    state: '',
    hasPolicy: 'Yes',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setErrorMessage('Please provide your first and last name.');
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
        formType: 'Loans Hero Top Form',
      });

      setSubmitted(true);
    } catch (err: unknown) {
      console.error('Submission error:', err);
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="loans-form-card loans-form-success">
        <div className="loans-success-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
          Request Received
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          Thank you, <strong>{formData.firstName}</strong>. An appropriately licensed insurance professional will contact you at <strong>{formData.phone}</strong> to discuss your policy options.
        </p>
        <div style={{ padding: '1rem', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '0.85rem', color: 'var(--color-text-muted)', textAlign: 'left' }}>
          <strong>Prefer immediate assistance?</strong><br />
          You can call an independent professional directly at{' '}
          <a href={`tel:${SITE_CONFIG.phoneRaw}`} style={{ color: 'var(--color-secondary-dark)', fontWeight: 700 }}>
            {SITE_CONFIG.phone}
          </a>.
        </div>
      </div>
    );
  }

  return (
    <div className="loans-form-card" id="hero-request-form">
      <div className="loans-form-header">
        <div className="loans-form-badge">Free Policy Assessment</div>
        <h3 className="loans-form-title">See What Options May Be Available</h3>
        <p className="loans-form-desc">
          Connect with an appropriately licensed insurance professional who can discuss your existing policy and available options.
        </p>
      </div>

      {errorMessage && (
        <div className="loans-form-error" role="alert">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
            <label htmlFor="hero-firstName" className="loans-label">First Name *</label>
            <input
              type="text"
              id="hero-firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="e.g. John"
              className="loans-input"
            />
          </div>
          <div className="loans-field-group">
            <label htmlFor="hero-lastName" className="loans-label">Last Name *</label>
            <input
              type="text"
              id="hero-lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              placeholder="e.g. Smith"
              className="loans-input"
            />
          </div>
        </div>

        <div className="loans-field-group">
          <label htmlFor="hero-phone" className="loans-label">
            Phone Number * <span style={{ color: 'var(--color-secondary)', fontWeight: 500 }}>(Required for call connection)</span>
          </label>
          <input
            type="tel"
            id="hero-phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="loans-input"
          />
        </div>

        <div className="loans-form-row">
          <div className="loans-field-group">
            <label htmlFor="hero-email" className="loans-label">Email Address *</label>
            <input
              type="email"
              id="hero-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="loans-input"
            />
          </div>
          <div className="loans-field-group">
            <label htmlFor="hero-state" className="loans-label">State *</label>
            <select
              id="hero-state"
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
              className="loans-select"
            >
              <option value="">Select State</option>
              {US_STATES.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="loans-field-group">
          <label className="loans-label">Do you currently have a life insurance policy? *</label>
          <div className="loans-radio-group">
            <label className="loans-radio-label">
              <input
                type="radio"
                name="hasPolicy"
                value="Yes"
                checked={formData.hasPolicy === 'Yes'}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="loans-radio-label">
              <input
                type="radio"
                name="hasPolicy"
                value="No"
                checked={formData.hasPolicy === 'No'}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
            <label className="loans-radio-label">
              <input
                type="radio"
                name="hasPolicy"
                value="Not sure"
                checked={formData.hasPolicy === 'Not sure'}
                onChange={handleChange}
              />
              <span>Not sure</span>
            </label>
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="loans-submit-btn">
          {isSubmitting ? (
            'Submitting...'
          ) : (
            <>
              <span>Request Information</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </>
          )}
        </button>

        <p className="loans-consent-text">
          By submitting this form, you agree that you may be contacted regarding your request by an appropriately licensed insurance professional. Submitting this form does not guarantee eligibility, approval, coverage, or any specific terms.
        </p>
      </form>
    </div>
  );
}
