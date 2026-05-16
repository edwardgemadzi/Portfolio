import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, intent } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
    }

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: false,
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      })

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact [${intent}]: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0A1128;">New Contact Form Submission</h2>
            <div style="background: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #E2E8F0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Intent:</strong> ${intent}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px; border: 1px solid #E2E8F0;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <p style="color: #94A3B8; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        `,
      })
    }

    return NextResponse.json({ message: "Message sent successfully. I'll get back to you soon." }, { status: 201 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ message: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
