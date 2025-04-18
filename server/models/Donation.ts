
import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  type: { type: String, required: true }, // 'financial' or 'other'
  amount: { type: Number }, // for financial donations
  donorName: { type: String, required: true },
  description: { type: String },
  donationType: { type: String }, // for non-financial donations (material, volunteer, etc)
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Donation', donationSchema);
