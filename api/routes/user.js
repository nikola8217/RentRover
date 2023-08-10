const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');
const admin = require('../middlewares/admin');
const { getAllUsers, getSingleUser, updateUser, deleteUser } = require('../controllers/userController');

router.route('/').get(auth, admin, getAllUsers);
router.route('/:id').get(auth, admin, getSingleUser).put(auth, admin, updateUser).delete(auth, admin, deleteUser);

module.exports = router;