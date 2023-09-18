const Rent= require('../../models/Rent');
const { StatusCodes } = require('http-status-codes');

const getRentsByUserAction = async (req, res) => {
    const rents = await Rent.find({ user: req.params.user })
    .populate({
            path: 'car',
            populate: {
            path: 'brand',
            model: 'Brand' 
        }
    });

    res.status(StatusCodes.OK).json({rents});
}

module.exports = getRentsByUserAction;