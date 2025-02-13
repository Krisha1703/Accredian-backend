import prisma from '../config/db.js';

export const createReferral = async (req, res) => {
    try {
        const referralData = req.body;
        const newReferral = await prisma.referral.create({
            data: referralData
        });
        res.status(201).json({ message: "Referral created successfully", newReferral });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create referral" });
    }
};
