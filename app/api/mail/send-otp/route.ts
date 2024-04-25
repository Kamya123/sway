import { generateOTP } from '@/lib/utils';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Replace these variables with your actual email configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.NEXT_PUBLIC_HOST_EMAIL,
        pass: process.env.NEXT_PUBLIC_HOST_EMAIL_PASSWORD,
    },
});

export async function POST(request: Request) {
    try {
        const { to } = await request.json();
        const OTP = generateOTP();

        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_HOST_EMAIL,
            to,
            subject: 'Your One-Time Password (OTP)',
            text: `You are receiving this email because you requested a one-time password (OTP) for accessing sway. Your OTP is: ${OTP}`,
        });

        return NextResponse.json({
            status: 200,
            message: 'Email sent successfully!',
            otpSent: OTP,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ status: 500, message: 'Failed to send email' });
    }
}
