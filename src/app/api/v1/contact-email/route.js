import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
export async function POST(request) {

    try {
        const {name, email, subject, message} = await request.json();
         // Create a transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: "mail.geniuscareerhub.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER, 
                pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
            },
        });
         // Set up email data
        const mailOptions = {
            from: email,
            to: process.env.NEXT_PUBLIC_EMAIL_TO,
            subject: `${subject} by ${name}`,
            // text: message, // plain text body
            html: `<p>${message} </br> by ${email}</p>`, // html body
        };
        await transporter.sendMail(mailOptions)

        
        return NextResponse.json({
            message : 'Successfully sent your message',
            status : 200,
            success : true,            
        })    
    } catch (error) {
        return NextResponse.json({
            message : "Something went wrong",
            status : 500,
            success : false
        })
    }
}