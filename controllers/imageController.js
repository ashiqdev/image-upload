const express = require('express');
const mongoose = require('mongoose');
const Image = mongoose.model('Image');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, cb) {
    const isPhoto = file.mimetype.startsWith('image/');
    // if mimetype starts with the image continue with file uploading
    if (isPhoto) {
      next(null, true);
    } else {
      cb({ message: "That filetype isn't allowed" }, false);
    }
  },
};

exports.upload = multer(multerOptions).single('photo');

exports.resize = async (req, res, next) => {
  if (!req.file) {
    return;
  }
  const extension = req.file.mimetype.split('/')[1];
  const encoded = req.file.buffer.toString('base64');
  req.body.photo = `${encoded}`;

  //resize
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, jimp.AUTO);
  await jimp.read(req.file.buffer);
  // await photo.write(`./public/uploads/${req.body.photo}`);
};
