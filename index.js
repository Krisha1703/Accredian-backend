import dotenv from 'dotenv';
import express from 'express';
import referralRoutes from './src/routes/referral-routes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.URL?.split(',') || ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));


app.use(express.json());
app.use('/api', referralRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
