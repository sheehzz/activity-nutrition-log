const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("../models/User");

const router = express.Router();

// Generate Reset Token and Send Email
router.post("/reset-password", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });

        // Send Reset Email
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "Password Reset",
            text: `Click the link to reset your password: http://localhost:3000/reset/${token}`,
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: "Reset link sent to email" });

    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Reset Password with Token
router.post("/reset/:token", async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.findByIdAndUpdate(decoded.id, { password: hashedPassword });
        res.json({ message: "Password updated" });

    } catch (error) {
        res.status(500).json({ error: "Invalid or expired token" });
    }
});

module.exports = router;
