const express = require("express");
const router = express.Router();
const Inspiration = require("../models/Inspiration");

// Create a new inspiration entry
router.post("/", async (req, res) => {
    try {
        const { userId, quote, tip } = req.body;
        const newEntry = new Inspiration({ userId, quote, tip });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Get all inspiration entries
router.get("/", async (req, res) => {
    try {
        const inspirations = await Inspiration.find();
        res.status(200).json(inspirations);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Update an inspiration entry
router.put("/:id", async (req, res) => {
    try {
        const updatedEntry = await Inspiration.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Delete an inspiration entry
router.delete("/:id", async (req, res) => {
    try {
        await Inspiration.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
