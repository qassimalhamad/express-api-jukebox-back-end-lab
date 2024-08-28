const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

const app = express();
const mongoose = require('mongoose');

const trackRouter = require('./controllers/tracks.js');

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());

app.use('/tracks', trackRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
