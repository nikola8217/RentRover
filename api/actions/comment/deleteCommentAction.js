const Blog = require('../../models/Blog');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const deleteCommentAction = async (req, res) => {
    
    const { id, index } = req.body;

    const blog = await Blog.findById(id);

    if (!blog) throw new NotFoundError(`No blog with id : ${id}`);

    if (index < 0 || index >= blog.comments.length) throw new NotFoundError('Comment not found');

    blog.comments.splice(index, 1);

    await blog.save();

    res.status(StatusCodes.OK).json({ blog });
}

module.exports = deleteCommentAction;