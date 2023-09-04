const getAllBlogsAction = require('../actions/blog/getAllBlogsAction');
const getSingleBlogAction = require('../actions/blog/getSingleBlogAction');
const createBlogAction = require('../actions/blog/createBlogAction');
const updateBlogAction = require('../actions/blog/updateBlogAction');
const deleteBlogAction = require('../actions/blog/deleteBlogAction');

const getAllBlogs = (req, res) => {
    return getAllBlogsAction(req, res);
}

const getSingleBlog = (req, res) => {
    return getSingleBlogAction(req, res);
}

const createBlog = (req, res) => {
    return createBlogAction(req, res);
}

const updateBlog = (req, res) => {
    return updateBlogAction(req, res);
}

const deleteBlog = (req, res) => {
    return deleteBlogAction(req, res);
}

module.exports = {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    updateBlog,
    deleteBlog
}