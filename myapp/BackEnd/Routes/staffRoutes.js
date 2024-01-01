const express = require('express');
const router = express.Router();
const staffController = require('../Controller/staffController');

router.get('/staffInfo/:username', staffController.getInfo);
router.put('/updateEmail/:username', staffController.updateEmail);
router.put('/updateAddress/:username', staffController.updateAddress);
router.put('/updatePassword/:username', staffController.updatePassword);

module.exports = router;