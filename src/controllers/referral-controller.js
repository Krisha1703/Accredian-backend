import prisma from '../config/db.js';
import { sendReferralNotification } from '../services/email-service.js';

const createReferral = async (req, res) => {
    try {
        const referralData = req.body;

        // Check if the referrer and referee are the same person
        if (referralData.yourEmail === referralData.friendEmail) {
            return res.status(400).json({ error: "You cannot refer yourself." });
        }

        // Check if the referrer has already referred the same course to the same person
        const existingReferral = await prisma.referral.findFirst({
            where: {
                yourEmail: referralData.yourEmail,
                friendEmail: referralData.friendEmail,
                major: referralData.major,
                nicheCourse: referralData.nicheCourse,
            },
        });

        if (existingReferral) {
            return res.status(400).json({ error: "You have already referred this course to this person." });
        }

        // Create the new referral
        const newReferral = await prisma.referral.create({
            data: referralData,
        });

        // Send Email Notification
        const recipient = referralData.yourEmail;
        sendReferralNotification(recipient, referralData);
        res.status(201).json({ message: "Referral created and email sent successfully", newReferral });
    }
     catch (error) {
        res.status(500).json({ error: error.message || "Failed to create referral" });
    }
};

export { createReferral };
