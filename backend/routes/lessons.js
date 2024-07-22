const express = require('express');
const router = express.Router();
const multer = require('multer');
const Lesson = require('../models/Lesson');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

router.post('/new', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const { title, academicYear } = req.body;

    const newLesson = new Lesson({
      title: title || file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      uploadDate: new Date(),
      expiredDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), 
      academicYear: academicYear || 'Unknown',  
      });

    await newLesson.save();
    res.json('New Lesson added successfully!');
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to add new lesson' });
  }
});

router.get('/', async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to fetch lessons' });
  }
});

router.put('/update/:id', upload.single('file'), async (req, res) => {
  try {
    const lessonId = req.params.id;
    const file = req.file;
    const { title, academicYear } = req.body;

    const updatedLesson = {
      title: title || file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      uploadDate: new Date(),
      expiredDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      academicYear: academicYear || 'Unknown',
    };

    await Lesson.findByIdAndUpdate(lessonId, updatedLesson);
    res.status(200).send({ status: 'Update Successful!' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to update lesson' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const lessonId = req.params.id;

    await Lesson.findByIdAndDelete(lessonId);
    res.status(200).send({ status: 'Delete Successful!' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to delete lesson' });
  }
});

router.get('/get/:id', async (req, res) => {
  try {
    const lessonId = req.params.id;

    const lesson = await Lesson.findById(lessonId);
    res.status(200).send({ status: 'Fetch Successful!', lesson });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to fetch lesson' });
  }
});

module.exports = router;
