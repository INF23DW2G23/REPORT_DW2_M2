const express = require('express');
const userController = require('../Controllers/UserController');
const authenticateJWT = require('../middlewares/authenticateJWT');
const router = express.Router();

router.get('/me', authenticateJWT, userController.getUser);

module.exports = router;
