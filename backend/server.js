const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// 👇 CONNECT TO *YOUR* DATABASE (echo)
mongoose.connect('mongodb://127.0.0.1:27017/echo')
  .then(() => console.log('MongoDB connected to echo database'))
  .catch(err => console.error(err));

app.use('/api/articles', require('./routes/articleRoutes'));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});