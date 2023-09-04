const Blog = require('../../models/Blog');
const { StatusCodes } = require('http-status-codes');

const getAllBlogsAction = async (req, res) => {
    const blogs = await Blog.find({});

    res.status(StatusCodes.OK).json({blogs});
}

module.exports = getAllBlogsAction;