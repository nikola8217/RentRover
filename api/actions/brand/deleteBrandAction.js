const Brand = require('../../models/Brand');
const Car = require('../../models/Car');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const deleteBrandAction = async (req, res) => {
    const brand = await Brand.findOne({ _id: req.params.id });

    if (!brand) throw new NotFoundError(`No brand with id : ${req.params.id}`);

    await Car.deleteMany({ brand: req.params.id });

    await Brand.deleteOne({ _id: req.params.id });

    res.status(StatusCodes.OK).json({ message: 'Brand removed' });
}

module.exports = deleteBrandAction;