const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  waterIntake: Number,
  steps: Number,
  caloriesIntake: Number,
  caloriesBurnt: Number,
  sleepDuration: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Log", LogSchema);
