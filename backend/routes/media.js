const express = require('express');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const upload = require('../controllers/mediaController');
const Media = require('../models/mediaModel');
require('dotenv').config()


const router = express.Router();

// Create mongo connection
const conn = mongoose.createConnection(process.env.MONGO_URI);

// Init gfs
let gfs;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// @route POST /upload
// @desc Uploads file to DB
router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  const newMedia = new Media({
    filename: req.file.filename,
    person: req.body.person,
    event: req.body.event,
    mediaType: req.body.mediaType,
    fileId: req.file.id
  });

  newMedia.save()
    .then(media => res.json(media))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route GET /files/:filename
// @desc Display single file object
router.get('/files/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    return res.json(file);
  });
});

// @route GET /image/:filename
// @desc Display Image
router.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});

module.exports = router;