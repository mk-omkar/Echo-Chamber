const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  topic: String,
  title: String,
  bias: String,
  sentiment: String,
  summary: String,
  fullContent: String,
  sourceLink: String
});

// IMPORTANT: third parameter forces collection name = "data"
module.exports = mongoose.model('Article', ArticleSchema, 'data');