const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');
const admin = require('../middlewares/admin');
const { getAllBrands, getSingleBrand, createBrand, updateBrand, deleteBrand } = require('../controllers/brandController');

router.route('/').get(getAllBrands).post(auth, admin, createBrand);
router.route('/:id').get(getSingleBrand).put(auth, admin, updateBrand).delete(auth, admin, deleteBrand);

module.exports = router;