const mongoose = require("mongoose");

const InspirationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    quote: { type: String, required: true },
    tip: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Inspiration", InspirationSchema);
