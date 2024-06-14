const express = require('express');
const authService = require('../services/AuthService');

const authController = {
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const token = await authService.authenticate(email, password);
            if (token) {
                res.json({ token });
            } else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        } catch (error) {
            next(error);
        }
    }
};

module.exports = authController;
