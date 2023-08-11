const Category = require('../../models/Category');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../errors');

const updateCategoryAction = async (req, res) => {
    const { name } = req.body;

    if (!name) throw new BadRequestError('Please provide all values');
    
    const category = await Category.findOne({ _id: req.params.id});

    if (!category) throw new NotFoundError(`No category with id : ${req.params.id}`);

    category.name = name;

    await category.save();

    res.status(StatusCodes.OK).json({ category });
}

module.exports = updateCategoryAction;