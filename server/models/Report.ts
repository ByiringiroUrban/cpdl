
import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  fileUrl: { type: String },
  fileName: { type: String }
});

export default mongoose.model('Report', reportSchema);
