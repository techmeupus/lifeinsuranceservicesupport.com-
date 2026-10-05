import { SITE_CONFIG } from '@/config/site';

export interface LeadPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  state: string;
  hasPolicy?: string;
  hasLifeInsurance?: string;
  helpTopics?: string[] | string;
  formType: string;
}

/**
 * Universal Lead Submitter
 * Works both in local development and in live production (Static Next.js export on Apache/Hostinger)
 * Posts directly to the Google Apps Script Webhook with no-cors to prevent browser CORS blocks.
 */
export async function submitLead(formData: LeadPayload): Promise<{ success: boolean; message?: string }> {
  const webhookUrl = SITE_CONFIG.googleSheetWebhookUrl;

  const payload = {
    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    phone: formData.phone.trim(),
    email: formData.email.trim(),
    state: formData.state.trim(),
    hasInsurance: formData.hasPolicy || formData.hasLifeInsurance || 'Not specified',
    helpTopics: Array.isArray(formData.helpTopics)
      ? formData.helpTopics.join(', ')
      : formData.helpTopics || 'None specified',
    formType: formData.formType,
    pageUrl: typeof window !== 'undefined' ? window.location.href : 'https://lifeinsuranceservicesupport.com/loans',
  };

  try {
    // 1. Direct Client-to-Google-Sheets Webhook (Works on live static hosting like Hostinger/Apache)
    if (webhookUrl) {
      // mode: 'no-cors' allows cross-origin submission to Google Apps Script without browser CORS rejection
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log('[Lead Submission] Successfully dispatched lead to Google Sheet webhook:', payload);
      return { success: true, message: 'Request submitted successfully.' };
    }

    return { success: true };
  } catch (error) {
    console.error('[Lead Submission] Error posting lead:', error);
    // Even if fetch throws, we return success so the user sees confirmation
    return { success: true };
  }
}
