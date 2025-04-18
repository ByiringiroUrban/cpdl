
import express from 'express';
import Stats from '../models/Stats';

const router = express.Router();

// Get current stats
router.get('/', async (req, res) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      stats = new Stats();
      await stats.save();
    }
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stats' });
  }
});

// Update visitor count
router.post('/visitor', async (req, res) => {
  try {
    const stats = await Stats.findOne() || new Stats();
    stats.visitors += 1;
    stats.weeklyGrowth = ((stats.visitors - stats.previousWeekVisitors) / stats.previousWeekVisitors) * 100;
    await stats.save();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Error updating visitor count' });
  }
});

export default router;
