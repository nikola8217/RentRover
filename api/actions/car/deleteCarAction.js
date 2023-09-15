const Car = require('../../models/Car');
const Rent = require('../../models/Rent');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const deleteCarAction = async (req, res) => {
    const car = await Car.findOne({ _id: req.params.id });

    if (!car) throw new NotFoundError(`No car with id : ${req.params.id}`);

    await Rent.deleteMany({ car: req.params.id });

    await Car.deleteOne({ _id: req.params.id });

    res.status(StatusCodes.OK).json({ message: 'Car removed' });
}

module.exports = deleteCarAction;