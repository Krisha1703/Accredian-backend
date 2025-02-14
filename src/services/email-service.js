import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const { SENDER_EMAIL, APP_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: SENDER_EMAIL,
        pass: APP_PASSWORD, 
    }
});

// Send Referral Notification Email
const sendReferralNotification = (recipient, referralData) => {
    const { yourFirstName, yourLastName, friendFirstName, friendLastName, major, nicheCourse } = referralData;

    const mailOptions = {
        from: `Accredian Referrals <${SENDER_EMAIL}>`,
        to: recipient,
        subject: 'Thank You for Your Referral! 🎉',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
                <h2 style="color: #3B82F6;">🎉 Thank You for Referring a Friend! 🎉</h2>
                <p>Dear <strong>${yourFirstName} ${yourLastName}</strong>,</p>
                <p>We are thrilled to inform you that you have successfully referred <strong>${friendFirstName} ${friendLastName}</strong> for the <strong>${major}</strong> major with a specialization in <strong>${nicheCourse}</strong>.</p>
                <p style="color: #3B82F6;">We will connect with <strong>${friendFirstName}</strong> shortly to guide them through the registration process. Once they successfully enroll, your referral reward will be credited to your account! 🎁</p>
                <br>
                <p>Thank you for spreading the word and helping your friends discover exciting learning opportunities with <strong>Accredian</strong>.</p>
                <p style="color: #555;">Stay connected and keep referring to earn more rewards!</p>
                <p style="color: #3B82F6; font-weight: bold;">With gratitude,<br>Accredian Team</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 12px; color: #999;">This is an automated email. Please do not reply.</p>
            </div>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error in sending email: ' + error);
            return false;
        } else {
            console.log('Email sent: ' + info.response);
            return true;
        }
    });
};

export { sendReferralNotification };
