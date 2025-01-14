const express = require('express');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');
const router = express.Router();

// Helper function to generate JWT tokens
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });

// Studio Admin Signup
router.post('/studio-admin-signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'Studio Admin registered successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Registration failed', details: err.message });
    }
});

// User Signup
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Registration failed', details: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid email or password' });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

        const token = generateToken(user._id);
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(400).json({ error: 'Login failed', details: err.message });
    }
});

// Forgot Password - Send OTP
router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'User not found' });

        const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
        await sendEmail(email, 'Password Reset OTP', `Your OTP is: ${otp}`);

        // Save OTP in the database (or in-memory for simplicity)
        user.resetOtp = otp;
        user.otpExpiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
        await user.save();

        res.status(200).json({ message: 'OTP sent to email' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to send OTP', details: err.message });
    }
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await User.findOne({ email, resetOtp: otp });
        if (!user || user.otpExpiresAt < Date.now()) {
            return res.status(400).json({ error: 'Invalid or expired OTP' });
        }

        res.status(200).json({ message: 'OTP verified successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to verify OTP', details: err.message });
    }
});

// Reset Password
router.post('/reset-password', async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;
        const user = await User.findOne({ email, resetOtp: otp });
        if (!user || user.otpExpiresAt < Date.now()) {
            return res.status(400).json({ error: 'Invalid or expired OTP' });
        }

        user.password = newPassword;
        user.resetOtp = undefined; // Clear OTP
        user.otpExpiresAt = undefined;
        await user.save();

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to reset password', details: err.message });
    }
});

// Get Current User
router.get('/current-user', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');
        if (!user) return res.status(404).json({ error: 'User not found' });

        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: 'Failed to fetch user', details: err.message });
    }
});

module.exports = router;
