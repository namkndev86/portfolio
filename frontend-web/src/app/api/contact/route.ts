import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // In production, trigger email service (e.g. Resend, SendGrid, SES) or save to CMS
    console.log('Received Contact Submission:', { name, email, subject, message, timestamp: new Date().toISOString() });

    return NextResponse.json({ success: true, message: 'Inquiry received successfully' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
