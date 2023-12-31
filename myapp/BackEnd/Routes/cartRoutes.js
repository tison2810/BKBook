const express = require('express');
const router = express.Router();
const cartController = require('../Controller/cartController');

router.get('/cart/:username', cartController.getCart);

module.exports = router;