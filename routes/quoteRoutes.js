const express = require("express");
const Quote = require("../models/Quote");

const router = express.Router();

// Add a quote
router.post("/add", async (req, res) => {
    const { text, author, userId } = req.body;
    const quote = new Quote({ text, author, userId });
    await quote.save();
    res.json(quote);
});

// Get user’s favorite quotes
router.get("/:userId", async (req, res) => {
    const quotes = await Quote.find({ userId: req.params.userId });
    res.json(quotes);
});

module.exports = router;
