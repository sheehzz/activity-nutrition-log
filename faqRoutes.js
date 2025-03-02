const express = require("express");
const router = express.Router();
const FAQ = require("../models/FAQ");

// Add a question
router.post("/", async (req, res) => {
  try {
    const newFAQ = new FAQ({ question: req.body.question });
    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all FAQs
router.get("/", async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
