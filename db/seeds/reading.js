const mongoose = require ('mongoose');

const readingSchema = new mongoose.Schema({
  date: String,
  lesson: [
    {
      name: String,
      book: 
      assignment: [String],
      submitted: bolean,
    },
  ],
});