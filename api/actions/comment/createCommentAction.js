const Blog = require('../../models/Blog');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../errors');

const createCommentAction = async (req, res) => {
    
    const { id, user, text } = req.body;

    const blog = await Blog.findById(id);

    if (!blog) throw new NotFoundError(`No blog with id : ${id}`);

    if (!user || !text) throw new BadRequestError('Please provide all values');

    const comment = {
        user,
        text,
        createdAt: new Date(),
    };

    blog.comments.push(comment);

    await blog.save();

    res.status(StatusCodes.CREATED).json({ blog });
}

module.exports = createCommentAction;