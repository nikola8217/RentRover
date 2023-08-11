const Car = require('../../models/Car');
const { StatusCodes } = require('http-status-codes');

const createCarAction = async (req, res) => {
    const car = await Car.create({...req.body});

    res.status(StatusCodes.CREATED).json({ car });
}

module.exports = createCarAction;