const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');
const { createComment, deleteComment } = require('../controllers/commentController');

router.route('/').put(auth, createComment);
router.route('/delete').put(auth, deleteComment);

module.exports = router;