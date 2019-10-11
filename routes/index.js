const express = require('express');
const router = express.Router();
const { upload, resize } = require('../controllers/imageController');

router.get('/', (req, res) => {
  res.send('HELLO');
});
router.post('/upload', upload, resize);

module.exports = router;
