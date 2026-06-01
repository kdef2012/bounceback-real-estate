import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // In a real application, you would integrate with an email provider here (e.g., Resend, SendGrid)
    // or insert this data into your CRM/Database.
    
    console.log('Received Contact Submission:', data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to process request.' }, { status: 500 });
  }
}
