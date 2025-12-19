const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

router.get('/', async (req, res) => {
  try {
    const topic = req.query.topic;

    let articles;

    if (topic) {
      articles = await Article.find({
        topic: { $regex: new RegExp(`^${topic}$`, 'i') }
      });
    } else {
      articles = await Article.find();
    }

    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;