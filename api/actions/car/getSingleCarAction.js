const Car = require('../../models/Car');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const getSingleCarAction = async (req, res) => {
    const car = await Car.findOne({_id: req.params.id}).populate('category', 'name').populate('brand', 'name');

    if (!car) throw new NotFoundError(`No car with id : ${req.params.id}`);
    
    res.status(StatusCodes.OK).json({ car });
}

module.exports = getSingleCarAction;