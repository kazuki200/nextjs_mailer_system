import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
    const {name, email, phone, area} = await request.json();

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587',10),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    })

    let mailOptions = {
        from: `"Sender Name" <${process.env.SMTP_USER}>`,
        to: 'recipient@example.com',
        subject: 'フォームの送信',
        text: `名前: ${name}\nメール: ${email}\n電話番号: ${phone}\nエリア: ${area}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'メールが送信されました' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'メールの送信に失敗しました' }, { status: 500 });
    }

}