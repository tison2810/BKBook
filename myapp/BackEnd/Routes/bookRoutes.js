const express = require('express');
const router = express.Router();
const bookController = require('../Controller/bookController');

router.get('/getBooksForHomePage', bookController.getBooksForHomePage);
router.get('/search', bookController.search);

module.exports = router;