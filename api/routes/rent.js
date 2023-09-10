const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');
const { carRent } = require('../controllers/rentController');

router.route('/').post(carRent);

module.exports = router;