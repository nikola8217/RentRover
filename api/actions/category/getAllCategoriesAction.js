const Category = require('../../models/Category');
const { StatusCodes } = require('http-status-codes');

const getAllCategoriesAction = async (req, res) => {
    const categories = await Category.find({});

    res.status(StatusCodes.OK).json({categories});
}

module.exports = getAllCategoriesAction;