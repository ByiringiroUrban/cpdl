
import express from 'express';
import multer from 'multer';
import path from 'path';
import Report from '../models/Report';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx', '.txt'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

// Get all reports
router.get('/', async (req, res) => {
  const reports = await Report.find().sort({ createdAt: -1 });
  res.json(reports);
});

// Create new report with file upload
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const { title, content } = req.body;
    const report = new Report({
      title,
      content,
      fileUrl: req.file ? `/uploads/${req.file.filename}` : undefined,
      fileName: req.file ? req.file.originalname : undefined
    });
    await report.save();
    res.status(201).json(report);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred.' });
    }
  }
});


export default router;
