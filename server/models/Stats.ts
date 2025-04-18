
import mongoose from 'mongoose';

const statsSchema = new mongoose.Schema({
  totalDonations: { type: Number, default: 0 },
  previousMonthDonations: { type: Number, default: 0 },
  monthlyGrowth: { type: Number, default: 0 },
  visitors: { type: Number, default: 0 },
  previousWeekVisitors: { type: Number, default: 0 },
  weeklyGrowth: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Stats', statsSchema);
