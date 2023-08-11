const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');
const admin = require('../middlewares/admin');
const { getAllCategories, getSingleCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');

router.route('/').get(getAllCategories).post(auth, admin, createCategory);
router.route('/:id').get(getSingleCategory).put(auth, admin, updateCategory).delete(auth, admin, deleteCategory);

module.exports = router;