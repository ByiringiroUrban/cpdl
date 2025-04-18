import express from 'express';
import Report from '../models/Report';

const router = express.Router();

// Get all reports
router.get('/', async (req, res) => {
  const reports = await Report.find();
  res.json(reports);
});

// Create new report
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const report = new Report({ title, content });
  await report.save();
  res.status(201).json(report);
});

export default router;
