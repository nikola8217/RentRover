const Category = require('../../models/Category');
const { StatusCodes } = require('http-status-codes');

const createCategoryAction = async (req, res) => {
    const category = await Category.create({...req.body});

    res.status(StatusCodes.CREATED).json({ category: { name: category.name } });
}

module.exports = createCategoryAction

