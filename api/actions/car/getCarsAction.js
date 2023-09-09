const Car = require('../../models/Car');
const { StatusCodes } = require('http-status-codes');

const getCarsAction = async (req, res) => {
    const { category, brand, transmission, fuel } = req.query;

    const filter = {};

    if (category) filter.category = category;

    if (brand) filter.brand = brand;

    if (transmission) filter.transmission = transmission;

    if (fuel) filter.fuel = fuel;

    const cars = await Car.find(filter).populate('category').populate('brand');

    res.status(StatusCodes.OK).json({cars});
}

module.exports = getCarsAction;