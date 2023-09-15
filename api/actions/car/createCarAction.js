const Car = require('../../models/Car');
const { StatusCodes } = require('http-status-codes');
const Brand = require('../../models/Brand');
const Category = require('../../models/Category');
const { NotFoundError } = require('../../errors');

const createCarAction = async (req, res) => {
    const checkBrand = await Brand.findOne({ brand });

    if (!checkBrand) throw new NotFoundError(`No brand with id : ${brand}`);

    const checkCategory = await Category.findOne({category});

    if (!checkCategory) throw new NotFoundError(`No category with id : ${category}`);

    const car = await Car.create({...req.body});

    res.status(StatusCodes.CREATED).json({ car });
}

module.exports = createCarAction;