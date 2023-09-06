const Blog = require('../../models/Blog');
const { StatusCodes } = require('http-status-codes');

const getAllBlogsAction = async (req, res) => {
    const blogs = await Blog.find({});

    const formattedBlogs = blogs.map(blog => {
        const date = new Date(blog.createdAt);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);

        const maxLength = 100;
        const truncatedContent = blog.content.length > maxLength
            ? blog.content.substring(0, maxLength - 3) + '...'
            : blog.content;

        return {
            ...blog.toObject(),
            createdAt: formattedDate,
            content: truncatedContent
        };
    });

    res.status(StatusCodes.OK).json({formattedBlogs});
}

module.exports = getAllBlogsAction;