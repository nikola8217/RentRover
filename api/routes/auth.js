const express = require('express');
const router = express.Router();
const { register, login, changePassword } = require('../controllers/authController');
const auth = require('../middlewares/authentication');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/changePassword').put(auth, changePassword);

module.exports = router;