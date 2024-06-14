const express = require('express');
const userController = require('../Controllers/UserController');
const authenticateJWT = require('../middlewares/authenticateJWT');
const router = express.Router();


router.put('/user/:id', authenticateJWT, userController.update);
router.delete('/user/:id', authenticateJWT, userController.delete);


module.exports = router;