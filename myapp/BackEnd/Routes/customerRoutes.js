const express = require('express');
const router = express.Router();
const customerController = require('../Controller/customerController');

router.get('/customerInfo/:username', customerController.getInfo);

module.exports = router;