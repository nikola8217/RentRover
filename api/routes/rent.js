const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');
const { carRent, getRentsByUser, cancelRent } = require('../controllers/rentController');

router.route('/').post(carRent);
router.route('/:user').get(auth, getRentsByUser);
router.route('/:id').delete(auth, cancelRent);

module.exports = router;