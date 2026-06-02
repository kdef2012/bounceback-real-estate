import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;
    
    // Resend requires a verified domain to send FROM, but we can always send TO any address if the domain is verified,
    // or if unverified, we can only send TO the email registered with Resend.
    // For this prototype, we'll send it to Valerie's email from onboarding@resend.dev
    
    const { data: emailData, error } = await resend.emails.send({
      from: 'Bounceback Leads <onboarding@resend.dev>',
      to: 'vjamesis@outlook.com', // Valerie's email from the prompt
      subject: `New Lead: ${name} from Bounceback Real Estate`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 });
  }
}
