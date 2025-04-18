
import express from 'express';
import Donation from '../models/Donation';
import Stats from '../models/Stats';

const router = express.Router();

// Get all donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching donations' });
  }
});

// Create new donation and update stats
router.post('/', async (req, res) => {
  try {
    const { type, amount, donorName, description, donationType } = req.body;
    const donation = new Donation({
      type,
      amount,
      donorName,
      description,
      donationType
    });
    await donation.save();

    // Update stats for financial donations
    if (type === 'financial' && amount) {
      const stats = await Stats.findOne() || new Stats();
      stats.totalDonations += amount;
      stats.monthlyGrowth = ((amount + stats.totalDonations) - stats.previousMonthDonations) / stats.previousMonthDonations * 100;
      await stats.save();
    }

    res.status(201).json(donation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
