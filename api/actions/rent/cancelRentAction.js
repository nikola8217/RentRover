const Rent = require('../../models/Rent');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const cancelRentAction = async (req, res) => {
    const rent = await Rent.findOne({ _id: req.params.id });

    if (!rent) throw new NotFoundError(`No rent with id : ${req.params.id}`);

    await Rent.deleteOne({ _id: req.params.id });

    res.status(StatusCodes.OK).json({ message: 'Rent cancelled' });
}

module.exports = cancelRentAction;