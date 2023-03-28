const express = require('express');

const loginController = require('../controllers/login.controllers');

const router = express.Router();

router.get('/', loginController.login);

module.exports = router;