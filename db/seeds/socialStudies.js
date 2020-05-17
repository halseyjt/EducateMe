const mongoose = require("mongoose");

const socialStudiesSchema = new mongoose.Schema({
  lesson: {
    name: String,
  },
  lessonDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  assignment: {
    name: String,
    studentID: String,
  },
});

module.exports = mongoose.model("socialStudiesLessons", socialStudiesSchema);
