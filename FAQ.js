const mongoose = require("mongoose");

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String },
});

module.exports = mongoose.model("FAQ", FAQSchema);
