const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  startDate: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["0", "1", "2"],
    default: "1",
  },
  tags: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Task", taskSchema);
