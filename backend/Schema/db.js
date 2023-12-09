const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://hello:9ydQeQ7X7MTkzWkE@cluster0.h3e0ppy.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;