const Blog = require('../../models/Blog');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const getSingleBlogAction = async (req, res) => {
    const blog = await Blog.findOne({_id: req.params.id}).populate({
        path: 'comments.user',
        select: 'name'
    });

    if (!blog) throw new NotFoundError(`No blog with id : ${req.params.id}`);
    
    res.status(StatusCodes.OK).json({ blog });
}

module.exports = getSingleBlogAction;