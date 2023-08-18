const Category = require('../../models/Category');
const Car = require('../../models/Car');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const deleteCategoryAction = async (req, res) => {
    const category = await Category.findOne({ _id: req.params.id });

    if (!category) throw new NotFoundError(`No category with id : ${req.params.id}`);

    await Car.deleteMany({ brand: req.params.id });

    await Category.deleteOne({ _id: req.params.id });

    res.status(StatusCodes.OK).json({ message: 'Category removed' });
}

module.exports = deleteCategoryAction;