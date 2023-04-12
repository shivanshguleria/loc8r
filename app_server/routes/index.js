const express = require('express');
const mainController = require('../controllers/main')
const router = express.Router();

/* GET home page. */
router.get('/', mainController.index);

module.exports = router;
