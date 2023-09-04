const Blog = require('../../models/Blog');
const { StatusCodes } = require('http-status-codes');

const createBlogAction = async (req, res) => {
    const blog = await Blog.create({...req.body});

    res.status(StatusCodes.CREATED).json({ blog });
}

module.exports = createBlogAction;