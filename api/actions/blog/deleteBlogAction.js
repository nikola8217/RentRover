const Blog = require('../../models/Blog');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const deleteBlogAction = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id });

    if (!blog) throw new NotFoundError(`No blog with id : ${req.params.id}`);

    await Blog.deleteOne({ _id: req.params.id });

    res.status(StatusCodes.OK).json({ message: 'Blog removed' });
}

module.exports = deleteBlogAction;