const express = require('express');
const router = express.Router();
const { upload, resize } = require('../controllers/imageController');

router.post('/upload', upload, resize);
