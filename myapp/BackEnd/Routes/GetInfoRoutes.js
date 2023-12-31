const express = require('express');
const router = express.Router();
const GetInfoController = require('../Controller/GetInfoController');

router.get('/GetAdmin', GetInfoController.GetAdmin);
router.get('/GetOrder', GetInfoController.GetOrder);
router.get('/GetOrderConfirm', GetInfoController.GetOrderConfirm);

module.exports = router;