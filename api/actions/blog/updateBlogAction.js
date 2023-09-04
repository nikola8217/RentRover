const Blog = require('../../models/Blog');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../errors');

const updateBlogAction = async (req, res) => {
    const { title, content, image } = req.body;

    if (!title || !content) throw new BadRequestError('Please provide all values');
    
    const blog = await Blog.findOne({ _id: req.params.id});

    if (!blog) throw new NotFoundError(`No blog with id : ${req.params.id}`);

    blog.title = title;
    blog.content = content;

    await blog.save();

    res.status(StatusCodes.OK).json({ blog });
}

module.exports = updateBlogAction;