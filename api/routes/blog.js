const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');
const admin = require('../middlewares/admin');
const { getAllBlogs, getSingleBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

router.route('/').get(getAllBlogs).post(auth, admin, createBlog);
router.route('/:id').get(getSingleBlog).put(auth, admin, updateBlog).delete(auth, admin, deleteBlog);

module.exports = router;