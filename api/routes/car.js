const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');
const admin = require('../middlewares/admin');
const { getCars, getSingleCar, createCar, updateCar, deleteCar } = require('../controllers/carController');

router.route('/').get(getCars).post(auth, admin, createCar);
router.route('/:id').get(getSingleCar).put(auth, admin, updateCar).delete(auth, admin, deleteCar);

module.exports = router;