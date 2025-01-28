// routes/authRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: "User registration failed" });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && await user.comparePassword(password)) {
            const token = jwt.sign({ id: user._id }, "your_jwt_secret", { expiresIn: "1h" });
            res.json({ token, message: "Login successful" });
        } else {
            res.status(400).json({ error: "Invalid credentials" });
        }
    } catch (error) {
        res.status(400).json({ error: "Login failed" });
    }
});

module.exports = router;
