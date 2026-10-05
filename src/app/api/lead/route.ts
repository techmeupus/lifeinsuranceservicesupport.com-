import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      phone,
      email,
      state,
      hasPolicy,
      hasLifeInsurance,
      helpTopics,
      formType = 'Loans Landing Page Form',
    } = body;

    // Validation
    if (!firstName || !lastName) {
      return NextResponse.json(
        { success: false, error: 'First and last name are required.' },
        { status: 400 }
      );
    }

    if (!phone || phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json(
        { success: false, error: 'A valid 10-digit phone number is required.' },
        { status: 400 }
      );
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const submissionPayload = {
      timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      phone: String(phone).trim(),
      email: String(email).trim(),
      state: String(state || '').trim(),
      hasInsurance: String(hasPolicy || hasLifeInsurance || 'Not specified').trim(),
      helpTopics: Array.isArray(helpTopics) ? helpTopics.join(', ') : String(helpTopics || 'None specified'),
      formType: String(formType),
      pageUrl: request.headers.get('referer') || 'https://lifeinsuranceservicesupport.com/loans',
    };

    const DEFAULT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwSBsMr_BYXZkwcPwCKEsl9i565G9839Lpgky-w8IxCHk82wWiXn4h-Gy3AFc4DARSf4Q/exec';
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

    console.log('[Lead Submission] Sending to Google Sheets Webhook:', googleSheetWebhookUrl);
    console.log('[Lead Submission] Payload:', submissionPayload);

    if (googleSheetWebhookUrl) {
      try {
        // Google Apps Script accepts text/plain to avoid CORS & redirect payload stripping
        const sheetResponse = await fetch(googleSheetWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(submissionPayload),
          redirect: 'follow',
        });

        const responseText = await sheetResponse.text();
        console.log('[Lead Submission] Google Sheets Response Status:', sheetResponse.status);
        console.log('[Lead Submission] Google Sheets Response Body:', responseText);

        if (!sheetResponse.ok) {
          console.error('[Lead Submission] Google Sheets Webhook returned non-200:', sheetResponse.status, responseText);
        }
      } catch (webhookError) {
        console.error('[Lead Submission] Error forwarding to Google Sheet:', webhookError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Lead recorded successfully.',
    });
  } catch (error) {
    console.error('Error in /api/lead route:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing request.' },
      { status: 500 }
    );
  }
}
