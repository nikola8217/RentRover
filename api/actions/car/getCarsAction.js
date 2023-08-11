const Car = require('../../models/Car');
const { StatusCodes } = require('http-status-codes');

const getCarsAction = async (req, res) => {
    const { category, brand } = req.query;

    const filter = {};

    if (category) filter.category = category;

    if (brand) filter.brand = brand;

    const cars = await Car.find(filter).populate('category', 'name').populate('brand', 'name');

    res.status(StatusCodes.OK).json({cars});
}

module.exports = getCarsAction;